export function FeatureCards() {
	return (
		<div className="bg-white">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{/* Step 1 */}
				<div className="flex items-start space-x-4">
					<div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
						<span className="text-2xl font-bold text-white">1</span>
					</div>
					<div>
						<h3 className="mb-2 font-semibold text-gray-900">Подготовка документов</h3>
						<p className="text-sm leading-relaxed text-gray-600">
							Подготавливаем описание объекта закупки и коммерческие предложения на любые товары для
							образовательного процесса.
						</p>
					</div>
				</div>

				{/* Step 2 */}
				<div className="flex items-start space-x-4">
					<div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
						<span className="text-2xl font-bold text-white">2</span>
					</div>
					<div>
						<h3 className="mb-2 font-semibold text-gray-900">Удобная оплата</h3>
						<p className="text-sm leading-relaxed text-gray-600">
							Заключаем договор с оплатой по факту поставки товара. Специальные условия для образовательных
							учреждений.
						</p>
					</div>
				</div>

				{/* Step 3 */}
				<div className="flex items-start space-x-4">
					<div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
						<span className="text-2xl font-bold text-white">3</span>
					</div>
					<div>
						<h3 className="mb-2 font-semibold text-gray-900">Бесплатная доставка</h3>
						<p className="text-sm leading-relaxed text-gray-600">
							Бесплатно доставляем качественный сертифицированный товар в удобное для вас время.
						</p>
					</div>
				</div>

				{/* Step 4 */}
				<div className="flex items-start space-x-4">
					<div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
						<span className="text-2xl font-bold text-white">4</span>
					</div>
					<div>
						<h3 className="mb-2 font-semibold text-gray-900">Гарантии и поддержка</h3>
						<p className="text-sm leading-relaxed text-gray-600">
							Несем гарантийные обязательства и осуществляем техническую поддержку на всех этапах
							сотрудничества.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
