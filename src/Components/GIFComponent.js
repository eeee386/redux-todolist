import React, {Component} from 'react';
import {connect} from "react-redux";
import {findGIFThunk} from "../actions/todoGIFServiceActions";

class GIFComponent extends Component {

    componentWillMount() {
        this.props.findGIF('Todo');
    }

    render() {
        return (<img src={this.props.imageUrl} alt='The GIF that is given to you.'/>)
    }
}

const mapStateToProps = (state) => ({
    imageUrl: state.imageUrl
});

const matchDispatchToProps = (dispatch) => ({
    findGIF: (text) => dispatch(findGIFThunk(text)),
});

export default connect(mapStateToProps, matchDispatchToProps)(GIFComponent);