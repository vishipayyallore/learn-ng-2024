import {Request, Response} from 'express';
import {COURSES} from '../src/app/data/courses-data';
import { Course } from '../src/app/models/course';


export function getAllCourses(req: Request, res: Response) {
    res.status(200).json({payload: Object.values(COURSES)});
}


export function getCourseById(req: Request, res: Response) {
    const courseId = req.params['id'];

    const courses: Course[] = Object.values(COURSES);

    const course = courses.find(course => course.id == +courseId);

    res.status(200).json(course);
}