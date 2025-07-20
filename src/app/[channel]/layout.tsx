import { type ReactNode } from "react";

export const generateStaticParams = async () => {
	// Временно отключаем загрузку каналов из-за несовместимости версий GraphQL схемы
	// Возвращаем хардкоженные каналы вместо загрузки из API
	return [{ channel: "default-channel" }];
};

export default function ChannelLayout({ children }: { children: ReactNode }) {
	return children;
}
