"use client";

import { useState } from "react";
import { Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/ui/atoms/Button";

interface MobileFiltersProps {
	filterGroups: Array<{
		title: string;
		items: Array<{
			label: string;
			count: number;
			active: boolean;
		}>;
	}>;
}

export function MobileFilters({ filterGroups }: MobileFiltersProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [expandedGroups, setExpandedGroups] = useState<number[]>([]);

	const toggleGroup = (index: number) => {
		setExpandedGroups((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
	};

	return (
		<>
			{/* Кнопка открытия фильтров */}
			<Button
				onClick={() => setIsOpen(true)}
				variant="outline"
				className="mb-4 w-full justify-center lg:hidden"
			>
				<Filter className="mr-2 h-4 w-4" />
				Фильтры
			</Button>

			{/* Мобильное меню фильтров */}
			{isOpen && (
				<div className="fixed inset-0 z-50 lg:hidden">
					{/* Фон */}
					<div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />

					{/* Панель */}
					<div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-xl">
						{/* Заголовок */}
						<div className="flex items-center justify-between border-b border-gray-200 p-4">
							<h2 className="text-lg font-semibold">Фильтры</h2>
							<button onClick={() => setIsOpen(false)} className="rounded p-1 hover:bg-gray-100">
								<X className="h-5 w-5" />
							</button>
						</div>

						{/* Контент */}
						<div className="h-[calc(100%-140px)]">
							{filterGroups.map((group, groupIndex) => (
								<div key={groupIndex} className="border-b border-gray-100">
									<button
										onClick={() => toggleGroup(groupIndex)}
										className="w-full p-4 text-left hover:bg-gray-50"
									>
										<div className="flex items-center justify-between">
											<span className="font-medium text-gray-900">{group.title}</span>
											<ChevronDown
												className={`h-4 w-4 text-gray-400 transition-transform ${
													expandedGroups.includes(groupIndex) ? "rotate-180" : ""
												}`}
											/>
										</div>
									</button>
									{expandedGroups.includes(groupIndex) && (
										<div className="pb-2">
											{group.items.map((item, itemIndex) => (
												<label
													key={itemIndex}
													className="flex cursor-pointer items-center px-4 py-1 hover:bg-gray-50"
												>
													<input
														type="checkbox"
														className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
														defaultChecked={item.active}
													/>
													<span className="flex-1 text-sm text-gray-700">{item.label}</span>
													<span className="text-sm text-gray-400">({item.count})</span>
												</label>
											))}
										</div>
									)}
								</div>
							))}
						</div>

						{/* Кнопки действий */}
						<div className="border-t border-gray-200 p-4">
							<div className="flex space-x-3">
								<Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
									Сбросить
								</Button>
								<Button className="flex-1" onClick={() => setIsOpen(false)}>
									Применить
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
