import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// import Modaltest from './modaltest'

const authenticatedOptions = (
  <Fragment>
    <h3>Welcome Back!</h3>
    <div>
      <Link to='#create-survey'>
        <button>Make a Survey</button>
      </Link>
    </div>
    <div>
      <Link to='#surveys'>
        <button>View All Surveys</button>
      </Link>
    </div>
    <div>
      <Link to='#change-password'>
        <button>Change Password</button>
      </Link>
    </div>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <h3>Welcome to SurveyUs</h3>
    <div>
      <p>
        **SurveyUs** is the flagship application produced by the creatives at Mattastic-Voyage Industries. One part survey, one part the adventure of taking a survey, SurveyUs aims to streamline the surveying process by asking users the tough questions and limiting their responses to the answers we like.
      </p>
      <p>
        By signing up with SurveyUs, you unlock the ability to create true/false surveys for an anonymous audience, allowing you to tabulate the general feeling of a population on your crafted topic.
      </p>
      <p>
        *SurveyUs*: For when the answers dont matter ¯|_(ツ)_/¯
      </p>
    </div>
    <div>
      <div>
        <Link to='#sign-up'>
          <button>Sign Up</button>
        </Link>
      </div>
      <div>
        <Link to='#take-survey'>
          <button>Take A Survey</button>
        </Link>
      </div>
      <div>
        <Link to='#sign-in'>
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Modaltest />
//   </Fragment>
// )

const Home = ({ user }) => (
  <Fragment>
    { user ? authenticatedOptions : unauthenticatedOptions }
    {/* alwaysOptions */}
  </Fragment>
)

export default Home
