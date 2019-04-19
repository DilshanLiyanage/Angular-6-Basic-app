import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { AuthorService } from './author.service';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';


@Component({
    selector: 'courses',
    template: `
    <app-course></app-course>
    <app-author></app-author>
    <br/>
    `
})
export class CoursesComponent {
    constructor() {

    }
}