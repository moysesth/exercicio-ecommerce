import { Pedido } from "../models/pedido";

export class PedidoServico{

    static buscaPedidoPorId(id: Number): Pedido {
        let pedido:Pedido = {} as Pedido

        for(let i=0; i<PedidoServico.pedidos.length; i++){
            let pedidoDb = PedidoServico.pedidos[i]
            if(pedidoDb.id == id){
                pedido = pedidoDb
                break
            }
        }

        return pedido;
    }

    private static pedidos: Pedido[] = [{
        id: 100,
        idCliente: 1,
        itens: "Patinete",
        valorTotal: 500,
        dataDoPedido: new Date(),
    }]

    public static buscaPedidos():Pedido[]{
        return PedidoServico.pedidos
    }

    public static adicionaPedido(pedido:Pedido):void{
        pedido.id = PedidoServico.buscaPedidos().length + 1
        PedidoServico.pedidos.push(pedido)
    }

    public static alteraPedido(pedido:Pedido):void{
        for(let i=0; i<PedidoServico.pedidos.length; i++){
            let pedidoDb = PedidoServico.pedidos[i]
            if(pedidoDb.id == pedido.id){
                pedidoDb = {
                    ...pedido
                }
                break
            }
        }
    }

    public static excluirPedido(pedido:Pedido):void{
        let listaNova = []
        for(let i=0; i<PedidoServico.pedidos.length; i++){
            let pedidoDb = PedidoServico.pedidos[i]
            if(pedidoDb.id != pedido.id){
                listaNova.push(pedidoDb)
            }
        }

        PedidoServico.pedidos = listaNova
    }
}