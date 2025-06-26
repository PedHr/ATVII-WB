import Cliente from "../modelo/cliente";

type Props = {
    clientes: Cliente[];
};

export default function Listagens(props: Props) {
    const top10MaisConsumo = [...props.clientes]
        .sort((a, b) => (b.getProdutosConsumidos.length + b.getServicosConsumidos.length) - (a.getProdutosConsumidos.length + a.getServicosConsumidos.length))
        .slice(0, 10);

    const top10MenosConsumo = [...props.clientes]
        .sort((a, b) => (a.getProdutosConsumidos.length + a.getServicosConsumidos.length) - (b.getProdutosConsumidos.length + b.getServicosConsumidos.length))
        .slice(0, 10);
    
    const top5Valor = [...props.clientes].map(cliente => {
        const valorProdutos = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0);
        const valorServicos = cliente.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);
        return {
            nome: cliente.nome,
            valor: valorProdutos + valorServicos
        };
    }).sort((a, b) => b.valor - a.valor).slice(0, 5);


    return (
        <div className="container-fluid">
            <h4 className="my-4">Relatórios e Listagens</h4>

            <div className="row">
                <div className="col-md-6">
                    <h5>Top 10 Clientes que Mais Consumiram (Quantidade)</h5>
                    <ul className="list-group">
                        {top10MaisConsumo.map((cliente, index) => (
                             <li key={index} className="list-group-item">{cliente.nome} - {cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length} itens</li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-6">
                    <h5>Top 10 Clientes que Menos Consumiram (Quantidade)</h5>
                     <ul className="list-group">
                        {top10MenosConsumo.map((cliente, index) => (
                             <li key={index} className="list-group-item">{cliente.nome} - {cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length} itens</li>
                        ))}
                    </ul>
                </div>
            </div>

             <div className="row mt-4">
                <div className="col-md-6">
                    <h5>Top 5 Clientes que Mais Consumiram (Valor)</h5>
                     <ul className="list-group">
                        {top5Valor.map((cliente, index) => (
                             <li key={index} className="list-group-item">{cliente.nome} - R$ {cliente.valor.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}