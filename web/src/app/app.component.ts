import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApiService} from "./api.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title$ = this.apiService.getDefinition();

  constructor(private apiService: ApiService) {}


}
