import Profile from "@/icons/menu-usuario.svg";
import { profile } from "console";

import { SVGProps } from "react";

export type IconsNames = keyof typeof icons;

const icons = {
	profile: (props: SVGProps<SVGSVGElement>) => <Profile {...props} />,
};

export const useIcon = () => {
	const getIconByKeyword = (name: IconsNames) => {
		return icons[name];
	};

	return {
		getIconByKeyword,
		icons: icons,
	};
};
