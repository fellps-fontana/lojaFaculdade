import { Injectable } from '@angular/core';
import { LojaModel } from '../models/lojaModel';


@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private lojas : LojaModel[]=[];
  private nextId = 4;
  listar() : LojaModel[]{
    return [...this.lojas]
  }

  adicionar(nome:string, cnpj:string, telefone:string,endereco:string):LojaModel {
    const novo : LojaModel = {id: this.nextId++,nome,cnpj,telefone,endereco};
    this.lojas.push(novo);
    return novo;
      
  }

  remover(id:number):void{
    this.lojas= this.lojas.filter(p=>p.id !== id);
  }

  editar(id:number, nome :string):void{
    const indice = this.lojas.findIndex(loja => loja.id === id);
    this.lojas[indice].nome=nome;


  }


}
