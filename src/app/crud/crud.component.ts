import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import type { Aluno } from '../models/Aluno';
import type { MediaAlunoPipe } from '../pipes/media-aluno.pipe';
import { AlunosService } from '../server/alunos.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AlunosService],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  alunos: Aluno[] = [];
  caracteres: [MediaAlunoPipe];
  btnOperacao = true;

  aluno = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nota1: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(10),
    ]),
    nota2: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(10),
    ]),
  });

  constructor(private alunosService: AlunosService) {}

  // inicialização do componente
  ngOnInit() {
    this.selecionar();
  }

  // Metodo para selecionar todos os produtos
  // Metodo para selecionar todos os produtos
  selecionar() {
    this.alunosService.selecionar().subscribe((retorno) => {
      this.alunos = retorno;
    });
  }

  // Metodo para selecionar um produto especifico
  selecionarProduto(indice: number) {
    this.aluno.setValue({
      nome: this.alunos[indice].nome,
      nota1: this.alunos[indice].nota1,
      nota2: this.alunos[indice].nota2,
    });
    this.btnOperacao = false;
  }

  cadastrar() {
    const posicaoNomeExistente = this.alunos.findIndex((obj) => {
      return obj.nome === this.aluno.value.nome;
    });
    if (posicaoNomeExistente !== -1) {
      alert('O produto ja existe');
    } else {
      const novoAluno: Aluno = {
        nome: this.aluno.value.nome,
        nota1: this.aluno.value.nota1,
        nota2: this.aluno.value.nota2,
        media: (this.aluno.value.nota1 + this.aluno.value.nota2) / 2,
      };
      this.alunosService.cadastrar(novoAluno).subscribe((retorno) => {
        this.alunos.push(retorno);
        this.aluno.reset();
      });
    }
  }
}
