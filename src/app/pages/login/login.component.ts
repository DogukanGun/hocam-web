import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router) { }

  submitted: boolean = false;
  loginModel: LoginModel = new LoginModel();

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.loginModel.EmailAddress, this.loginModel.Password).subscribe(data => {
      this.submitted = false;
      this.authService.setAuthenticated(data);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      window.location.href = "/";
    }, error => {
      this.submitted = false;
    });
  }

}

class LoginModel {
  EmailAddress = "";
  Password = "";
}