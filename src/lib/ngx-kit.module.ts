import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertComponent } from "./alert/alert.component";
import { ButtonComponent } from "./button/button.component";
import { BlockComponent } from "./block/block.component";
import { DatalistComponent } from "./datalist/datalist.component";
import { DPSComponent } from "./dps/dps.component";
import { HrComponent } from "./hr/hr.component";
import { KeyboardComponent } from "./keyboard/keyboard.component";
import { LoadingComponent } from "./loading/loading.component";
import {
  StatusCircleComponent
} from "./status-circle/status-circle.component";
import { AlertStackComponent } from "./alert/alert-stack.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UnixTimestampToDatePipe } from "./dt/unix-timestamp-to-date.pipe";
import { CapitalizeEachPipe } from "./str/capitalize-each.pipe";
import { CapitalizePipe } from "./str/capitalize.pipe";
import { PaginationComponent } from "./pagination/pagination.component";
import { IncludesPipe } from "./includes.pipe";
import { PaginationOverflowDirective }
  from "./pagination/pagination-overflow.directive";
import { BrowserAnimationsModule }
  from "@angular/platform-browser/animations";
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS }
  from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MAT_DATE_LOCALE }
  from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import { MatInputComponent } from "./input/mat-input/mat-input.component";
import { LabelComponent } from "./label/label.component";
import { FileDragDropDirective }
  from "./input/upload-files-input/file-drag-drop.directive";
import { UploadFilesInputComponent }
  from "./input/upload-files-input/upload-files-input.component";
import { PopUpComponent } from "./pop-up/pop-up.component";
import { RefreshComponent } from "./refresh/refresh.component";
import { InputComponent } from "./input";

@NgModule({
  declarations: [
    ButtonComponent,
    AlertComponent,
    AlertStackComponent,
    BlockComponent,
    DatalistComponent,
    DPSComponent,
    HrComponent,
    KeyboardComponent,
    LoadingComponent,
    StatusCircleComponent,
    UnixTimestampToDatePipe,
    CapitalizeEachPipe,
    CapitalizePipe,
    PaginationComponent,
    IncludesPipe,
    PaginationOverflowDirective,
    MatInputComponent,
    FileDragDropDirective,
    UploadFilesInputComponent,
    PopUpComponent,
    InputComponent,
    LabelComponent,
    RefreshComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "ru-RU" },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "outline", subscriptSizing: "dynamic" }
    }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    NgxMatTimepickerModule,
  ],
  exports: [
    IncludesPipe,
    ButtonComponent,
    AlertStackComponent,
    BlockComponent,
    DatalistComponent,
    DPSComponent,
    HrComponent,
    KeyboardComponent,
    LoadingComponent,
    StatusCircleComponent,
    UnixTimestampToDatePipe,
    CapitalizeEachPipe,
    CapitalizePipe,
    PaginationComponent,
    MatInputComponent,
    UploadFilesInputComponent,
    PopUpComponent,
    LabelComponent,
    RefreshComponent
  ]
})
export class NgxKitModule { }
