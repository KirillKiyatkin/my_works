import {Component, Input, OnInit} from '@angular/core';
import {MainServiceService, pointData} from '../services/main-service.service';

@Component({
  selector: 'app-square-block',
  templateUrl: './square-block.component.html',
  styleUrls: ['./square-block.component.scss']
})
export class SquareBlockComponent implements OnInit {
  @Input() data: pointData;

  deleteBlock(): void{
    if (this.appMainService.Data.indexOf(this.data) !== -1){
      this.appMainService.Data.splice(this.appMainService.Data.indexOf(this.data), 1);
    }
    this.appMainService.updateShowData();
    this.appMainService.resetValues();
  }

  constructor(public appMainService: MainServiceService) { }

  ngOnInit(): void {
  }

}
