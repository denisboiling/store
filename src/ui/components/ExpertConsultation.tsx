"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/ui/atoms/Button";

export function ExpertConsultation() {
	return (
		<section className="bg-gray-50 py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					{/* Заголовок */}
					<h2 className="mb-4 text-2xl font-bold text-gray-900">
						Получите экспертную консультацию абсолютно бесплатно
					</h2>

					{/* Описание */}
					<p className="mx-auto mb-8 max-w-2xl text-gray-600">
						Наши специалисты помогут подобрать оптимальное решение для ваших задач. Получите персональное
						предложение и скидку на первый заказ.
					</p>

					{/* Кнопки */}
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Button className="flex items-center gap-2">
							<MessageCircle className="h-4 w-4" />
							Написать в Telegram
						</Button>
						<Button variant="outline" className="flex items-center gap-2">
							<MessageCircle className="h-4 w-4" />
							Написать в WhatsApp
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
