import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dogukan: boolean = false
  userModel: any = {};
  userLogins: any[] = [];
  confirmNewPassword: string = "";
  passwordChange: any = {};

  constructor(private toastrService: ToastrService,
    private userService: UserService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      const resolvedData = data["preloadData"]
      this.userModel = resolvedData.user
      this.userLogins = resolvedData.logins.slice(0, 5)
    })
    // this.userService.getUser().subscribe(result => {
    //   this.userModel = result;
    //   // if (this.userModel.notification == null) {
    //   //   var notification: any = {};
    //   //   notification.mailNotification = false;
    //   //   notification.smsNotification = false;
    //   //   notification.promotionNotification = false;
    //   //   notification.newsNotification = false;
    //   //   this.userModel.notification = notification;
    //   // }
    // });
  }

  saveProfile() {
    this.userService.saveProfileInfo(this.userModel).subscribe(result => {
      this.toastrService.success("Profil bilgileriniz kaydedildi.");
    });
  }

  changePassword() {
    if (this.passwordChange.newPassword == this.confirmNewPassword) {
      this.userService.changePassword(this.passwordChange).subscribe(result => {
        if (result) {
          this.toastrService.success("Şifreniz başarıyla değiştirilmiştir.");
        }
      });
    } else {
      this.toastrService.warning("Yeni şifrenizi doğru girdiğinizden emin olunuz.");
    }
  }

  deleteAccount() {
    this.userService.deleteUser().subscribe(result => {
      if (result) {
        this.route.navigate(['/logout']);
      } else {
        this.toastrService.warning("Kullanıcı silinemedi. Tekrar deneyiniz!");
      }
    });
  }

  switchChange(switchButtonName: any) {
    switch (switchButtonName) {
      case "hideProfileInformation":
        this.userModel.hideProfileInformation = !this.userModel.hideProfileInformation;
        break;
      case "showListOfInvestors":
        this.userModel.showListOfInvestors = !this.userModel.showListOfInvestors;
        break;
      case "mailNotification":
        this.userModel.notification.mailNotification = !this.userModel.notification.mailNotification;
        break;
      case "smsNotification":
        this.userModel.notification.smsNotification = !this.userModel.notification.smsNotification;
        break;
      case "promotionNotification":
        this.userModel.notification.promotionNotification = !this.userModel.notification.promotionNotification;
        break;
      case "newsNotification":
        this.userModel.notification.newsNotification = !this.userModel.notification.newsNotification;
        break;
      default:
        break;
    }
  }
  saveFinancial() {
    this.userService.saveFinancialInfo(this.userModel.financial).subscribe(result => {
      this.toastrService.success("Finansal bilgileriniz başarıyla kaydedilmiştir.");
    });
  }

  saveSocialMedia() {
    this.userService.saveSocialMediaInfo(this.userModel.social).subscribe(result => {
      this.toastrService.success("Sosyal medya bilgileriniz başarıyla kaydedilmiştir.");
    });
  }

  saveAccountSettings() {
    this.userService.saveAccountSettings(this.userModel).subscribe(result => {
      this.toastrService.success("Hesap ayarlarınız başarıyla kaydedilmiştir.");
    });
  }

  saveNotificationSettings() {
    this.userService.saveNotificationSettings(this.userModel.notification).subscribe(result => {
      this.toastrService.success("Bildirim ayarlarınız başarıyla kaydedilmiştir.");
    });
  }

}