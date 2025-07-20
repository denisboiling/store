import { ProductList } from "./ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductGroupsProps {
	products: readonly ProductListItemFragment[];
	channel: string;
}

export function ProductGroups({ products, channel }: ProductGroupsProps) {
	// Группируем товары по категориям или другим критериям
	const groupedProducts = {
		"По назначению": products.slice(0, 3),
		"По возрасту": products.slice(3, 6),
		"По производителям": products.slice(6, 9),
	};

	return (
		<div className="space-y-8 pr-0">
			{Object.entries(groupedProducts).map(([groupTitle, groupProducts]) => (
				<div key={groupTitle} className="border-b border-gray-200 pb-8 pr-0">
					{/* Заголовок группы */}
					<div className="mb-4 flex items-center justify-between pr-0">
						<h3 className="text-lg font-semibold text-gray-900">{groupTitle}</h3>
						<button className="text-sm text-blue-600 transition-colors hover:text-blue-800">
							Смотреть все товары →
						</button>
					</div>

					{/* Товары группы */}
					{groupProducts.length > 0 ? (
						<ProductList products={groupProducts} channel={channel} />
					) : (
						<div className="py-8 text-center text-gray-500">В этой группе пока нет товаров</div>
					)}
				</div>
			))}
		</div>
	);
}
