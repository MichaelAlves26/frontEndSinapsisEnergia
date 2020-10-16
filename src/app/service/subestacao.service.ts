import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Subestacao } from "../models/Subestacao.1";
import { retry, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SubestacaoService{

    url = 'http://localhost:1234/subestacao';

    constructor(private httpClient: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({'content-type': 'application/json'})
    }

    getSubestacao(): Observable<Subestacao[]>{
        return this.httpClient.get<Subestacao[]>(this.url)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }
    
    getSubestacaoById(idSubestacao: number): Observable<Subestacao> {
        return this.httpClient.get<Subestacao>(this.url + '/' + idSubestacao)
            .pipe( 
                retry(2),
                catchError(this.handleError)
            )
    }

    saveSubestacao(subestacao: Subestacao): Observable<Subestacao>{
        return this.httpClient.post<Subestacao>(this.url + '/salvar', JSON.stringify(subestacao), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    updateSubestacao(subestacao: Subestacao): Observable<Subestacao>{
        return this.httpClient.put<Subestacao>(this.url + '/alterar/' , JSON.stringify(subestacao), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

   
    deleteSubestacao(subestaco: Subestacao){
        return this.httpClient.delete<Subestacao>(this.url + '/deletar/' + subestaco.idSubestacao, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }






    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro ocorreu no lado do client
          errorMessage = error.error.message;
        } else {
          // Erro ocorreu no lado do servidor
          errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      };
}