import { Search, ShoppingCart, ShoppingBasket } from "lucide-react";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import clsx from "clsx";
import { Button } from "@/ui/atoms/Button";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import * as Checkout from "@/lib/checkout";

interface MainHeaderProps {
	channel: string;
}

// Функциональный компонент поиска
function SearchBar({ channel }: { channel: string }) {
	async function onSubmit(formData: FormData) {
		"use server";
		const search = formData.get("search") as string;
		if (search && search.trim().length > 0) {
			redirect(`/${encodeURIComponent(channel)}/search?query=${encodeURIComponent(search)}`);
		}
	}

	return (
		<form action={onSubmit} className="mx-8 max-w-lg flex-1">
			<div className="relative">
				<label className="w-full">
					<span className="sr-only">Поиск товаров</span>
					<input
						type="text"
						name="search"
						placeholder="Поиск товаров, категорий или брендов..."
						autoComplete="on"
						required
						className="h-10 w-full rounded-lg border border-gray-300 py-2 pl-4 pr-12 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					/>
				</label>
				<Button
					type="submit"
					size="icon"
					className="absolute right-1 top-1 h-8 w-8 bg-blue-500 hover:bg-blue-600"
				>
					<Search className="h-4 w-4 text-white" />
				</Button>
			</div>
		</form>
	);
}

// Функциональный компонент корзины
async function CartNavItem({ channel }: { channel: string }) {
	const checkoutId = await Checkout.getIdFromCookies(channel);
	const checkout = checkoutId ? await Checkout.find(checkoutId) : null;
	const lineCount = checkout ? checkout.lines.reduce((result, line) => result + line.quantity, 0) : 0;

	return (
		<LinkWithChannel href="/cart" className="relative" data-testid="CartNavItem">
			<ShoppingCart className="h-6 w-6 text-gray-600" />
			{lineCount > 0 && (
				<div
					className={clsx(
						"absolute -right-2 -top-2 flex items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white",
						lineCount > 9 ? "h-6 w-6" : "h-5 w-5",
					)}
				>
					{lineCount}
					<span className="sr-only">
						{lineCount} товар{lineCount > 1 ? "ов" : ""} в корзине
					</span>
				</div>
			)}
		</LinkWithChannel>
	);
}

export function MainHeader({ channel }: MainHeaderProps) {
	return (
		<div className="border-b border-t border-gray-200 bg-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<LinkWithChannel href="/" className="flex items-center space-x-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
								<ShoppingBasket className="h-6 w-6 text-white" />
							</div>
							<span className="text-xl font-bold text-gray-900">Store</span>
						</LinkWithChannel>
					</div>

					{/* Location */}
					{/* <div className="flex items-center space-x-2 text-sm">
						<MapPin className="h-4 w-4 text-gray-500" />
						<div>
							<div className="text-gray-500">Доставка в</div>
							<div className="font-medium">Москва</div>
						</div>
					</div> */}

					{/* Search Bar */}
					<SearchBar channel={channel} />

					{/* Account & Cart */}
					<div className="flex items-center space-x-4">
						{/* <div className="relative">
							<Heart className="h-6 w-6 text-gray-600" />
							<Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-xs text-white">
								0
							</Badge>
						</div> */}
						<Suspense
							fallback={
								<div className="relative">
									<ShoppingCart className="h-6 w-6 text-gray-600" />
								</div>
							}
						>
							<CartNavItem channel={channel} />
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
}
