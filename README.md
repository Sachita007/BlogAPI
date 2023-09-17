# Project: BlogApi
BlogApi is a comprehensive backend system designed for bloggers and readers alike. It enables users to register, login, create, read, and manage blog posts. Additionally, there is a comment system allowing users to interact with the content. This API provides a solid foundation for any blogging platform.


#### Quick Links:

- [Running the Project Locally](#running-the-project-locally)
- [API Documentation](#api-documentation)
  - [User Registration](#end-point-register)
  - [User SignIn](#end-point-signin)
  - [Add Blogs](#end-point-add-blogs)
  - [Get All Blogs](#end-point-get-all-blogs)
  - [Get Blog By Id](#end-point-get-blog-by-id)
  - [Update Blog](#end-point-update-blog)
  - [Add Comments](#end-point-add-comments)
  - [Delete Comments](#end-point-delete-comments)

### Running the Project Locally

Follow these steps to set up and run the project on your local machine:

#### 1. Prerequisites

Before you proceed, ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a connection string to a remote MongoDB database)
- Git (Optional, for cloning the repository)

#### 2. Clone the Repository

To get a local copy of the repository, open your terminal and run:

```
git clone [REPO_URL]
```

Replace [REPO_URL] with the URL of your Git repository.

#### 3. Navigate to Project Directory

Once cloned, navigate to the project directory:

```
cd [PROJECT_DIRECTORY_NAME]
```

Replace [PROJECT_DIRECTORY_NAME] with the name of the directory where your project is located.

#### 4. Install Dependencies

Now, install all the necessary project dependencies using npm:

```
npm install
```

#### 5. Setup Environment Variables

To configure the environment, create a .env file in the project's root directory. Add the necessary configurations:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXP=set_jwt_expiry
```

Make sure to replace the placeholders with your actual values.

####6. Start the Development Server
With everything set up, start the development server:

```
npm start
```

Your server should now be running at http://localhost:3000/ (or whatever port you specified in your .env).

# API Documentation

# 📁 Collection: User 


## End-point: Register
This endpoint allows new users to register on the BlogApi platform by providing necessary details.
### Method: POST
>```
>http://localhost:3000/app/v1/users/register
>```
### Body (**raw**)

```json
{
    "username": "test2",
    "email": "test2@gmail.com",
    "password": "12345678",
    "fullName": "Test User",
    "profilePic": "https://example.com/profiles/john_doe.jpg"
  
  }
```

### Response: 200
```json
{
    "success": "true",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDZlOGMzN2RlNzJkNDFjYWJhMGVhYSIsImlhdCI6MTY5NDk1MTYyMCwiZXhwIjoxNjk1MjEwODIwfQ.cOxiaJWxKTsxrRpGrHXwBFXlkkC2EYT6IR056UrfvbI"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Log In
Allows users to log in to their accounts. On successful authentication, a token will be provided for further secure operations.
### Method: POST
>```
>{{URL}}/app/v1/users/login
>```
### Body (**raw**)

```json
{
    "email":"test@gmail.com",
    "password":"12345678"
}
```

### Response: 200
```json
{
    "success": "true",
    "token": "<< TOKEN >>"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Blogs 


## End-point: Add Blogs
Authenticated users can use this endpoint to create a new blog post by providing the required details.

**NOTE**: You should be loged in for adding Blog
### Method: POST
>```
>{{URL}}/app/v1/blogs
>```
### Body (**raw**)

```json
 {
    "title": "Demystifying GraphQL",
    "author": "65063c16e680bfef2b2a2287",  // This is a dummy ObjectId
    "content": "GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It offers a more efficient, powerful, and flexible alternative to REST...",
    "tags": ["GraphQL", "API", "Query Language"]
  }
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|<< TOKEN >>|string|


### Response: 200
```json
{
    "success": "true",
    "data": {
        "title": "Demystifying GraphQL",
        "author": "6506489fa1d43eb809521bce",
        "content": "GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It offers a more efficient, powerful, and flexible alternative to REST...",
        "tags": [
            "GraphQL",
            "API",
            "Query Language"
        ],
        "_id": "6506e8e57de72d41caba0ead",
        "date": "2023-09-17T11:54:13.504Z",
        "comments": [],
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Blogs
This endpoint fetches a list of all blog posts present on the platform.
### Method: GET
>```
>{{URL}}/app/v1/blogs
>```
### Response: 200
```json
{
    "success": "true",
    "data": [
        {
            "_id": "65064c72f58576146bdba92b",
            "title": "Introduction to Node.js (Update)",
            "author": "65063c16e680bfef2b2a2287",
            "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the development of scalable network applications...",
            "comments": [
                {
                    "author": "65063c16e680bfef2b2a2287",
                    "text": "I found this very informative. Keep up the good work!",
                    "_id": "6506d2763f9497f64e0893e3",
                    "date": "2023-09-17T10:18:30.775Z"
                },
                {
                    "author": "65063c16e680bfef2b2a2287",
                    "text": "I found this very informative. Keep up the good work!",
                    "_id": "6506d4713f9497f64e0893e8",
                    "date": "2023-09-17T10:26:57.352Z"
                },
                {
                    "author": "6506489fa1d43eb809521bce",
                    "text": "I found this very informative. Keep up the good work!",
                    "_id": "6506e1de3a4c1c19a0a7bac6",
                    "date": "2023-09-17T11:24:14.245Z"
                }
            ],
            "tags": [
                "Node.js",
                "JavaScript",
                "Backend"
            ],
            "date": "2023-09-17T00:46:42.873Z",
            "__v": 0
        },
        {
            "_id": "65064df61b4ca14553f609f5",
            "title": "Deep Dive into MongoDB",
            "author": "6506489fa1d43eb809521bce",
            "content": "MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability. It works on the concept of collections and documents...",
            "tags": [
                "MongoDB",
                "Database",
                "NoSQL"
            ],
            "date": "2023-09-17T00:53:10.445Z",
            "comments": [],
            "__v": 0
        },
        {
            "_id": "65064e181b4ca14553f609f7",
            "title": "Demystifying GraphQL",
            "author": "65063c16e680bfef2b2a2287",
            "content": "GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It offers a more efficient, powerful, and flexible alternative to REST...",
            "tags": [
                "GraphQL",
                "API",
                "Query Language"
            ],
            "date": "2023-09-17T00:53:44.001Z",
            "comments": [],
            "__v": 0
        },
        {
            "_id": "6506e8e57de72d41caba0ead",
            "title": "Demystifying GraphQL",
            "author": "6506489fa1d43eb809521bce",
            "content": "GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It offers a more efficient, powerful, and flexible alternative to REST...",
            "tags": [
                "GraphQL",
                "API",
                "Query Language"
            ],
            "date": "2023-09-17T11:54:13.504Z",
            "comments": [],
            "__v": 0
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Blog By Id
Retrieves the complete details of a specific blog post identified by its unique ID.
### Method: GET
>```
>{{URL}}/app/v1/blogs/65064c72f58576146bdba92b
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|<< TOKEN >>|string|


### Response: 200
```json
{
    "success": "true",
    "data": {
        "_id": "65064c72f58576146bdba92b",
        "title": "Introduction to Node.js (Update)",
        "author": "65063c16e680bfef2b2a2287",
        "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the development of scalable network applications...",
        "comments": [
            {
                "author": "65063c16e680bfef2b2a2287",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506d2763f9497f64e0893e3",
                "date": "2023-09-17T10:18:30.775Z"
            },
            {
                "author": "65063c16e680bfef2b2a2287",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506d4713f9497f64e0893e8",
                "date": "2023-09-17T10:26:57.352Z"
            },
            {
                "author": "6506489fa1d43eb809521bce",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506e1de3a4c1c19a0a7bac6",
                "date": "2023-09-17T11:24:14.245Z"
            }
        ],
        "tags": [
            "Node.js",
            "JavaScript",
            "Backend"
        ],
        "date": "2023-09-17T00:46:42.873Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Blog
Allows the author to modify certain details of a blog post they have created. This endpoint expects an authenticated request.

NOTE: Only author can update or delete their blog
### Method: PATCH
>```
>{{URL}}/app/v1/blogs/65064c72f58576146bdba92b
>```
### Body (**raw**)

```json
{
    "title": "Introduction to Node.js (Update)"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|<< TOKEN >>|string|


### Response: 200
```json
{
    "success": "true",
    "data": {
        "_id": "65064c72f58576146bdba92b",
        "title": "Introduction to Node.js (Update)",
        "author": "65063c16e680bfef2b2a2287",
        "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the development of scalable network applications...",
        "comments": [
            {
                "author": "65063c16e680bfef2b2a2287",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506d2763f9497f64e0893e3",
                "date": "2023-09-17T10:18:30.775Z"
            },
            {
                "author": "65063c16e680bfef2b2a2287",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506d4713f9497f64e0893e8",
                "date": "2023-09-17T10:26:57.352Z"
            },
            {
                "author": "6506489fa1d43eb809521bce",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506e1de3a4c1c19a0a7bac6",
                "date": "2023-09-17T11:24:14.245Z"
            }
        ],
        "tags": [
            "Node.js",
            "JavaScript",
            "Backend"
        ],
        "date": "2023-09-17T00:46:42.873Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Blog
Allows the author to delete blog post they have created. This endpoint expects an authenticated request.

NOTE: Only author can update or delete their blog
### Method: DELETE
>```
>{{URL}}/app/v1/blogs/65064ddd1b4ca14553f609f3
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|<< TOKEN >>|string|


### Response: 200
```json
{
    "success": "true",
    "data": {
        "_id": "65064ddd1b4ca14553f609f3",
        "title": "Mastering Express.js",
        "author": "6506489fa1d43eb809521bce",
        "content": "Express.js is a minimal and flexible Node.js web application framework that provides robust tools for web and mobile applications...",
        "tags": [
            "Express.js",
            "Web Development",
            "Node.js"
        ],
        "date": "2023-09-17T00:52:45.812Z",
        "comments": [],
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Comments 


## End-point: Add Comments
Authenticated users can add comments to a specific blog post to engage in discussions or provide feedback.

NOTE: You should be loged In for writting the blog
### Method: POST
>```
>{{URL}}/app/v1/blogs/65064c72f58576146bdba92b/comments
>```
### Body (**raw**)

```json
{
    "text":"I found this very informative. Keep up the good work!"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|<< TOKEN >>|string|


### Response: 200
```json
{
    "success": "true",
    "data": {
        "_id": "65064c72f58576146bdba92b",
        "title": "Introduction to Node.js (Update)",
        "author": "65063c16e680bfef2b2a2287",
        "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the development of scalable network applications...",
        "comments": [
            {
                "author": "65063c16e680bfef2b2a2287",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506d2763f9497f64e0893e3",
                "date": "2023-09-17T10:18:30.775Z"
            },
            {
                "author": "65063c16e680bfef2b2a2287",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506d4713f9497f64e0893e8",
                "date": "2023-09-17T10:26:57.352Z"
            },
            {
                "author": "6506489fa1d43eb809521bce",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506e166f4ea561652039154",
                "date": "2023-09-17T11:22:14.721Z"
            },
            {
                "author": "6506489fa1d43eb809521bce",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506e1de3a4c1c19a0a7bac6",
                "date": "2023-09-17T11:24:14.245Z"
            }
        ],
        "tags": [
            "Node.js",
            "JavaScript",
            "Backend"
        ],
        "date": "2023-09-17T00:46:42.873Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Comments
StartFragmentllows the commenter or the blog's author to delete a comment. This operation requires authentication.EndFragment  
  
NOTE: Comments are onle deleted by comment writter and Blog owner
### Method: DELETE
>```
>{{URL}}/app/v1/blogs/65064c72f58576146bdba92b/comments/6506e166f4ea561652039154
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|<< TOKEN >>|string|


### Response: 200
```json
{
    "success": "true",
    "data": {
        "_id": "65064c72f58576146bdba92b",
        "title": "Introduction to Node.js (Update)",
        "author": "65063c16e680bfef2b2a2287",
        "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the development of scalable network applications...",
        "comments": [
            {
                "author": "65063c16e680bfef2b2a2287",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506d2763f9497f64e0893e3",
                "date": "2023-09-17T10:18:30.775Z"
            },
            {
                "author": "65063c16e680bfef2b2a2287",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506d4713f9497f64e0893e8",
                "date": "2023-09-17T10:26:57.352Z"
            },
            {
                "author": "6506489fa1d43eb809521bce",
                "text": "I found this very informative. Keep up the good work!",
                "_id": "6506e1de3a4c1c19a0a7bac6",
                "date": "2023-09-17T11:24:14.245Z"
            }
        ],
        "tags": [
            "Node.js",
            "JavaScript",
            "Backend"
        ],
        "date": "2023-09-17T00:46:42.873Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________

