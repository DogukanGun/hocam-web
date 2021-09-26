import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private httpClient: HttpClient) { }

  getQuizes(): Observable<any> {
    return this.httpClient.get('campaign');
  }
}