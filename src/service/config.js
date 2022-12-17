import axios from 'axios';

export const http = axios.create({
  baseURL: "https://8080-borgarelli-provaspringv-b21dwbezjlp.ws-us79.gitpod.io", //Não esquecer de alterar o link dentro da pasta Service tbm
});