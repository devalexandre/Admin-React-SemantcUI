import React from 'react'
import {Image} from 'semantic-ui-react'

const img = (props) => (
    <React.Fragment>
        <Image src={props.src} size='tiny' circular avatar/>
        <span>Alexandre</span>
    </React.Fragment>
)

export default img