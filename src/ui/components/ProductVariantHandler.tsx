"use client";

import { useState } from "react";
import { AddToCartButton } from "./AddToCartButton";

interface Variant {
	id: string;
	name: string;
	quantityAvailable?: number | null;
}

interface ProductVariantHandlerProps {
	variants: Variant[];
	productName: string;
	addToCartAction: (variantId: string, quantity: number) => Promise<void>;
}

// Компонент выбора вариантов
function VariantSelector({
	variants,
	selectedVariantId,
	onVariantChange,
}: {
	variants: Variant[];
	selectedVariantId: string | null;
	onVariantChange: (variantId: string) => void;
}) {
	if (variants.length <= 1) return null;

	return (
		<div className="mb-2">
			<div className="flex flex-wrap gap-1">
				{variants.map((variant) => {
					const isSelected = selectedVariantId === variant.id;
					const isAvailable = variant.quantityAvailable && variant.quantityAvailable > 0;

					return (
						<button
							key={variant.id}
							onClick={() => onVariantChange(variant.id)}
							disabled={!isAvailable}
							className={`rounded border px-2 py-1 text-xs transition-colors ${
								isSelected
									? "border-blue-500 bg-blue-500 text-white"
									: isAvailable
										? "border-gray-300 bg-white text-gray-700 hover:border-blue-500"
										: "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
							}`}
						>
							{variant.name}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export function ProductVariantHandler({
	variants,
	productName,
	addToCartAction,
}: ProductVariantHandlerProps) {
	// Состояние для выбранного варианта
	const [selectedVariantId, setSelectedVariantId] = useState<string | null>(() => {
		// Автоматически выбираем первый доступный вариант
		const availableVariant = variants.find((v) => v.quantityAvailable && v.quantityAvailable > 0);
		return availableVariant?.id || (variants.length === 1 ? variants[0]?.id : null) || null;
	});

	const selectedVariant = variants.find((v) => v.id === selectedVariantId);
	const isAvailable = selectedVariant?.quantityAvailable && selectedVariant.quantityAvailable > 0;
	const hasVariants = variants.length > 1;

	return (
		<div>
			{/* Селектор вариантов */}
			{hasVariants && (
				<VariantSelector
					variants={variants}
					selectedVariantId={selectedVariantId}
					onVariantChange={setSelectedVariantId}
				/>
			)}

			{/* Кнопка добавления в корзину */}
			{selectedVariantId && isAvailable ? (
				<AddToCartButton
					variantId={selectedVariantId}
					productName={productName}
					addToCartAction={addToCartAction}
				/>
			) : (
				<button
					disabled
					className="w-full cursor-not-allowed rounded-lg bg-gray-300 px-3 py-1.5 text-xs font-medium text-gray-500"
				>
					{hasVariants && !selectedVariantId ? "Выберите вариант" : "Нет в наличии"}
				</button>
			)}
		</div>
	);
}
