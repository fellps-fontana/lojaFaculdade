package com.api.loja.repositorys;

import com.api.loja.models.ProdutoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProdutoRepository extends JpaRepository<ProdutoModel, UUID> {
}
