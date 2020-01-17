import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule
 } from '@angular/material';


@NgModule({
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class MaterialModule {

}
