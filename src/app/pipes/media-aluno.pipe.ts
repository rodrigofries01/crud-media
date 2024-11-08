import type { Aluno } from './../models/Aluno';
import { Pipe, type PipeTransform } from '@angular/core';
@Pipe({
  name: 'mediaAluno',
  standalone: true,
})
export class MediaAlunoPipe implements PipeTransform {
  transform(media: any): number {
    return (media.nota1 + media.nota2) / 2;
  }
}
// TODO: Prosseguir com correção desse erro, nota1/2 não esta declarados. instalação de pacotes do projeto
