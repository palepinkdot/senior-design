# :paw_prints: GetaPet

Senior Design repo for Group 9 @ University of Cincinnati

Name (@github / UC 6+2)

- Max Graman (@palepinkdot / gramanma)
- Kyle Marler (@DrSlugger / marlerkw)
- Torcato Vaz (@torserver / vaztb)
- Paramjyot Sandhu (@sandhups / sandhups)

# Getting Started

## Prerequisites

- [Redis](https://redis.io/topics/quickstart)
- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-packages-globally)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

After cloning the repo, go ahead and enter the `server` and `web` directories in separate terminal windows in VSCode. Open two terminal windows in the server directory. This makes sense later.

In either one of the `server` windows, run `yarn install` and the in the `web` window, also run `yarn install`.

In first the `server` window, run `yarn watch`, in the second run `yarn dev`, and in the `web` window, run `yarn dev` as well to get the development environment up and running.

Running `yarn watch` listens for changes to the server files and compiles them to the `server/dist` folder so the changes are live.

## Development :toolbox:

Do not commit directly to `main`. Eventually this will get set up to disawllow commits to main besides the DevOps.

### Best Practices

To make sure commits are not littered with intends, tabs, etc. make sure to use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) which will format the code for you on save, or if you prefer, on command. [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) will also give you syntax highlighting for Typescript. The [AirBnb Style Guide](https://github.com/airbnb/javascript) is a great resource to make sure the code we use and commit is clean. There is a way to make sire prettier formats using the AirBnb styling but it is not required. Another great resource is [ReactJS Docs](https://reactjs.org/docs/hello-world.html), especially if you have not used React.

### Pull Requests

Keeping the repository clean is one of my favorite things. To do this, branches will be titled as such:

- `fix(BRANCH_NAME)` for fixes
- `hotfix(BRANCH_NAME)` for hot-fixes, urget changes made straight to `dev`.
- `feature(BRANCH_NAME)` for new features.

## Front End :computer:

To make changes to the front end, edit the `./web/src` directory.

### Adding Pages :spiral_notepad:

To add a page that a user can navigate to add a `.tsx` file in the `pages` directory.

### Components :gear:

React uses components located in the `components` directory. Think of this as brinigng HTML into you TS/JS files. You reference components in the `page.tsx` file to load them. This simplifies the way we can use statis components. Examples being the Footer, NavBar, and whatever else we would need to reference on multiple pages or to declutter the page file itself.

### Communicating with the backend :link:

To communicate with the backend of the app we use GraphQL. You can see examples of what this looks like in the `graphql` directory.

- The `query` folder is where all the queries are kept, these only request (**query**) inforamtion from the database.
- The `mutiations` folder is where all the mutations are kept, these modify (**mutate**) data on the database.
- The `fragments` fodler is similar to the components folder, these are all fragments of other queries and mutations.

Now, on complie these are generated in a file located at `./web/src/generated/graphql.tsx` where they can be referenced in the required files. See `./web/src/components/LoginCard.tsx` for a good example of how a query works and `./web/src/components/RegisterCard.tsx` for a good example of how a mutation works.

## Back End :desktop_computer:

To make changes to the backend, edit the `./server/src` directory.

### Entites Explained

Using GraphQL with TypeORM can be confusing. Don't worry once you get the hang of it, it is pretty simple. Think of entites as tables in a database, this is shown well in `./server/src/entities/User.ts`. The example really speaks for itself and makes it clear what each annotation does. TD;DR: define your columns of a table in an entity `.tsx` file.

### Resolvers

Resolvers are what happens when we hit an endpoint. Each file in the resolvers directory is essentally an endpoint.

## Technology Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [URQL/Apollo](https://formidable.com/open-source/urql/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)
- [Redis](https://redis.io/)
- [Next.js](https://nextjs.org/)
- [TypeGraphQL](https://typegraphql.com/)
- [Chakra](https://chakra-ui.com/)

