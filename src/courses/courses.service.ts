import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
  private courses: Course[] = [];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: string): Course {
    const course = this.courses.find((course) => course.id === id);
    if (!course) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
    return course;
  }

  create(createCourseDto: CreateCourseDto): Course {
    const newCourse: Course = {
      id: uuidv4(),
      ...createCourseDto,
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  update(id: string, updateCourseDto: UpdateCourseDto): Course {
    const courseIndex = this.courses.findIndex((course) => course.id === id);
    if (courseIndex === -1) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
    
    const updatedCourse = {
      ...this.courses[courseIndex],
      ...updateCourseDto,
    };
    this.courses[courseIndex] = updatedCourse;
    return updatedCourse;
  }

  delete(id: string): void {
    const courseIndex = this.courses.findIndex((course) => course.id === id);
    if (courseIndex === -1) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
    this.courses.splice(courseIndex, 1);
  }
}
