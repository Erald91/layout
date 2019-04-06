import React, { Component } from 'react';
import './styles.css';
import FirstDiv from './FirstDiv/index';
import Table from './Table/index';
import AddMovies from './AddMovies/index';
import {FetchService} from '../../services/FetchService';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddMovieOpen: false,
      data: [],
      editingMovie: {},
      loading: false
    }

    this.manageAddMovideModalOnClose = this.manageAddMovideModalOnClose.bind(this);
    this.manageAddMovideModalOnOpen = this.manageAddMovideModalOnOpen.bind(this);
    this.manageFilmOnEdit = this.manageFilmOnEdit.bind(this);
    this.onFilmAdded = this.onFilmAdded.bind(this);
    this.manageDeleteMovie = this.manageDeleteMovie.bind(this);
    this.onFilmEdit = this.onFilmEdit.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    this.setState({loading: true});
    FetchService.getListData()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
      });
  }

  manageAddMovideModalOnClose() {
    this.setState({isAddMovieOpen: false, editingMovie: {}});
  }

  manageAddMovideModalOnOpen() {
    this.setState({isAddMovieOpen: true})
  }

  manageFilmOnEdit(film) {
    this.setState({editingMovie: film});
    this.manageAddMovideModalOnOpen();
  }

  onFilmAdded(film) {
    this.init();
    this.setState({isAddMovieOpen: false});
  }

  manageDeleteMovie(id) {
    FetchService.deleteFilm(id)
      .then((response) => response.json())
      .then((data) => {
        this.init();
      })
      .catch((error) => {
        
        alert(error.msg);
      });
  }

  onFilmEdit(film) {
    this.init();
    this.manageAddMovideModalOnClose();
  }

  render() {
    return (
      <div className="main">
        <FirstDiv onAddClick={this.manageAddMovideModalOnOpen} />
        {this.state.loading && <h3 className="loading-text">Loading...</h3>}
        {!this.state.loading &&
          <Table
            data={this.state.data}
            onFilmDeleteClick={this.manageDeleteMovie}
            onFilmEditClick={this.manageFilmOnEdit}
          />
        }
        
        <AddMovies
          isOpen={this.state.isAddMovieOpen}
          editingMovie={this.state.editingMovie}
          onClose={this.manageAddMovideModalOnClose}
          saveNewFilm={this.onFilmAdded}
          editFilm={this.onFilmEdit}
          isAdmin={false}
        />
      </div>
    );
  }
}

export default Main;
