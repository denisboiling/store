import { revalidatePath } from "next/cache";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import { CheckoutAddLineDocument, type ProductListItemFragment } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import * as Checkout from "@/lib/checkout";

import { formatMoneyRange } from "@/lib/utils";

export function ProductElement({
	product,
	loading,
	priority,
	channel,
}: {
	product: ProductListItemFragment;
	channel: string;
} & { loading: "eager" | "lazy"; priority?: boolean }) {
	// Серверное действие для добавления в корзину
	async function addToCartAction(variantId: string, quantity: number) {
		"use server";

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

	// Приведение типов для variants
	const variants = (product.variants || []) as Array<{ id: string; quantityAvailable?: number | null }>;
	const firstVariant = variants[0];
	const availableVariant = variants.find(
		(variant) => variant && variant.quantityAvailable && variant.quantityAvailable > 0,
	);

	const variantToUse = availableVariant || firstVariant;

	return (
		<li data-testid="ProductElement">
			<div className="group relative rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md">
				<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
					{product?.thumbnail?.url && (
						<ProductImageWrapper
							loading={loading}
							src={product.thumbnail.url}
							alt={product.thumbnail.alt ?? ""}
							width={512}
							height={512}
							sizes={"512px"}
							priority={priority}
						/>
					)}
				</LinkWithChannel>
				<div className="p-4">
					<LinkWithChannel href={`/products/${product.slug}`}>
						<h3 className="mb-1 text-sm font-medium text-gray-900 hover:text-blue-600">{product.name}</h3>
					</LinkWithChannel>
					<p className="mb-2 text-sm text-gray-500" data-testid="ProductElement_Category">
						{product.category?.name}
					</p>
					<p className="mb-3 text-sm font-bold text-gray-900" data-testid="ProductElement_PriceRange">
						{formatMoneyRange({
							start: product?.pricing?.priceRange?.start?.gross,
							stop: product?.pricing?.priceRange?.stop?.gross,
						})}
					</p>

					{/* Кнопка добавления в корзину */}
					{variantToUse?.id ? (
						<AddToCartButton
							variantId={variantToUse.id}
							productName={product.name}
							addToCartAction={addToCartAction}
						/>
					) : (
						<button
							disabled
							className="w-full cursor-not-allowed rounded-lg bg-gray-300 px-3 py-1.5 text-xs font-medium text-gray-500"
						>
							Нет в наличии
						</button>
					)}
				</div>
			</div>
		</li>
	);
}
