import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hocam';

  timeout: any;
  constructor(private router: Router, private spinner: NgxSpinnerService) {
    router.events.subscribe(event => {
      console.log(event);
      if (event instanceof NavigationStart) {
        return;
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Hide loading indicator
        this.timeout = setTimeout(() => {
          clearTimeout(this.timeout);
        }, 500);
      }

    });
  }
}
