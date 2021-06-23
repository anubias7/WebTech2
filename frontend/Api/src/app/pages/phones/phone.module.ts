import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListphoneComponent } from './list-phones/list-phone.component';
import { CreatephoneComponent } from './create-phones/create-phone.component';
import { phonesRoutingModule } from './phone-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [ListphoneComponent, CreatephoneComponent],
  imports: [
    CommonModule,
    phonesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class phonesModule { }
