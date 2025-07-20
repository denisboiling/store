"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
	variantId: string;
	productName: string;
	addToCartAction: (variantId: string, quantity: number) => Promise<void>;
}

export function AddToCartButton({ variantId, productName, addToCartAction }: AddToCartButtonProps) {
	const [quantity, setQuantity] = useState(1);
	const [isPending, setIsPending] = useState(false);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsPending(true);

		try {
			await addToCartAction(variantId, quantity);
			console.log(`Добавлено ${quantity} шт. "${productName}" в корзину`);
		} catch (error) {
			console.error("Ошибка при добавлении в корзину:", error);
		} finally {
			setIsPending(false);
		}
	};

	const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 99));
	const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex items-center space-x-2">
				{/* Селектор количества */}
				<div className="flex items-center space-x-1 rounded-md border border-gray-300">
					<button
						type="button"
						onClick={decreaseQuantity}
						disabled={quantity <= 1}
						className="flex h-7 w-7 items-center justify-center hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
					>
						<Minus className="h-3 w-3" />
					</button>
					<span className="min-w-[1.5rem] px-1 text-center text-xs font-medium">{quantity}</span>
					<button
						type="button"
						onClick={increaseQuantity}
						disabled={quantity >= 99}
						className="flex h-7 w-7 items-center justify-center hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
					>
						<Plus className="h-3 w-3" />
					</button>
				</div>

				{/* Кнопка добавления в корзину */}
				<button
					type="submit"
					disabled={isPending}
					className="flex flex-1 items-center justify-center space-x-1 rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-600 disabled:bg-blue-300"
				>
					{isPending ? (
						<>
							<div className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
							<span>Добавляем...</span>
						</>
					) : (
						<>
							<ShoppingCart className="h-3 w-3" />
							<span>В корзину</span>
						</>
					)}
				</button>
			</div>
		</form>
	);
}
