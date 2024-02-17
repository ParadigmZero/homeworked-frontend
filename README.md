# Setup

Node and npm must be installed. Run the following in the root directory of this project.

`npm i`

## Running

`npm start`

## Data structures

# homework object

Example:

```javascript
  {
    name: `English - Conjunctions`,
    image: `${host}eng.PNG`,
    dateSet: `September 14th, 2020`,
    dateDue: `Wednesday`,
    comment:
      `Complete each sentence using the correct conjunction. Make sure to read the sentences carefully as you will be using them in class later this week.`,
    children: [...children],
  }
```

# child object ( children / classroom )

Example:

```javascript
  {
    name: "Amelia",
    avatar: `${host}1.png`,
    individualHomeworkImage: null,
    annotation: null,
    comment: null
}
```
# Backend

The backend can be found at.

https://github.com/ParadigmZero/HomeWorkedBackend

# Environmental variables for AWS S3 upload

You will need to input the following environmental variables into a .env file ( root directory).

These relate to an Amazon AWS S3 bucket. For security reasons these cannot be given, and you will need to create your own.

(Place them after the = sign )

```
REACT_APP_BUCKETNAME=
REACT_APP_REGION=
REACT_APP_ACCESS_KEY_ID=
REACT_APP_SECRET_ACCESS_KEY=
```
