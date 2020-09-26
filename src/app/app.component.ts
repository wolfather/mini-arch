import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-arch';


  public people = [
    {
      "first-name": "John",
      "last-name": "Doe",
      "age": "30",
      "email": "john@email.com",
      "level": "1",
    },
    {
      "first-name": "Joe",
      "last-name": "Doe",
      "age": "21",
      "email": "joe@email.com",
      "level": "2",
    },
    {
      "first-name": "Mary",
      "last-name": "Hary",
      "age": "29",
      "email": "mary@email.com",
      "level": "2",
    },
    {
      "first-name": "Lary",
      "last-name": "Very",
      "age": "49",
      "email": "lary@email.com",
      "level": "3",
    },
  ];
}
