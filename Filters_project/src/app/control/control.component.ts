import {Component, ElementRef, HostListener, Input, OnInit, Type, ViewChild} from '@angular/core';
import {MainServiceService, Types} from '../services/main-service.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Input() data: Types;
  @ViewChild('element', {static: false}) sectionElem: ElementRef;
  onClick(): void{
    if ( this.appMainService.typeFilter.indexOf(this.data.name) === -1){
      this.appMainService.typeFilter.push(this.data.name);
    }
    else{
      this.appMainService.typeFilter.splice(this.appMainService.typeFilter.indexOf(this.data.name), 1);
    }
    this.appMainService.updateShowData();
  }
  constructor(public appMainService: MainServiceService) { }
  ngOnInit(): void {
  }
}
