import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenubarModule, DataTableModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TareasComponent } from './tareas/tareas.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { TareasApiService } from './shared/tareas-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TareasComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    DataTableModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  providers: [
    TareasApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
