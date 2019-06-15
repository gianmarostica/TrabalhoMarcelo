import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClasseComponent } from './Cadastro/classe/classe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatButtonModule, 
  MatTableModule, MatIconModule} from '@angular/material';
import { JogadorComponent } from './Cadastro/jogador/jogador.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    ClasseComponent,
    JogadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    MatFormFieldModule,
    HttpClientModule, BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule, 
    MatIconModule,
    MatSelectModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
