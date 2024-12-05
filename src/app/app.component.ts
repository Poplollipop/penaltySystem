import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {

  }

  ngOnInit() {
    this.showchart();
  }


  showchart() {
    // 獲取 canvas 元素
    let ctx = document.getElementById('chart') as HTMLCanvasElement;

    // 設定數據
    let data: any = {
      // x 軸文字
      labels: ['0-6月', '6-12月', '12-18月', '18-24月', '24-30月', '30-36月'],
      datasets: [
        // 第一組資料
        {
          type: 'line',
          // 上方分類文字
          label: '件數(整體)',
          // 數據
          data: [30, 20, 40, 32, 45, 24],
          // 線與邊框顏色
          borderColor: 'rgba(75, 192, 192, 1)',
          // 線的弧度(0-1)，數值愈小線愈直
          tension: 0.1,
        },
        {
          type: 'bar',
          // 上方分類文字
          label: '件數(依選項)',
          // 數據
          data: [30, 20, 40, 32, 45, 24],
          // 線與邊框顏色
          borderColor: 'rgba(75, 192, 192, 1)',
          // 背景顏色
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    };

    // 創建圖表
    let chart = new Chart(ctx, {
      type: 'scatter',
      data: data,
    });



    // 獲取 canvas 元素
    let ct = document.getElementById('chart1') as HTMLCanvasElement;

    // 設定數據
    let data1: any = {
      // x 軸文字
      labels: ['0-6月', '6-12月', '12-18月', '18-24月', '24-30月', '30-36月'],
      datasets: [
        // 第一組資料
        {
          type: 'line',
          // 上方分類文字
          label: '件數(整體)',
          // 數據
          data: [30, 20, 40, 32, 45, 24],
          // 線與邊框顏色
          borderColor: 'rgba(75, 192, 192, 1)',
          // 線的弧度(0-1)，數值愈小線愈直
          tension: 0.1,
        },
        {
          type: 'bar',
          // 上方分類文字
          label: '件數(依選項)',
          // 數據
          data: [30, 20, 40, 32, 45, 24],
          // 線與邊框顏色
          borderColor: 'rgba(75, 192, 192, 1)',
          // 背景顏色
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    };

    // 創建圖表
    let chart1 = new Chart(ct, {
      type: 'scatter',
      data: data1,
    });
  }


}





