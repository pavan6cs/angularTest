import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSelectModule,MatFormFieldModule,MatOptionModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSelectModule,MatFormFieldModule,MatOptionModule],
})
export class AppMaterialModule {}
