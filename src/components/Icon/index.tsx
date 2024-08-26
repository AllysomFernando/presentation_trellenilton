import { IconsNames, useIcon } from "@/hooks/useIcon";
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconsNames;
}

export const Icon = ({ name, ...rest }: IconProps) => {
	const { getIconByKeyword } = useIcon();

	const SelectIcon = getIconByKeyword(name);

	return (
		<div>
			<SelectIcon {...rest} />
		</div>
	);
};
