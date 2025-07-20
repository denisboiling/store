"use client";

import { useTransition } from "react";
import { deleteLineFromCheckout } from "./actions";

interface Props {
	lineId: string;
	checkoutId: string;
}

export const DeleteLineButton = ({ lineId, checkoutId }: Props) => {
	const [isPending, startTransition] = useTransition();

	return (
		<button
			type="button"
			className="text-sm text-neutral-500 hover:text-neutral-900"
			onClick={() => {
				if (isPending) return;
				startTransition(() => deleteLineFromCheckout({ lineId, checkoutId }));
			}}
			aria-disabled={isPending}
		>
			{isPending ? "Удаление..." : "Удалить"}
			<span className="sr-only">товар из корзины</span>
		</button>
	);
};
