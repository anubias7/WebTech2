import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatephoneComponent } from './create-phones/create-phone.component';
import { ListphoneComponent } from './list-phones/list-phone.component';

const routes: Routes = [
    { path: 'phones', component: ListphoneComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class phonesRoutingModule { }
