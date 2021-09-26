import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getUser(): Observable<any> {
        return this.httpClient.get('user');
    }

    saveProfileInfo(userModel: any) {
        return this.httpClient.post('user/profile', userModel);
    }

    saveFinancialInfo(financial: any) {
        return this.httpClient.post('user/financial', financial);
    }

    saveSocialMediaInfo(socialMedia: any) {
        return this.httpClient.post('user/socialMedia', socialMedia);
    }

    saveAccountSettings(userModel: any) {
        return this.httpClient.post('user/account', userModel);
    }

    saveNotificationSettings(notificationSettings: any) {
        return this.httpClient.post('user/notification', notificationSettings);
    }

    changePassword(password: any) {
        return this.httpClient.post('password/change', password);
    }

    deleteUser() {
        return this.httpClient.delete('user');
    }

    getUserLoginStatus(): Observable<any> {
        return this.httpClient.get("auth/user/login-log");
    }

}