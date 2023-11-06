import Cliente from '../modelo/cliente';
import Produto from '../modelo/produto';
import clientesCadastrados from './clientesCadastrados';
import produtosCadastrados from './produtosCadastrados';
import servicosCadastrados from './servicosCadastrados';

let compras = [
    { cliente: clientesCadastrados[0], produto: produtosCadastrados[0] },
    { cliente: clientesCadastrados[1], produto: produtosCadastrados[1] },
    { cliente: clientesCadastrados[2], produto: produtosCadastrados[2] },
    { cliente: clientesCadastrados[3], produto: produtosCadastrados[3] },
    { cliente: clientesCadastrados[4], produto: produtosCadastrados[4] },
    { cliente: clientesCadastrados[5], produto: produtosCadastrados[5] },
    { cliente: clientesCadastrados[6], produto: produtosCadastrados[6] },
    { cliente: clientesCadastrados[7], produto: produtosCadastrados[0] },
    { cliente: clientesCadastrados[8], produto: produtosCadastrados[1] },
    { cliente: clientesCadastrados[9], produto: produtosCadastrados[2] },
    { cliente: clientesCadastrados[10], produto: produtosCadastrados[3] },
    { cliente: clientesCadastrados[11], produto: produtosCadastrados[4] },
    { cliente: clientesCadastrados[12], produto: produtosCadastrados[5] },
    { cliente: clientesCadastrados[13], produto: produtosCadastrados[6] },
    { cliente: clientesCadastrados[14], produto: produtosCadastrados[0] },
    { cliente: clientesCadastrados[15], produto: produtosCadastrados[1] },
    { cliente: clientesCadastrados[16], produto: produtosCadastrados[2] },
    { cliente: clientesCadastrados[17], produto: produtosCadastrados[3] },
    { cliente: clientesCadastrados[8], produto: produtosCadastrados[4] },
    { cliente: clientesCadastrados[19], produto: produtosCadastrados[5] },
    { cliente: clientesCadastrados[20], produto: produtosCadastrados[6] },
    { cliente: clientesCadastrados[21], produto: produtosCadastrados[0] },
    { cliente: clientesCadastrados[22], produto: produtosCadastrados[1] },
    { cliente: clientesCadastrados[23], produto: produtosCadastrados[2] },
    { cliente: clientesCadastrados[25], produto: produtosCadastrados[3] },
    { cliente: clientesCadastrados[24], produto: produtosCadastrados[4] },
    { cliente: clientesCadastrados[26], produto: produtosCadastrados[5] },
    { cliente: clientesCadastrados[27], produto: produtosCadastrados[6] },
    { cliente: clientesCadastrados[28], produto: produtosCadastrados[1] },
    { cliente: clientesCadastrados[29], produto: produtosCadastrados[1] },
    { cliente: clientesCadastrados[30], produto: produtosCadastrados[1] },
    { cliente: clientesCadastrados[6], produto: produtosCadastrados[7] },
    { cliente: clientesCadastrados[6], produto: produtosCadastrados[8] },
    { cliente: clientesCadastrados[6], produto: produtosCadastrados[9] },
    { cliente: clientesCadastrados[0], produto: produtosCadastrados[10] },
    { cliente: clientesCadastrados[0], produto: produtosCadastrados[10] },
    { cliente: clientesCadastrados[1], produto: produtosCadastrados[11] },
    { cliente: clientesCadastrados[1], produto: produtosCadastrados[12] },
    { cliente: clientesCadastrados[7], produto: produtosCadastrados[13] },
    { cliente: clientesCadastrados[8], servico: servicosCadastrados[0] },
    { cliente: clientesCadastrados[9], servico: servicosCadastrados[1] },
    { cliente: clientesCadastrados[10], servico: servicosCadastrados[2] },

    
];


compras.forEach(compra => {
    if (compra.produto) {
        compra.cliente.comprarProduto(compra.produto);
    } else if (compra.servico) {
        compra.cliente.contratarServico(compra.servico);
    }
});

export default compras;