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
  private data = {
    labels: [] as string[],     // Массив строк
    datasets: [{
      label: "Sensor",
      data: [] as number[],     // Массив чисел
    }]
  };

  private myChart1: Chart = new Chart('myChart1',{
    type: "line",
    data: this.data,
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
  private myChart2: Chart = new Chart('myChart2',{
    type: "line",
    data: this.data,
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
  private myChart3: Chart = new Chart('myChart3',{
    type: "line",
    data: this.data,
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
  private myChart4: Chart = new Chart('myChart4',{
    type: "line",
    data: this.data,
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

  setDataToChart(dataInput: string) {
    if (dataInput.length !== 0) {
      const splitData: string = dataInput.replace(/-/g, '');
      const randomValue: number = Math.floor(Math.random() * 30);

      this.data.labels.push(splitData);
      // this.data.datasets[0].data.push(randomValue);
      [this.myChart1, this.myChart2, this.myChart3, this.myChart4]?.find(item => item.data.datasets[0].data.push(randomValue));
      [this.myChart1, this.myChart2, this.myChart3, this.myChart4].forEach(chart => chart.update());
    }
  };
}
