import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyChartComponent} from "./components/mychart/myChart.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, MyChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testApp';
}
