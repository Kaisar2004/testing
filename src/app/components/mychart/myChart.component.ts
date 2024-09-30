import {Component} from '@angular/core';
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

  private myChart1: Chart = new Chart('myChart1', {
    type: "line",
    data: {
      labels: [] as string[],     // Массив строк
      datasets: [{
        label: "Sensor",
        data: [] as number[],     // Массив чисел
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
  private myChart2: Chart = new Chart('myChart2', {
    type: "line",
    data: {
      labels: [] as string[],     // Массив строк
      datasets: [{
        label: "Sensor",
        data: [] as number[],     // Массив чисел
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
  private myChart3: Chart = new Chart('myChart3', {
    type: "line",
    data: {
      labels: [] as string[],     // Массив строк
      datasets: [{
        label: "Sensor",
        data: [] as number[],     // Массив чисел
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
  private myChart4: Chart = new Chart('myChart4', {
    type: "line",
    data: {
      labels: [] as string[],     // Массив строк
      datasets: [{
        label: "Sensor",
        data: [] as number[],     // Массив чисел
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

  setDataToChart(dataInput: string) {
    if (dataInput.length !== 0) {
      const splitData: string = dataInput.replace(/-/g, '');
      const charts = [this.myChart1, this.myChart2, this.myChart3, this.myChart4];

      charts.forEach(chart => {
        const randomValue: number = Math.floor(Math.random() * 30);

        chart?.data.datasets[0].data.push(randomValue);
        chart?.data?.labels?.push(splitData);
        chart?.update();
      });
    }
  };

  combineDataOfChart(dataInput: string) {
    const combinedData = [...this.myChart1.config.data.datasets ?? [], ...this.myChart2.config.data.datasets ?? []];
    const combinedLabels = [...this.myChart1.config.data.labels ?? [], ...this.myChart2.config.data.labels ?? []];

    if (dataInput.length !== 0) {
      const newChart = new Chart('myChart5', {
        type: "line",
        data: {
          datasets: combinedData,
          labels: combinedLabels,
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
        },
      });
    }
  };
}
