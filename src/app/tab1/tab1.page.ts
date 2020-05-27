import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  gymList = [
    {
      "id" : 1,
      "name" : "Gym",
      "address1" : "1234 Street Road Ave.",
      "address2" : "City, State 54321",
      "chips" : [
        "#kickboxing",
        "#muaythai",
        "#jiujitsu"
      ],
      "avatar" : "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Mortal_Kombat_Logo.svg/1200px-Mortal_Kombat_Logo.svg.png"
    },
    {
      "id" : 2,
      "name" : "Gym",
      "address1" : "1234 Street Road Ave.",
      "address2" : "City, State 54321",
      "chips" : [
        "#karate",
        "#buttsex"
      ],
      "avatar" : "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Mortal_Kombat_Logo.svg/1200px-Mortal_Kombat_Logo.svg.png"
    },
    {
      "id" : 3,
      "name" : "Gym",
      "address1" : "1234 Street Road Ave.",
      "address2" : "City, State 54321",
      "chips" : [
        "#sausageparty",
        "#porn",
      ],
      "avatar" : "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Mortal_Kombat_Logo.svg/1200px-Mortal_Kombat_Logo.svg.png"
    },
  ];

  requestDetails(selectedID){
    this.router.navigate(['/gym-details', {id: selectedID}]);
  }

}
