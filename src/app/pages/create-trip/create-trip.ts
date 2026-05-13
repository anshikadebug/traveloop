import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-trip.html',
  styleUrl: './create-trip.css'
})
export class CreateTrip {

  trip_name = '';
  description = '';
  start_date = '';
  end_date = '';

  constructor(private http: HttpClient){}

  createTrip(){

    alert('Button Clicked ✅');

    const tripData = {

      user_id: 1,
      trip_name: this.trip_name,
      description: this.description,
      start_date: this.start_date,
      end_date: this.end_date

    };

    this.http.post(
      'http://localhost:3000/create-trip',
      tripData
    ).subscribe({

      next: (response) => {

        console.log(response);

        alert('Trip Created Successfully ✅');

      },

      error: (error) => {

        console.log(error);

        alert('API ERROR ❌');

      }

    });

  }

}