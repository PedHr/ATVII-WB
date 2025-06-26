type Props = {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function FormularioCadastroCliente(props: Props) {
    return (
        <div className="container-fluid">
            <h4 className="my-4">Cadastro de Cliente</h4>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" placeholder="Nome completo" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nome Social</label>
                    <input type="text" className="form-control" placeholder="Nome social" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gênero</label>
                    <select className="form-select">
                        <option>Selecione seu gênero</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">CPF</label>
                    <input type="text" className="form-control" placeholder="000.000.000-00" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Data de Emissão do CPF</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="button" onClick={(e) => props.seletorView('Clientes', e)}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}