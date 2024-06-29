import { NgModule } from '@angular/core';
import { BrowserModule,provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GlycemieComponent } from "./glycemie/glycemie.component";
import { AppComponent } from './app.component';
import { GlycemieFormComponent } from './glycemie-form/glycemie-form.component';
import { GlycemieService } from './glycemie.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
@NgModule({
  declarations: [
    GlycemieComponent,
    GlycemieFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    MatToolbarRow,
    MatToolbar
  ],
  providers: [
    GlycemieService,
    provideClientHydration()
  ],
  exports: [
    GlycemieFormComponent,
    GlycemieFormComponent,
    GlycemieComponent
  ],

})
export class AppModule { }
