import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

let clientescadastrados: Cliente[] = [
  new Cliente("João", "Jonh", new CPF("22222222222", new Date()), new RG("222222222", new Date()), "Masculino", new Telefone("11", "111111111")),
  new Cliente("Maria", "Mary", new CPF("33333333333", new Date()), new RG("333333333", new Date()), "Feminino", new Telefone("22", "222222222")),
  new Cliente("Pedro", "Pedro", new CPF("44444444444", new Date()), new RG("444444444", new Date()), "Masculino",  new Telefone("33", "333333333")),
  new Cliente("Ana", "Aninha", new CPF("55555555555", new Date()), new RG("555555555", new Date()), "Feminino", new Telefone("44", "444444444")),
  new Cliente("Paula", "Paula", new CPF("66666666666", new Date()), new RG("666666666", new Date()), "Feminino", new Telefone("55", "555555555")),
  new Cliente("Carla", "Carla", new CPF("77777777777", new Date()), new RG("777777777", new Date()), "Feminino", new Telefone("66", "666666666")),
  new Cliente("Lucas", "Lucas", new CPF("88888888888", new Date()), new RG("888888888", new Date()), "Masculino", new Telefone("77", "777777777")),
  new Cliente("Joaquim", "Joaquim", new CPF("99999999999", new Date()), new RG("999999999", new Date()), "Masculino", new Telefone("88", "888888888")),
  new Cliente("Bruna", "Bruna", new CPF("10101010101", new Date()), new RG("101010101", new Date()), "Feminino", new Telefone("99", "999999999")),
  new Cliente("Gustavo", "Gustavo", new CPF("12121212121", new Date()), new RG("121212121", new Date()), "Masculino", new Telefone("10", "101010101")),
  new Cliente("Guilherme", "Guilherme", new CPF("13131313131", new Date()), new RG("131313131", new Date()), "Masculino",  new Telefone("11", "111111111")),
  new Cliente("Rafaela", "Rafaela", new CPF("14141414141", new Date()), new RG("141414141", new Date()), "Feminino", new Telefone("12", "121212121")),
  new Cliente("Vitor", "Vitor", new CPF("15151515151", new Date()), new RG("151515151", new Date()), "Masculino", new Telefone("13", "131313131")),
  new Cliente("Felipe", "Felipe", new CPF("16161616161", new Date()), new RG("161616161", new Date()), "Masculino", new Telefone("14", "141414141")),
  new Cliente("Gabriela", "Gabriela", new CPF("17171717171", new Date()), new RG("171717171", new Date()), "Feminino", new Telefone("15", "151515151")),
  new Cliente("Thiago", "Thiago", new CPF("18181818181", new Date()), new RG("181818181", new Date()), "Masculino", new Telefone("16", "161616161")),
  new Cliente("Fabiola", "Fabi", new CPF("19191919191", new Date()), new RG("191919191", new Date()), "Feminino", new Telefone("17", "171717171")),
  new Cliente("Fernanda", "Fer", new CPF("20202020220", new Date()), new RG("202020202", new Date()), "Feminino", new Telefone("18", "181818181")),
  new Cliente("Gabriele", "Gabriele", new CPF("21212121221", new Date()), new RG("212121212", new Date()), "Feminino", new Telefone("19", "191919191")),
  new Cliente("Tadeu", "Tadeu", new CPF("23232323232", new Date()), new RG("232323232", new Date()), "Masculino", new Telefone("20", "202020202")),
  new Cliente("Guilhermina", "Guiga", new CPF("24242424242", new Date()), new RG("242424242", new Date()), "Feminino", new Telefone("21", "212121212")),
  new Cliente("Fabiana", "Bibi", new CPF("25252525252", new Date()), new RG("252525252", new Date()), "Feminino", new Telefone("22", "222222222")),
  new Cliente("Gustavo", "Gabriel", new CPF("26262626262", new Date ()), new RG("262626262", new Date()), "Masculino", new Telefone("23", "232323232")),
  new Cliente("Diego", "Di", new CPF("27272727272", new Date()), new RG("272727272", new Date()), "Masculino", new Telefone("24", "242424242")),
  new Cliente("Beatriz", "Bia", new CPF("28282828282", new Date()), new RG("282828282", new Date()), "Feminino", new Telefone("25", "252525252")),
  new Cliente("Isabela", "Isa", new CPF("29292929292", new Date()), new RG("292929292", new Date()), "Feminino", new Telefone("26", "262626262")),
  new Cliente("Graziela", "Grazi", new CPF("30303030330", new Date()), new RG("303030303", new Date()), "Feminino", new Telefone("27", "272727272")),
  new Cliente("Maria Fernanda", "MaFe", new CPF("31313131313", new Date()), new RG("313131313", new Date()), "Feminino", new Telefone("28", "282828282")),
  new Cliente("Giovana", "Gigi", new CPF("32323232323", new Date()), new RG("323232323", new Date()), "Feminino", new Telefone("29", "292929292")),
  new Cliente("Henrique", "Hen", new CPF("33333333335", new Date()), new RG("333333333", new Date()), "Masculino", new Telefone("30", "303030303")),
  new Cliente("Fabio", "Fab", new CPF("34343434343", new Date()), new RG("343434343", new Date()), "Masculino", new Telefone("31", "313131313")),
];

export { clientescadastrados };

