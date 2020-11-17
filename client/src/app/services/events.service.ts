import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  private eventsUrl: "http://localhost:5000/api/events"
  private authEventsUrl: "http://localhost:5000/api/auth-events"

  getEvents(){
    return this.http.get<any>(this.eventsUrl);
  }

  getAuthEvents(){
    return this.http.get<any>(this.authEventsUrl);
  }
}
