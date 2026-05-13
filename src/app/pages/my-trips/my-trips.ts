import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-trips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-trips.html',
  styleUrl: './my-trips.css'
})
export class MyTrips implements OnInit {

  trips: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
console.log('MY TRIPS PAGE LOADED');
    this.fetchTrips();

  }

  fetchTrips(){

  console.log('FETCH FUNCTION RUNNING');

  this.http.get<any[]>(
    'http://localhost:3000/trips'
  ).subscribe({

    next: (response) => {

      console.log('API RESPONSE');

      console.log(response);

      this.trips = response;

    },

    error: (error) => {

      console.log('API ERROR');

      console.log(error);

    }

  });

}

}