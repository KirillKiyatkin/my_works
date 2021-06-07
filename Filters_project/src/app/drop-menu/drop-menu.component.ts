import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {MainServiceService} from '../services/main-service.service';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {
  @ViewChild('inheart') inputRef: ElementRef;
  @Input() data: string[];
  @Input() index: number;
  toggleMenu = false;
  @HostListener('click') onClick(): void{
    this.toggleMenu = !this.toggleMenu;
  }
  @HostListener('mouseleave') onMouseleave(): void{
    this.toggleMenu = false;
  }

  pointClick(point): void{
    (this.index === 0) ? this.appMainService.facilityFilter = point : this.appMainService.priorityFilter = point;
    this.appMainService.updateShowData();
  }

  pointOneClick(): void{
    (this.index === 0) ? this.appMainService.facilityFilter = 'Установки' : this.appMainService.priorityFilter = 'Приоритет';
    this.appMainService.updateShowData();
  }

  constructor(public appMainService: MainServiceService) { }

  ngOnInit(): void {
  }

}
