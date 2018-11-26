import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const PageLoader = () => (
    <Dimmer active>
      <Loader>Preparing Files</Loader>
    </Dimmer>
)

export default PageLoader
