"use client";

import { useState, useEffect, type ReactNode } from "react";

interface ScrollableHeaderProps {
	topHeader: ReactNode;
	mainHeader: ReactNode;
}

export function ScrollableHeader({ topHeader, mainHeader }: ScrollableHeaderProps) {
	const [showTopHeader, setShowTopHeader] = useState(true);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		const handleScroll = () => {
			// Дебаунсинг для уменьшения частоты вызовов
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				const currentScrollY = window.scrollY;

				// Показываем TopHeader только когда находимся в самом верху (в пределах 100px)
				if (currentScrollY <= 70) {
					setShowTopHeader(true);
				} else {
					setShowTopHeader(false);
				}
			}, 10); // Короткая задержка для сглаживания
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<header className="sticky top-0 z-20 bg-white">
			<div
				className={`overflow-hidden transition-all duration-200 ease-out ${
					showTopHeader ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				{topHeader}
			</div>
			{mainHeader}
		</header>
	);
}
