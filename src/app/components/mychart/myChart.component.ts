import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import 'chartjs-adapter-date-fns';
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
export class MyChartComponent {
  private myChart: any = new Chart('myChart', {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: 'Data',
        data: [],
      }]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
          }
        },
        y: {
          beginAtZero: true,
        }
      }
    }
  });

  onSubmit(dataInput: string) {
    if (dataInput.length !== 0) {
      const splitData = dataInput.split('-').join('');
      this.myChart.config.data.labels.push(splitData);
      this.myChart.config.data.datasets[0].data.push(Math.floor(Math.random() * 30))
      this.myChart.update();
    }
  }
}
