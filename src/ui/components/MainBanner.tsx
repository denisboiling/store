export function MainBanner() {
	return (
		<div className="relative h-96 overflow-hidden rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-blue-200">
			{/* Weekend Discount Badge */}
			<div className="absolute left-6 top-6">
				<div className="rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white">
					Weekend Discount
				</div>
			</div>

			{/* Decorative elements */}
			<div className="absolute bottom-0 right-0 h-64 w-64 opacity-20">
				<div className="h-full w-full translate-x-32 translate-y-32 transform rounded-full bg-gradient-to-tl from-blue-500 to-blue-600"></div>
			</div>
			<div className="absolute right-20 top-0 h-32 w-32 opacity-30">
				<div className="h-full w-full -translate-y-16 transform rounded-full bg-gradient-to-br from-blue-400 to-blue-500"></div>
			</div>
		</div>
	);
}
