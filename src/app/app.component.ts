import { Component } from '@angular/core';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-REST';
  usuario = { login: '', senha: '' };

  constructor(private loginService: LoginServiceService) { }

  public funcao() {this.loginService.login(this.usuario); }
}
