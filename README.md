# CatFind API

CatFind API is a simple api that extends https://docs.thecatapi.com/ by including endpoints that allows you to fetch cat breeds in descending order that are more children_friendly, stranger_friendly and dog_friendly
<p align="center"> 
  <li><a href="#Hosted API">Link to hosted API</a></li>
  <li><a href="#Technologies Used">Technologies Used</a></li>
  <li><a href="#Author">Meet me!</a></li>
  <li><a href="#License">License</a></li>
</p>

<br>

## Hosted API
The API was deployed to heroku and the link to it is:
https://catapi666.herokuapp.com  

<br>

## Technologies Used
- NodeJS
- Express
- Babel
- Eslint
- Axios

<br/>

## Installation

```bash
1. Git clone this repository `https://github.com/andrewinsoul/catFindAPI.git`
2. Change your directory by running the command: cd catFindAPI
3. Install all dependencies using `npm install`
4. Create a .env file that contains THIRD_PARTY_API as shown in the env.sample file
5. Start the app `npm start` for development
6. Navigate to `localhost:8000` in your browser or postman
7. You will see a simple json response {"status":"success","message":"welcome to cat find API"}
```

<br />

## API ROUTES
<table>
  <tr>
    <th>HTTP VERB</th>
    <th>ENDPOINT</th>
    <th>FUNCTIONALITY</th>
    <th>REQUEST PAYLOAD</th>
    <th>EXAMPLE</th>
  </tr>
  <tr>
    <td>GET</td> 
    <td>/api/v1/get/dog_friendly/breed?no_of_breeds={number}</td>
    <td>sorts and return cat breeds that are more dog friendly in descending order</td>
    <td>
      N/A
    </td>
    <td>
      N/A
    </td>
  </tr>
  
  <tr>
    <td>GET</td> 
    <td>/api/v1/get/stranger_friendly/breed?no_of_breeds={number}</td>
    <td>sorts and return cat breeds that are more stranger friendly in descending order</td>
    <td>
      N/A
    </td>
    <td>
      N/A
    </td>
  </tr>

  <tr>
    <td>GET</td> 
    <td>/api/v1/get/child_friendly/breed?no_of_breeds={number}</td>
    <td>sorts and return cat breeds that are more child/children friendly in descending order</td>
    <td>
      N/A
    </td>
    <td>
      N/A
    </td>
  </tr>
</table>

## N.B
- the no_of_breeds query param specifies the top n number of breeds the api should return. For example if you make the request {host}/api/v1/get/stranger_friendly/breed?no_of_breeds=30, the api is going to return the top most 30 breeds in descending order based on the breed's stranger_friendly value. In a case where the query params is not specified, the default value of 5 is used.

<br/>

## Author

- Engr. Andrew Okoye (andrewinsoul@gmail.com)
