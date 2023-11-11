import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Telefone from "../../modelo/telefone";

let clientescadastrados: Cliente[] = [
  new Cliente("João", "Jonh", new CPF("22222222222", new Date()), "Masculino", new Telefone("11", "111111111")),
  new Cliente("Maria", "Mary", new CPF("33333333333", new Date()), "Feminino", new Telefone("22", "222222222")),
  new Cliente("Pedro", "Pedro", new CPF("44444444444", new Date()), "Masculino",  new Telefone("33", "333333333")),
  new Cliente("Ana", "Aninha", new CPF("55555555555", new Date()), "Feminino", new Telefone("44", "444444444")),
  new Cliente("Paulo", "Paula", new CPF("66666666666", new Date()), "Masculino", new Telefone("55", "555555555")),
  new Cliente("Carlos", "Carlos", new CPF("77777777777", new Date()), "Masculino", new Telefone("66", "666666666")),
  new Cliente("Lucas", "Lucas", new CPF("88888888888", new Date()), "Masculino", new Telefone("77", "777777777")),
  new Cliente("Joaquim", "Joaquim", new CPF("99999999999", new Date()), "Masculino", new Telefone("88", "888888888")),
  new Cliente("Bruno", "Bruno", new CPF("10101010101", new Date()), "Masculino", new Telefone("99", "999999999")),
  new Cliente("Gustavo", "Gustavo", new CPF("12121212121", new Date()), "Masculino", new Telefone("10", "101010101")),
  new Cliente("Guilherme", "Guilherme", new CPF("13131313131", new Date()), "Masculino",  new Telefone("11", "111111111")),
  new Cliente("Rafael", "Rafael", new CPF("14141414141", new Date()), "Masculino", new Telefone("12", "121212121")),
  new Cliente("Vitor", "Vitor", new CPF("15151515151", new Date()), "Masculino", new Telefone("13", "131313131")),
  new Cliente("Felipe", "Felipe", new CPF("16161616161", new Date()), "Masculino", new Telefone("14", "141414141")),
  new Cliente("Gabriel", "Gabriel", new CPF("17171717171", new Date()), "Masculino", new Telefone("15", "151515151")),
  new Cliente("Thiago", "Thiago", new CPF("18181818181", new Date()), "Masculino", new Telefone("16", "161616161")),
  new Cliente("Guilherme", "Guilherme", new CPF("19191919191", new Date()), "Masculino", new Telefone("17", "171717171")),
  new Cliente("Felipe", "Felipe", new CPF("20202020220", new Date()), "Masculino", new Telefone("18", "181818181")),
  new Cliente("Gabriel", "Gabriel", new CPF("21212121221", new Date()), "Masculino", new Telefone("19", "191919191")),
  new Cliente("Thiago", "Thiago", new CPF("23232323232", new Date()), "Masculino", new Telefone("20", "202020202")),
  new Cliente("Guilherme", "Guilherme", new CPF("24242424242", new Date()), "Masculino", new Telefone("21", "212121212")),
  new Cliente("Felipe", "Felipe", new CPF("25252525252", new Date()), "Masculino", new Telefone("22", "222222222")),
  new Cliente("Gabriel", "Gabriel", new CPF("26262626262", new Date()), "Masculino", new Telefone("23", "232323232")),
  new Cliente("Thiago", "Thiago", new CPF("27272727272", new Date()), "Masculino", new Telefone("24", "242424242")),
  new Cliente("Guilherme", "Guilherme", new CPF("28282828282", new Date()), "Masculino", new Telefone("25", "252525252")),
  new Cliente("Felipe", "Felipe", new CPF("29292929292", new Date()), "Masculino", new Telefone("26", "262626262")),
  new Cliente("Gabriela", "Gabi", new CPF("30303030330", new Date()), "Feminino", new Telefone("27", "272727272")),
  new Cliente("Fernando", "Fer", new CPF("31313131313", new Date()), "Masculino", new Telefone("28", "282828282")),
  new Cliente("Gustavo", "Gus", new CPF("32323232323", new Date()), "Masculino", new Telefone("29", "292929292")),
  new Cliente("Henrique", "Hen", new CPF("33333333335", new Date()), "Masculino", new Telefone("30", "303030303")),
  new Cliente("Fabio", "Fab", new CPF("34343434343", new Date()), "Masculino", new Telefone("31", "313131313")),
];

export { clientescadastrados };

