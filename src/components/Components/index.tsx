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
						Somos uma equipe de desenvolvedores que enfrentava problemas em
						organizar as tarefas do dia a dia, e os softwares de hoje não nos
						agradavam. Então decidimos criar o nosso próprio software de
						organização de tarefas.
					</p>
					<S.ButtonContainers>
						<Button title="Começar" variant="Main" onPress={handleCadastro} />
						<Utility.DesktopOnlySpan>
							<Button
								title="Sobre"
								variant="Outline"
								onPress={handleCadastro}
							/>
						</Utility.DesktopOnlySpan>
					</S.ButtonContainers>
				</Utility.DesktopOnly>
				<S.ImageContainer>
					<S.Image src={DefaultHomeImage} alt="Imagem ilustrativa" />
				</S.ImageContainer>
			</S.Container>
		</section>
	);
}
