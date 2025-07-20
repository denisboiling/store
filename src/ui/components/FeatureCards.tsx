import { CreditCard, Shield, Truck } from "lucide-react";

export function FeatureCards() {
	return (
		<div className="bg-white">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{/* Payment only online */}
				<div className="flex items-start space-x-4">
					<div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
						{/* Payment card icon */}
						<div className="relative h-8 w-10 rounded-md border-2 border-blue-300 bg-blue-100">
							<div className="absolute inset-1 rounded-sm bg-white"></div>
							<div className="absolute bottom-1 left-1 right-1 h-1 rounded-sm bg-blue-300"></div>
						</div>
						<div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600">
							<CreditCard className="h-3 w-3 text-white" />
						</div>
					</div>
					<div>
						<h3 className="mb-2 font-semibold text-gray-900">Только онлайн оплата</h3>
						<p className="text-sm leading-relaxed text-gray-600">
							Безопасная оплата картой. Мобильная касса. Защищенные транзакции.
						</p>
					</div>
				</div>

				{/* New stocks and sales */}
				<div className="flex items-start space-x-4">
					<div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
						{/* Star burst with number 2 */}
						<div className="relative h-12 w-12">
							<div className="absolute inset-0 rounded-full bg-yellow-400"></div>
							<div className="absolute -top-1 left-2 h-6 w-3 rotate-45 transform rounded-full bg-yellow-400"></div>
							<div className="absolute -top-1 right-2 h-6 w-3 -rotate-45 transform rounded-full bg-yellow-400"></div>
							<div className="absolute -bottom-1 left-2 h-6 w-3 -rotate-45 transform rounded-full bg-yellow-400"></div>
							<div className="absolute -bottom-1 right-2 h-6 w-3 rotate-45 transform rounded-full bg-yellow-400"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="text-lg font-bold text-white">2</span>
							</div>
						</div>
					</div>
					<div>
						<h3 className="mb-2 font-semibold text-gray-900">Новые акции и скидки</h3>
						<p className="text-sm leading-relaxed text-gray-600">
							Еженедельные скидки. Выгодные предложения. Специальные акции.
						</p>
					</div>
				</div>

				{/* Quality assurance */}
				<div className="flex items-start space-x-4">
					<div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
						{/* Shield with crown */}
						<div className="relative">
							<Shield className="h-10 w-10 fill-blue-100 text-blue-600" />
							<div className="absolute -top-2 left-1/2 -translate-x-1/2 transform">
								<div className="relative h-4 w-6 rounded-t-full bg-yellow-400">
									<div className="absolute left-1 top-0 h-2 w-1 rounded-full bg-yellow-500"></div>
									<div className="absolute left-1/2 top-0 h-3 w-1 -translate-x-1/2 transform rounded-full bg-yellow-500"></div>
									<div className="absolute right-1 top-0 h-2 w-1 rounded-full bg-yellow-500"></div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<h3 className="mb-2 font-semibold text-gray-900">Контроль качества</h3>
						<p className="text-sm leading-relaxed text-gray-600">
							Проверка качества товаров. Гарантия свежести. Сертифицированные продукты.
						</p>
					</div>
				</div>

				{/* Delivery from 1 hour */}
				<div className="flex items-start space-x-4">
					<div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
						{/* Delivery truck with V badge */}
						<div className="relative">
							<div className="flex h-8 w-12 items-center justify-center rounded-lg bg-purple-600">
								<Truck className="h-6 w-6 text-white" />
							</div>
							<div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
								<span className="text-sm font-bold text-purple-600">V</span>
							</div>
						</div>
					</div>
					<div>
						<h3 className="mb-2 font-semibold text-gray-900">Доставка от 1 часа</h3>
						<p className="text-sm leading-relaxed text-gray-600">
							Быстрая доставка. Курьерская служба. Точные сроки доставки.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
