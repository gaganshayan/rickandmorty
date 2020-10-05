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

- [https://docs.google.com/drawings/d/1yOOhpfSfB1h35o9wRZnVzvCHuHLZKdXOX5kcYfSyYEw/edit?usp=sharing]()


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

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Button | This will render the bbutton used to enter the applicatio | 
| Body | This will render the the character's and include the statistics about them | 
| About | This will render the body which will include information about the application's intentions, the technologies used, and a credit to the API and biographical plug | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 1hrs| X hrs | X hrs |
| Header| H | 2hrs| X hrs | X hrs |
| API | H | 3hrs| X hrs | X hrs |
| Button | H | 1hrs| X hrs | X hrs |
| Body | H | 3hrs| X hrs | X hrs |
| About | L | 2hrs| X hrs | X hrs |
| Total | H | 12hrs| X hrs | X hrs |

## Additional Libraries
 <!-- Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.  -->

## Code Snippet

<!-- Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
``` -->
