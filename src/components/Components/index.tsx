import { Utility } from "@/styles/utility";
import Image from "next/image";
import HeroRectangleOne from "@/assets/images/rectangleOne.png";
import HeroRectangleTwo from "@/assets/images/rectangleTwo.png";
import { Button } from "../Button";
export default function Section() {
	const handleCadastro = () => {
		console.log("cadastro");
	};
	return (
		<section>
			<Utility.DesktopOnlySpan>
				<Utility.Image src={HeroRectangleOne} alt="Rectangle One" />
			</Utility.DesktopOnlySpan>
			<Utility.Image src={HeroRectangleTwo} alt="Rectangle One" />
			<Utility.ContainerContent>
				<Utility.DesktopOnly>
					<Utility.DesktopOnlyP>Olá</Utility.DesktopOnlyP>
					<h1>
						Somos um kanban de open source, ajudando a produtividade dos
						engenheiros de softwares
					</h1>
					<p>
						Somos uma equipe de desenvolvedores que enfrantavamos porblemas em
						organizar as tarefas do dia dia, e os softwares de hoje não estava
						de agrado nosso
					</p>
					<Utility.FlexGap>
						<Button title="Começar" variant="Main" onPress={handleCadastro} />
						<Utility.DesktopOnlySpan>
							<Button
								title="Sobre"
								variant="Outline"
								onPress={handleCadastro}
							/>
						</Utility.DesktopOnlySpan>
					</Utility.FlexGap>
				</Utility.DesktopOnly>
			</Utility.ContainerContent>
		</section>
	);
}
