import { Utility } from "@/styles/utility";
import { Button } from "../Button";
import { S } from "./styles";
import DefaultHomeImage from "@/assets/images/home.jpeg";

export default function Section() {
	const handleCadastro = () => {
		console.log("cadastro");
	};
	return (
		<section>
			<S.Container>
				<Utility.DesktopOnly>
					<h1>Quem somos?</h1>
					<p>
						Somos uma equipe de desenvolvedores que enfrantavamos porblemas em
						organizar as tarefas do dia dia, e os softwares de hoje não estava
						de agrado nosso. Então decidimos criar o nosso próprio software de
						organização de tarefas.
					</p>
					<S.ButtonConatiners>
						<Button title="Começar" variant="Main" onPress={handleCadastro} />
						<Utility.DesktopOnlySpan>
							<Button
								title="Sobre"
								variant="Outline"
								onPress={handleCadastro}
							/>
						</Utility.DesktopOnlySpan>
					</S.ButtonConatiners>
				</Utility.DesktopOnly>
				<S.ImageContainer>
					<S.Image src={DefaultHomeImage} alt="Imagem para acompanhar" />
				</S.ImageContainer>
			</S.Container>
		</section>
	);
}
