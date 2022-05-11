import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule],
})
export class NameModule {}
