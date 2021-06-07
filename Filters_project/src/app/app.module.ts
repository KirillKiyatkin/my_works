import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LongBlockComponent } from './long-block/long-block.component';
import { SquareBlockComponent } from './square-block/square-block.component';
import { ControlComponent } from './control/control.component';
import { DropMenuComponent } from './drop-menu/drop-menu.component';
import { StatusBtnComponent } from './status-btn/status-btn.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LongBlockComponent,
    SquareBlockComponent,
    ControlComponent,
    DropMenuComponent,
    StatusBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
