import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService implements Resolve<any>{

  formDefinations: any;

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let formDef = null;
    switch (route.url[0].path) {
      case 'login':
        formDef = this.formDefinations.loginForm;
        break;
    }
    return formDef;

  }

  loadFormDefinations(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('./assets/form-defination.json').subscribe(res => {
        this.formDefinations = res;
        resolve(true);
      })
    })
  }

}
