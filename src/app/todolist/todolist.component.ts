import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { TodoListItem } from '../interface/todolistitem.interface';

import { CustomEventService, CUSTOM_EVENT_ALLOWED } from '../custom-event/custom-event.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  @Input() title = 'List';
  @Input() data: Array<TodoListItem> = [];
  
  constructor() { }

  ngOnInit(): void {
    CustomEventService.init(CUSTOM_EVENT_ALLOWED.CAT);
  }
  
  public hasListData(): boolean {
    return !!this.data.length;
  }
  
  public onCustom(): any {
    CustomEventService.setPayload({name: 'John', age: 23});
    CustomEventService.dispatch();
  }
}
