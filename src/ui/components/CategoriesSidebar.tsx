import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/ui/atoms/Button";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import { executeGraphQL } from "@/lib/graphql";
import { MenuGetBySlugDocument } from "@/gql/graphql";

interface CategoriesSidebarProps {
	channel: string;
}

export async function CategoriesSidebar({ channel }: CategoriesSidebarProps) {
	const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "navbar", channel },
		revalidate: 60 * 60 * 24,
	});

	// Фильтруем только категории из меню
	const categories = navLinks.menu?.items?.filter((item) => item.category) || [];

	return (
		<div className="h-[410px] w-80 bg-white">
			{/* All Categories - clean white style */}
			<div className="border-b border-gray-100 bg-white p-4">
				<LinkWithChannel href="/products">
					<Button
						variant="ghost"
						className="w-full justify-between text-left font-medium text-gray-900 hover:bg-gray-50"
						asChild
					>
						<div>
							<div className="flex items-center space-x-2">
								<div className="flex h-6 w-6 items-center justify-center">
									<div className="grid grid-cols-2 gap-0.5">
										<div className="h-1.5 w-1.5 rounded-sm bg-gray-600"></div>
										<div className="h-1.5 w-1.5 rounded-sm bg-gray-600"></div>
										<div className="h-1.5 w-1.5 rounded-sm bg-gray-600"></div>
										<div className="h-1.5 w-1.5 rounded-sm bg-gray-600"></div>
									</div>
								</div>
								<span>Все категории</span>
							</div>
							<ChevronDown className="h-4 w-4" />
						</div>
					</Button>
				</LinkWithChannel>
			</div>

			{/* Category List */}
			<div className="py-0">
				{categories.map((item) => (
					<LinkWithChannel key={item.id} href={`/categories/${item.category!.slug}`}>
						<Button
							variant="ghost"
							className="w-full justify-between rounded-none border-b border-gray-100 px-4 py-3 text-left hover:bg-gray-50"
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
	);
}
