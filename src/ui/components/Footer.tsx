import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { CurrentYear } from "./CurrentYear";

export async function Footer({ channel: _channel }: { channel: string }) {
	return (
		<footer className="border-neutral-300 bg-neutral-50">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="grid grid-cols-3 gap-8 py-16">
					{/* Статические ссылки футера */}
					<div>
						<h3 className="text-sm font-semibold text-neutral-900">Продукты</h3>
						<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
							<li className="text-sm">
								<LinkWithChannel href="/products">Все товары</LinkWithChannel>
							</li>
							<li className="text-sm">
								<LinkWithChannel href="/categories">Категории</LinkWithChannel>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold text-neutral-900">Компания</h3>
						<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
							<li className="text-sm">
								<LinkWithChannel href="/pages/about">О нас</LinkWithChannel>
							</li>
							<li className="text-sm">
								<LinkWithChannel href="/pages/contact">Контакты</LinkWithChannel>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold text-neutral-900">Поддержка</h3>
						<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
							<li className="text-sm">
								<LinkWithChannel href="/pages/help">Помощь</LinkWithChannel>
							</li>
							<li className="text-sm">
								<LinkWithChannel href="/pages/shipping">Доставка</LinkWithChannel>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
					<p className="text-sm text-neutral-500">
						Copyright &copy; <CurrentYear /> Store, Inc.
					</p>
				</div>
			</div>
		</footer>
	);
}
