import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from './post.service';

@Component({
  selector: 'app-task-two-page',
  templateUrl: './task-two-page.component.html',
  styleUrls: ['./task-two-page.component.scss']
})
export class TaskTwoPageComponent implements OnInit {
  @ViewChild('point', {static: false}) point;
  @ViewChild('elem', {static: false}) elem;

  toggle(event): void{
    event.path.forEach((elem, index) => {
      if (elem.className === 'item' || elem.className === 'item active'){
        switch (elem.className){
          case ('item'): event.path[index].classList.add('active'); break;
          case ('item active'): event.path[index].classList.remove('active'); break;
        }
      }
    });
  }

  constructor(public data: PostService) { }

  deviation(post): number{
    return post.points.reduce((acc, elem) => {
      if (elem.fact !== elem.model){
      return acc += 1; } else {
        return acc;
      }
    }, 0);
  }

  addClass(event): void{
    let a: number;
    event.path.forEach((elen, index) => {
     if (elen.className === 'item__point' ||
       elen.className === 'item__point hard' ||
       elen.className === 'item__point hard blue' ||
       elen.className === 'item__point blue'){
        a = index;
      }
    });
    if (event.path[a].classList.contains('blue')){
      event.path[a].classList.remove('blue');
    } else {
      event.path[a].classList.add('blue');
    }
  }


  ngOnInit(): void {
  }

}
