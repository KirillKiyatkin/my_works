import {Injectable} from '@angular/core';

interface LoginData {
  login: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private loginData: LoginData[] = [
    {
      login: 'admin',
      password: 'admin'
    },
    {
      login: 'root',
      password: '0000'
    }
  ];
  private isAuth = false;
  public formData: LoginData;

  login(): void{
    for (let i = 0; i <= this.loginData.length - 1; i++){
      if (this.loginData[i].login === this.formData.login && this.loginData[i].password === this.formData.password){
        this.isAuth = true;
        break;
      } else {
        this.isAuth = false;
      }
    }
  }

  logout(): void{
    this.isAuth = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>(resolve => resolve(this.isAuth));
  }
}
