import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { DemoLandingComponent } from './demo-landing/demo-landing.component';
import { DemoGreenHouseComponent } from './demo-green-house/demo-green-house.component';
import { DemoGreenHouseSearchComponent } from './demo-green-house-search/demo-green-house-search.component';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
        children: [
        	{ path: '', redirectTo: 'landing', pathMatch: 'full' },
            { path: 'landing', component: DemoLandingComponent },
            { path: 'green-house', component: DemoGreenHouseComponent },
            { path: 'green-house-list', component: DemoGreenHouseSearchComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }
