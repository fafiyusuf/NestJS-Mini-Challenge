import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new course', () => {
      const createCourseDto = {
        title: 'Intro to HTML',
        level: 'Beginner',
        duration: '4 weeks',
      };

      const course = service.create(createCourseDto);

      expect(course).toHaveProperty('id');
      expect(course.title).toBe(createCourseDto.title);
      expect(course.level).toBe(createCourseDto.level);
      expect(course.duration).toBe(createCourseDto.duration);
    });
  });

  describe('findAll', () => {
    it('should return an array of courses', () => {
      const createCourseDto = {
        title: 'Intro to HTML',
        level: 'Beginner',
        duration: '4 weeks',
      };

      service.create(createCourseDto);
      const courses = service.findAll();

      expect(Array.isArray(courses)).toBe(true);
      expect(courses.length).toBe(1);
    });

    it('should return an empty array when no courses exist', () => {
      const courses = service.findAll();
      expect(courses).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return a course by id', () => {
      const createCourseDto = {
        title: 'Intro to HTML',
        level: 'Beginner',
        duration: '4 weeks',
      };

      const createdCourse = service.create(createCourseDto);
      const foundCourse = service.findOne(createdCourse.id);

      expect(foundCourse).toEqual(createdCourse);
    });

    it('should throw NotFoundException when course is not found', () => {
      expect(() => service.findOne('non-existent-id')).toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a course', () => {
      const createCourseDto = {
        title: 'Intro to HTML',
        level: 'Beginner',
        duration: '4 weeks',
      };

      const createdCourse = service.create(createCourseDto);
      const updateCourseDto = { title: 'Advanced HTML' };

      const updatedCourse = service.update(createdCourse.id, updateCourseDto);

      expect(updatedCourse.title).toBe('Advanced HTML');
      expect(updatedCourse.level).toBe(createCourseDto.level);
      expect(updatedCourse.duration).toBe(createCourseDto.duration);
    });

    it('should throw NotFoundException when updating non-existent course', () => {
      expect(() =>
        service.update('non-existent-id', { title: 'Test' }),
      ).toThrow(NotFoundException);
    });
  });

  describe('delete', () => {
    it('should delete a course', () => {
      const createCourseDto = {
        title: 'Intro to HTML',
        level: 'Beginner',
        duration: '4 weeks',
      };

      const createdCourse = service.create(createCourseDto);
      service.delete(createdCourse.id);

      expect(() => service.findOne(createdCourse.id)).toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when deleting non-existent course', () => {
      expect(() => service.delete('non-existent-id')).toThrow(
        NotFoundException,
      );
    });
  });
});
