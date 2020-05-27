import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.page.html',
  styleUrls: ['./my-classes.page.scss'],
})
export class MyClassesPage implements OnInit {

  constructor(private router: Router) { }

  ShowClassDetails() {
    this.router.navigate(['/class-detail']);
  }

  MyClasses = [
    {
      image: "https://images-ext-2.discordapp.net/external/48aBTzrvhbaod5l__f8_F_xvyH1oBq-9R2cUc4Z5tXI/https/www.energwellness.com/wp-content/uploads/2015/11/shutterstock_266711579.jpg",
      title: "Gym 1",
      tags: [
        "Muay-Thai",
        "Basic Fitness",
      ]
    },
    {
      image: "https://images.squarespace-cdn.com/content/v1/5c92a010b7c92ce41e08ce46/1555599427641-3HGAK1OWR6SKMM77N00Z/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/barbell-black-and-white-black-and-white-791763.jpg?format=2500w",
      title: "Gym 2",
      tags: [
        "Kick-boxing",
        "Basic Fitness",
      ]
    },
  ];

  ngOnInit() {
  }

}
