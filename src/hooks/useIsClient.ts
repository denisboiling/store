"use client";

import { useEffect, useState } from "react";

/**
 * Hook to safely determine if component is being rendered on the client side.
 * Helps prevent hydration mismatches by ensuring consistent server/client rendering.
 *
 * @returns boolean - true if rendering on client side, false if on server
 */
export const useIsClient = (): boolean => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return isClient;
};
