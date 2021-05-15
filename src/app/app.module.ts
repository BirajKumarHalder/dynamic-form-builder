import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AppConfigService } from './app-config.service';
import { MultiCheckboxComponent } from './forms-comp/multi-checkbox/multi-checkbox.component';
import { PrimaryrouteComponent } from './primaryroute/primaryroute.component';
import { SecordaryrouteComponent } from './secordaryroute/secordaryroute.component';
import { PrimarychildComponent } from './primarychild/primarychild.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/primary',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent,
  resolve: { loginForm: AppConfigService }
}, {
  path: 'multi-check-box',
  component: MultiCheckboxComponent
}, {
  path: 'primary',
  component: PrimaryrouteComponent,
  children: [
    {
      path: 'child',
      component: PrimarychildComponent,
      outlet: 'primaryChildOutlet'
    }
  ]
}, {
  path: 'secondary',
  component: SecordaryrouteComponent,
  outlet: 'secondaryOutlet'
}]

export function loadFormDefs(appConfigService: AppConfigService) {
  return () => appConfigService.loadFormDefinations();
}

@NgModule({
  declarations: [
    AppComponent,
    FormbuilderComponent,
    LoginComponent,
    MultiCheckboxComponent,
    PrimaryrouteComponent,
    SecordaryrouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckboxModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadFormDefs, deps: [AppConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
