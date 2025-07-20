export function FeatureCards() {
	return (
		<div className="bg-white">
			<div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
				{/* Step 1 */}
				<div className="flex items-start space-x-3 sm:space-x-4">
					<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 sm:h-16 sm:w-16">
						<span className="text-lg font-bold text-white sm:text-2xl">1</span>
					</div>
					<div>
						<h3 className="mb-2 text-sm font-semibold text-gray-900 sm:text-base">Подготовка документов</h3>
						<p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
							Подготавливаем описание объекта закупки и коммерческие предложения на любые товары для
							образовательного процесса.
						</p>
					</div>
				</div>

				{/* Step 2 */}
				<div className="flex items-start space-x-3 sm:space-x-4">
					<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 sm:h-16 sm:w-16">
						<span className="text-lg font-bold text-white sm:text-2xl">2</span>
					</div>
					<div>
						<h3 className="mb-2 text-sm font-semibold text-gray-900 sm:text-base">Удобная оплата</h3>
						<p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
							Заключаем договор с оплатой по факту поставки товара. Специальные условия для образовательных
							учреждений.
						</p>
					</div>
				</div>

				{/* Step 3 */}
				<div className="flex items-start space-x-3 sm:space-x-4">
					<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 sm:h-16 sm:w-16">
						<span className="text-lg font-bold text-white sm:text-2xl">3</span>
					</div>
					<div>
						<h3 className="mb-2 text-sm font-semibold text-gray-900 sm:text-base">Бесплатная доставка</h3>
						<p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
							Бесплатно доставляем качественный сертифицированный товар в удобное для вас время.
						</p>
					</div>
				</div>

				{/* Step 4 */}
				<div className="flex items-start space-x-3 sm:space-x-4">
					<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 sm:h-16 sm:w-16">
						<span className="text-lg font-bold text-white sm:text-2xl">4</span>
					</div>
					<div>
						<h3 className="mb-2 text-sm font-semibold text-gray-900 sm:text-base">Гарантии и поддержка</h3>
						<p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
							Несем гарантийные обязательства и осуществляем техническую поддержку на всех этапах
							сотрудничества.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
