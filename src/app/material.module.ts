import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})

export class AppMaterialModule { }
