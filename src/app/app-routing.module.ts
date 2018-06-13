import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: '', redirectTo: 'demo', pathMatch: 'full' },
            { path: 'demo', loadChildren: './demo/demo.module#DemoModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
