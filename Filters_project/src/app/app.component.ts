import {Component, OnInit, ViewChild} from '@angular/core';
import {MainServiceService} from './services/main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentDisplay = true;
  search(event): void{
    if (event.data === null) {
      this.appMainService.searchFilter = this.appMainService.searchFilter.slice(0, this.appMainService.searchFilter.length - 1);
    } else {this.appMainService.searchFilter += event.data; }
    this.appMainService.updateShowData();
  }

  reset(): void{
    this.appMainService.statusFilter = 'Все';
    this.appMainService.typeFilter = [];
    this.appMainService.searchFilter = '';
    this.appMainService.facilityFilter = 'Установки';
    this.appMainService.priorityFilter = 'Приоритет';
    this.appMainService. updateShowData();
  }

  constructor(public appMainService: MainServiceService) {
    this.appMainService.updateShowData();
  }
  ngOnInit(): void {
  }

  toggleDisplay(): void{
    this.currentDisplay = this.currentDisplay === true ? false : true;
  }
}
