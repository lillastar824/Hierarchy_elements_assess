# Pipekit Front-end Technical Take-Home Assessment

This is the technical take-home assessment for front-end focused software engineers at Pipekit.

## Requirements
- Node 16
- npm or yarn

## Installation instructions
```
yarn && yarn start
```

Then go to http://localhost:3000 in your browser

## Prompt

Implement a React application that can:
- Allow the user to input a URL in a text box
- Allow the user to click a button that submits the URL to the parsedhtml
  endpoint found at `server/routes.js`
- Display the response visually using a folder structure where html elements
  with children have the folder icon displayed next to the html tag name and
  html elements without children have the file icon displayed next to their html
  tag name
  - Indentation should be used to show parent/child relationships among html
    elements
  - Bonus points if you can enable clicking on items in the folder structure for
    expanding and collapsing
- Allow the user to clear the folder structure by clicking on a button that
  says, "Clear"
- Enable repeated URL submissions

For clarity, this is not required:
- Batch URL submissions, or submitting more than one URL at the same time

## Notes
- This prompt should take an hour or two to complete. If that is not the case,
  please reach out to the Pipekit member who gave you this take home
- If you're running into hiccups or have feedback, please reach out as well
- Certain web pages like https://google.com rely heavily on Javascript and
  display some strange things. https://gitlab.com and https://github.com are
  good test cases.

## Wireframe
![wireframe](./assets/wireframe.png)
