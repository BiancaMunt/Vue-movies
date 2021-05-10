# TvShows
This app displays popular tv shows categorized by genres.

On click of a tv show, more details can be seen such as summary, rating, official website.

The app was created using vue-cli and it uses Vuex for state management and Jest for unit testing.

Bootstrap and BootstrapVue have been used for styling to help make the app mobile-responsive.

# Detailed View
The first page is the main page where users can see the shows retrieve from the tvMaze API, organized by categories and sorted by rating - having the best rated shows appear first.

The genres were retrieved from the shows API. There were duplicate genres, but in the state the genres array is an array of all the unique genres and therefore on the main page there are in total 22 genres that can also be seen in the Vuex store.

Clicking on a show redirects to a different path with that show's id - this was done using the router-links. From this point the user can easily navigate back to the homepage, either by using backspace or by clicking on 'tvShows' which is the Home route.

Searching for a show by name retrieves matching results, a more advanced solution is to come in the future as for now the filtered results were generated with the help of v-for and v-if in the html template of the Shows component. In the future I wish to add a computed function that will also improve the layout and make the app more divisible into reusable components.

Clicking on Clear, clears the search and the input query.

The data is stored in a Vuex store. Having the data centralized in the store, makes the data easily accesible and reusable in the components. Accesing getters and actions from within the components was done using mapGetters and mapActions. I have tried to use the store as much as possible to be able to keep the components clean.

All unit tests pass, yet more testing is required to achieve full coverage.
In the tests, router view and router link have been mocked, yet further investigation is needed as one error related to it still appears in the console when running tests.
Accesibility testing has been setup but for now it is only for the App unit testing.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
### Future updates
Testing all the components for accessibility, using jest-axe and screen readers.

Make use of the Intersection Observer API to improve performance.

Further divide the app into smaller components.

Add unit tests for the store and improve existing ut's. Add end to end tests to test the app from the user's perspective.

Fix minor bugs and update layout.
