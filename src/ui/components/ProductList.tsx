import { ProductElement } from "./ProductElement";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({
	products,
	channel,
	columns = 3,
}: {
	products: readonly ProductListItemFragment[];
	channel: string;
	columns?: 2 | 3 | 4;
}) => {
	const gridCols = {
		2: "grid-cols-1 gap-8 sm:grid-cols-2",
		3: "grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
		4: "grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",
	};

	return (
		<ul role="list" data-testid="ProductList" className={`grid ${gridCols[columns]} pr-0`}>
			{products.map((product, index) => (
				<ProductElement
					key={product.id}
					product={product}
					channel={channel}
					priority={index < 2}
					loading={index < 3 ? "eager" : "lazy"}
				/>
			))}
		</ul>
	);
};
