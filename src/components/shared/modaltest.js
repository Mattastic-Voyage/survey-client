import React, { Fragment } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const [setOpen] = React.useState(false)

const Modaltest = () => (
  <Fragment>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic archiving of old messages?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={() => setOpen(false)}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' onClick={() => setOpen(false)}>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Fragment>
)

export default Modaltest
