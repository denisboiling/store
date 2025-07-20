import { ChevronRight } from "lucide-react";
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
		<div className="w-80 bg-white">
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
