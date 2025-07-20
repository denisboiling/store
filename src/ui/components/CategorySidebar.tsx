"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/ui/atoms/Button";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

interface CategorySidebarProps {
	currentCategory?: string;
	navLinks?: any; // Передаем данные из страницы
}

export function CategorySidebar({ currentCategory, navLinks }: CategorySidebarProps) {
	const [expandedGroups, setExpandedGroups] = useState<number[]>([0, 1]); // По умолчанию открыты первые две группы

	// Фильтруем только категории из меню
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
	const categories = navLinks?.menu?.items?.filter((item: any) => item.category) || [];

	const toggleGroup = (index: number) => {
		setExpandedGroups((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
	};

	// Группы фильтров
	const filterGroups = [
		{
			title: "Цена",
			items: [
				{ label: "До 10 000 ₽", count: 150, active: false },
				{ label: "10 000 - 50 000 ₽", count: 89, active: false },
				{ label: "50 000 - 100 000 ₽", count: 45, active: false },
				{ label: "Свыше 100 000 ₽", count: 23, active: false },
			],
		},
		{
			title: "Производитель",
			items: [
				{ label: "LEGO", count: 156, active: false },
				{ label: "Arduino", count: 89, active: false },
				{ label: "Raspberry Pi", count: 67, active: false },
				{ label: "Makeblock", count: 45, active: false },
				{ label: "Roborobo", count: 34, active: false },
			],
		},
		{
			title: "Страна производства",
			items: [
				{ label: "Дания", count: 156, active: false },
				{ label: "Италия", count: 89, active: false },
				{ label: "Великобритания", count: 67, active: false },
				{ label: "США", count: 45, active: false },
				{ label: "Китай", count: 234, active: false },
			],
		},
		{
			title: "Возраст",
			items: [
				{ label: "3-6 лет", count: 67, active: false },
				{ label: "7-10 лет", count: 123, active: false },
				{ label: "11-14 лет", count: 89, active: false },
				{ label: "15+ лет", count: 45, active: false },
			],
		},
		{
			title: "В реестре Минпромторга",
			items: [
				{ label: "Да", count: 178, active: false },
				{ label: "Нет", count: 345, active: false },
			],
		},
		{
			title: "Вид оборудования/Тип товара",
			items: [
				{ label: "Конструкторы", count: 245, active: false },
				{ label: "Роботы", count: 156, active: false },
				{ label: "Комплекты", count: 89, active: false },
				{ label: "Запчасти", count: 67, active: false },
			],
		},
		{
			title: "Количество деталей в группе",
			items: [
				{ label: "До 100", count: 89, active: false },
				{ label: "100-500", count: 145, active: false },
				{ label: "500-1000", count: 67, active: false },
				{ label: "Свыше 1000", count: 34, active: false },
			],
		},
		{
			title: "Национальный проект",
			items: [
				{ label: "Образование", count: 234, active: false },
				{ label: "Наука и университеты", count: 89, active: false },
				{ label: "Цифровая экономика", count: 67, active: false },
			],
		},
		{
			title: "Методическое пособие",
			items: [
				{ label: "Есть", count: 189, active: false },
				{ label: "Нет", count: 267, active: false },
			],
		},
	];

	return (
		<div className="w-80 border-r border-gray-100 bg-white">
			{/* Категории */}
			<div className="border-b border-gray-100">
				{/* Category List */}
				<div className="py-0">
					{categories.map((item: any) => (
						<LinkWithChannel key={item.id} href={`/categories/${item.category!.slug}`}>
							<Button
								variant="ghost"
								className={`w-full justify-between rounded-none border-b border-gray-100 px-4 py-3 text-left hover:bg-gray-50 ${
									currentCategory === item.category!.slug ? "bg-blue-50 text-blue-600" : ""
								}`}
								asChild
							>
								<div>
									<div className="flex items-center">
										<span className="text-sm text-gray-700">{item.category!.name}</span>
									</div>
									<ChevronRight className="h-4 w-4 text-gray-400" />
								</div>
							</Button>
						</LinkWithChannel>
					))}
				</div>
			</div>

			{/* Фильтры */}
			<div>
				{filterGroups.map((group, groupIndex) => (
					<div key={groupIndex} className="border-b border-gray-100">
						<button onClick={() => toggleGroup(groupIndex)} className="w-full p-4 text-left hover:bg-gray-50">
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
		</div>
	);
}
