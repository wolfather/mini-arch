import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoListItem } from '../interface/todolistitem.interface';

import { TodolistComponent } from './todolist.component';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;
  let domTool: DOMTools;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    
    domTool = new DOMTools(fixture);
  });
  
  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(domTool.getElement('h2').textContent).toContain('List');
  });

  it('should return false in hasListData() with no items', () => {
    expect(component.hasListData()).toEqual(false);
  });

  it('should render the list items with data populated', () => {
    fixture.detectChanges();
    
    component.data = todoListStub;
    
    expect(component.hasListData()).toEqual(true);
  });
  
  it('should render list with data fulfilled', fakeAsync(() => {
    component.data = todoListStub;
    fixture.detectChanges();

    tick(300);
    console.log('TESTE', domTool.getElement('ul'));
    expect(domTool.getElement('ul')).toBeDefined();
    expect(domTool.getElement('li')).toBeDefined();
  }));
});

const todoListStub: Array<TodoListItem> = [
  {
    name: 'buy milk',
    done: false,
  },
  {
    name: 'clean the room',
    done: false,
  },
];

class DOMTools {
  private fixture: ComponentFixture<TodolistComponent>;

  constructor(fixture: ComponentFixture<TodolistComponent>) {
    this.fixture = fixture;
  }

  public getElement(tagName: string): any {
    const element = this.fixture.debugElement.query(By.css(tagName)); 
    console.log(element);
    return element.nativeElement;
  }
}



