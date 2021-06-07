import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {MainPageModule} from '../main.module';
import {DataService} from '../data.service';
@Component({
  selector: 'app-task-one-page-middle',
  templateUrl: './task-one-page-middle.component.html',
  styleUrls: ['./task-one-page-middle.component.scss']
})
export class TaskOnePageMiddleComponent implements OnInit {

  constructor(public dataset: DataService) { }

  ngOnInit(): void {

    // Размер svg элемента
    d3.select('svg')
      .attr('width', 396)
      .attr('height', 396);

    // главная окружность с бордером
    this.dataset.drawingCircle(190, 190, 186, '#171923')
      .attr('stroke', '#1F222E')
      .attr('stroke-width', 2);

    // верхняя длинная дуга фона
    this.dataset.drawingArc(188, 178, -0.949, 0.949, 190, 192, '#1F222E');

    // верхняя короткая дуга фона
    this.dataset.drawingArc(188, 178, -0.43, 0.43, 190, 197, '#1F222E');

    // нижняя длинная дуга фона
    this.dataset.drawingArc(188, 178, -Math.PI + 0.95, -4.1, 190, 189, '#1F222E');

    // нижняя короткая дуга фона
    this.dataset.drawingArc(188, 178, -Math.PI + 0.42, -Math.PI - 0.42, 190, 184, '#1F222E');

    // Серая широкая дуга
    this.dataset.drawingArc(164, 125, Math.PI / 2 + 0.636, -Math.PI / 2 - 0.636, 190, 195, '#1F222E');

    // тн
    this.dataset.drawingText('тн', '#606580', 'Tahoma', '19px', 181, 120);

    // План переработки
    this.dataset.drawingText('План', '#D7E2F2', 'Tahoma', '23px', 163, 293);
    this.dataset.drawingText('переработки', '#D7E2F2', 'Tahoma', '23px', 122, 321);

    // workingData
    this.dataset.drawingText(`${(this.dataset.workingData / 1000).toFixed(3)}`.replace('.', ' '),
      '#D7E2F2', 'Tahoma', '31px', 143, 164);

    // allData
    this.dataset.drawingText(`${this.dataset.allData / 1000}`.replace('.', ' '),
      '#0089FF', 'Tahoma', '27px', 149, 208);

    // remainderData
    this.dataset.drawingText(`-${this.dataset.remainderData / 1000}`.replace('.', ' '),
      '#F7931E', 'Tahoma', '23px', 157, 260);

    // точки под workingData
    let x = 129;
    const y = 173;
    for (let i = 0; i < 30; i++) {
      d3.select('svg')
        .append('line')
        .attr('x1', x = x + 2)
        .attr('y1', y)
        .attr('x2', x = x + 2)
        .attr('y2', y)
        .attr('stroke', '#1F222E')
        .attr('stroke-width', '2px');
    }

    // дуга с точками
    let startingAngle = -Math.PI / 2 - 0.64;
    let endAngle = Math.PI / 2 + 0.64;

    for (startingAngle; startingAngle <= endAngle; startingAngle += 0.03) {
      this.dataset.drawingArc(114, 110, startingAngle, startingAngle += 0.04, 190, 195, '#1F222E');
    }

    // // дуга по данным (синяя)
    startingAngle = -Math.PI / 2 - 0.61;
    for (startingAngle; startingAngle <= this.dataset.getAngleTwo(); startingAngle += 0.01) {
      this.dataset.drawingArc(155, 132, startingAngle, startingAngle += 0.015, 190, 195, 'none')
        .transition().delay(500 * startingAngle + 1100)
        .attr('fill', '#0089FF');
    }

    // дуга по данным (белая палочка)
    this.dataset.drawingArc(164, 125, this.dataset.getAngleTwo() - 0.010,
      this.dataset.getAngleTwo() + 0.010, 190, 195, 'none')
      .transition().delay(500 * startingAngle + 1100)
      .attr('fill', 'white');


    // дуга после белой палочки (оранжевая)
    startingAngle = this.dataset.getAngleTwo() + 0.010;
    endAngle = Math.PI / 2 + 0.61;
    for (startingAngle; startingAngle <= endAngle; startingAngle += 0.01) {
      this.dataset.drawingArc(155, 132, startingAngle, startingAngle += 0.015, 190, 195, 'none')
        .transition().delay(500 * startingAngle + 1100)
        .attr('fill', '#F7931E');
    }

    // правое окончание главной дуги (серое)
    this.dataset.drawingArc(164, 125, Math.PI / 2 + 0.637, Math.PI / 2 + 0.61, 190, 195, '#303549');

    // левое окончание главной дуги (серое)
    this.dataset.drawingArc(164, 125, -Math.PI / 2 - 0.637, -Math.PI / 2 - 0.61, 190, 195, '#303549');
  }

}
