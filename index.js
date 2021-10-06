import Aluno from "./model/Aluno.js";
import Professor from "./model/Professor.js";
import Disciplina from "./model/Disciplina.js";
import Opcoes, { idade, nome } from "./Opcoes.js";

console.log(idade, nome, Opcoes);

let a1 = new Aluno();
let p1 = new Professor();
let d1 = new Disciplina();

console.log(a1, p1, d1);