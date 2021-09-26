import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from './register.model';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {

  }

  registerUser(registerModel: RegisterModel) {
    return this.http.post('user/register', registerModel);
  }
}
