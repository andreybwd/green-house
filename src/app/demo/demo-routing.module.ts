import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { DemoLandingComponent } from './demo-landing/demo-landing.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { DemoSearchComponent } from './demo-search/demo-search.component';
import { DemoProfileComponent } from './demo-profile/demo-profile.component';
import { DemoProfileEditComponent } from './demo-profile-edit/demo-profile-edit.component';
import { DemoDetailsEditComponent } from './demo-details-edit/demo-details-edit.component';
import { DemoManageComponent } from './demo-manage/demo-manage.component';
import { DemoUserManageComponent } from './demo-user-manage/demo-user-manage.component';
import { LayoutNotFoundComponent } from '@green-house/layout';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
        children: [
        	{ path: '', redirectTo: 'landing', pathMatch: 'full' },
            { path: 'landing', component: DemoLandingComponent },
            { path: 'green-house', component: DemoDetailsComponent },
            { path: 'search', component: DemoSearchComponent },
            { path: 'profile', component: DemoProfileComponent },
            { path: 'profile-edit', component: DemoProfileEditComponent },
            { path: 'green-house-edit', component: DemoDetailsEditComponent },
            { path: 'manage-green-house-list', component: DemoManageComponent },
            { path: 'manage-profile-list', component: DemoUserManageComponent }, 
            { path: '**', component: LayoutNotFoundComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }
