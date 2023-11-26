# Blog API

## Data Model

Define a simple data model for a blog application with the following entities:

- User
- Post
- Comment

## Feature

### Authenticate

- [ ] New user shall sign up with (at least) email and password
- [ ] User shall login with registered email and correct password
- [ ] Error response readable text (This username already exists, Incorrect username or password)
- [ ] (Optional) email and password validation
  - [ ] Valid email
  - [ ] Valid password that
    - [ ] Contain at least 8 characters
    - [ ] Contain at least 1 uppercase character
    - [ ] Contain at least 1 numeric character
- [ ] (Optional) The user shall receive the signup email to confirm that the user is the owner of email

### Middleware

- [ ] Every requests shall be logged by logging middleware. (Use Pino as a custom logger)
- [ ] Protect authentication-required routes using middleware (Check request's header or cookies - depends on your design choice)

### Post

- [ ] Registered user shall get the specific post with comments
- [ ] Registered user shall list the posts with comments
  - [ ] (Optional) pagination
- [ ] Registered user shall create a post with only text input
  - [ ] (Optional) Registered user shall upload an image on the post before posting
- [ ] Registered user shall edit the post
- [ ] Registered user shall delete the post (soft delete)

### Comment

- [ ] Registered user shall create a comment under the post
  - [ ] (Optional) Registered user shall upload an image on the comment before commenting
  - [ ] Registered user shall edit the post
  - [ ] Registered user shall delete the post (soft delete)

### Dashboard

- [ ] Registered user shall list all of their comments on every post given a date range (from=Date&to=Date)
  - [ ] (Optional) pagination
  - [ ] Registered user shall list all of their deleted posts
    - [ ] (Optional) pagination
  - [ ] Registered user shall recover their deleted posts
