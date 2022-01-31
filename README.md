[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

# My Wedding App

This is an app that allows you to plan, managage, and organize the big day!  This app schedules out a day's event by start and end times and allows the user to create a series of labeled notes for each event. 

## Features

- login / create account page
- Time sorted event calendar with the ability to add custom events
- A list of notes for each event, to help keep the user organized

## How To Use

The app is deployed on Heroku:
https://my-wedding-appz.herokuapp.com/

First time users create an account on the opening page.  Existing users log in with their email and password.

![login page](/login.jpg)

Once logged in the user can add new events (deletion and modification in a future version)  
Time stamps are optional

![calendar page](/calendar.jpg)

For each event the user can click on the item in the list.  This will take them to a detailed notes page for that event.

![calendar page](/eventnotes.jpg)

## Authors

[GitAndrewCoffee](https://github.com/GitAndrewCoffee/)

[mwegter95](https://github.com/mwegter95)

[raymondspartz](https://www.github.com/raymondspartz)

## Technology used

- Javascript
- HTML
- CSS
- MYSQL
- Node.js
- Express
- bcrypt
- Sequelize
- Dotenv
- Handlebars    
- Express Session
- Morgan

## New Technology Used

NPM Package - Morgan

Documentation Site: https://www.npmjs.com/package/morgan

Morgan is a middleware that logs HTTP requests and errors.  It adds the calls automatically into your server app's console log and offers a direct logg access port as well.

This tool was implemented to make our console logs more consistant and easier to implement.