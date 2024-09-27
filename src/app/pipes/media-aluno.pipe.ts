import { Aluno } from './../models/Aluno';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mediaAluno',
  standalone: true
})
export class MediaAlunoPipe implements PipeTransform {
  transform(media: Aluno[], buscarAluno: string): Aluno[] {
    let mediaAluno = (media. + media.nota2) / 2;
    if (!media || !buscarAluno) {
      return mediaAluno;
    }
  }

}
// TODO: Prosseguir com correção desse erro, nota1/2 não esta declarados. instalação de pacotes do projeto