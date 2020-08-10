import React, { Component } from 'react';
import { connect } from 'react-redux';
import { artistListAll } from '../store/actions';

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(artistListAll());
    }

    render() {
        console.log(this.props)
        return(
            <div>
                Home
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        artists: state.artists
    }
    
}

export default connect(mapStateToProps)(Home);    