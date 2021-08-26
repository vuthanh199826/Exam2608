import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';
import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { LoginComponent } from './formlogin/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { ListBookComponent } from './bookcomponent/list-book/list-book.component';
import { CreateBookComponent } from './bookcomponent/create-book/create-book.component';
import { DeleteBookComponent } from './bookcomponent/delete-book/delete-book.component';
import { EditBookComponent } from './bookcomponent/edit-book/edit-book.component';
import { BookViewComponent } from './bookcomponent/book-view/book-view.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'book/list',
    component: ListBookComponent
  },
  {
    path: 'book/create',
    component: CreateBookComponent
  },
  {
    path: 'book/delete/:id',
    component: DeleteBookComponent
  },
  {
    path: 'book/edit/:id',
    component: EditBookComponent
  },
  {
    path: 'book/view/:id',
    component: BookViewComponent
  }
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, LoginComponent, ListBookComponent, CreateBookComponent, DeleteBookComponent, EditBookComponent, BookViewComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
