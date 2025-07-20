import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | number) => {
	try {
		// Use consistent locale and options to prevent hydration mismatch
		return new Intl.DateTimeFormat("en-US", {
			dateStyle: "medium",
			timeZone: "UTC", // Use UTC to ensure consistency
		}).format(date);
	} catch (error) {
		// Fallback formatting if Intl.DateTimeFormat fails
		const dateObj = new Date(date);
		return dateObj.toLocaleDateString("en-US");
	}
};

export const formatMoney = (amount: number, currency: string) => {
	try {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency,
		}).format(amount);
	} catch (error) {
		// Fallback formatting if Intl.NumberFormat fails
		return `${currency} ${amount.toFixed(2)}`;
	}
};

export const formatMoneyRange = (
	range: {
		start?: { amount: number; currency: string } | null;
		stop?: { amount: number; currency: string } | null;
	} | null,
) => {
	const { start, stop } = range || {};
	const startMoney = start && formatMoney(start.amount, start.currency);
	const stopMoney = stop && formatMoney(stop.amount, stop.currency);

	if (startMoney === stopMoney) {
		return startMoney;
	}

	return `${startMoney} - ${stopMoney}`;
};

export function getHrefForVariant({
	productSlug,
	variantId,
}: {
	productSlug: string;
	variantId?: string;
}): string {
	const pathname = `/products/${encodeURIComponent(productSlug)}`;

	if (!variantId) {
		return pathname;
	}

	const query = new URLSearchParams({ variant: variantId });
	return `${pathname}?${query.toString()}`;
}
