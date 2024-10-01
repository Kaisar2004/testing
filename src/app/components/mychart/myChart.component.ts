import {Component} from '@angular/core';
import {Chart, registerables} from "chart.js";
import 'chartjs-adapter-date-fns';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

Chart.register(...registerables);

@Component({
  selector: 'app-myChart',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './myChart.component.html',
  styleUrl: './myChart.component.css'
})
export class MyChartComponent {
  public chartIds: string[] = [];
  private chartIndex: number = 1;
  private charts: Chart[] = [];
  private maxCharts: number = 4;

  createNextChart() {
    if (this.charts.length >= this.maxCharts) {
      alert('Достигнуто максимальное количество графиков');
      return; // Выходим из функции, если достигли лимита
    }
    // Генерируем уникальный ID для нового графика
    const newChartId = `myChart${this.chartIndex}`;
    this.chartIds.push(newChartId);

    setTimeout(() => {
      this.createChart(newChartId); // Создаем график с этим ID
    });

    this.chartIndex++;
  }

  createChart(chartId: string) {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    if (ctx) {
      const sensorIndex = this.charts.length + 1;
      const newChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [] as string[], // Массив строк для меток
          datasets: [
            {
              label: `Sensor ${sensorIndex}`,
              data: [] as number[], // Массив чисел для данных
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      this.charts.push(newChart);
    }
  }


  setDataToChart(dataInput: string) {
    if (dataInput.length !== 0) {
      const splitData: string = dataInput.replace(/-/g, '');
      // const charts = [this.myChart1, this.myChart2, this.myChart3, this.myChart4];

      this.charts.forEach(chart => {
        const randomValue: number = Math.floor(Math.random() * 30);

        chart?.data.datasets[0].data.push(randomValue);
        chart?.data?.labels?.push(splitData);
        chart?.update();
      });
    }
  };

  combineDataOfChart(dataInput: string) {
    if (this.charts.length < 2) {
      console.log("Недостаточно графиков для объединения.");
      return;
    }
    const combinedData = [
      ...this.charts[0].config.data.datasets ?? [],
      ...this.charts[1].config.data.datasets ?? []
    ];

    const combinedLabels = [
      ...this.charts[0].config.data.labels ?? [],
      ...this.charts[1].config.data.labels ?? []
    ];

    if (dataInput.length !== 0) {
      this.charts[0].config.data.datasets = combinedData;
      this.charts[0].config.data.labels = combinedLabels;

      this.charts[0].update();
    }
  };
}
