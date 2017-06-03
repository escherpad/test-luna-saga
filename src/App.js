import React, {Component} from 'react';
import Selector from './lib/Selector'
import './App.css';


import PropTypes from 'prop-types';


class App extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    render() {
        const props = this.props;
        console.log(props);
        return (
            <div>{props.title}</div>
        );
    }
}


const selector_function = (state)=>{
    // const {title} = state;
    // return {title};
    return {title: state.title}
};
export default Selector(selector_function, App);

// - [ ] submit, help Jiaming to get started
// - [ ] get luna-saga to work, so that jiaming can play with it
// - [ ] write a simple count-down clock with reducer
// - [ ] intercept the count-down termination, and make a http call
// - [ ] inplement the `take` interceptor with a saga and the `take` side effect.
// - [ ] write a simple code that grabs a list of files from dropbox or github

