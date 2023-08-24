import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule
],
  exports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
