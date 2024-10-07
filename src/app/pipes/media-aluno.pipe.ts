import type { Aluno } from "./../models/Aluno";
import { Pipe, type PipeTransform } from "@angular/core";
@Pipe({
	name: "mediaAluno",
	standalone: true,
})
export class MediaAlunoPipe implements PipeTransform {
	transform(value: Aluno[], termoPesquisado: string): Aluno[] {
		if (!value || !termoPesquisado) {
			return value;
		}

		return value.filter((aluno) =>
			aluno.nome.includes(termoPesquisado.toLowerCase()),
		);
	}
}
// TODO: Prosseguir com correção desse erro, nota1/2 não esta declarados. instalação de pacotes do projeto
