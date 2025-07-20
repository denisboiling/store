import { ShoppingBasket } from "lucide-react";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

export async function Footer({ channel: _channel }: { channel: string }) {
	return (
		<footer className="border-t border-gray-200 bg-gray-100">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Left Section */}
					<div className="space-y-6">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
								<ShoppingBasket className="h-6 w-6 text-white" />
							</div>
							<span className="text-xl font-bold text-gray-900">Store</span>
						</div>

						{/* Privacy Notice */}
						<div className="max-w-md text-sm leading-relaxed text-gray-600">
							<p>
								На нашем сайте мы используем cookie, данные об IP-адресе и местоположении для сбора информации
								технического характера, в соответствии с{" "}
								<a href="#" className="text-blue-500 underline hover:text-blue-600">
									политикой
								</a>{" "}
								организации по обработке персональных данных.
							</p>
						</div>
					</div>

					{/* Right Section */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{/* Company Info */}
						<div>
							<h3 className="mb-4 font-semibold text-gray-900">О компании</h3>
							<ul className="space-y-3">
								<li>
									<LinkWithChannel
										href="/pages/shipping"
										className="text-sm text-gray-600 hover:text-gray-900"
									>
										Доставка и оплата
									</LinkWithChannel>
								</li>
								<li>
									<LinkWithChannel
										href="/pages/contact"
										className="text-sm text-gray-600 hover:text-gray-900"
									>
										Контакты
									</LinkWithChannel>
								</li>
								<li>
									<LinkWithChannel href="/login" className="text-sm text-gray-600 hover:text-gray-900">
										Личный кабинет
									</LinkWithChannel>
								</li>
							</ul>
						</div>

						{/* Contact Phone */}
						<div>
							<div className="text-sm font-semibold text-gray-900">+7 495 022 141 44 54</div>
						</div>

						{/* Contact Info */}
						<div>
							<h3 className="mb-4 font-semibold text-gray-900">Напишите нам:</h3>
							<div className="space-y-3">
								{/* Social Icons */}
								<div className="flex items-center space-x-3">
									<a
										href="#"
										className="flex h-8 w-8 items-center justify-center rounded bg-green-500 transition-colors hover:bg-green-600"
									>
										<span className="text-xs font-bold text-white">W</span>
									</a>
									<a
										href="#"
										className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 transition-colors hover:bg-blue-600"
									>
										<span className="text-xs font-bold text-white">T</span>
									</a>
									<a
										href="#"
										className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 transition-colors hover:bg-blue-700"
									>
										<span className="text-xs font-bold text-white">VK</span>
									</a>
								</div>

								{/* Email */}
								<div>
									<a href="mailto:contact@store.ru" className="text-sm text-gray-600 hover:text-gray-900">
										contact@store.ru
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
