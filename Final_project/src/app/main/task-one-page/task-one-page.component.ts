import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-task-one-page',
  templateUrl: './task-one-page.component.html',
  styleUrls: ['./task-one-page.component.scss']
})
export class TaskOnePageComponent implements OnInit {
  constructor(public dataset: DataService) { }
  ngOnInit(): void {
    const angle = this.dataset.getAngle(this.dataset.workingData, this.dataset.allData);

    // Размер svg элемента
    d3.select('svg')
      .attr('width', 355)
      .attr('height', 355);

    // главная окружность с бордером
    this.dataset.drawingCircle(167.5, 167.5, 167, '#171923')
      .attr('stroke', '#1F222E')
      .attr('stroke-width', 2);

    // верхняя длинная дуга фона
    this.dataset.drawingArc(167, 160, -0.949, 0.949, 167, 168, '#1F222E');

    // верхняя короткая дуга фона
    this.dataset.drawingArc(167, 160, -0.43, 0.43, 167, 175, '#1F222E');

    // нижняя длинная дуга фона
    this.dataset.drawingArc(167, 160, -Math.PI + 0.95, -4.1, 167, 168, '#1F222E');

    // нижняя короткая дуга фона
    this.dataset.drawingArc(167, 160, -Math.PI + 0.42, -Math.PI - 0.42, 167, 161, '#1F222E');

    // Серая окружность
    this.dataset.drawingArc(138, 118, 0, -2 * Math.PI, 167, 167, '#1F222E');

    // тн
    this.dataset.drawingText('тн', '#606580', 'Tahoma', '24px', 154.5, 84);

    // Выработка
    this.dataset.drawingText('Выработка', '#D7E2F2', 'Tahoma', '24px', 107, 128);

    // workingData
    this.dataset.drawingText(`${(this.dataset.workingData / 1000).toFixed(3)}`.replace('.', ' '),
      '#D7E2F2', 'Tahoma', '28px', 124, 176);

    // allData
    this.dataset.drawingText(`${this.dataset.allData / 1000}`.replace('.', ' '),
      '#0089FF', 'Tahoma', '28px', 124, 214);

    // remainderData
    this.dataset.drawingText(`-${this.dataset.remainderData / 1000}`.replace('.', ' '),
      '#F7931E', 'Tahoma', '28px', 126, 258);

    // Оранжевая поддуга
    this.dataset.drawingArc(132, 125, 0, 2 * Math.PI, 167, 167, '#473628');

    // Дуга по данным
    d3.select('svg')
      .append('path')
      .attr('fill',  'white')
      .attr('transform', 'translate(167, 167)')
      .transition()
      .duration(2000)
      .attrTween('d', () => (t) => {
        return (d3.arc().cornerRadius(10)({
          outerRadius: 132,
          innerRadius: 125,
          startAngle: 0,
          endAngle: d3.interpolate(0, angle * Math.PI)(t)
        }));
      });
  }
}
