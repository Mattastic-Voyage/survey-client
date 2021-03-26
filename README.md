# SurveyUs
> | Contents |  |
> |--|--|
> | [About]() | [Technologies Employed]() |
> | [User Stories]() | [Future Iterations]() |
> | [Wireframe] | [Links]() |
>
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
>> |  | **Day 1: 20 minute Planning Standup** | **Day 2: Back-End API Sprint** | **Day 3: CRUD Sprint** | **Day 4: Survey Logic** | **Day 5: Styling and Bug Testing** |
>> |--|--|--|--|--|--|
>> | Description | - Finalized the Survey prompt as our project choice<br />- Worked out a coding schedule, setting each day as a Sprint | - We 'mob programmed' the production of the API, while clearing through the smaller clerical/admin tasks. | - Team Members volunteered to sprint draft one of each of the basic CRUD actions<br />- Team Members created their CRUD action, made a pull request upon completion, and then we came back together for code review before merging. | - For the app/survey logic, we split into pairs to team tackle the creation of the more nuanced parts of the client side production. As each feature was completed, we pushed up with a pull request, then reviewed the code as a team before merging. | - We 'mob' programmed the styling as a group, committing and deploying after each major style change. The team members who weren't actively altering style were testing the deployed site for bugs between each deployment. |
>> | [Matt Eder](https://github.com/mjeder): |  | - Downloaded the templates<br />- Initiated GH repositories for both the [Client](https://github.com/Mattastic-Voyage/survey-client) and [API](https://github.com/Mattastic-Voyage/survey-api)<br />- Main point of contact with instructors for communicating up our questions and securing conference times | <!-- What they did -->  |
>> | [Eric Howard](https://github.com/EricHoward27):  | <!-- What they did --> | - Tested the [API](https://github.com/Mattastic-Voyage/survey-api) with [Postman](https://www.postman.com/)<br />- Hard coded the [API](https://github.com/Mattastic-Voyage/survey-api) using [VS Code](https://code.visualstudio.com/)<br />- Translated our models into the appropriate schema and routes | - Built the Create Survey component<br />  |
>> | [Kenneth Cox](https://github.com/xpertimage): | <!-- What they did --> | - Drew up the ERD<br />- Spearheaded the conversation to articulate the structure of the [API](https://github.com/Mattastic-Voyage/survey-api)<br />- Provided examples of previous successes to help inform the sculpting of the [API](https://github.com/Mattastic-Voyage/survey-api) | <!-- What they did -->  |
>> | [Matt Moore](https://github.com/mmmoore1313): | <!-- What they did --> | - Drew up the Wireframe<br />- Did the initial deployment of the [Client](https://github.com/Mattastic-Voyage/survey-client) to [GH-Pages](https://mattastic-voyage.github.io/survey-client/)<br />- Drafted the README.md  | <!-- What they did -->  |
>>
> ## Technologies Employed
>> | **General Development** | **[Client](https://github.com/Mattastic-Voyage/survey-client) Development** | **[API](https://github.com/Mattastic-Voyage/survey-api) Development** | **Deployment** |
>> |---|---|---|---|
>> | [GitHub](https://github.com/) | [React](https://reactjs.org/) | [Express](https://expressjs.com) | [GH Pages](https://pages.github.com/) |
>> | [Atom](https://atom.io/) | [React-Bootstrap](https://react-bootstrap.github.io/) | [Postman](https://www.postman.com/) | [Heroku](https://www.heroku.com) |
>> | [VS Code](https://code.visualstudio.com/) | [Semantic UI React](https://react.semantic-ui.com/) | [MongoDB](https://www.mongodb.com/) | |
>> | [GoogleSheets](https://docs.google.com/spreadsheets/d/1kJRGhsgKEV9xVL3lXtyz6cqBWf14lm6JuXD02uneldA/edit#gid=0) | | | |
>> | [Google](https://www.google.com/) | | | |
>> | [MDN Web Docs](https://developer.mozilla.org/en-US/) | | | |
>> | [JavaScript](https://www.javascript.com/) | | | |
>> | [CSS](https://www.w3schools.com/css/) | | | |
>> | [SCSS](https://sass-lang.com/) | | | |
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
>> | | **Deployed Sites** | **Repositories** |
>> |--|--|--|
>> | Front End App: | [https://mattastic-voyage.github.io/survey-client/](https://mattastic-voyage.github.io/survey-client/) | [Client](https://github.com/Mattastic-Voyage/survey-client) |
>> | Back End API: | [https://frozen-thicket-25455.herokuapp.com/](https://frozen-thicket-25455.herokuapp.com/) | [API](https://github.com/Mattastic-Voyage/survey-api) |
>> | Team Home: | | [Mattastic-Voyage](https://github.com/Mattastic-Voyage) |