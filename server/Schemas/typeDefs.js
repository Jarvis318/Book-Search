// Query` type:
//Make sure they are capitalized. Where i see require, I will use (!)
//For mongoDB, id is normally always required
// This .js file is for FETCHING data from the database.
const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount:Int
  }

  type Book {
  description: String!
  bookId: ID!
  image: String
  link: String
  title: String!
  authors:[String]
  }


  type Auth {
    token: ID!
    user: User
  }

  input BookData{
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
  authors:[String]
  }

  type Query {
    me: User
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookInput: BookData) : User
    removeBook(bookId: ID!) : User 
  }
`;



  
//     * `Mutation` type:

//       * `login`: Accepts an email and password as parameters; returns an `Auth` type.

//       * `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

//       * `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

//       * `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.

//     * `User` type:

//       * `_id`

//       * `username`

//       * `email`

//       * `bookCount`

//       * `savedBooks` (This will be an array of the `Book` type.)

//     * `Book` type:

//       * `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

//       * `authors` (An array of strings, as there may be more than one author.)

//       * `description`

//       * `title`

//       * `image`

//       * `link`

//     * `Auth` type:

//       * `token`

//       * `user` (References the `User` type.)
module.exports = typeDefs;