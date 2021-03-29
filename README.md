# SurveyUs
| Contents |  |
|--|--|
| [About](https://github.com/Mattastic-Voyage/survey-client#what-is-surveyus) | [Technologies Employed](https://github.com/Mattastic-Voyage/survey-client#technologies-employed) |
| [User Stories](https://github.com/Mattastic-Voyage/survey-client#user-stories) | [Future Iterations](https://github.com/Mattastic-Voyage/survey-client#future-iterations) |
| [Wireframe](https://github.com/Mattastic-Voyage/survey-client#wireframe) | [Links](https://github.com/Mattastic-Voyage/survey-client#links) |
| [Planning](https://github.com/Mattastic-Voyage/survey-client#planning) |  |
>
> ## What is SurveyUs?
> **SurveyUs** is the flagship application produced by the creatives at [Mattastic-Voyage Industries](https://github.com/Mattastic-Voyage). One part survey, one part the adventure of taking a survey, SurveyUs aims to streamline the surveying process by asking users the tough questions and limiting their responses to the answers we like.
> - Example:
>> - _Question 1_: On a truth scale between 1 and 5, rate who your favorite band is and why is it the Rolling Stones?
>> - _Answer 1_: True: "They're my _faaaaavorite_!" [ 5 ]  |  False: "They're **_beyond_** my _faaaaavorite_!" [ 5 ]
> 
> By signing up with SurveyUs, you unlock the ability to create true/false surveys for an anonymous audience, allowing you to tabulate the general feeling of a population on your crafted topic.
>
> *SurveyUs*: For when the answers don't matter ¯|_(ツ)_/¯
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
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-client#surveyus)
> 
> ## Wireframe
>> ![Wireframe](https://media.git.generalassemb.ly/user/33705/files/0c465780-8bda-11eb-9c66-6cd2d158a444)
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-client#surveyus)
>
> ## Planning
>> The planning and breakdown of this project happened over the course of several long form conversations. A special thanks to [mjeder](https://github.com/mjeder) for the organization and itemization of requirements. [Project Requirements Checklist](https://docs.google.com/spreadsheets/d/1kJRGhsgKEV9xVL3lXtyz6cqBWf14lm6JuXD02uneldA/edit?usp=sharing).
>>
>> |  | **Day 1: 20 minute Planning Standup** | **Day 2: Back-End API Sprint** | **Day 3: CRUD Sprint** | **Day 4: Survey Logic** | **Day 5: Styling and Bug Testing** |
>> |--|--|--|--|--|--|
>> | Description | - Finalized the Survey prompt as our project choice<br />- Worked out a coding schedule, setting each day as a Sprint | - We 'mob programmed' the production of the API, while clearing through the smaller clerical/admin tasks. | - Team Members volunteered to sprint draft one of each of the basic CRUD actions<br />- Team Members created their CRUD action, made a pull request upon completion, and then we came back together for code review before merging. | - For the app/survey logic, we split into pairs to team tackle the creation of the more nuanced parts of the client side production. As each feature was completed, we pushed up with a pull request, then reviewed the code as a team before merging. | - We 'mob' programmed the styling as a group, committing and deploying after each major style change. The team members who weren't actively altering style were testing the deployed site for bugs between each deployment. |
>> | [Matt Eder](https://github.com/mjeder): |  | - Downloaded the templates<br />- Initiated GH repositories for both the [Client](https://github.com/Mattastic-Voyage/survey-client) and [API](https://github.com/Mattastic-Voyage/survey-api)<br />- Main point of contact with instructors for communicating up our questions and securing conference times | - Greatly contributed to the mob programming of the API  | - Worked on and completed the Update function<br />- Worked closely with [Eric Howard](https://github.com/EricHoward27), [Kenneth Cox](https://github.com/xpertimage), and [Matt Moore](https://github.com/mmmoore1313) | - Worked with [Kenneth Cox](https://github.com/xpertimage) to compete the index survey function<br />- Worked with [Eric Howard](https://github.com/EricHoward27), [Kenneth Cox](https://github.com/xpertimage), and [Matt Moore](https://github.com/mmmoore1313) to solidfy the error on the response save |
>> | [Eric Howard](https://github.com/EricHoward27):  | <!-- What they did --> | - Tested the [API](https://github.com/Mattastic-Voyage/survey-api) with [Postman](https://www.postman.com/)<br />- Hard coded the [API](https://github.com/Mattastic-Voyage/survey-api) using [VS Code](https://code.visualstudio.com/)<br />- Translated our models into the appropriate schema and routes | - Built the Create Survey component | - Worked through the creation of the Show and Delete Function<br />- Worked closely with [Matt Eder](https://github.com/mjeder), [Kenneth Cox](https://github.com/xpertimage), and [Matt Moore](https://github.com/mmmoore1313) to find and implement a solution to the TakeaSurvey creation | - Solved the response submit error we were encountering<br />- Worked with [Matt Eder](https://github.com/mjeder), [Kenneth Cox](https://github.com/xpertimage), and [Matt Moore](https://github.com/mmmoore1313) to solidfy the error on the response save |
>> | [Kenneth Cox](https://github.com/xpertimage): | <!-- What they did --> | - Drew up the ERD<br />- Spearheaded the conversation to articulate the structure of the [API](https://github.com/Mattastic-Voyage/survey-api)<br />- Provided examples of previous successes to help inform the sculpting of the [API](https://github.com/Mattastic-Voyage/survey-api) | - Drove the coding while we mob programmed | - Created the TakeaSurvey form and page<br />- All around Team MVP for identifying the patterns for the solutions to our problems | - Worked with [Matt Eder](https://github.com/mjeder) to compete the index survey function<br />- Worked with [Matt Eder](https://github.com/mjeder), [Eric Howard](https://github.com/EricHoward27), and [Matt Moore](https://github.com/mmmoore1313) to solidfy the error on the response save<br />- Instrumental in the design process and logic developement of the survey rating system |
>> | [Matt Moore](https://github.com/mmmoore1313): | <!-- What they did --> | - Drew up the Wireframe<br />- Did the initial deployment of the [Client](https://github.com/Mattastic-Voyage/survey-client) to [GH-Pages](https://mattastic-voyage.github.io/survey-client/)<br />- Drafted the README.md | - Set up and deployed Heroku account<br />- Acted as Git guru for seamless merging of branches<br />- Modified the README.md as needed | - Acted as tester for merges to the dev branch<br />-  Acted as Git guru for seamless merging of branches<br />- Worked into the evening with [Eric Howard](https://github.com/EricHoward27) and [Kenneth Cox](https://github.com/xpertimage) to find a solution to the TakeaSurvey page | - Styling<br />-  Acted as Git guru for seamless merging of branches<br />- Finalized deployments to gh-pages and heroku<br />- Worked with [Matt Eder](https://github.com/mjeder), [Eric Howard](https://github.com/EricHoward27), and [Kenneth Cox](https://github.com/xpertimage) to solidfy the error on the response save |
>>
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-client#surveyus)
>
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
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-client#surveyus)
>
> ## Future Iterations
>
>> ### Stretch Goals
>>> - Temporary survey access
>>> - Question/form locks to prevent the surveyed from spamming answers
>> ### Problems Encountered
>>> - **Problem**
>>>> - We solved the main problems we encountered on our way to Minimum Viable Product. Our aim is to accomplish some of our stretch goals as we roll forwards
>>
>
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-client#surveyus)
>
> ## Links:
>> | | **Deployed Sites** | **Repositories** |
>> |--|--|--|
>> | Front End App: | [https://mattastic-voyage.github.io/survey-client/](https://mattastic-voyage.github.io/survey-client/) | [Client](https://github.com/Mattastic-Voyage/survey-client) |
>> | Back End API: | [https://frozen-thicket-25455.herokuapp.com/](https://frozen-thicket-25455.herokuapp.com/) | [API](https://github.com/Mattastic-Voyage/survey-api) |
>> | Team Home: | | [Mattastic-Voyage](https://github.com/Mattastic-Voyage) |
>
> ###### [(Return to top)](https://github.com/Mattastic-Voyage/survey-client#surveyus)
>
