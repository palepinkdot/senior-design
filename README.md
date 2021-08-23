# :paw_prints: Find-a-Pet

Senior Design repo for group 9

# Getting Started

After cloning the repo, go ahead and enter the `server` and `web` directories in separate terminal windows in VSCode. Open two terminal windows in the server directory. This makes sense later.

In either one of the `server` windows, run `yarn install` and the in the `web` window, also run `yarn install`.

In first the `server` window, run `yarn watch`, in the second run `yarn dev`, and in the `web` window, run `yarn dev` as well to get the development environment up and running.

Running `yarn watch` listens for changes to the server files and compiles them to the `server/dist` folder so the changes are live.

# Development

## Front End

To make changes to the front end, edit the `web` directory.

### Adding Pages

To add a page that a user can navigate to add a `.tsx` file in the `pages` directory.

### Components

React uses components located in the `components` directory. Think of this as brinigng HTML into you TS/JS files. You reference components in the `page.tsx` file to load them. This simplifies the way we can use statis components. Examples being the Footer, NavBar, and whatever else we would need to reference on multiple pages or to declutter the page file itself.

### Communicating with the backend

To communicate with the backend of the app we use GraphQL. You can see examples of what this looks like in the `graphql` directory.

- The `query` folder is where all the queries are kept, these only request (**query**) inforamtion from the database.
- The `mutiations` folder is where all the mutations are kept, these modify (**mutate**) data on the database.
- The `fragments` fodler is similar to the components folder, these are all fragments of other queries and mutations.

Now, on complie these are generated in a file located at `./web/src/generated/graphql.tsx` where they can be referenced in the required files. See `./web/src/components/LoginCard.tsx` for a good example of how a query works and `./web/src/components/RegisterCard.tsx` for a good example of how a mutation works.
