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


