import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileResolver } from './pages/my/profile/profile-resolver.service';
import { ProfileComponent } from './pages/my/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './shared/error/error.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LessonActivateService } from './pages/lesson/lesson-active.service';
import { LessonResolver } from './pages/lesson/lesson-resolver.sevice';
import { LessonComponent } from './pages/lesson/lesson.component';
import { JoinLessonComponent } from './pages/lesson/join/join.component';
import { JoinLessonResolver } from './pages/lesson/join/join-resolver.service';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizActivateService } from './pages/quiz/quiz-active.service';
import { QuizResolver } from './pages/quiz/quiz-resolver.service';
import { JoinQuizComponent } from './pages/quiz/join/join.component';
import { JoinQuizResolver } from './pages/quiz/join/join-resolver.service';
import { HomeComponent } from './pages/home/home.component';
import { PlatformComponent } from './pages/platform/platform.component';
const routes: Routes =
  [
    {
      path: '',
      component: DefaultLayoutComponent,
      children: [
        {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
        },
        {
          path: 'profile',
          component: ProfileComponent,
          pathMatch: 'full',
          resolve: {
            preloadData: ProfileResolver
          }
        },
        {
          path: 'lesson',
          redirectTo: 'lesson/explore'
        },
        {
          path: 'lesson/explore',
          component: LessonComponent,
          pathMatch: 'full',
          canActivate: [LessonActivateService],
          resolve: {
            preloadData: LessonResolver
          }
        },
        {
          path: 'lesson/join',
          component: JoinLessonComponent,
          pathMatch: 'full',
          canActivate: [LessonActivateService],
          resolve: {
            preloadData: JoinLessonResolver
          }
        },
        {
          path: 'quiz',
          redirectTo: 'quiz/explore'
        },
        {
          path: 'quiz/explore',
          component: QuizComponent,
          pathMatch: 'full',
          canActivate: [QuizActivateService],
          resolve: {
            preloadData: QuizResolver
          }
        },
        {
          path: 'quiz/join',
          component: JoinQuizComponent,
          pathMatch: 'full',
          canActivate: [QuizActivateService],
          resolve: {
            preloadData: JoinQuizResolver
          }
        },
        {
          path: 'question',
          redirectTo: 'question/send'
        },
        {
          path: 'question/send',
          component: LessonComponent,
          pathMatch: 'full',
          canActivate: [LessonActivateService],
          resolve: {
            preloadData: LessonResolver
          }
        },
        {
          path: 'question/list',
          component: LessonComponent,
          pathMatch: 'full',
          canActivate: [LessonActivateService],
          resolve: {
            preloadData: LessonResolver
          }
        },
        {
          path: 'platform',
          redirectTo: 'platform/about'
        },
        {
          path: 'platform/about',
          component: PlatformComponent,
          pathMatch: 'full',
        },
        {
          path: 'login',
          component: LoginComponent,
          pathMatch: 'full'
        },
        {
          path: 'logout',
          component: LogoutComponent,
          pathMatch: 'full'
        },
        {
          path: 'register',
          component: RegisterComponent,
          pathMatch: 'full'
        },
        {
          path: '**',
          redirectTo: '404'
        }
      ]
    },
    {
      path: '404',
      component: NotFoundComponent,
      pathMatch: 'full'
    },
    {
      path: '500',
      component: ErrorComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '404'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
