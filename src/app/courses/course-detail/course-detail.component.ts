import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  _courseService: CourseService = inject(CourseService);
  _activeRoute: ActivatedRoute = inject(ActivatedRoute);

  courseId: any;

  ngOnInit() {
    this.courseId = this._activeRoute.snapshot.paramMap.get('id');
    console.log(this._activeRoute.snapshot.paramMap.get('id'));

  }

}
