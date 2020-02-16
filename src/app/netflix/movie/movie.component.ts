import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import {ClipsService } from "../clips.service";
import { IMovie } from "./movie.model";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  playingMovies: IMovie[];
  popMovies: IMovie[];
  ratedMovies: IMovie[];
  upcomingMovies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w92";

  constructor(private clipsService: ClipsService, private router: Router) { }

  ngOnInit() {
    this.getNowPlaying();
  }

  getNowPlaying() {
    this.clipsService.getNowPlaying().subscribe((res: any) => {
      console.log(res.results);
      this.playingMovies = res.results;
      console.log(this.playingMovies);
    });
  }

  goBack() {
    this.router.navigate(["/home"]);
  }
}
