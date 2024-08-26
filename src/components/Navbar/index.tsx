import { Utility } from "@/styles/utility";
import { S } from "./styles";
import Logo from "@/assets/logo.svg";
export default function NavBar() {
	return (
		<S.Container>
			<S.Nav>
				<Utility.DesktopOnly>
					<S.UlMaster>
						<img src={Logo} alt="Logo Trellenilton" width={200} height={80} />
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
			</S.Nav>
		</S.Container>
	);
}
