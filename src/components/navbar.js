import React, {Component} from 'react'
import {Menu, Icon} from 'semantic-ui-react'
import {AppContext} from '../context/app'

export default class Navbar extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <AppContext.Consumer>
                {context => (
                    <React.Fragment>
                        <Menu stackable>
                            <Menu.Item onClick={context.toggleVisibility}>
                                <Icon name='align justify'/>
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <Menu.Item
                                    name='features'
                                    active={activeItem === 'features'}
                                    onClick={this.handleItemClick}
                                >
                                    Features
                                </Menu.Item>

                                <Menu.Item
                                    name='testimonials'
                                    active={activeItem === 'testimonials'}
                                    onClick={this.handleItemClick}
                                >
                                    Testimonials
                                </Menu.Item>

                                <Menu.Item
                                    name='sign-in'
                                    active={activeItem === 'sign-in'}
                                    onClick={this.handleItemClick}
                                >
                                    Sign-in
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </React.Fragment>
                )}
            </AppContext.Consumer>
        )
    }
}