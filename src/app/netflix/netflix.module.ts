import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { MovieComponent } from "./movie/movie.component";

import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { EllipsisPipe } from "./ellipsis.pipe";



@NgModule({
  declarations: [
    MovieComponent,
    EllipsisPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([
      {path: "task1", component: MovieComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "**", redirectTo: "home", pathMatch: "full"}
    ])
  ]

})
export class NetflixModule { }
