export const typeDefs = `#graphql
  type Game {
    id: ID! # The ! means that every field that comes after this MUST be provided
    title: String! # The type of title must always be a String
    platform: [String!]! # The type of platform must be an array of Strings
    reviews: [Review!] # The type of reviews must be an array of Reviews
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query { # Query type is root of all queries
    games: [Game]
    game(id: ID!): Game # Query arguments can be defined as input types
    reviews: [Review]
    review(id: ID!): Review 
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation { # Mutation type is root of all mutations
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput): Game
  }
  input AddGameInput { # Input types can be defined like this
    title: String!,
    platform: [String!]!
  }
  input EditGameInput { # Input types can be defined like this
    title: String,
    platform: [String!]
  }
`
