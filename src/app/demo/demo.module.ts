import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoLandingComponent } from './demo-landing/demo-landing.component';
import { DemoGreenHouseComponent } from './demo-green-house/demo-green-house.component';
import { DemoMenuComponent } from './demo-menu/demo-menu.component';
import { 
	MatAutocompleteModule, 
	MatCheckboxModule,
	MatDatepickerModule,
	MatFormFieldModule,
	MatInputModule,
	MatRadioModule,
	MatSelectModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatMenuModule,
	MatSidenavModule,
	MatToolbarModule,
	MatCardModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatListModule,
	MatStepperModule,
	MatTabsModule,
	MatTreeModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatBadgeModule,
	MatChipsModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatProgressBarModule,
	MatBottomSheetModule,
	MatDialogModule,
	MatSnackBarModule,
	MatTooltipModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule
} from '@angular/material';
import { DemoGreenHouseGridComponent } from './demo-green-house-grid/demo-green-house-grid.component';
import { DemoGreenHouseSearchComponent } from './demo-green-house-search/demo-green-house-search.component';


@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
	MatSidenavModule,
    MatToolbarModule,
	MatCardModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatListModule,
	MatStepperModule,
	MatTabsModule,
	MatTreeModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatBadgeModule,
	MatChipsModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatProgressBarModule,
	MatBottomSheetModule,
	MatDialogModule,
	MatSnackBarModule,
	MatTooltipModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule
  ],
  declarations: [
    DemoComponent,
    DemoLandingComponent,
    DemoGreenHouseComponent,
    DemoMenuComponent,
    DemoGreenHouseGridComponent,
    DemoGreenHouseSearchComponent
  ]
})
export class DemoModule {}
