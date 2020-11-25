import { NgModule } from '@angular/core';
import { ShareModule } from '../core/shared/share.module';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/components/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    PublicRoutingModule,
    ShareModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [],
  providers: []
})

export class PublicModule{
  constructor() {}
}
