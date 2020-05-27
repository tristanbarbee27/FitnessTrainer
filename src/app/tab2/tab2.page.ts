import { Router } from '@angular/router';
import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  showClasses() {
    this.router.navigate(['/my-classes']);
  }

  isScrolling = false;

  postList = [
    {
      postID: 0,
      avatarImage: "data:image/png;base64,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",
      postTitle: "One Punch Combatives",
      postDate: "02-17-2020 4:16pm",
      postImage: "data:image/jpeg;base64,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",
      postContent: "Come try out our gym! This week we are starting up our knife defense courses!",
      iconStatus: 0,
      iconSrc: "/assets/weight-lifting-down.svg",
      numberOfLikes: 0,
    },
    {
      postID: 1,
      avatarImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0krYLWYECQ4O-7dE523vl7C6MYhPbhUWms-ybhIcz6Dqt3OFI&usqp=CAU",
      postTitle: "Kobra Kai",
      postDate: "03-23-2020 10:42am",
      postImage: "data:image/jpeg;base64,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",
      postContent: "Subscribe to any of our packages in the next week and get the week of Easter free! Gotta burn off all those calories you fatasses.",
      iconStatus: 0,
      iconSrc: "/assets/weight-lifting-down.svg",
      numberOfLikes: 0,
    },
    {
      postID: 2,
      avatarImage: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      postTitle: "Name/gym",
      postDate: "Date and time",
      postImage: "https://images-ext-2.discordapp.net/external/48aBTzrvhbaod5l__f8_F_xvyH1oBq-9R2cUc4Z5tXI/https/www.energwellness.com/wp-content/uploads/2015/11/shutterstock_266711579.jpg",
      postContent: "Keep close to Nature's heart... and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      iconStatus: 0,
      iconSrc: "/assets/weight-lifting-down.svg",
      numberOfLikes: 0,
    },
  ];

  scrollAction(e){
    if(e.detail.scrollTop > 0){
      this.isScrolling = true;
    }
    else{
      this.isScrolling = false;
    }
    console.log(this.isScrolling);
  }

  toggleIcon(zPostID){
    console.log(this.postList[zPostID]);
    if(this.postList[zPostID].iconStatus == 0){
      this.postList[zPostID].iconSrc = "/assets/weight-lifting-up.svg";
      this.postList[zPostID].numberOfLikes += 1;
      this.postList[zPostID].iconStatus = 1;
    }
    else{
      this.postList[zPostID].iconSrc = "/assets/weight-lifting-down.svg";
      this.postList[zPostID].numberOfLikes -= 1;
      this.postList[zPostID].iconStatus = 0;
    }
  }

  generateMorePosts(event) {
    setTimeout(() => {
      console.log('Done');
      this.postList.push(
        {
          postID: this.postList.length,
          avatarImage: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          postTitle: "Name/gym",
          postDate: "Date and time",
          postImage: "https://images-ext-2.discordapp.net/external/48aBTzrvhbaod5l__f8_F_xvyH1oBq-9R2cUc4Z5tXI/https/www.energwellness.com/wp-content/uploads/2015/11/shutterstock_266711579.jpg",
          postContent: "Keep close to Nature's heart... and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean.",
          iconStatus: 0,
          iconSrc: "/assets/weight-lifting-down.svg",
          numberOfLikes: 0,
        },
      );
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }
}
