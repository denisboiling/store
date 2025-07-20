"use server";

import { revalidatePath } from "next/cache";
import { executeGraphQL } from "@/lib/graphql";
import { CheckoutDeleteLinesDocument, CheckoutAddLineDocument } from "@/gql/graphql";
import * as Checkout from "@/lib/checkout";

type deleteLineFromCheckoutArgs = {
	lineId: string;
	checkoutId: string;
};

export async function deleteLineFromCheckout({ lineId, checkoutId }: deleteLineFromCheckoutArgs) {
	await executeGraphQL(CheckoutDeleteLinesDocument, {
		variables: { checkoutId, lineIds: [lineId] },
		cache: "no-cache",
	});

	revalidatePath("/cart");
}

export async function addToCartAction(channel: string, variantId: string, quantity: number) {
	const checkout = await Checkout.findOrCreate({
		checkoutId: await Checkout.getIdFromCookies(channel),
		channel: channel,
	});

	if (!checkout) {
		throw new Error("Не удалось создать корзину");
	}

	await Checkout.saveIdToCookie(channel, checkout.id);

	await executeGraphQL(CheckoutAddLineDocument, {
		variables: {
			id: checkout.id,
			productVariantId: variantId,
			quantity: quantity,
		},
		cache: "no-cache",
	});

	revalidatePath(`/${channel}/cart`);
}
