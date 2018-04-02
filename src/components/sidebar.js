import React, {Component, Fragment} from 'react'
import {Sidebar,Menu,Icon} from 'semantic-ui-react'
import {AppContext} from '../context/app'
import {Link} from 'react-router-dom'
import Avatar from './imgcirculo'

export default class ISidebar extends Component {


    render() {

        return (
            <AppContext.Consumer>
                {context => (
                    <Fragment>


                        <Sidebar as={Menu} animation='push' width='thin' visible={context.state.visible} icon='labeled'
                                 vertical inverted>
                            <Menu.Item onClick={context.toggleVisibility}>
                                <Avatar
                                    src='http://www.indev.net.br/storage/app/uploads/public/5ab/3e6/86c/5ab3e686cc4ca825255181.jpg'/>
                            </Menu.Item>
                            <Menu.Item as={Link} to='/' name='home' onClick={context.toggleVisibility}>
                                <Icon name='home'/>
                                Home
                            </Menu.Item>
                            <Menu.Item name='gamepad'>
                                <Icon name='gamepad'/>
                                Games
                            </Menu.Item>
                            <Menu.Item name='camera'>
                                <Icon name='camera'/>
                                Channels
                            </Menu.Item>
                        </Sidebar>

                    </Fragment>
                )}
            </AppContext.Consumer>
        )
    }
}
