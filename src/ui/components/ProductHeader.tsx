"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/ui/atoms/Button";

interface ProductHeaderProps {
	totalCount: number;
}

export function ProductHeader({ totalCount }: ProductHeaderProps) {
	const [sortOpen, setSortOpen] = useState(false);
	const [selectedSort, setSelectedSort] = useState("Популярные");

	const sortOptions = [
		{ label: "Популярные", value: "popular" },
		{ label: "По цене (возрастание)", value: "price-asc" },
		{ label: "По цене (убывание)", value: "price-desc" },
		{ label: "По названию (А-Я)", value: "name-asc" },
		{ label: "По названию (Я-А)", value: "name-desc" },
		{ label: "По дате добавления", value: "date" },
	];

	return (
		<div className="mb-6 flex flex-col pr-0 sm:flex-row sm:items-center sm:justify-between">
			{/* Количество товаров */}
			<div className="mb-4 sm:mb-0">
				<p className="text-sm text-gray-500">
					Найдено <span className="font-medium text-gray-900">{totalCount}</span> товаров
				</p>
			</div>

			{/* Сортировка */}
			<div className="relative pr-0">
				<Button variant="outline" onClick={() => setSortOpen(!sortOpen)} className="flex items-center gap-2">
					<span>Сортировка: {selectedSort}</span>
					<ChevronDown className={`h-4 w-4 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
				</Button>

				{sortOpen && (
					<div className="absolute right-0 top-full z-10 mt-1 w-56 rounded-md border border-gray-200 bg-white shadow-lg">
						<div className="py-1">
							{sortOptions.map((option) => (
								<button
									key={option.value}
									onClick={() => {
										setSelectedSort(option.label);
										setSortOpen(false);
									}}
									className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
										selectedSort === option.label ? "bg-blue-50 text-blue-700" : "text-gray-700"
									}`}
								>
									{option.label}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
