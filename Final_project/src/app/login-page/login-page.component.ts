import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  @ViewChild('login', {static: false}) login;
  @ViewChild('passwd', {static: false}) passwd;
  @ViewChild('passwdInput', {static: false}) passwdInput;
  @ViewChild('loginInput', {static: false}) loginInput;
  @ViewChild('eye', {static: false}) eye;

  @HostListener('document:mousedown', ['$event']) click(event: MouseEvent): void{
    if ((event.target !== this.login.nativeElement) &&
      (event.target !== this.eye.nativeElement) &&
      (event.target !== this.passwd.nativeElement) &&
      (event.target !== this.passwdInput.nativeElement) &&
      (event.target !== this.loginInput.nativeElement)) {
      this.login.nativeElement.classList.remove('active');
      this.passwd.nativeElement.classList.remove('active');
    }
  }

  toggleEye(): void{
    this.eye.nativeElement.classList.toggle('look');
    (this.passwdInput.nativeElement.type === 'password') ?
      this.passwdInput.nativeElement.type = 'text' :
      this.passwdInput.nativeElement.type = 'password';
  }

  focusElem(event): void{
    if (event.path[1].classList.contains('entry__login')){
      this.login.nativeElement.classList.add('active');
      this.passwd.nativeElement.classList.remove('active');
    } else{
      this.passwd.nativeElement.classList.add('active');
      this.login.nativeElement.classList.remove('active');
    }
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  submit(): void{
    this.auth.formData = {...this.form.value};
    this.auth.login();
    this.router.navigate(['/main/task_one']);
  }
}
