# Laura Dern API

## About
Laura Dern API is an open source API dedicated to our LGBTQ icon Laura Dern. You will have access to all her shows and movies, images, characters, and years.

[Live Site](https://zeyaoli-laura-dern-api.glitch.me/)

![current_view](https://github.com/zeyaoli/Laura-Dern-API/blob/master/documentataion/current_view.png)

## Who Am I

[Zeyao Li](https://zeyaoli.com), a master candidate at NYU ITP

## Built With

I'm using Node.js and express to serve the API, neDB and PostMan to manage the database. I am hosting this site on Glitch.


## Process & Documentation

Four Steps: Laura Dern API backend with JSON file -> neDB (transfer JSON to db) -> update the backend with DB -> front-end develop ment

### First step - API & JSON

I started designing the API by listing what kind of the data that I need. It's like doing a structure for JSON file. On this step, I just simply wrote down some words on my notebook and linked together. It doesn't have to be 100% accurate and can always change it. 

Then I went on imdb.com and grabbed a few data to create the JSON file. The JSON file structures like one object "data" that contains an array of different objects (lists) of what Laura Dern acted before. In each objects, there are "type", "name", "year", "character", and "img" to have access. 

I used node and express to serve the api with the json file. Here I used "path" and "fs" library from node to locate the file and read/write it. 

![api_json](https://github.com/zeyaoli/Laura-Dern-API/blob/master/documentataion/api_json.png)

Up to this step, the server can read all the data that I put it in. I created a super simple front-end page to display all the movie names before moving to the next step. 

### Second Step - API & DataBase

I started a new folder that contains neDB, a back-end script and the JSON file. Simply, I read the json file and used array map function to return json objects with name "list". Then I inserted the object to the database. 

![api_db](https://github.com/zeyaoli/Laura-Dern-API/blob/master/documentataion/api_db.png)

After that, I switched back to the API folder that I had and put the database file in. I replaced the json write and read with neDB in the function that gets and pushes data. There is currently only one endPoint "/api", however, I decided to add more soon. I used PostMan for managing data (mainly post it and update). 


### Third Step: Front-end Development

This time, I wrote totally reusable UI component for the API front-end page. There are only 3 lines in the body html code which gives a root div for putting stuff in. Rest of the page are built in Javascript (like react). It actually takes me a while to figure out how to retrieve data from the database and store it in global variable to use, which I didn't at the end. I put all the component inside the fetch so I can use the variable inside the scope. Creating reusable components definitely makes life way better. I only need to create card once and put all the data in, then every time I publish a new data into database, it automatically updates. 

![html_code](https://github.com/zeyaoli/Laura-Dern-API/blob/master/documentataion/html_code.png)
![main_js](https://github.com/zeyaoli/Laura-Dern-API/blob/master/documentataion/reusable_component.png)

### Next Step

More Endpoints - random, awards...

Sorting and Filter function on front end 

Better code structure 

