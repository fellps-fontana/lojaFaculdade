package com.api.loja.controllers;

import com.api.loja.dtos.ProdutoDto;
import com.api.loja.models.ProdutoModel;
import com.api.loja.repositorys.ProdutoRepository;
import com.api.loja.services.ProdutoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping("/salvar")
    public ResponseEntity<?> salvar(@RequestBody @Valid ProdutoDto produtoDto) {
        ProdutoModel produtoSalvo = produtoService.create(produtoDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoSalvo);
    }

    @GetMapping("/listar")
    public List<ProdutoModel> listar() {
        return produtoService.findAll();
    }


    @PostMapping("/editar/{id}")
    public ResponseEntity<?> editar(@RequestBody @Valid ProdutoDto produtoDto) {
        ProdutoModel produtoSalvo = produtoService.create(produtoDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoSalvo);
    }


}
