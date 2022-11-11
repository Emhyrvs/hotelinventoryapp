import { Component,EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit, OnChanges{

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   if(changes['title'])
   {

   this.title = changes['title'].currentValue.toUpperCase();

   }
  }
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {
  }
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }




}
