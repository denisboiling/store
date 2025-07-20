import { TopHeader } from "./TopHeader";
import { MainHeader } from "./MainHeader";
import { ScrollableHeader } from "./ScrollableHeader";

export function Header({ channel }: { channel: string }) {
	return <ScrollableHeader topHeader={<TopHeader />} mainHeader={<MainHeader channel={channel} />} />;
}
