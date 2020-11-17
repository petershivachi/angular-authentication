import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-auth-events',
  templateUrl: './auth-events.component.html',
  styleUrls: ['./auth-events.component.css']
})
export class AuthEventsComponent implements OnInit {

  constructor(
    private eventsService: EventsService,
    private router: Router
    ) { }

  authEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ];
  
  ngOnInit(): void {
    this.eventsService.getAuthEvents()
    .subscribe(
      res => this.authEvents = res,
      error => {
        if (error instanceof HttpErrorResponse){
          if(error.status === 401){
            this.router.navigate(['/login'])
          }
        }
      }
    )
  }

}
