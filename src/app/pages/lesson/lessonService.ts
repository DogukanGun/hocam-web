import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LessonService {
  constructor(private httpClient: HttpClient) { }

  getLessons(): Observable<any> {
    return this.httpClient.get('campaign');
  }
}