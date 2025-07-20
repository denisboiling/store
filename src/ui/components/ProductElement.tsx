"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { addToCartAction } from "@/app/[channel]/(main)/cart/actions";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

import type { ProductListItemFragment } from "@/gql/graphql";
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
	// Приведение типов для variants
	const variants = (product.variants || []) as Array<{
		id: string;
		name: string;
		quantityAvailable?: number | null;
	}>;

	// Состояние для выбранного варианта и количества
	const [selectedVariantId, setSelectedVariantId] = useState<string | null>(() => {
		const availableVariant = variants.find((v) => v.quantityAvailable && v.quantityAvailable > 0);
		return availableVariant?.id || (variants.length === 1 ? variants[0]?.id : null) || null;
	});
	const [quantity, setQuantity] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleAddToCart = async () => {
		if (!selectedVariantId) return;

		setIsSubmitting(true);
		try {
			await addToCartAction(channel, selectedVariantId, quantity);
			console.log(`Добавлено ${quantity} шт. "${product.name}" в корзину`);
		} catch (error) {
			console.error("Ошибка при добавлении в корзину:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const selectedVariant = variants.find((v) => v.id === selectedVariantId);
	const isAvailable = selectedVariant?.quantityAvailable && selectedVariant.quantityAvailable > 0;
	const hasVariants = variants.length > 1;

	const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 99));
	const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

	return (
		<li data-testid="ProductElement">
			<div className="group relative h-[415px] rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md">
				<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
					{product?.thumbnail?.url && (
						<ProductImageWrapper
							priority={priority}
							loading={loading}
							alt={product.thumbnail.alt || ""}
							width={512}
							height={512}
							src={product.thumbnail.url}
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
							className="aspect-square h-auto w-full rounded-t-lg object-cover transition-transform group-hover:scale-105"
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

					{/* Блок добавления в корзину */}
					<div className="flex items-center gap-2">
						{/* Селектор количества */}
						<div className="flex items-center rounded-md border border-gray-300">
							<button
								type="button"
								onClick={decreaseQuantity}
								disabled={quantity <= 1}
								className="flex h-6 w-6 items-center justify-center text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
							>
								<Minus className="h-3 w-3" />
							</button>
							<span className="flex h-6 min-w-[2rem] items-center justify-center border-x border-gray-300 bg-gray-50 text-xs font-medium">
								{quantity}
							</span>
							<button
								type="button"
								onClick={increaseQuantity}
								disabled={quantity >= 99}
								className="flex h-6 w-6 items-center justify-center text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
							>
								<Plus className="h-3 w-3" />
							</button>
						</div>

						{/* Селект вариантов */}
						{hasVariants && (
							<select
								value={selectedVariantId || ""}
								onChange={(e) => setSelectedVariantId(e.target.value || null)}
								className="flex-1 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
							>
								{variants.map((variant) => (
									<option
										key={variant.id}
										value={variant.id}
										disabled={!variant.quantityAvailable || variant.quantityAvailable <= 0}
									>
										{variant.name}
									</option>
								))}
							</select>
						)}

						{/* Кнопка добавления в корзину */}
						<button
							onClick={handleAddToCart}
							disabled={!isAvailable || !selectedVariantId || isSubmitting}
							className="flex items-center justify-center gap-1 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
						>
							{isSubmitting ? (
								<>
									<div className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
									<span>Добавляем...</span>
								</>
							) : (
								<span>В корзину</span>
							)}
						</button>
					</div>

					{/* Сообщения о доступности под строкой */}
					{hasVariants && selectedVariantId && !isAvailable && (
						<p className="text-xs text-red-600">Выбранный вариант недоступен</p>
					)}
					{hasVariants && !selectedVariantId && (
						<p className="text-xs text-gray-600">Выберите вариант товара</p>
					)}
				</div>
			</div>
		</li>
	);
}
