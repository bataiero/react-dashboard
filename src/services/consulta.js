import { URL_API } from "./base";

export function listarConsultas(callback){
 return fetch(`$/consultas`).then(resultado =>
  resultado.json());
}