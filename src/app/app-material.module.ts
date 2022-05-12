import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSelectModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSelectModule],
})
export class NameModule {}
