import NavBar from "../Navbar";
import { styles } from "./styles";
export default function Header() {
	return (
		<styles.Container>
			<styles.Main>
				<NavBar />
			</styles.Main>
		</styles.Container>
	);
}
