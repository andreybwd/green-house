import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserWidgetComponent } from './components/user-widget/user-widget.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutNotFoundComponent } from './layout-not-found/layout-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule
  ],
  declarations: [
	  LayoutAdminComponent, 
	  HeaderComponent, 
	  MenuComponent, 
	  UserWidgetComponent, 
	  LayoutNotFoundComponent
	],
	exports: [
		LayoutAdminComponent,
		LayoutNotFoundComponent
	]

})
export class LayoutModule { }
