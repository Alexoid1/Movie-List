import React, { Component } from 'react'
import {searchMovie,fetchMovies,setLoading} from '../../actions/searchAction'
import {connect} from 'react-redux'

export class SearchForm extends Component {
    onChange=e=>{
        this.props.searchMovie(e.target.value)

    }
    onSubmit=e=>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
        this.props.setLoading();

    }
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4 text-center">Search for the movies, TV series..</h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input className="form-control form-control-lg" type="text" name='searchText' onChange={this.onChange} placeholder="Movies or Tv series"/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2 text-center" >Search</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps =state=>({
    text:state.movies.text
})

export default connect(mapStateToProps,{searchMovie,fetchMovies,setLoading})(SearchForm);
