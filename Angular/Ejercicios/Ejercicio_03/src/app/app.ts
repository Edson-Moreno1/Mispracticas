import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Resaltar } from './directives/resaltar';
import { Subrayar } from './directives/subrayar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Resaltar,Subrayar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_03');
}
