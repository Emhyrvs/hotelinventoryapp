import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Room } from './rooms';
import {RoomList} from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {

hotelName = 'Hilton Hotel';
numberOfRooms = 10;
roomList : RoomList[] =[]
hiderooms = false;

  constructor() { }

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
  roomType: 'Deluxe Room',
  amenties: 'Air Conditioner, Free Wifi, Tv, Bathroom , Kitchem ',
  price : 500,
  photos: 'https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0',
  checkinTime: new Date('11-November-2021'),
  checkoutTime: new Date('12-Nov-2021'),
  rating: 5.6
  },
  {
    roomNumber: 2,
    roomType: 'Not Deluxe Room',
  amenties: 'Air Conditioner, Free Wifi, Tv, Bathroom , Kitchem ',
  price : 500,
  photos: 'https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0',
  checkinTime: new Date('12-November-2021'),
  checkoutTime: new Date('13-Nov-2021'),
  rating: 4.6
  },



  {
    roomNumber: 3,
    roomType: 'Not Deluxe Room',
  amenties: 'Air Conditioner, Free Wifi, Tv, Bathroom , Kitchem ',
  price : 500,
  photos: 'https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0',
  checkinTime: new Date('12-November-2021'),
  checkoutTime: new Date('13-Nov-2021'),
  rating: 3.6
  }];
  }


  selectedRoom !: RoomList;

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
  selectRoom(room: RoomList)
  {
    this.selectedRoom = room;
  }

  addRoom()
  {
    const room: RoomList = {
      roomNumber:4,
      roomType: 'Deluxe Room',
      amenties: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:'',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5

    };
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

}
