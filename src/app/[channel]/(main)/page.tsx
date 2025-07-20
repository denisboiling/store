import { Suspense } from "react";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";
import { CategoriesSidebar } from "@/ui/components/CategoriesSidebar";
import { MainBanner } from "@/ui/components/MainBanner";
import { FeatureCards } from "@/ui/components/FeatureCards";

export const metadata = {
	title: "Store - Интернет-магазин",
	description:
		"Store - современный интернет-магазин с широким ассортиментом товаров. Быстрая доставка, выгодные цены, качественный сервис.",
};

export default async function Page(props: { params: Promise<{ channel: string }> }) {
	const params = await props.params;
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});

	const products = data.collection?.products?.edges.map(({ node: product }) => product) || [];

	return (
		<div className="min-h-screen bg-white">
			{/* Main Content */}
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex">
					{/* Sidebar */}
					<Suspense
						fallback={
							<div className="h-[410px] w-80 animate-pulse border-r border-gray-100 bg-white">
								<div className="border-b border-gray-100 p-4">
									<div className="h-10 rounded bg-gray-200"></div>
								</div>
								<div className="py-0">
									{[1, 2, 3, 4, 5].map((i) => (
										<div key={i} className="border-b border-gray-100 px-4 py-3">
											<div className="h-6 rounded bg-gray-200"></div>
										</div>
									))}
								</div>
							</div>
						}
					>
						<CategoriesSidebar channel={params.channel} />
					</Suspense>

					{/* Main Content Area */}
					<div className="my-[71px] flex-1 p-6 py-0">
						<MainBanner />
					</div>
				</div>
			</div>

			{/* Feature Cards */}
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<FeatureCards />
			</div>

			{/* Products Section */}
			{products.length > 0 && (
				<section className="mx-auto max-w-7xl p-8 pb-16">
					<h2 className="mb-8 text-2xl font-bold text-gray-900">Рекомендуемые товары</h2>
					<ProductList products={products} />
				</section>
			)}
		</div>
	);
}
