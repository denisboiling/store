import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export function TopHeader() {
	return (
		<div className="border-b border-gray-200 bg-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-10 items-center justify-between text-sm">
					<div className="flex items-center space-x-6">
						<span className="text-gray-600">
							<span className="font-medium text-gray-900">+7 495 022 141 44 54</span>
						</span>
						<span className="text-gray-600">
							Напишите нам:{" "}
							<a href="mailto:contact@store.ru" className="text-blue-500 hover:text-blue-600">
								contact@store.ru
							</a>
						</span>
						<div className="flex items-center space-x-2">
							<a
								href="#"
								className="flex h-6 w-6 items-center justify-center rounded bg-green-500 transition-colors hover:bg-green-600"
							>
								<span className="text-xs font-bold text-white">W</span>
							</a>
							<a
								href="#"
								className="flex h-6 w-6 items-center justify-center rounded bg-blue-500 transition-colors hover:bg-blue-600"
							>
								<span className="text-xs font-bold text-white">T</span>
							</a>
							<a
								href="#"
								className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 transition-colors hover:bg-blue-700"
							>
								<span className="text-xs font-bold text-white">VK</span>
							</a>
						</div>
					</div>
					<div className="flex items-center space-x-6">
						<span className="cursor-pointer text-gray-600 hover:text-gray-900">О компании</span>
						<span className="cursor-pointer text-gray-600 hover:text-gray-900">Доставка и оплата</span>
						<span className="cursor-pointer text-gray-600 hover:text-gray-900">Контакты</span>
						<LinkWithChannel href="/login" className="text-gray-600 hover:text-gray-900">
							Личный кабинет
						</LinkWithChannel>
					</div>
				</div>
			</div>
		</div>
	);
}
