# SurveyUs
> ## What is SurveyUs?
> **SurveyUs** is the flagship application produced by the creatives at [Mattastic-Voyage Industries](https://github.com/Mattastic-Voyage). One part survey, one part the adventure of taking a survey, SurveyUs aims to streamline the surveying process by asking users the tough questions and limiting their responses to the answers we like.
> - Example:
>> - _Question 1_: Who is your favorite band and why is it the Rolling Stones?
>> - _Answer 1_: True [  ]  |  False [   ]
> 
> By signing up with SurveyUs, you unlock the ability to create true/false surveys for an anonymous audience, allowing you to tabulate the general feeling of a population on your crafted topic.
>
> *SurveyUs*: For when the answers don't matter ¯\_(ツ)_/¯
> ## User Stories
>> - As an unregistered user, I would like to sign up with email and password.
>> - As a registered user, I would like to sign in with email and password.
>> - As a signed in user, I would like to change password.
>> - As a signed in user, I would like to sign out.
>> - As a signed in user, I would like to create a survey with a title and possible answers.
>> - As a signed in user, I would like to update my survey’s title and possible answers of a survey.
>> - As a signed in user, I would like to delete my survey.
>> - As a signed in user, I would like to see all surveys and its answers.
>> - As an unregistered user with a link/token/code, I would like to take a survey.
>
> ## Wireframe
>> ![Wireframe](https://media.git.generalassemb.ly/user/33705/files/0c465780-8bda-11eb-9c66-6cd2d158a444)
>
> ## Planning
>> The planning and breakdown of this project happened over the course of several long form conversations. A special thanks to [mjeder](https://github.com/mjeder) for the organization and itemization of requirements.
>>
>>> - **Day 1: 20 minute Planning Standup**
>>>> - Finalized the Survey prompt as our project choice
>>>> - Worked out a coding schedule, setting each day as a Sprint
>>>>> - Day 1: Planning
>>>>> - Day 2: Backend/APi Sprint 
>>>>> - Day 3: CRUD Sprint 
>>>>> - Day 4: Survey Logic 
>>>>> - Day 5: Styling and Bug Test 
>>>> - Discussed how we would work on each Sprint section:
>>>>> - Back-end/API: mob programming
>>>>> - Basic Front-End CRUD: individual assigned
>>>>> - Survey Articulation/logic: Pair Programming
>>>
>>> - **Day 2: Back-End API Sprint**
>>>> - We 'mob programmed' the production of the API, while clearing through the smaller clerical/admin tasks.
>>>>> - [mjeder](https://github.com/mjeder):
>>>>>> - Downloaded the templates
>>>>>> - Initiated GH repositories for both the [Client](https://github.com/Mattastic-Voyage/survey-client) and [API](https://github.com/Mattastic-Voyage/survey-api)
>>>>>> - Main point of contact with instructors for communicating up our questions and securing conference times
>>>>> - [EricHoward27](https://github.com/EricHoward27): 
>>>>>> - Tested the [API](https://github.com/Mattastic-Voyage/survey-api) with [Postman](https://www.postman.com/)
>>>>>> - Hard coded the [API](https://github.com/Mattastic-Voyage/survey-api) using [VS Code](https://code.visualstudio.com/)
>>>>>> - Translated our models into the appropriate schema and routes
>>>>> - [xpertimage](https://github.com/xpertimage): 
>>>>>> - Drew up the ERD
>>>>>> - Spearheaded the conversation to articulate the structure of the [API](https://github.com/Mattastic-Voyage/survey-api)
>>>>>> - Provided examples of previous successes to help inform the sculpting of the [API](https://github.com/Mattastic-Voyage/survey-api)
>>>>> - [mmmoore1313](https://github.com/mmmoore1313):
>>>>>> - Drew up the Wireframe 
>>>>>> - Did the initial deployment of the [Client](https://github.com/Mattastic-Voyage/survey-client) to [GH-Pages](https://mattastic-voyage.github.io/survey-client/)
>>>>>> - Drafted the README.md
>>> 
>>> - **Day 3: CRUD Sprint**
>>>> - Team Members volunteered to sprint draft one of each of the basic CRUD actions
>>>>> - [mjeder](https://github.com/mjeder): 
>>>>> - [EricHoward27](https://github.com/EricHoward27): 
>>>>> - [xpertimage](https://github.com/xpertimage): 
>>>>> - [mmmoore1313](https://github.com/mmmoore1313): 
>>>> - Team Members created their CRUD action, made a pull request upon completion, and then we came back together for code review before merging.
>>>
>>> - **Day 4: Survey Logic**
>>>> - For the app/survey logic, we split into pairs to team tackle the creation of the more nuanced parts of the client side production. As each feature was completed, we pushed up with a pull request, then reviewed the code as a team before merging.
>>>
>>> - **Day 5: Styling and Bug Testing**
>>>> - We 'mob' programmed the styling as a group, committing and deploying after each major style change. The team members who weren't actively altering style were testing the deployed site for bugs between each deployment.
>>
>> ### Technologies Employed
>>> - **[Client](https://github.com/Mattastic-Voyage/survey-client) Development**
>>>> - [React](https://reactjs.org/)
>>>> - [React-Bootstrap](https://react-bootstrap.github.io/)
>>>> - [Semantic UI React](https://react.semantic-ui.com/)
>>> - **[API](https://github.com/Mattastic-Voyage/survey-api) Development**
>>>> - [Express](https://expressjs.com)
>>>> - [Postman](https://www.postman.com/)
>>>> - [MongoDB](https://www.mongodb.com/)
>>> - **Deployment**
>>>> - [GH Pages](https://pages.github.com/)
>>>> - [Heroku](https://www.heroku.com)
>>> - **General Development**
>>>> - [GitHub](https://github.com/)
>>>> - [Atom](https://atom.io/)
>>>> - [VS Code](https://code.visualstudio.com/)
>>>> - [GoogleSheets](https://docs.google.com/spreadsheets/d/1kJRGhsgKEV9xVL3lXtyz6cqBWf14lm6JuXD02uneldA/edit#gid=0)
>>>> - [Google](https://www.google.com/)
>>>> - [MDN Web Docs](https://developer.mozilla.org/en-US/)
>>>> - [JavaScript](https://www.javascript.com/)
>>>> - [CSS](https://www.w3schools.com/css/)
>>>> - [SCSS](https://sass-lang.com/)
>>>> - Ballmer Peak
>
> ## Future Iterations
>
>> ### Stretch Goals
>>> - Temporary survey access
>>> - Question/form locks to prevent the surveyed from spamming answers
>> ### Problems Encountered
>>> - **Problem**
>>>> - _Description_
>>>> - **_Solution_**
>>
> ## Links:
>> - **Deployed Sites**
>>> - Front End App: [https://mattastic-voyage.github.io/survey-client/](https://mattastic-voyage.github.io/survey-client/)
>>> - Back End API: []()
>> - **Repositories**
>>> - [Client](https://github.com/Mattastic-Voyage/survey-client)
>>> - [API](https://github.com/Mattastic-Voyage/survey-api) 
>>> - [Mattastic-Voyage](https://github.com/Mattastic-Voyage)
> 