import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RedeMt } from './models/RedeMt';
import { Subestacao } from "./models/Subestacao.1";
import { SubestacaoService } from './service/subestacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  subestacao = {} as Subestacao;

  subestacoes: Subestacao[];

  redesMt: RedeMt[];

  redeMt = {} as RedeMt;
  
  constructor(private subestacaoService: SubestacaoService ){}
  
 
  ngOnInit(): void {
    this.getSubestacao();
  }
  

  saveSubestacao(form: NgForm){
    if(this.subestacao.idSubestacao !== undefined){
      this.subestacaoService.updateSubestacao(this.subestacao).subscribe(() =>{
        this.cleanForm(form);
      });
    }else{
      this.subestacaoService.saveSubestacao(this.subestacao).subscribe(() => {
        this.cleanForm(form);
      })
    }
  }

  getSubestacao(){
    this.subestacaoService.getSubestacao().subscribe((subestacoes: Subestacao[]) => {
      this.subestacoes = subestacoes;
      this.redeMt = this.redeMt;
    });
  }

  deleteSubestacao(subestacao: Subestacao){
    this.subestacaoService.deleteSubestacao(subestacao).subscribe(() => {
      this.getSubestacao();
    });

  }

  editSubestacao(subestacao: Subestacao){
    this.subestacao = { ...subestacao};
  }

  cleanForm(form: NgForm) {
    this.getSubestacao();
    form.resetForm();
    this.subestacao = {} as Subestacao;
  }

}
