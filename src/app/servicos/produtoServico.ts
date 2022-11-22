import { Produto } from "../models/produto";

export class ProdutoServico {

    static buscaProdutoPorId(idProduto: Number): Produto {
        let produto: Produto = {} as Produto

        for (let i = 0; i < ProdutoServico.produtos.length; i++) {
            let produtoDb = ProdutoServico.produtos[i]
            if (produtoDb.idProduto == idProduto) {
                produto = produtoDb
                break
            }
        }

        return produto;
    }

    private static produtos: Produto[] = [{
        idProduto: 1,
        nome: "Produto 1",
        descricao: "Este produto é top",
        preco: 213.22,
    }]

    public static buscaProdutos(): Produto[] {
        return ProdutoServico.produtos
    }

    public static adicionaProduto(produto: Produto): void {
        produto.idProduto = ProdutoServico.buscaProdutos().length + 1
        ProdutoServico.produtos.push(produto)
    }

    public static alteraProduto(produto: Produto): void {
        for (let i = 0; i < ProdutoServico.produtos.length; i++) {
            let produtoDb = ProdutoServico.produtos[i]
            if (produtoDb.idProduto == produto.idProduto) {
                produtoDb = {
                    ...produto
                }
                break
            }
        }
    }

    public static addCarrinho(produto: Produto): void {
        let listaNova = []
        for (let i = 0; i < ProdutoServico.produtos.length; i++) {
            let produtoDb = ProdutoServico.produtos[i]
            if (produtoDb.idProduto != produto.idProduto) {
                listaNova.push(produtoDb)
            }
        }

        ProdutoServico.produtos = listaNova
    }
}