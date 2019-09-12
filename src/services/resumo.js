import { URL_API } from "./base";

export function consultarResumo(){
  return fetch(`$/resumo`).then(resultado => resultado.json());
}