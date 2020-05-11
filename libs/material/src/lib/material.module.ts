import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const materialImports = [
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [materialImports],
  exports: [materialImports]
})
export class MaterialModule {}
