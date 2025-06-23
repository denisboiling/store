"use client";

import { UserIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export function ClientUserMenu() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// Show loading state until client hydration
	if (!isClient) {
		return (
			<div className="h-6 w-6 flex-shrink-0">
				<div className="h-6 w-6 animate-pulse rounded-full bg-neutral-200" />
			</div>
		);
	}

	// Simple fallback for now - just show login link
	// This prevents hydration mismatch by ensuring consistent rendering
	return (
		<LinkWithChannel href="/login" className="h-6 w-6 flex-shrink-0">
			<UserIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
			<span className="sr-only">Log in</span>
		</LinkWithChannel>
	);
}
