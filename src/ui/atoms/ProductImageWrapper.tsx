import NextImage, { type ImageProps } from "next/image";

export const ProductImageWrapper = (props: ImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-t-lg bg-neutral-50">
			<NextImage {...props} className="h-full w-full object-contain object-center" />
		</div>
	);
};
