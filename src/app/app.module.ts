import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NetflixModule } from "./netflix/netflix.module";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {MatButtonModule} from "@angular/material/button";

import { ClipsService } from "./netflix/clips.service";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "home", component: DashboardComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path:  "**", redirectTo: "home", pathMatch: "full"}
    ]),
    NetflixModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ClipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
