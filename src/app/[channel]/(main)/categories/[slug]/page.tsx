import { notFound } from "next/navigation";
import { type ResolvingMetadata, type Metadata } from "next";
import { Suspense } from "react";
import { ProductListByCategoryDocument, MenuGetBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { parseEditorJSContent } from "@/lib/utils";
import { CategorySidebar } from "@/ui/components/CategorySidebar";
import { MobileFilters } from "@/ui/components/MobileFilters";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { FilterSummary } from "@/ui/components/FilterSummary";
import { ProductHeader } from "@/ui/components/ProductHeader";
import { ProductGroups } from "@/ui/components/ProductGroups";
import { ExpertConsultation } from "@/ui/components/ExpertConsultation";

export const generateMetadata = async (
	props: { params: Promise<{ slug: string; channel: string }> },
	parent: ResolvingMetadata,
): Promise<Metadata> => {
	const params = await props.params;
	const { category } = await executeGraphQL(ProductListByCategoryDocument, {
		variables: { slug: params.slug, channel: params.channel },
		revalidate: 60,
	});

	return {
		title: `${category?.name || "Categroy"} | ${category?.seoTitle || (await parent).title?.absolute}`,
		description: category?.seoDescription || category?.description || category?.seoTitle || category?.name,
	};
};

export default async function Page(props: { params: Promise<{ slug: string; channel: string }> }) {
	const params = await props.params;
	const [categoryData, navLinksData] = await Promise.all([
		executeGraphQL(ProductListByCategoryDocument, {
			variables: { slug: params.slug, channel: params.channel },
			revalidate: 60,
		}),
		executeGraphQL(MenuGetBySlugDocument, {
			variables: { slug: "navbar", channel: params.channel },
			revalidate: 60 * 60 * 24,
		}),
	]);

	const { category } = categoryData;

	if (!category || !category.products) {
		notFound();
	}

	const { name, description, products } = category;

	// Группы фильтров для мобильной версии
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
			title: "Возраст",
			items: [
				{ label: "3-6 лет", count: 67, active: false },
				{ label: "7-10 лет", count: 123, active: false },
				{ label: "11-14 лет", count: 89, active: false },
				{ label: "15+ лет", count: 45, active: false },
			],
		},
	];

	return (
		<>
			<div className="min-h-screen bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex">
						{/* Sidebar */}
						<div className="hidden lg:block">
							<Suspense
								fallback={
									<div className="h-[600px] w-80 animate-pulse border-r border-gray-100 bg-white">
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
								<CategorySidebar currentCategory={params.slug} navLinks={navLinksData} />
							</Suspense>
						</div>

						{/* Main Content */}
						<div className="flex-1 lg:pb-16 lg:pl-8 lg:pt-8">
							{/* Хлебные крошки */}
							<Breadcrumbs items={[{ label: name }]} channel={params.channel} />

							{/* Заголовок и описание категории */}
							<div className="mb-6 lg:mb-8">
								<h1 className="mb-2 text-2xl font-bold text-gray-900 lg:mb-4 lg:text-3xl">{name}</h1>
								<div className="text-sm leading-relaxed text-gray-600 lg:text-base">
									{parseEditorJSContent(description) ||
										"Развивайте творческие навыки и воображение с нашими детскими конструкторами. Стройте, создавайте и воплощайте свои идеи в реальность."}
								</div>
							</div>

							{/* Мобильные фильтры */}
							<MobileFilters filterGroups={filterGroups} />

							{/* Краткие фильтры для десктопа */}
							<div className="hidden lg:block">
								<FilterSummary filterGroups={filterGroups} />
							</div>

							{/* Заголовок с количеством товаров и сортировкой */}
							<ProductHeader totalCount={products.edges.length} />

							{/* Товары */}
							<ProductGroups products={products.edges.map((e) => e.node)} channel={params.channel} />
						</div>
					</div>
				</div>
			</div>

			{/* Экспертная консультация */}
			<ExpertConsultation />
		</>
	);
}
