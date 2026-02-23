import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({
    description: 'The title of the course',
    example: 'Intro to HTML',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The difficulty level of the course',
    example: 'Beginner',
  })
  @IsNotEmpty()
  @IsString()
  level: string;

  @ApiProperty({
    description: 'The duration of the course',
    example: '4 weeks',
  })
  @IsNotEmpty()
  @IsString()
  duration: string;
}
