import React, { Component } from 'react';
import './styles.css';
import FirstDiv from './FirstDiv/index';
import Table from './Table/index';
import AddMovies from './AddMovies/index';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddMovieOpen: false,
      data: [
        {
          id: 'T1506908900',
          name: 'Ariel',
          release: '1999',
          type: 'Feature',
          provider: 'Disney',
        }, {
          id: 'T1508584395',
          name: 'Another',
          release: '1994',
          type: 'Series',
          provider: 'ACME'
        }, {
          id: 'T1506908901',
          name: 'ASDF',
          release: '1999',
          type: 'Feature',
          provider: 'TV'
        }
      ]
    }

    this.manageAddMovideModalOnClose = this.manageAddMovideModalOnClose.bind(this);
    this.manageAddMovideModalOnOpen = this.manageAddMovideModalOnOpen.bind(this);
    this.manageFilmOnEdit = this.manageFilmOnEdit.bind(this);
    this.onFilmAdded = this.onFilmAdded.bind(this);
    this.manageDeleteMovie = this.manageDeleteMovie.bind(this);
  }

  manageAddMovideModalOnClose() {
    this.setState({isAddMovieOpen: false})
  }

  manageAddMovideModalOnOpen() {
    this.setState({isAddMovieOpen: true})
  }

  manageFilmOnEdit(film) {
    this.manageAddMovideModalOnOpen();
  }

  onFilmAdded(film) {
    const data = [...this.state.data];
    data.push(film);
    this.setState({ data , isAddMovieOpen: false });
  }
  manageDeleteMovie(id) {
  let newData = this.state.data.filter(movie => movie.id !== id);
  this.setState({data: newData});
  }

  render() {
    return (
      <div className="main">
        <FirstDiv onAddClick={this.manageAddMovideModalOnOpen} />
        <Table data={this.state.data} onFilmDeleteClick={this.manageDeleteMovie} onFilmEditClick={this.manageFilmOnEdit} />
        <AddMovies isOpen={this.state.isAddMovieOpen} onClose={this.manageAddMovideModalOnClose} saveNewFilm={this.onFilmAdded} />
      </div>
    );
  }
}

export default Main;
