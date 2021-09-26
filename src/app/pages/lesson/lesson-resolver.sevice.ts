import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LessonService } from './lessonService';

@Injectable({ providedIn: 'root' })
export class LessonResolver {
  constructor(private lessonService: LessonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.lessonService.getLessons();
  }
}