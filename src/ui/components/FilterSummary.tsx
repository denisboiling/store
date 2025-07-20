"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface FilterSummaryProps {
	filterGroups: Array<{
		title: string;
		items: Array<{
			label: string;
			count: number;
			active: boolean;
		}>;
	}>;
}

export function FilterSummary({ filterGroups }: FilterSummaryProps) {
	const [expandedGroups, setExpandedGroups] = useState<number[]>([]);

	const toggleGroup = (index: number) => {
		setExpandedGroups((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
	};
	return (
		<div className="mb-6">
			{/* Заголовок фильтров */}
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-gray-900">Фильтры</h3>
			</div>

			{/* Группы фильтров */}
			<div className="grid grid-cols-3 gap-4">
				{filterGroups.map((group, groupIndex) => (
					<div key={groupIndex} className="rounded-lg border border-gray-200 p-4">
						<button
							onClick={() => toggleGroup(groupIndex)}
							className="mb-2 flex w-full items-center justify-between text-left"
						>
							<span className="font-medium text-gray-900">{group.title}</span>
							<span className="text-sm text-gray-500">({group.items.length})</span>
						</button>

						{expandedGroups.includes(groupIndex) && (
							<div className="space-y-2">
								{group.items.map((item, itemIndex) => (
									<a
										key={itemIndex}
										href="#"
										className={`block w-full rounded px-2 py-1 text-xs transition-colors ${
											item.active ? "text-blue-700" : "text-gray-700 hover:text-gray-900"
										}`}
									>
										<div className="truncate">
											{item.label} ({item.count})
										</div>
									</a>
								))}
							</div>
						)}
					</div>
				))}
			</div>

			{/* Активные фильтры */}
			<div className="mt-4 flex flex-wrap gap-2">
				<span className="text-sm text-gray-500">Активные фильтры:</span>
				{filterGroups.flatMap((group, groupIndex) =>
					group.items
						.filter((item) => item.active)
						.map((item, itemIndex) => (
							<div
								key={`${groupIndex}-${itemIndex}`}
								className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-sm text-blue-700"
							>
								<span>{item.label}</span>
								<button className="ml-1 rounded-full p-0.5 hover:bg-blue-200">
									<X className="h-3 w-3" />
								</button>
							</div>
						)),
				)}
			</div>
		</div>
	);
}
