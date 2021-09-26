import { Injectable } from '@angular/core';
import { UserService } from 'src/app/pages/my/profile/user.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private authService: AuthService, private userService: UserService) { }

  getMenuItems(): MenuItem[] {

    const menus: MenuItem[] = [];
    const isAuthenticated = this.authService.isAuthenticated();

    menus.push(
      {
        name: "Ana Sayfa",
        url: "/"
      },
      {
        name: "Derslere Gir",
        url: "/lesson/explore"
      },
      {
        name: "Sınav Çöz",
        url: "/quiz/explore"
      });

    if (isAuthenticated) {
      this.userService.getUser().subscribe(userInfo => {
        const name = userInfo.name + " " + userInfo.surname;
        menus.push(
          {
            name: name,
            url: "/profile",
            // childs: [
            //   {
            //     name: "Profilim",
            //     url: "/profile"
            //   },
            //   {
            //     name: "Çıkış Yap",
            //     url: "/logout"
            //   }
            // ]
          });
        return menus;
      }, error => {
        menus.push(
          {
            name: "Çıkış Yap",
            url: "/logout"
          });
        return menus;
      });
    } else {
      menus.push(
        {
          name: 'Giriş Yap',
          url: '/login',
        },
        {
          name: 'Kayıt Ol',
          url: '/register',
        });
    }

    return menus;
  }
}

export class MenuItem {
  url = "";
  name = "";
  childs?: MenuItem[] = []
}
