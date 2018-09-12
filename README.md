### How to run locally:

1. Clone the repo with:

    `git clone https://github.com/ktheriault/metaweather`

2. Install React packages with:

    `npm install`

    You may also have to install Node or NPM.

3. Build the frontend with:

    `npm run build`

4. Run the backend with:

    `node server.js`

    This keeps running in the Terminal.

5. The web page is at http://localhost:8080/.

### How to see the web page live:

1. Go to https://jobcase-metaweather.herokuapp.com/.

### Design decisions

I am running through an Express server because the Metaweather API doesn't allow CORS.

I'm using the "react-geolocated" library instead of an API call to "http://ip-api.com/json" because the Heroku site is HTTPS and can't mix HTTP with HTTPS.

### Nifty React features

* Responsive columns

    `app/components/App.js`

    The search bar will change based on the browser size.

* Function handlers

    `app/components/LocationSelection.js`

    `app/components/SavedResults.js`

    Useful when displaying a list of buttons.

* Stateless components

    `app/components/IPSearch.js`

    `app/components/LocationSelection.js`

    `app/components/SavedResults.js`

    `app/components/WeatherDisplay.js`

    React can be used for clean, presentational components.

* Wrapped components

    `app/components/IPSearch.js`

    Some libraries provide component wrappers so that your component has access to certain props.

* Redux

    `app/store.js`

    `app/reducers/`

    `app/actions/`

    `app/containers/`
    
    Redux is storage that can be used across the app. I'm using it to store data like `currentLocations` and `currentResult` so that the data can be loaded once and then shared between different components.

    You can see the state changing in a tab in Chrome Developer Tools with Redux DevTools: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en.

* Loading screens

    `app/components`

    Buttons are locked down while the site is loading so that the user can't make an API call while another one is happening. Since this app only uses one API, all of the components share an `isLoading` bool in Redux.
