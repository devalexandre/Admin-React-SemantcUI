import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    render() {
        // noinspection JSAnnotator
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    toggleVisibility : () => {this.setState({ visible: !this.state.visible })}
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export { AppContext, AppProvider };

export default AppProvider;