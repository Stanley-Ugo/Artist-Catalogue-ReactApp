import React, { Component } from 'react';
import { connect } from 'react-redux';
import { artistDetail } from '../store/actions';
import { Link } from 'react-router-dom';


class Artist extends Component {

    componentDidMount(){
        this.props.dispatch(artistDetail(this.props.match.params.id));
    }

    render() {
        return(
            <div>
                Artist
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps)(Artist);