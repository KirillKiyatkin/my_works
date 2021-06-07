import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MainServiceService, Statuses} from '../services/main-service.service';

@Component({
  selector: 'app-status-btn',
  templateUrl: './status-btn.component.html',
  styleUrls: ['./status-btn.component.scss']
})
export class StatusBtnComponent implements OnInit {
  @Input() data: Statuses;

  @HostListener('click', [])
  onClick(): void{
    this.appMainService.statusFilter = this.data.name;
    this.appMainService.updateShowData();
    this.appMainService.resetValues();
  }

  constructor(public appMainService: MainServiceService) {
  }

  ngOnInit(): void {
    this.appMainService.resetValues();
  }
}
