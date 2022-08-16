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
    - Login: `/api/auth/login` 
    - Signup: `/api/auth/signup`
  - [Categories](https://github.com/bharati-21/quizardry-server/blob/main/routes/categories.js):
    - All categories: `/api/categories`
    - Single category: `/api/categories/:categoryId`
  - [Quizzes](https://github.com/bharati-21/quizardry-server/blob/main/routes/quizzes.js):
    - All quizzes: `/api/quizzes`
    - Single quiz: `/api/quizzes/:quizId`
  - [Users](https://github.com/bharati-21/quizardry-server/blob/main/routes/users.js):
    - Update quiz attempt: `/api/users/:userId/quizAttempts`
  
