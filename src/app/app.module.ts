import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from'@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordPatternDirective } from './Directives/password-pattern.directive';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';
import { SortPipePipe } from './pipe/sort-pipe.pipe';
import{ NgxPaginationModule } from 'ngx-pagination';
import { AddbookComponent } from './addbook/addbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { DeletebookComponent } from './deletebook/deletebook.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PasswordPatternDirective,
    routingComponents,
    FilterPipePipe,
    SortPipePipe,
    AddbookComponent,
    FooterComponent,
    DeletebookComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
