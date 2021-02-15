import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstantes } from '../app-constantes';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  login(usuario) {
    //console.info( usuario);//está sem aspas
    //console.info( JSON.stringify(usuario));//está com aspas
    //console.info('User ' + usuario.login);//testando imprimindo login
    return this.http.post(AppConstantes.baseLogin, JSON.stringify(usuario))//retorna usuario em json
    .subscribe(data =>{console.info(JSON.parse(JSON.stringify(data)))})//vendo o resultado do login no console
  }

}
