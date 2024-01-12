import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'invoice' , component:InvoiceComponent},
  {path:'login' , component:LoginComponent},
  { path: 'home', component: HomeComponent },
  {path:'register' , component:RegisterComponent},
  {path:'' , pathMatch:'full' , redirectTo:'login'},
  // {path:'' , pathMatch:'full' , redirectTo:'invoice'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
