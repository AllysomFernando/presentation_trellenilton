import { Utility } from "@/styles/utility";
import { S } from "./styles";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { Button } from "../Button";
export default function NavBar() {
	const handlePress = () => {
		console.log("Button pressed");
	};

	return (
		<S.Container>
			<S.Nav>
				<Utility.DesktopOnly>
					<S.UlMaster>
						<Utility.Image src={Logo} alt="Logo Trellenilton" width={200} />
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Soluções</a>
						</li>
						<li>
							<a href="/">Depoimentos</a>
						</li>
						<li>
							<a href="/">Preços</a>
						</li>
						<li>
							<a href="/">Contato</a>
						</li>
					</S.UlMaster>
				</Utility.DesktopOnly>
				<S.ButtonContainer>
					<Button onPress={handlePress} title="Login" variant="Main" />
				</S.ButtonContainer>
			</S.Nav>
		</S.Container>
	);
}
