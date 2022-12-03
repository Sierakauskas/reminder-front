import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared-module";
import { CalendarPageComponent } from "./calendar-page.component";
import { CalenderPageRoutingModule } from "./calender-page-routing.module";

@NgModule({
  imports: [
    SharedModule,
    CalenderPageRoutingModule
  ],
  declarations: [
    CalendarPageComponent
  ]
})
export class CalenderPageModule {}
