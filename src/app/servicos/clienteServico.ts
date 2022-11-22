import { Cliente } from "../models/cliente";

export class ClienteServico{

    static buscaClientePorId(idCliente: Number): Cliente {
        let cliente:Cliente = {} as Cliente

        for(let i=0; i<ClienteServico.clientes.length; i++){
            let clienteDb = ClienteServico.clientes[i]
            if(clienteDb.idCliente == idCliente){
                cliente = clienteDb
                break
            }
        }

        return cliente;
    }

    private static clientes: Cliente[] = [{
        idCliente: 1,
        nome: "Luana",
    }]

    public static buscaClientes():Cliente[]{
        return ClienteServico.clientes
    }

    public static adicionaCliente(cliente:Cliente):void{
        cliente.idCliente = ClienteServico.buscaClientes().length + 1
        ClienteServico.clientes.push(cliente)
    }

    public static alteraCliente(cliente:Cliente):void{
        for(let i=0; i<ClienteServico.clientes.length; i++){
            let clienteDb = ClienteServico.clientes[i]
            if(clienteDb.idCliente == cliente.idCliente){
                clienteDb = {
                    ...cliente
                }
                break
            }
        }
    }

    public static excluirCliente(cliente:Cliente):void{
        let listaNova = []
        for(let i=0; i<ClienteServico.clientes.length; i++){
            let clienteDb = ClienteServico.clientes[i]
            if(clienteDb.idCliente != cliente.idCliente){
                listaNova.push(clienteDb)
            }
        }

        ClienteServico.clientes = listaNova
    }
}