/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatMoney(amount: number, currency: string) {
	return new Intl.NumberFormat("ru-RU", {
		style: "currency",
		currency,
	}).format(amount);
}

// Функция для парсинга EditorJS контента
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
export function parseEditorJSContent(content: string | null | undefined): string {
	if (!content) return "";

	try {
		const parsed = JSON.parse(content) as any;
		if (parsed.blocks && Array.isArray(parsed.blocks)) {
			return parsed.blocks
				.filter((block: any) => block.type === "paragraph" && block.data?.text)
				.map((block: any) => block.data.text)
				.join(" ");
		}
		return "";
	} catch {
		return "";
	}
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
