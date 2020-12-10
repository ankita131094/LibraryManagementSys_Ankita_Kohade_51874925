import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestComponent} from './rest/rest.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';



const routes: Routes = [
  { path : '' , component : LoginComponent },
  { path : 'home' , component : HomeComponent },
  { path : 'rest' , component : RestComponent },
  { path : 'contact' , component : ContactComponent }, 
  { path : 'admin' , component : AdminComponent},
  { path : 'addbook' , component : AddbookComponent},
  { path : 'deletebook' , component : DeletebookComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, HomeComponent, RestComponent,ContactComponent , AdminComponent,AddbookComponent,DeletebookComponent]