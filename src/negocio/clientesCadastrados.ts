import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";

const clientescadastrados = [
  new Cliente("João", "Jonh", new CPF("22222222222", new Date()), "Masculino"),
  new Cliente("Maria", "Mary", new CPF("33333333333", new Date()), "Feminino"),
  new Cliente("Pedro", "Pedro", new CPF("44444444444", new Date()), "Masculino"),
  new Cliente("Ana", "Aninha", new CPF("55555555555", new Date()), "Feminino"),
  new Cliente("Paulo", "Paula", new CPF("66666666666", new Date()), "Masculino"),
  new Cliente("Carlos", "Carlos", new CPF("77777777777", new Date()), "Masculino"),
  new Cliente("Lucas", "Lucas", new CPF("88888888888", new Date()), "Masculino"),
  new Cliente("Joaquim", "Joaquim", new CPF("99999999999", new Date()), "Masculino"),
  new Cliente("Bruno", "Bruno", new CPF("10101010101", new Date()), "Masculino"),
  new Cliente("Gustavo", "Gustavo", new CPF("12121212121", new Date()), "Masculino"),
  new Cliente("Guilherme", "Guilherme", new CPF("13131313131", new Date()), "Masculino"),
  new Cliente("Rafael", "Rafael", new CPF("14141414141", new Date()), "Masculino"),
  new Cliente("Vitor", "Vitor", new CPF("15151515151", new Date()), "Masculino"),
  new Cliente("Felipe", "Felipe", new CPF("16161616161", new Date()), "Masculino"),
  new Cliente("Gabriel", "Gabriel", new CPF("17171717171", new Date()), "Masculino"),
  new Cliente("Thiago", "Thiago", new CPF("18181818181", new Date()), "Masculino"),
  new Cliente("Guilherme", "Guilherme", new CPF("19191919191", new Date()), "Masculino"),
  new Cliente("Felipe", "Felipe", new CPF("20202020220", new Date()), "Masculino"),
  new Cliente("Gabriel", "Gabriel", new CPF("21212121221", new Date()), "Masculino"),
  new Cliente("Thiago", "Thiago", new CPF("23232323232", new Date()), "Masculino"),
  new Cliente("Guilherme", "Guilherme", new CPF("24242424242", new Date()), "Masculino"),
  new Cliente("Felipe", "Felipe", new CPF("25252525252", new Date()), "Masculino"),
  new Cliente("Gabriel", "Gabriel", new CPF("26262626262", new Date()), "Masculino"),
  new Cliente("Thiago", "Thiago", new CPF("27272727272", new Date()), "Masculino"),
  new Cliente("Guilherme", "Guilherme", new CPF("28282828282", new Date()), "Masculino"),
  new Cliente("Felipe", "Felipe", new CPF("29292929292", new Date()), "Masculino"),
  new Cliente("Gabriela", "Gabi", new CPF("30303030330", new Date()), "Feminino"),
  new Cliente("Fernando", "Fer", new CPF("31313131313", new Date()), "Masculino"),
  new Cliente("Gustavo", "Gus", new CPF("32323232323", new Date()), "Masculino"),
  new Cliente("Henrique", "Hen", new CPF("33333333335", new Date()), "Masculino"),
  new Cliente("Fabio", "Fab", new CPF("34343434343", new Date()), "Masculino"),
];

export default clientescadastrados;

// import Cliente from "../modelo/cliente";
// import CPF from "../modelo/cpf";

// let clientes: Cliente[] = []; 
// for (let i = 1; i <= 30; i++) {
//     let cpf = new CPF(`CPF ${i}`, new Date());
//     clientes.push(new Cliente(`Cliente ${i}`, `Nome Social ${i}`, cpf));
// }

// export default clientes;
