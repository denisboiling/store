export function Bestsellers() {
	return (
		<section className="mx-auto max-w-7xl p-8">
			{/* Top Featured Products */}
			<div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
				{/* Samsung Smart Watch */}
				<div className="relative flex min-h-[300px] overflow-hidden rounded-lg bg-gray-50">
					<div className="flex flex-1 flex-col justify-between p-8">
						<div>
							<div className="mb-4 inline-block rounded-md bg-yellow-300 px-3 py-1 text-xs font-medium">
								Starting At Only $699
							</div>
							<h3 className="mb-2 text-2xl font-bold text-gray-900">Samsung Smart Watch Pro</h3>
							<p className="mb-6 text-gray-600">The Samsung Smart Watch A8 WiFi Gray is a mid-range watch</p>
						</div>
						<button className="inline-flex w-fit items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700">
							В корзину
						</button>
					</div>
					<div className="relative flex w-1/2 items-center justify-center">
						<img
							src="/placeholder.svg?height=200&width=200"
							alt="Samsung Smart Watch с зеленым ремешком"
							className="h-48 w-48 object-contain"
						/>
					</div>
				</div>

				{/* Waterproof JBL Speaker */}
				<div className="relative flex min-h-[300px] overflow-hidden rounded-lg bg-gray-100">
					<div className="flex flex-1 flex-col justify-between p-8">
						<div>
							<div className="mb-4 inline-block rounded-md bg-blue-800 px-3 py-1 text-xs font-medium text-white">
								Starting At Only $699
							</div>
							<h3 className="mb-2 text-2xl font-bold text-gray-900">Waterproof JBL Speaker</h3>
							<p className="mb-6 text-gray-600">Rock out with powerful JBL Pro Sound that deliver clean</p>
						</div>
						<button className="inline-flex w-fit items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700">
							В корзину
						</button>
					</div>
					<div className="relative flex w-1/2 items-center justify-center">
						<img
							src="/placeholder.svg?height=200&width=200"
							alt="Синяя водонепроницаемая колонка JBL"
							className="h-48 w-48 object-contain"
						/>
					</div>
				</div>
			</div>

			{/* Bottom Featured Products */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{/* Apple AirPods */}
				<div className="flex min-h-[400px] flex-col items-center rounded-lg border border-gray-200 bg-white p-6">
					<div className="mb-6 flex flex-1 items-center justify-center">
						<img
							src="/placeholder.svg?height=160&width=160"
							alt="Apple AirPods Max Space Orange"
							className="h-40 w-40 object-contain"
						/>
					</div>
					<div className="mb-4 text-center">
						<span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
							New Arrival
						</span>
					</div>
					<div className="text-center">
						<h3 className="mb-1 text-lg font-bold text-gray-900">Apple AirPods Max</h3>
						<p className="mb-4 text-gray-600">Space Orange</p>
						<button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700">
							В корзину
						</button>
					</div>
				</div>

				{/* JBL Headphones */}
				<div className="relative flex min-h-[400px] flex-col rounded-lg bg-gray-50 p-6">
					<div className="absolute left-4 top-4">
						<span className="inline-block rounded-md bg-teal-500 px-3 py-1 text-xs font-medium text-white">
							Grab 50% Offer!
						</span>
					</div>
					<div className="flex h-full flex-col pt-8">
						<div className="mb-6">
							<h3 className="mb-2 text-xl font-bold text-gray-900">JBL Live Over Ear Headphone</h3>
							<p className="mb-4 text-sm text-gray-600">
								Wirelesses stream high-quality sound even at lower bit rates
							</p>
						</div>
						<div className="mt-auto flex items-end justify-between">
							<button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700">
								В корзину
							</button>
							<div className="relative flex h-32 w-32 items-center justify-center">
								<img
									src="/placeholder.svg?height=128&width=128"
									alt="Синие наушники JBL"
									className="h-full w-full object-contain"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Fujifilm Camera */}
				<div className="flex min-h-[400px] flex-col items-center rounded-lg border border-gray-200 bg-white p-6">
					<div className="mb-6 flex flex-1 items-center justify-center">
						<img
							src="/placeholder.svg?height=160&width=160"
							alt="Fujifilm Instant Camera"
							className="h-40 w-40 object-contain"
						/>
					</div>
					<div className="mb-4 text-center">
						<span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
							New Arrival
						</span>
					</div>
					<div className="text-center">
						<h3 className="mb-1 text-lg font-bold text-gray-900">Fujifilm Instant Camera</h3>
						<p className="mb-4 text-gray-600">For Portrait</p>
						<button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700">
							В корзину
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
