export function MainBanner() {
	return (
		<div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-blue-200 sm:h-64 lg:h-96">
			{/* Weekend Discount Badge */}
			<div className="absolute left-4 top-4 sm:left-6 sm:top-6">
				<div className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-sm">
					Weekend Discount
				</div>
			</div>

			{/* Decorative elements */}
			<div className="absolute bottom-0 right-0 h-32 w-32 opacity-20 sm:h-48 sm:w-48 lg:h-64 lg:w-64">
				<div className="h-full w-full translate-x-16 translate-y-16 transform rounded-full bg-gradient-to-tl from-blue-500 to-blue-600 sm:translate-x-24 sm:translate-y-24 lg:translate-x-32 lg:translate-y-32"></div>
			</div>
			<div className="absolute right-10 top-0 h-16 w-16 opacity-30 sm:right-16 sm:h-24 sm:w-24 lg:right-20 lg:h-32 lg:w-32">
				<div className="h-full w-full -translate-y-8 transform rounded-full bg-gradient-to-br from-blue-400 to-blue-500 sm:-translate-y-12 lg:-translate-y-16"></div>
			</div>
		</div>
	);
}
