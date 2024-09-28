import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import {FormsModule} from "@angular/forms";

Chart.register(...registerables);

@Component({
  selector: 'app-myChart',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './myChart.component.html',
  styleUrl: './myChart.component.css'
})
export class MyChartComponent implements OnInit {

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        // label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    const myChart = new Chart('myChart', {
      type: "pie",
      data: data,
    });
    const inputValue = (document.getElementById('newDate') as HTMLInputElement).value;
  }

  onSubmit(dataInput: string) {
    if (dataInput) {
      console.log(dataInput);
    }
  }
}
