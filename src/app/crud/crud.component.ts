import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aluno } from '../models/Aluno';
import { MediaAlunoPipe } from '../pipes/media-aluno.pipe';
import { AlunosService } from '../server/alunos.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  Aluno = new FormGroup({
    aluno: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nota1: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
    nota2: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)])
  })
  constructor(private alunosService: AlunosService) { }
  indice: number = -1;
  alunos: Aluno[] = [];
  buscarAluno: string = '';
  catacteres: [MediaAlunoPipe];
  btnOperacao: boolean = true;


  cadastrar() {
    this.alunos.push(this.Aluno.value as Aluno);
    this.Aluno.reset();
    console.table();
  }

}
