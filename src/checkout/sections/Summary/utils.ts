import compact from "lodash-es/compact";
import { type CheckoutLineFragment, type OrderLineFragment } from "@/checkout/graphql";
import { type MightNotExist } from "@/checkout/lib/globalTypes";

export const isCheckoutLine = (
	line: CheckoutLineFragment | OrderLineFragment,
): line is CheckoutLineFragment => line.__typename === "CheckoutLine";

export const getThumbnailFromLine = (line: CheckoutLineFragment) =>
	line.variant.media?.find(({ type }) => type === "IMAGE") ||
	line.variant.product.media?.find(({ type }) => type === "IMAGE");

export const getSummaryLineProps = (line: OrderLineFragment | CheckoutLineFragment) =>
	isCheckoutLine(line)
		? {
				variantName: line.variant.translation?.name || line.variant.name,
				productName: line.variant.product.translation?.name || line.variant.product.name,
				productImage: getThumbnailFromLine(line),
			}
		: {
				variantName: line.variantName,
				productName: line.productName,
				productImage: line.thumbnail,
			};

// Safe date formatting function to prevent hydration mismatch
const formatDateTime = (dateTime: string): string => {
	try {
		return new Intl.DateTimeFormat("en-US", {
			dateStyle: "medium",
			timeZone: "UTC", // Use UTC to ensure consistency
		}).format(new Date(dateTime));
	} catch (error) {
		// Fallback formatting if Intl.DateTimeFormat fails
		return new Date(dateTime).toLocaleDateString("en-US");
	}
};

export const useSummaryLineLineAttributesText = (line: CheckoutLineFragment | OrderLineFragment): string => {
	const parsedValues =
		line.variant?.attributes?.reduce<Array<MightNotExist<string>>>(
			(result, { values }) => [
				...result,
				...values.map(({ name, dateTime, translation }) => {
					if (translation?.name) {
						return translation.name;
					}

					if (dateTime) {
						return formatDateTime(dateTime);
					}

					return name;
				}),
			],
			[],
		) || [];

	return compact(parsedValues).join(", ");
};
