import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-trip.html',
  styleUrl: './create-trip.css',
  
})
export class CreateTrip {
tripId:any = null;
  trip_name = '';
  description = '';
  start_date = '';
  end_date = '';
image_url = '';
getTripData(){

  this.http.get<any>(

    `http://localhost:3000/trip/${this.tripId}`

  ).subscribe({

    next:(response)=>{

      this.trip_name = response.trip_name;

      this.description = response.description;

      this.start_date = response.start_date
        .split('T')[0];

      this.end_date = response.end_date
        .split('T')[0];

      this.image_url = response.image_url;

    },

    error:(error)=>{

      console.log(error);

    }

  });

}

ngOnInit(){

  const user = localStorage.getItem('user');
this.tripId = this.route.snapshot.paramMap.get('id');

if(this.tripId){

  this.getTripData();

}
  if(!user){

    alert('Please Login First');

    this.router.navigate(['/login']);

  }

}

  constructor(
  private http: HttpClient,
  private router: Router,
  private route: ActivatedRoute
){}

  createTrip(){

    alert('Button Clicked ✅');
const user = JSON.parse(
  localStorage.getItem('user') || '{}'
);
    const tripData = {

      user_id: user.id,      
      trip_name: this.trip_name,
      description: this.description,
      start_date: this.start_date,
      end_date: this.end_date,
      image_url: this.image_url
    };

   if(this.tripId){

  this.http.put(

    `http://localhost:3000/update-trip/${this.tripId}`,

    tripData

  ).subscribe({

    next:()=>{

      alert('Trip Updated ✅');

      this.router.navigate(['/my-trips']);

    },

    error:(error)=>{

      console.log(error);

    }

  });

}

else{

  this.http.post(

    'http://localhost:3000/create-trip',

    tripData

  ).subscribe({

    next:()=>{

      alert('Trip Created ✅');

      this.router.navigate(['/my-trips']);

    },

    error:(error)=>{

      console.log(error);

    }

  });

}

  }

}