# COVID Sonification

## Goal

- The goal of this project was to visually and auditorily present the spread of coronavirus over time through data visualization and data sonification

## What is Data Sonification

- Process of translating data into sound using sonification

## Features

- User can see and hear data for selected dates
- User can see and hear the data of selected countries for their reported cases, deaths and recoveries
- User can register and log in to save their selected settings such as countries, date range and day interval as compositions

## Composition

- Composition is created from two data points producing the sound: daily cases and daily deaths. Each country is mapped to a note and makes a sound based on the day’s reported cases and deaths

- The volume of each note is determined by the number of new cases and the number of daily deaths are mapped to a delay effect on each synthesizer - higher number of deaths result in a more rapid and audible echo

## Visuals

- Data shown on the map corresponds to the number of daily cases for the country and the size of the circle is relative to other selected countries’ daily cases

## Dataset

- Data is fetched from COVID-19 API which provides regularly updated, time stamped data for individual countries

- The data from this API only provides a total number of cases, deaths and recoveries to date so we created an algorithm to calculate the number of new cases, deaths and recoveries

- Once the data has been processed, we create an array with all the countries separated by day. Each day is then fed to both the sound and visual engines to produce visualization and composition

## User Experience

- We wanted to convey the severity of the spread of coronavirus and its effects so that the users could visually and auditorily experience and compare how the coronavirus is affecting different countries around the world

## Tech Stack

- Front End - React
- Back End - Node, Express
- Libraries/Dependencies - React Router, SASS, Bootstrap, Axios, Moment, Topojson, bcrypt
- Data Visualization - D3.js
- Data Sonification - Tone.js

## Screenshots

!["screenshot of homepage"](https://github.com/cangoman/covid-sonification/blob/master/client/src/assets/screenshots/01_home.png?raw=true)

!["screenshot of dashboard"](https://github.com/cangoman/covid-sonification/blob/master/client/src/assets/screenshots/02_dashboard.png?raw=true)

## Demo

[https://covid-sonification.netlify.app/](https://covid-sonification.netlify.app/)
