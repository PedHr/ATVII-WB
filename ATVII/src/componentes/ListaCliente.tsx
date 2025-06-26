import Cliente from "../modelo/cliente";

type Props = {
    clientes: Cliente[],
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ListaCliente(props: Props) {
    return (
        <div className="container-fluid">
            <h4 className="my-4">Lista de Clientes</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="table-dark">
                        <th>Nome</th>
                        <th>Nome Social</th>
                        <th>Gênero</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.clientes.map((cliente: Cliente, index: number) => (
                        <tr key={index}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.nomeSocial}</td>
                            <td>{cliente.genero}</td>
                            <td>{cliente.getCpf.getValor}</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2" onClick={(e) => props.seletorView('Editar Cliente', e)}>Editar</button>
                                <button className="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
             <button className="btn btn-success" onClick={(e) => props.seletorView('Cadastrar Cliente', e)}>Cadastrar Novo Cliente</button>
        </div>
    )
}