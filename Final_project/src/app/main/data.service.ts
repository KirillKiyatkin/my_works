import {Injectable} from '@angular/core';
import * as d3 from 'd3';

export interface Product {
  name: string;
  accumulate: number;
  alreadyAcc: number;
  tasks: Task[];
}

export interface Task {
  blue: number;
  white: number;
  yellow: number;
  red: number;
  y: number;
}

@Injectable({providedIn: 'root'})
export class DataService {
  allData = 31265;
  workingData = 30094;
  remainderData = this.allData - this.workingData;
  product: Product = {
    name: 'Гудрон',
    accumulate: 9517,
    alreadyAcc: 1049,
    tasks: [
      {
        blue: 12,
        white: 0,
        yellow: 0,
        red: 0,
        y: 163.5
      },
      {
        blue: 12,
        white: 0,
        yellow: 0,
        red: 0,
        y: 163.5
      },
      {
        blue: 0,
        white: 0,
        yellow: 14,
        red: 4,
        y: 154.85
      },
      {
        blue: 14,
        white: 0,
        yellow: 0,
        red: 0,
        y: 154.85
      },
      {
        blue: 0,
        white: 11,
        yellow: 5,
        red: 0,
        y: 165.6
      },
      {
        blue: 9,
        white: 0,
        yellow: 0,
        red: 0,
        y: 173
      },
      {
        blue: 12,
        white: 0,
        yellow: 0,
        red: 0,
        y: 159
      },
      {
        blue: 12,
        white: 0,
        yellow: 0,
        red: 0,
        y: 159
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 135
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 145
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 147
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 135
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 135
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 153
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 153
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 140
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 140
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 153
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 149
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 135
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 135
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 140
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 140
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 150
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 150
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 147
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 147
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 142
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 142
      },
      {
        blue: 0,
        white: 0,
        yellow: 0,
        red: 0,
        y: 148
      }
    ]
  };

  getAngle(a, b): number{
    return ((a * 2) / b);
  }

  getAngleTwo(): number{
    return (((this.workingData * (Math.PI + 1.22)) / this.allData) - Math.PI / 2 - 0.61);
  }

  drawingArc(outRadius, inRadius, stAngle, enAngle, x, y, fill): any{
    const arc = d3.arc();
    return d3.select('svg')
      .append('path')
      .attr('d', arc({
        outerRadius: outRadius,
        innerRadius: inRadius,
        startAngle: stAngle,
        endAngle: enAngle
      }))
      .attr('transform', `translate(${x}, ${y})`)
      .attr('fill', `${fill}`);
  }

  drawingText(text, fill, ff, fs, x, y): any{
    return d3.select('svg')
      .append('text')
      .text(`${text}`)
      .style('fill', `${fill}`)
      .style('font-family', `${ff}`)
      .style('font-size', `${fs}`)
      .attr('transform', `translate(${x}, ${y})`);
  }

  drawingCircle(cx, cy, r, fill): any {
    return d3.select('svg')
      .append('circle')
      .attr('cx', cx)
      .attr('cy', cy)
      .attr('r', r)
      .attr('fill', fill);
  }

  drawingRectangle(x, y, width, height, fill): any{
    return d3.select('svg')
      .append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', fill);
  }

  drawingLine(x1: number, y1: number, x2: number, y2: number, fill: string, width: string): any{
    return d3.select('svg')
      .append('line')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .attr('stroke', fill)
      .attr('stroke-width', width);
  }
}
