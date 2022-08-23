# Quizardry
Backend code repository for [Quizardry app](https://github.com/bharati-21/quizardry)

## Tech Stack
- Express.js
- Node.js
- MongoDB
- Mongoose

## Features:
- This code has following routes:
  - [Auth](https://github.com/bharati-21/quizardry-server/blob/main/routes/auth.js):
    - Login: `[POST] - /api/auth/login` 
    - Signup: `[POST] - /api/auth/signup`
  - [Categories](https://github.com/bharati-21/quizardry-server/blob/main/routes/categories.js):
    - `[GET] - /api/categories`
    - `[GET] - /api/categories/:categoryId`
  - [Quizzes](https://github.com/bharati-21/quizardry-server/blob/main/routes/quizzes.js):
    - `[GET, POST] - /api/quizzes`
    - `[GET, DELETE] - /api/quizzes/:quizId`
  - [Users](https://github.com/bharati-21/quizardry-server/blob/main/routes/users.js):
    - `[POST] - /api/users/:userId/quizAttempts`
  
