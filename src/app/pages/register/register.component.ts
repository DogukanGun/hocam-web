import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from './register.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService,
              private router: Router,
              private toastrService: ToastrService) { }

  registerModel: RegisterModel = new RegisterModel();
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.registerModel);
    this.registerService.registerUser(this.registerModel).subscribe(data => {
        this.submitted = false;
        this.toastrService.success('Kullanıcınız oluşturulmuştur.');
        const router = this.router;
        setTimeout(function () {
            router.navigate(['./login']);
        }, 1000);
    }, error => {
        this.submitted = false;
    });
  }

  ngOnInit(): void {
  }

}
