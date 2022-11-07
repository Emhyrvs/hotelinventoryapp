import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

hotelName = 'Hilton Hotel';
numberOfRooms = 10;

hiderooms = false;

  constructor() { }

  ngOnInit(): void {
  }
  

  rooms : Room =
  {
    totalRooms:20,
    availableRooms:10,
    bookedRooms: 5,
  }
  toogle()
  {
this.hiderooms = !this.hiderooms;
  }

}
