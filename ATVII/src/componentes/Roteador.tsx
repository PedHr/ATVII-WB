import { Component } from "react";
import BarraNavegacao from "./BarraNavegacao";
import ListaCliente from "./ListaCliente";
import FormularioCadastroCliente from "./FormularioCadastroCliente";
import ListaProduto from "./ListaProduto";
import FormularioCadastroProduto from "./FormularioCadastroProduto";
import ListaServico from "./ListaServico";
import FormularioCadastroServico from "./FormularioCadastroServico";
import Listagens from "./Listagens";

import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import CPF from "../modelo/cpf";

type State = {
    tela: string,
    clientes: Cliente[],
    produtos: Produto[],
    servicos: Servico[]
}

export default class Roteador extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tela: 'Clientes',
            clientes: [],
            produtos: [],
            servicos: []
        };
        this.selecionarView = this.selecionarView.bind(this);
        this.popularDados = this.popularDados.bind(this);
    }

    componentDidMount() {
        this.popularDados();
    }

    popularDados() {
        const clientes: Cliente[] = [];
        const produtos: Produto[] = [];
        const servicos: Servico[] = [];

        // Clientes
        const nomes = ["Ana", "Bruno"];
        const generos = ["F", "M"];
        for (let i = 0; i < 2; i++) {
            const cpf = new CPF(`${i + 1}`.padStart(11, '0'), new Date(2000, i % 12, (i % 28) + 1));
            const cliente = new Cliente(nomes[i], `Social ${nomes[i]}`, generos[i], cpf);
            clientes.push(cliente);
        }

        // Produtos
        const nomesProdutos = ["Esmalte", "Shampoo"];
        for (let i = 0; i < 2; i++) {
            const preco = parseFloat((10 + Math.random() * 50).toFixed(2));
            produtos.push(new Produto(nomesProdutos[i], preco));
        }

        // Serviços
        const nomesServicos = ["Manicure", "Pedicure"];
        for (let i = 0; i < 2; i++) {
            const preco = parseFloat((30 + Math.random() * 100).toFixed(2));
            servicos.push(new Servico(nomesServicos[i], preco));
        }

        // Consumos Aleatórios
        for (const cliente of clientes) {
            let numConsumos = Math.floor(Math.random() * 5) + 1;
            for (let i = 0; i < numConsumos; i++) {
                if (Math.random() > 0.4) {
                    cliente.consumirProduto(produtos[Math.floor(Math.random() * produtos.length)]);
                } else {
                    cliente.consumirServico(servicos[Math.floor(Math.random() * servicos.length)]);
                }
            }
        }
        
        this.setState({ clientes, produtos, servicos });
    }

    selecionarView(novaTela: string, evento: React.MouseEvent) {
        evento.preventDefault();
        this.setState({
            tela: novaTela
        });
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens']} />;
        
        switch (this.state.tela) {
            case 'Cadastrar Cliente':
            case 'Editar Cliente':
                 return <>{barraNavegacao}<FormularioCadastroCliente seletorView={this.selecionarView} /></>;
            case 'Produtos':
                 return <>{barraNavegacao}<ListaProduto produtos={this.state.produtos} seletorView={this.selecionarView} /></>;
            case 'Cadastrar Produto':
            case 'Editar Produto':
                 return <>{barraNavegacao}<FormularioCadastroProduto seletorView={this.selecionarView} /></>;
            case 'Serviços':
                return <>{barraNavegacao}<ListaServico servicos={this.state.servicos} seletorView={this.selecionarView} /></>;
            case 'Cadastrar Serviço':
            case 'Editar Serviço':
                return <>{barraNavegacao}<FormularioCadastroServico seletorView={this.selecionarView} /></>;
            case 'Listagens':
                return <>{barraNavegacao}<Listagens clientes={this.state.clientes} /></>;
            default: // Clientes
                return <>{barraNavegacao}<ListaCliente clientes={this.state.clientes} seletorView={this.selecionarView} /></>;
        }
    }
}