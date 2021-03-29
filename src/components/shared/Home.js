import React, { Fragment } from 'react'
import { Container, Row, Button, Col, Nav } from 'react-bootstrap'
// import Modaltest from './modaltest'

const authenticatedOptions = (
  <Fragment>
    <h3>Welcome Back!</h3>
    <hr />
    <Row>
      <div>
        <Col>
          <Nav.Link href='#create-survey'>
            <Button>Make a Survey</Button>
          </Nav.Link>
        </Col>
      </div>
      <div>
        <Col>
          <Nav.Link href='#surveys'>
            <Button>View All Surveys</Button>
          </Nav.Link>
        </Col>
      </div>
      <div>
        <Col>
          <Nav.Link href='#change-password'>
            <Button>Change Password</Button>
          </Nav.Link>
        </Col>
      </div>
    </Row>
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
    <Row>
      <div>
        <Col>
          <Nav.Link href='#sign-up'>
            <Button>Sign Up</Button>
          </Nav.Link>
        </Col>
      </div>
      <div>
        <Col>
          <Nav.Link href='#take-survey'>
            <Button>Take A Survey</Button>
          </Nav.Link>
        </Col>
      </div>
      <div>
        <Col>
          <Nav.Link href='#sign-in'>
            <Button className='button'>Sign In</Button>
          </Nav.Link>
        </Col>
      </div>
    </Row>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Modaltest />
//   </Fragment>
// )

const Home = ({ user }) => (
  <Fragment>
    <Container>
      <Row className='justify-content-center'>
        { user ? authenticatedOptions : unauthenticatedOptions }
        {/* alwaysOptions */}
      </Row>
    </Container>
  </Fragment>
)

export default Home
