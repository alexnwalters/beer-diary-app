# Beer Diary

A React app that allows users to save a diary of beer reviews.

Live Demo: [Beer Diary](https://beer-diary-app.now.sh/)

## Setup

Download and launch Express server found at [beer-dairy-api](https://github.com/alexnwalters/beer-diary-api).  You will need request a key for the third-party api at [BreweryDB](https://sandbox-api.brewerydb.com/v2/). 

## Using App

### Login / Signup

Users will need to sign up and/or login to access their diary and have the option to review beers returned by a search. Uses JWT Authentication.

Sample Login

```
Username: Testuser
Password: Testuser1!
```

### Diary

The diary page will list the user's reviews.  They can update old reviews or even delete them from their diary.

### Search / Results

The search bar allows users to search for a beer using a third-party api at [BreweryDB](https://sandbox-api.brewerydb.com/v2/). 

The returned beers results allow the user to select a beer that they wish to review, they have the option of adding a beer if they can't find it from the search.

### Review Form

The review form will ask the user to select the aroma, taste, color, and then rate the drinkability as well as an overall rating of the beer between 1 - 5.  There is also an optional notes field.

### Beer Info Page

This page will display a single selected beer with the user's review if available, but it will also display and other users have reviewed the selected beer.

## Skills

* HTML, CSS, JSX
* React Router
* Context
* Jest smoke tests
