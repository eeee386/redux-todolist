import React, {Component} from 'react';
import {findGIFThunk} from "../actions/todoGifServiceActions";
import {connect} from "react-redux";

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