import { NavLink } from "./NavLink";

export const NavLinks = async ({ channel: _channel }: { channel: string }) => {
	// Временно отключаем загрузку меню из-за несовместимости версий GraphQL схемы
	// const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
	// 	variables: { slug: "navbar", channel },
	// 	revalidate: 60 * 60 * 24,
	// });

	return (
		<>
			<NavLink href="/products">Все товары</NavLink>
			<NavLink href="/categories">Категории</NavLink>
			<NavLink href="/collections">Коллекции</NavLink>
			<NavLink href="/pages/about">О нас</NavLink>
		</>
	);
};
