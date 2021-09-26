import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson/lesson.component';
import { QuizComponent } from './quiz/quiz.component';
import { JoinLessonComponent } from './lesson/join/join.component';
import { JoinQuizComponent } from './quiz/join/join.component';
import { PlatformComponent } from './platform/platform.component';


@NgModule({
  declarations: [
    LessonComponent,
    QuizComponent,
    JoinLessonComponent,
    JoinQuizComponent,
    PlatformComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
