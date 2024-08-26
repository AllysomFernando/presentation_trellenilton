import profileSrc from "@/assets/icons/menu-usuario.svg";
import menuSrc from "@/assets/icons/icon-menu.svg";

export type IconsNames = keyof typeof icons;

const icons = {
	profile: profileSrc,
	menu: menuSrc,
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
