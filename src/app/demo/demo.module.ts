import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { DemoLandingComponent } from './demo-landing/demo-landing.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { DemoSearchComponent } from './demo-search/demo-search.component';
import { DemoProfileComponent } from './demo-profile/demo-profile.component';
import { DemoProfileEditComponent } from './demo-profile-edit/demo-profile-edit.component';
import { DemoDetailsEditComponent } from './demo-details-edit/demo-details-edit.component';
import { DemoUserManageComponent } from './demo-user-manage/demo-user-manage.component';
import { DemoManageComponent } from './demo-manage/demo-manage.component';
import { DemoRoutingModule } from './demo-routing.module';
import { LayoutModule } from '@green-house/layout';
import { UiModule } from '@green-house/ui';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    LayoutModule,
    UiModule
  ],
  declarations: [
	  DemoComponent, 
	  DemoLandingComponent,
	  DemoDetailsComponent, 
	  DemoSearchComponent, 
	  DemoProfileComponent, 
	  DemoProfileEditComponent, 
	  DemoDetailsEditComponent, 
	  DemoUserManageComponent, 
	  DemoManageComponent
  ]
})
export class DemoModule { }
