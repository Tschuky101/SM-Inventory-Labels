import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from "angular-svg-icon";

import { AppComponent, } from './app.component';
import { ClearLabelsDialogComponent } from './dialogs/clear-labels.component';
import { LoadJsonComponent } from './dialogs/load-json.component';
import { DisplayModels } from './pipes/displaymodels.pipe';
import { FilterYears } from './pipes/filteryears.pipe';
import { FilterSizes } from './pipes/filtersizes.pipe';
import { FilterColors } from './pipes/filtercolors.pipe';
import { FilterTouchbar } from './pipes/filterTouchbar.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatAutocompleteModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule,
  ]
})

export class MaterialModule {}
@NgModule({
	imports: [
		MaterialModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatButtonModule,
		MatCheckboxModule,
		FileSaverModule,
		FormsModule,
		ReactiveFormsModule,
		AngularSvgIconModule
	],
	declarations: [
		AppComponent,
		ClearLabelsDialogComponent,
		LoadJsonComponent,
		DisplayModels,
		FilterYears,
		FilterSizes,
		FilterColors,
		FilterTouchbar
	],
	entryComponents: [ClearLabelsDialogComponent, LoadJsonComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
