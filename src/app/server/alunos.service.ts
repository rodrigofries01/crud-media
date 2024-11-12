import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  url: string = 'http://localhost:3000/alunos';

  constructor(private readonly http: HttpClient) {}

  selecionar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.url);
  }

  cadastrar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.url, aluno);
  }

  alterar(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.url}/${aluno.id}`, aluno);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
