import { Utility } from "@/styles/utility";
import { styles } from "./styles";

export default function NavBar() {
	return (
		<styles.Container>
			<styles.Main>
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
			</styles.Main>
		</styles.Container>
	);
}
