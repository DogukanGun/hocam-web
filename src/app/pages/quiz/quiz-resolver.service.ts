import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { QuizService } from './quizService';
@Injectable({ providedIn: 'root' })
export class QuizResolver {
  constructor(private quizService: QuizService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.quizService.getQuizes();
  }
}