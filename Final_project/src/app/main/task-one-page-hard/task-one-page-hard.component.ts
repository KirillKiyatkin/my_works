import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-task-one-page-hard',
  templateUrl: './task-one-page-hard.component.html',
  styleUrls: ['./task-one-page-hard.component.scss']
})
export class TaskOnePageHardComponent implements OnInit {

  constructor(public dataset: DataService) { }

  ngOnInit(): void {

    // Размер svg элемента
    d3.select('svg')
      .attr('width', 815)
      .attr('height', 241);

    // Прямоугольник заголовка
    this.dataset.drawingRectangle(133, 12, 603, 55, 'rgba(39, 42, 56, 0.5)');

    // Прямоугольник контентной части
    this.dataset.drawingRectangle(134, 66, 601, 162, 'rgba(18, 21, 30, 0.5)')
      .attr('stroke', '#1F222E')
      .attr('stroke-width', 2);

    // Окружность перекрывающая фон
    this.dataset.drawingCircle(130, 121, 107.8, '#1B1E27')
      .attr('stroke', 'rgba(39, 42, 56, 0.5)')
      .attr('stroke-width', 2);
    this.dataset.drawingRectangle(20, 9, 122, 225, '#1B1E27');

    // Окружность с данными
    this.dataset.drawingCircle(128.5, 121, 102.0, '#171923')
      .attr('stroke', 'rgba(39, 42, 56, 0.5)')
      .attr('stroke-width', 2);

    // Прямоугольник с процентами
    this.dataset.drawingRectangle(742, 13, 67, 215, 'rgba(18, 21, 30, 0.5)')
      .attr('stroke', 'rgba(39, 42, 56, 0.5)')
      .attr('stroke-width', 2);

    // Дуга тёмно-синяя для данных (поддуга)
    this.dataset.drawingArc(95, 88, 0, 2 * Math.PI, 129, 121.5, '#122F4F');

    // Дуга по данным
    const angle = this.dataset.getAngle(this.dataset.product.accumulate - this.dataset.product.alreadyAcc, this.dataset.product.accumulate);

    d3.select('svg')
      .append('path')
      .attr('fill',  '#0089FF')
      .attr('transform', 'translate(129, 121.5)')
      .transition()
      .duration(2000)
      .attrTween('d', () => (t) => {
        return (d3.arc().cornerRadius(10)({
          outerRadius: 94,
          innerRadius: 88,
          startAngle: 0,
          endAngle: d3.interpolate(0, angle * Math.PI)(t)
        }));
      });

    // тн
    this.dataset.drawingText('тн', '#606580', 'Tahoma', '21.9px', 115, 60.8);

    // alreadyAcc
    this.dataset.drawingText(`${(this.dataset.product.alreadyAcc / 1000).toFixed(3)}`.replace('.', ' '),
      '#D7E2F2', 'Tahoma', '26px', 92.5, 122);

    // 0
    this.dataset.drawingText('0', '#606580', 'Tahoma', '26px', 118, 162);

    // точки под alreadyAcc
    let x = 75;
    let y = 131;
    for (let i = 0; i < 25; i++) {
      this.dataset.drawingLine(x = x + 2, y, x = x + 2, y, '#1F222E', '2px');
    }

    // Гудрон
    this.dataset.drawingText(this.dataset.product.name, '#D7E2F2', 'Tahoma', '30.6727px', 259, 53);

    // alreadyAcc (header)
    this.dataset.drawingText(`${(this.dataset.product.alreadyAcc / 1000).toFixed(3)}`.replace('.', ' '),
      '#0089FF', 'Tahoma', '26.2909px', 649, 50);

    // Накопительно
    this.dataset.drawingText('Накопительно:', '#606580', 'Tahoma', '21.9091px', 259, 101);

    // alreadyAcc (header)
    this.dataset.drawingText(`${(this.dataset.product.accumulate / 1000).toFixed(3)}`.replace('.', ' '),
      '#606580', 'Tahoma', '26.2909px', 649, 99);

    // 81
    this.dataset.drawingText('81', '#D7E2F2', 'Tahoma', '26px', 751.5, 48);

    // %
    this.dataset.drawingText('%', '#606580', 'Tahoma', '17.5273px', 783, 48);

    // фон процентной шкалы
    this.dataset.drawingRectangle(745, 72, 61, 153, 'rgba(0, 137, 255, 0.2)');

    // верхняя граница белой шкалы
    x = 744.5;
    y = 102;
    for (let i = 0; i < 15; i++) {
      this.dataset.drawingLine(x = x + 2, y, x = x + 2, y, 'white', '2px');
    }

    // нижняя граница белой шкалы
    x = 744.5;
    y = 211;
    for (let i = 0; i < 15; i++) {
      this.dataset.drawingLine(x = x + 2, y, x = x + 2, y, 'white', '2px');
    }

    // фон данных по процентам
    this.dataset.drawingRectangle(745, 112, 61, 96, '#0089FF');

    // серая палочка с разноцветными дугами внутри
    const z = 15.3;
    for (let i = 0; i <= 29; i++){
      this.dataset.drawingRectangle(259 + (z * i), 121, 11, 94, '#272A38')
        .attr('rx', '2')
        .attr('ry', '2')
        .attr('class', 'e')
        // tslint:disable-next-line:typedef
        .on('mouseover', function(){d3.select(this).attr('fill', '#122f4e'); })
        // tslint:disable-next-line:typedef
        .on('mouseout', function(){d3.select(this).attr('fill', '#272a38'); })
        .attr('cursor', 'pointer');
      if (i < this.dataset.product.tasks.length){
        // tslint:disable-next-line:no-shadowed-variable
        let y = 215;
        for (let k = 0; k < this.dataset.product.tasks[i].blue; k++){
          this.dataset.drawingRectangle(261.5 + (z * i), y -= 4.38, 6.57, 2.19, '#272A38')
            .attr('rx', '2')
            .attr('ry', '2')
            .attr('pointer-events', 'none')
            .transition().delay(100 * i + 400)
            .attr('fill', '#0089FF');
        }
        for (let k = 0; k < this.dataset.product.tasks[i].white; k++){
          this.dataset.drawingRectangle(261.5 + (z * i), y -= 4.38, 6.57, 2.19, '#272A38')
            .attr('rx', '2')
            .attr('ry', '2')
            .attr('pointer-events', 'none')
            .transition().delay(100 * i + 400)
            .attr('fill', '#FFFFFF');
        }
        for (let k = 0; k < this.dataset.product.tasks[i].yellow; k++){
          this.dataset.drawingRectangle(261.5 + (z * i), y -= 4.38, 6.57, 2.19, '#272A38')
            .attr('rx', '2')
            .attr('ry', '2')
            .attr('pointer-events', 'none')
            .transition().delay(100 * i + 400)
            .attr('fill', '#F7931E');
        }
        for (let k = 0; k < this.dataset.product.tasks[i].red; k++){
          this.dataset.drawingRectangle(261.5 + (z * i), y -= 4.38, 6.57, 2.19, '#272A38')
            .attr('rx', '2')
            .attr('ry', '2')
            .attr('pointer-events', 'none')
            .transition().delay(100 * i + 400)
            .attr('fill', '#FF1D25');
        }
      }
    }


    let xPoint = 259;
    for (let i = 0; i <= 30; i += 0.5){
      if (i % 1 !== 0) {
        // tslint:disable-next-line:max-line-length
        this.dataset.drawingLine(xPoint - 14.8 + 12.6, this.dataset.product.tasks[i - 0.5].y, xPoint - 14.8 + 12.6, this.dataset.product.tasks[i + 0.5].y, 'none', '2px')
          .transition().delay(50 * i + 50)
          .attr('stroke', '#0089FF')
          .attr('pointer-events', 'none');
        // tslint:disable-next-line:max-line-length
        this.dataset.drawingLine(xPoint - 14.8 + 11.6, this.dataset.product.tasks[i + 0.5].y, xPoint + 1, this.dataset.product.tasks[i + 0.5].y, 'none', '2px')
          .transition().delay(50 * i + 50)
          .attr('stroke', '#0089FF')
          .attr('pointer-events', 'none');
      } else {
        this.dataset.drawingLine(xPoint, this.dataset.product.tasks[i].y, xPoint + 14, this.dataset.product.tasks[i].y, 'none', '2px')
          .transition().delay(50 * i + 50)
          .attr('stroke', '#0089FF')
          .attr('pointer-events', 'none');
        xPoint += 15.3;
      }
    }

  }
}
