import { ChevronRight, Home } from "lucide-react";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[];
	channel: string;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
	return (
		<nav className="mb-4 lg:mb-6">
			<ol className="flex items-center space-x-2 text-sm text-gray-500">
				{/* Главная */}
				<li>
					<LinkWithChannel href="/">
						<div className="flex items-center transition-colors hover:text-gray-700">
							<Home className="h-4 w-4" />
							<span className="sr-only">Главная</span>
						</div>
					</LinkWithChannel>
				</li>

				{/* Разделитель */}
				<ChevronRight className="h-4 w-4 text-gray-300" />

				{/* Каталог */}
				<li>
					<LinkWithChannel href="/products">
						<span className="transition-colors hover:text-gray-700">Каталог</span>
					</LinkWithChannel>
				</li>

				{/* Динамические элементы */}
				{items.map((item, index) => (
					<li key={index} className="flex items-center">
						<ChevronRight className="h-4 w-4 text-gray-300" />
						{item.href && index < items.length - 1 ? (
							<LinkWithChannel href={item.href}>
								<span className="ml-2 transition-colors hover:text-gray-700">{item.label}</span>
							</LinkWithChannel>
						) : (
							<span className="ml-2 font-medium text-gray-900">{item.label}</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
