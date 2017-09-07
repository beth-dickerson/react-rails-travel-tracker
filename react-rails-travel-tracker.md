# React Rails Travel Tracker

Who doesn't love to travel. Let's build a React on Rails Application to see a list of locations we've travelled to.

## Setup

To get started, run the following commands to start the Rails server:

```no-highlight
$ bundle install
$ rake db:create
$ rails s
```

Then, in a separate terminal window, run the following commands to start up React:

```no-highlight
$ npm install
$ npm start
```

## Meets Expectations Requirements

**The goal of this challenge is to build an index page for locations.**

```no-highlight
As a user
I want to see a list of locations
So I can see all the cool places I've been to
```

Acceptance Criteria:

* The root path takes you to a static page with a `<div id="app"></div>`. This is
where React is integrated, and you should see "Boo yaa" rendered in an `h1` tag from
`react/src/main.js`.

* A Location Model should be created and it should have one attribute, `name`.

* Create a Route and an API Controller for the `index` of Locations. This API
endpoint should return an array of Location objects in JSON format. Visiting
`localhost:3000/api/v1/locations` should return the desired result.

* Create a React application that lists out each location. Use `fetch` and
`componentDidMount` to access the API endpoint from the previous step. After, set
the retrieved locations to the application's state to render them on the page.

**GOOD LUCK!**
