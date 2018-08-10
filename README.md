# Movie Times

## USER ROUTES
Routes | HTTP | Description | Attributes
------ | ---- | ----------- | ----------
/users/register | POST | Register Account | name, email & password
/users/login | POST | Login account | email & password
/users/loginfb | POST | Login user via Facebook | fbtoken

## MOVIE ROUTES
Routes | HTTP | Description | Attributes
------ | ---- | ----------- | ----------
/movies/title | POST | search movies by title and year | title & year
/movies/id | POST | search movies by omdb id | id


## YOUTUBE ROUTE
Routes | HTTP | Description | Attributes
------ | ---- | ----------- | ----------
/youtube/trailer | POST | search youtube trailer by movie title | title

## NEW YORK TIMES MOVIE REVIEW ROUTE
Routes | HTTP | Description | Attributes
------ | ---- | ----------- | ----------
/news | POST | search movie reviews using title | title

## IMGUR ROUTE
Routes | HTTP | Description | Attributes
------ | ---- | ----------- | ----------
/imgur | POST | search an image from imgur base on movie title | title

### USAGE
```
npm install
npm run dev
```

Access the API via `http://localhost:3000`

