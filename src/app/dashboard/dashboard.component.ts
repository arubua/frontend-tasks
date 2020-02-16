import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
  <div class="container-fluid" [routerLink] = "['/home']">
  <h2>Frontend Developer Assessment</h2>
  <p>Click on the preferred button below</p>
  <button  mat-raised-button routerLink='/task1' color="accent">Task 1</button>
  <button  mat-raised-button routerLink='/task2' color="accent">Task 2</button>
</div>
  `,
  styles: [`
    div {
      text-align:center;
      width:100%;
      margin:20 auto; }
    button {
      padding:.5em 5em;
      margin-left:2em;
    }
  `]
})

export class DashboardComponent {

}
