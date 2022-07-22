# Spotify Angular App

A simple spotify clone created using Angular 13, Bootstrap 5 and Spotify API.

An Angular app based on spotify.

## Working application
coming Soon.

## Features
     Spotify api
     Search
     Album
     Artists --> Top tracks/ Albums 
     Image verification
     Uri verification
     Spotify widgets (Embed).

## Principles
 components are following:
 
* OnPush Change Detection and async pipes: all components use observable and async pipe for rendering data without any single manual subscribe.
* Tree-shakable components, meaning each component will have a respective module.

## Setting the development enviorment
    git clone https://github.com/Amansingh-afk/Spotify--Clone.git
 cd angular-spotify

npm start for starting Angular web application

The app should run on http://localhost:4200/

## Setting up authToken
* Head here :

        https://developer.spotify.com/console/
* Get your authToken. Then:

        src-> app-> shared-> services-> global services.ts
* At line 12, paste your authToken
    
    For ex:

        authToken = " Bearer 'your authToken' "
##ScreenShots
  
  
![WhatsApp Image 2022-07-22 at 8 48 13 AM](https://user-images.githubusercontent.com/90978519/180359109-4ed8d589-d55a-48c0-a742-d9b5f0e3fa23.jpeg)
![WhatsApp Image 2022-07-22 at 8 49 39 AM](https://user-images.githubusercontent.com/90978519/180359150-a8207661-e805-4011-82a1-fb78ebdf1520.jpeg)
![WhatsApp Image 2022-07-22 at 8 50 43 AM](https://user-images.githubusercontent.com/90978519/180359160-5c73b8c4-db86-493d-b41e-8bd7d37976d0.jpeg)
![WhatsApp Image 2022-07-22 at 8 51 35 AM](https://user-images.githubusercontent.com/90978519/180359177-82f51cdd-b929-4317-9d3c-449130ce6f3b.jpeg)




## Upcoming features

* Playlist creation
* User recommendation
* Spotify login
