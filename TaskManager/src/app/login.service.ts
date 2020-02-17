import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient: HttpClient;

  constructor(private httpBackend: HttpBackend) { }

  currentUserName: string = null;

  public Login(loginViewModel: LoginViewModel): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);

    return this.httpClient.post<any>("http://localhost:1762/authenticate", loginViewModel, { responseType: "json" })
      .pipe(map(
        (user) => {
          if (user) {
            this.currentUserName = user.userName;
            sessionStorage.currentUser = JSON.stringify(user);
          }
          return user;
        }));
  }

  public Logout() {
    this.currentUserName = null;
    sessionStorage.removeItem("currentUser");
  }
}
