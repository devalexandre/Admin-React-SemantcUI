import React, {Component} from 'react'
import Navbar from './navbar'
import ISidebar from './sidebar'
import {AppProvider, AppContext} from '../context/app'
import {Sidebar, Segment} from 'semantic-ui-react'
import Router from './routers'

class Container extends Component {

    render() {
        return (
            <Sidebar.Pushable as={Segment}>
                <AppProvider>
                    <Navbar/>
                    <ISidebar/>
                    <Sidebar.Pusher>
                        <AppContext.Consumer>
                            {context => (
                                <Segment stacked style={{height: 500}} onClick={context.toggleVisibility}>


                                    <Router/>

                                </Segment>
                            )}
                        </AppContext.Consumer>
                    </Sidebar.Pusher>
                </AppProvider>
            </Sidebar.Pushable>

        )
    }

}

export default Container