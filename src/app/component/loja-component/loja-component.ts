
import { FormsModule } from '@angular/forms';
import { LojaModel } from '../../models/lojaModel';
import { LojaService } from '../../services/loja-service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-loja-component',
  imports: [FormsModule],
  templateUrl: './loja-component.html',
  styleUrl: './loja-component.css'
})
export class LojaComponent {

  private service = inject(LojaService);
  
  lojas : LojaModel[]=[];
  novoNome ='';
  novoCnpj ='';
  novoEndereco ='';
  novoTelefone ='';

  ngOnInit(): void {
    this.carregar();

  }

  carregar(){
    this.lojas = this.service.listar()
  }

  adicionar(){
    const nome =  this.novoNome.trim();
    const cnpj = this.novoCnpj;
    const endereco = this.novoEndereco.trim();
    const telefone = this.novoTelefone.trim();

    if (!nome) return;
    this.service.adicionar(nome,cnpj,telefone,endereco);
    this.novoNome='';
    this.novoCnpj='';
    this.novoEndereco='';
    this.novoTelefone='';
    this.carregar();
  }

  remover(id:number){
    this.service.remover(id);
    this.carregar();
  }

  editar(id:number){
    const idLoja = this.lojas.findIndex(loja => loja.id === id);

    if (idLoja !== -1) {
      document.getElementById('nome')
    } else {
      console.warn('Nenhuma loja encontrada com esse ID');
    } 
    this.carregar();
  }
}
