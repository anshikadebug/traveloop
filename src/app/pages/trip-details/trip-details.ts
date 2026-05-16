import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './trip-details.html',
  styleUrls: ['./trip-details.css']
})
export class TripDetails {

  trip:any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ){}

  ngOnInit(){

    const id =
    this.route.snapshot.paramMap.get('id');

    this.http.get<any>(

      `http://localhost:3000/trip/${id}`

    ).subscribe({

      next:(response)=>{

        this.trip = response;

      },

      error:(error)=>{

        console.log(error);

      }

    });

  }

}