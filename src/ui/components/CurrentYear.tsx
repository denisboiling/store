"use client";

import { useState, useEffect } from "react";

export const CurrentYear = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// Always show 2024 on server and during initial render to prevent hydration mismatch
	// Only show current year after client-side hydration
	const currentYear = isClient ? new Date().getFullYear() : 2024;

	return <span>{currentYear}</span>;
};
