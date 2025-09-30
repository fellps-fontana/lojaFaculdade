import { Component, OnInit, inject } from '@angular/core';
import { ProdutoService } from '../../services/produto-service';
import { ProdutoModel } from '../../models/produtoModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css'
})
export class ProdutoComponent implements OnInit {

  private service  = inject(ProdutoService);
  

  produtos : ProdutoModel[]=[];
  novoNome ='';
  novaDescricao ='';
  novoPreco ='';
  loading = false;
  erro ='';
  boa='';
  ngOnInit(): void {
    this.carregar();

  }

  carregar(){
    this.loading = true;
    this.service.listar()
    //faz a inscrição para reagir adaddddd
        .subscribe({
          next: item => {
            this.produtos  = item;
            this.loading = false;
          }, error:e => {
            this.erro = e.message;
            this.loading=false ;
          }
        })

  }

  adicionar(){
    this.erro='';
    const precoNum =Number(this.novoPreco)
    if (!this.novoNome.trim()){
      this.erro='Informe o  nome';
      return;  
    }
    if (!this.novaDescricao.trim()){
      this.erro='Informe a descricao';
      return;  
    }

    if (Number.isNaN(precoNum)||precoNum <= 0){
      this.erro = 'Preço invalido carai';
      return;
      
    }

    const payload :ProdutoModel={
      id:'',
      nome:this.novoNome,
      descricao:this.novaDescricao,
      preco:precoNum
        }

      this.loading=true;
      this.service.adicionar(payload).subscribe({
        next:(p) => {
          this.boa = `Produto ${p.nome} essa caralha salvou`
          this.loading=false;
          this.novoNome='';
          this.novaDescricao='';
          this.novoPreco='';
          this.carregar();

          setTimeout(() =>this.boa='',3000)
        },

        error:(e) => {
          this.erro= e.message ||'Falha ao salvaro produto '
        }
      })
  }



  remover(id:string){
    this.service.remover(id).subscribe({
      next: (msg:string) => {
        this.boa=msg|| "Produto apagado";
        this.carregar();
        setTimeout(() =>this.boa='',3000)
      },
      error: e => {
        this.erro = e.message|| "fudeuu"
      }
    })

  }


}
