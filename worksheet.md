# Rick and Morty Character Randomizer - Project 2 Overview

## Project Links

- [https://github.com/gaganshayan/rickandmorty]()
- [rickandmortyproject2.netlify.app]()

## Project Description

In this project, I'm building a REACT application that uses an API to randomly generate character's from the animated series 'Rick and Morty' and display's their profiles, along with some characteristics and statistics about their roles in the show. 

## API

I'm using a Rick and Morty API that can be found at:

- [https://rickandmortyapi.com/]()


```
<script>
        fetch ("https://rickandmortyapi.com/api/character")
        .then ( (response) => {return response.json()} )
        .then ( (data) => {console.log(data)})
        
</script>
```


## Wireframes

Linked below, you can find the wireframe and react architecture for my Rick and Morty Character Randomizer

- [https://docs.google.com/drawings/d/1yOOhpfSfB1h35o9wRZnVzvCHuHLZKdXOX5kcYfSyYEw/edit?usp=sharing](wireframe on google draw)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Create an entry point on the landing page for the user to interact with
- Allow user to interact with the page
- CSS styling for the page

#### PostMVP EXAMPLE

- Add more functionality by taking input from users to create a more tailored, personal experience.
- Create an 'About' page to present details regarding the technical specifications about the project, present details on technologies used and add biographical data about me, the creator of the project

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Button | This will render the bbutton used to enter the applicatio | 
| Body | This will render the the character's and include the statistics about them | 
| About | This will render the body which will include information about the application's intentions, the technologies used, and a credit to the API and biographical plug | 


Time Frames:

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 1hrs| 4 hrs | 4 hrs |
| Header| H | 2hrs| 3 hrs | 3 hrs |
| API | H | 3hrs| 7 hrs | 7 hrs |
| Button | H | 1hrs| 2 hrs | 2 hrs |
| Body | H | 3hrs| 4 hrs | 4 hrs |
| About | L | 2hrs| 3 hrs | 3 hrs |
| Video | L | 3hrs| 2 hrs | 2 hrs |
| Total | H | 12hrs| 23 hrs | 23 hrs |

## Additional Libraries

- [https://www.youtube.com/watch?v=4ctK1aoWuqY&t=8s&ab_channel=Mah0ba](youtube video from the logo link)

- [https://rickandmortyapi.com/](Rick and Morty API)

## Code Snippet

Here is a code snippet that allows my logo to be a link to another page that hosts an embedded youtube video:
```
<div className="logo">
         <Link to="/video"><img src="https://res.cloudinary.com/dtybx6nov/image/upload/v1602020674/RANDOM_xapvam.png" className="logo"></img></Link>
</div>
```

Here is a code snippet that allows an image to act as a button that refreshes the page and generates a new character:
```
 return (
        <div>
            <button onClick={refreshPage}><img src="https://res.cloudinary.com/dtybx6nov/image/upload/v1602190849/portal_gun_2_nzimgo.png"></img></button>
        </div>
    );
```

Here is a code snippet that calls the API and randomly renders a character from the index list of characters provided by the API:
```
const makeApiCall = async () => {
        const response = await fetch (rmURL);
        const json = await response.json();
        console.log(json)
        const index = Math.floor(Math.random()*json.results.length) 
        setCharacter(json.results[index])
    };
```
