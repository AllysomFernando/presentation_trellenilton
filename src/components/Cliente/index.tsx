import React from "react";
import Carrousel from "../Carrousel";
import { Clients } from "../Carrousel/text";
import { S } from "./styles";

export default function Cliente() {
	return (
		<S.Container>
			<S.Main>
				<S.Text>
					<S.H3>Conselho de quem conhece</S.H3>
					<S.H1>Cada cliente importa!</S.H1>
					<S.Paragraph>
						Problems trying to resolve the conflict between the two major realms
						of Classical physics: Newtonian mechanics{" "}
					</S.Paragraph>
				</S.Text>
				<Carrousel items={Clients} />
			</S.Main>
		</S.Container>
	);
}
