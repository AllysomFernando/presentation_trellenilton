import { IconsNames } from "@/hooks/useIcon";

export interface ButtonProps {
	title: string;
	onPress: () => void;
	isLoading?: boolean;
	variant: ButtonVariants;
	icon?: IconsNames;
}

type ButtonVariants = "Main" | "Outline" | "Danger" | "Ghost" | "Home";
