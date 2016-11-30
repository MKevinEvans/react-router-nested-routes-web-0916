import React, {Component} from 'react'
import {connect} from 'react-redux'

class MovieShow extends Component {

  render(){
    const movie = this.props.movie
    return (
      <div>
        { movie.title }
      </div>
      )
  }
}



function mapStateToProps(state, ownProps){
  const movie = state.movies.find( ( movie )  => movie.id == ownProps.routeParams.id ) 
  if (movie) {
    return {movie: movie}
  } else {
    return {movie: {}}
  }
}

export default connect(mapStateToProps)(MovieShow)
