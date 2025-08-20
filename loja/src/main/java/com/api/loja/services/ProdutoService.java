package com.api.loja.services;

import com.api.loja.dtos.ProdutoDto;
import com.api.loja.models.ProdutoModel;
import com.api.loja.repositorys.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    private ProdutoRepository produtoRepository;
    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public ProdutoModel create(ProdutoDto produto) {
        ProdutoModel produtoModel = new ProdutoModel();
        produtoModel.setNome(produto.getNome());
        produtoModel.setDescricao(produto.getDescricao());
        produtoModel.setPreco(produto.getPreco());
        produtoModel.setQuantidade(produto.getQuantidade());
        return produtoRepository.save(produtoModel);
    }

    public List<ProdutoModel> findAll() {
        return produtoRepository.findAll();
    }

    public ProdutoModel editar (ProdutoDto produto) {


    }
}
