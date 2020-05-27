import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.page.html',
  styleUrls: ['./class-detail.page.scss'],
})
export class ClassDetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  courses = [
    {//course1
      id: 0,
      title: "Course 1",
      showLessons: false,
      lessons: [
        {
          title: "Lesson 1",
          id: 0,
        },
        {
          title: "Lesson 2",
          id: 1,
        },
        {
          title: "Lesson 3",
          id: 2,
        },
        {
          title: "Lesson 4",
          id: 3,
        },
        {
          title: "Lesson 5",
          id: 4,
        },
      ]
    },
    {//course2
      id: 1,
      title: "Course 2",
      showLessons: false,
      lessons: [
        {
          title: "Lesson 1",
          id: 0,
        },
        {
          title: "Lesson 2",
          id: 1,
        },
        {
          title: "Lesson 3",
          id: 2,
        },
        {
          title: "Lesson 4",
          id: 3,
        },
        {
          title: "Lesson 5",
          id: 4,
        },
      ]
    }
  ];

  showAccordion = false;

  toggleList(id){
    this.courses[id].showLessons = !this.courses[id].showLessons;
  }

  navigateToLessonPage(cID, lID){
      this.router.navigate(['/lesson', {courseID: cID, lessonID: lID}]);
  }
}
