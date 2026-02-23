# Course API

A simple RESTful API built with NestJS for managing courses. This project includes full CRUD operations, DTO validation, Swagger documentation, and unit tests.

## 🚀 Features

- ✅ **GET /courses** - Get all courses
- ✅ **GET /courses/:id** - Get a single course by ID
- ✅ **POST /courses** - Create a new course
- ✅ **PUT /courses/:id** - Update an existing course
- ✅ **DELETE /courses/:id** - Delete a course
- ✅ **DTO Validation** using class-validator
- ✅ **Swagger Documentation** at `/docs`
- ✅ **Proper HTTP Status Codes** (200, 201, 204, 400, 404)
- ✅ **Unit Tests** for the service layer
- ✅ **In-memory storage** (no database required)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **pnpm** (or npm/yarn)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fafiyusuf/NestJS-Mini-Challenge.git
   cd NestJS-Mini-Challenge
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

## 🏃 Running the Application

### Development Mode
```bash
pnpm run start:dev
```

The API will be available at: `http://localhost:3000`

### Production Mode
```bash
pnpm run build
pnpm run start:prod
```

### Standard Mode
```bash
pnpm run start
```

## 📚 API Documentation

Once the application is running, you can access the **Swagger documentation** at:

```
http://localhost:3000/docs
```

This provides an interactive interface to test all endpoints.

## 🔌 API Endpoints

### Get All Courses
```http
GET /courses
```

**Response:** `200 OK`
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Intro to HTML",
    "level": "Beginner",
    "duration": "4 weeks"
  }
]
```

### Get Single Course
```http
GET /courses/:id
```

**Response:** `200 OK` or `404 Not Found`

### Create Course
```http
POST /courses
Content-Type: application/json

{
  "title": "Intro to HTML",
  "level": "Beginner",
  "duration": "4 weeks"
}
```

**Response:** `201 Created`
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Intro to HTML",
  "level": "Beginner",
  "duration": "4 weeks"
}
```

**Validation:**
- `title` (required, string)
- `level` (required, string)
- `duration` (required, string)

### Update Course
```http
PUT /courses/:id
Content-Type: application/json

{
  "title": "Advanced HTML"
}
```

**Response:** `200 OK` or `404 Not Found`

### Delete Course
```http
DELETE /courses/:id
```

**Response:** `204 No Content` or `404 Not Found`

## 🧪 Testing

### Run Unit Tests
```bash
pnpm run test
```

### Run Tests with Coverage
```bash
pnpm run test:cov
```

### Run E2E Tests
```bash
pnpm run test:e2e
```

## 📁 Project Structure

```
src/
├── courses/
│   ├── dto/
│   │   ├── create-course.dto.ts    # DTO for creating courses
│   │   └── update-course.dto.ts    # DTO for updating courses
│   ├── interfaces/
│   │   └── course.interface.ts     # Course interface
│   ├── courses.controller.ts       # REST endpoints
│   ├── courses.service.ts          # Business logic
│   ├── courses.service.spec.ts     # Unit tests
│   └── courses.module.ts           # Module definition
├── app.module.ts                   # Root module
└── main.ts                         # Application entry point
```

## 🔧 Technologies Used

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Typed JavaScript
- **class-validator** - Decorator-based validation
- **class-transformer** - Object transformation
- **Swagger/OpenAPI** - API documentation
- **Jest** - Testing framework
- **pnpm** - Package manager

## 📝 Example Usage

### Using cURL

**Create a course:**
```bash
curl -X POST http://localhost:3000/courses \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Intro to HTML",
    "level": "Beginner",
    "duration": "4 weeks"
  }'
```

**Get all courses:**
```bash
curl http://localhost:3000/courses
```

**Get a specific course:**
```bash
curl http://localhost:3000/courses/{id}
```

**Update a course:**
```bash
curl -X PUT http://localhost:3000/courses/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Advanced HTML"
  }'
```

**Delete a course:**
```bash
curl -X DELETE http://localhost:3000/courses/{id}
```

## ✨ Validation Examples

### Valid Request ✅
```json
{
  "title": "Intro to HTML",
  "level": "Beginner",
  "duration": "4 weeks"
}
```

### Invalid Request ❌
```json
{
  "title": "",
  "level": "Beginner"
}
```
**Response:** `400 Bad Request` - Missing required fields

## 🎯 Bonus Features Implemented

- ✅ PUT /courses/:id (update functionality)
- ✅ DELETE /courses/:id (delete functionality)
- ✅ Swagger documentation at /docs
- ✅ Comprehensive unit tests

## 👨‍💻 Development

### Linting
```bash
pnpm run lint
```

### Format Code
```bash
pnpm run format
```

## 📧 Contact

For any questions or feedback, please contact: **careers@infnova.tech**

## 📄 License

This project is MIT licensed.

---

**Developed as part of the Infnova Careers Challenge**  
**Deadline:** Monday, Feb 23, 2026

