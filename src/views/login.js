import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import axios from 'axios'

class LoginForm extends React.Component {

    state = {name: '', password: ''};

    handleChange = (e, {name, value}) => this.setState({[name]: value});
    handleSubmit = () => {
        const {name, password} = this.state;

        this.setState({name, password});

        this.login()
    };

    login = () => {
        const url = 'http://5ac2631fcb6ba300142578fc.mockapi.io/api/v1/users';
        const {name, password} = this.state;
        const {history} = this.props


        const filter = (obj) => obj.name === name;
        const filter_password = (obj) => obj.password === password;

        axios.get(url)
            .then((res => {
                const data = res.data.filter(filter).filter(filter_password)

                console.log(data)
                if (data.length > 0)
                    history.push('/dashboard');

            }))
            .then((err => (
                console.log(err)
            )))
    };

    render() {

        return (
            <div className='login-form'>
                {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
                <style>{`
body{
 overflow-y: hidden;
}
      body > div,
      body > div > div,
      body > div > div > div.login-form {

        height: 100%;
      }
    `}</style>
                <Grid
                    textAlign='center'
                    style={{height: '100%'}}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='purple' textAlign='center'>
                            <Image src='http://www.indev.net.br/themes/company-developer/assets/images/logo.png'/>
                            {' '} Log-In
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    name='name'
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    onChange={this.handleChange}
                                />

                                <Button color='purple' fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Novo Aqui ? <a href=''>Cadastro</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default LoginForm
