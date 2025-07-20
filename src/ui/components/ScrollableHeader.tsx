"use client";

import { useState, useEffect, type ReactNode } from "react";

interface ScrollableHeaderProps {
	topHeader: ReactNode;
	mainHeader: ReactNode;
}

export function ScrollableHeader({ topHeader, mainHeader }: ScrollableHeaderProps) {
	const [showTopHeader, setShowTopHeader] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Показываем TopHeader только когда находимся в самом верху (в пределах 10px)
			if (currentScrollY <= 10) {
				setShowTopHeader(true);
			} else {
				setShowTopHeader(false);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="sticky top-0 z-20 bg-white">
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					showTopHeader ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				{topHeader}
			</div>
			{mainHeader}
		</header>
	);
}
