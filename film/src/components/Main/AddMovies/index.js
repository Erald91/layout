import React, {Component} from "react";
import Modal from 'react-modal';
import {FetchService} from '../../../services/FetchService';

import './styles.css';

class AddMovies extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const stateObject = {};

    if (nextProps.isOpen !== prevState.isOpen) {
      stateObject.isOpen = nextProps.isOpen;
    }

    if (nextProps.editingMovie.id !== prevState.editingMovie.id) {
      stateObject.editingMovie = nextProps.editingMovie;
    }

    return Object.keys(stateObject).length ? stateObject : null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      id: '',
      name: '',
      release: '',
      type: '',
      provider: '',
      title: 'Add Movie',
      buttonLabel: 'Save',
      editingMovie: {}
    }

    this.onClose = this.onClose.bind(this);
    this.manageSave = this.manageSave.bind(this);
  }

  componentDidMount() {
    this.setState({isOpen: this.props.isOpen});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.editingMovie.id !== this.state.editingMovie.id && typeof this.state.editingMovie.id !== 'undefined') {
      this.manageEdit();
    }

    if (prevProps.isOpen !== this.state.isOpen && !this.state.isOpen) {
      this.reset();
    }
  }

  manageEdit() {
    this.setState({
      id: this.state.editingMovie.id,
      name: this.state.editingMovie.name,
      release: this.state.editingMovie.release,
      type: this.state.editingMovie.type,
      provider: this.state.editingMovie.provider,
      title: 'Edit Movie',
      buttonLabel: 'Edit'
    });
  }

  reset() {
    this.setState({
      id: '',
      name: '',
      release: '',
      type: '',
      provider: '',
      title: 'Add Movie',
      buttonLabel: 'Save'
    });
  }

  onClose() {
    this.props.onClose();
  }

  uppdateId(value) {
    this.setState({id: value});
  }

  uppdateName(value) {
    this.setState({name: value});
  }

  uppdateRelease(value) {
    this.setState({release: value});
  }

  uppdateType(value) {
    this.setState({type: value});
  }

  uppdateProvider(value) {
    this.setState({provider: value});
  }

  manageSave() {
    const {
      id,
      name,
      release,
      type,
      provider,
      editingMovie
    } = this.state;

    if (!id) {
      alert('ID not defined!!!');
      return;
    }

    if (!name) {
      alert('Name not defined!!!');
      return;
    }

    if (!release) {
      alert('Release not defined!!!');
      return;
    }

    if (!type) {
      alert('Type not defined!!!');
      return;
    }

    if (!provider) {
      alert('Provider not defined!!!');
      return;
    }
    const data = { id, name, release, type, provider };
    if (this.isEditingMode()) {
      FetchService.editFilm(data)
        .then((response) => response.json())
        .then((data) => {
          this.props.editFilm();
        })
        .catch((error) => {
          alert(error.msg);
        });
    } else {
      FetchService.createFilm(data)
        .then((response) => response.json())
        .then((data) => {
          this.props.saveNewFilm();
        })
        .catch((error) => {
          alert(error.msg);
        });
    }
  }

  isEditingMode() {
    return typeof this.state.editingMovie.id !== 'undefined';
  }

  isNotIDEditingAllow() {
    return this.isEditingMode() && !this.props.isAdmin;
  }

  render() {
    return (
      <Modal isOpen={this.state.isOpen}>
        <div className="modal-content">
          <div className="modal-content_header">
            <div className="modal-content_header_title">{this.state.title}</div>
            <div className="modal-content_header_close">
              <i class="fas fa-times" onClick={this.onClose}></i>
            </div>
          </div>
          <div className="modal-content_content">
            <div className="control">
              <div className="modal-content_content_label">ID</div>
              <div className="modal-content_header_input">
                <input value={this.state.id} disabled={this.isNotIDEditingAllow()} placeholder="ID" onChange={(e) => this.uppdateId(e.target.value)} />
              </div>
            </div>
            <div className="control">
              <div className="modal-content_content_label">Name</div>
              <div className="modal-content_header_input">
                <input value={this.state.name} placeholder="Name" onChange={(e) => this.uppdateName(e.target.value)} />
              </div>
            </div>
            <div className="control">
              <div className="modal-content_content_label">Release</div>
              <div className="modal-content_header_input">
                <input value={this.state.release} placeholder="Release" onChange={(e) => this.uppdateRelease(e.target.value)} />
              </div>
            </div>
            <div className="control">
              <div className="modal-content_content_label">Type</div>
              <div className="modal-content_header_input">
                <input value={this.state.type} placeholder="Type" onChange={(e) => this.uppdateType(e.target.value)} />
              </div>
            </div>
            <div className="control">
              <div className="modal-content_content_label">Provider</div>
              <div className="modal-content_header_input">
                <input value={this.state.provider} placeholder="Provider" onChange={(e) => this.uppdateProvider(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="modal-content_actions">
            <button onClick={this.manageSave}>{this.state.buttonLabel}</button>
          </div>
        </div>
      </Modal>
    )
  }
}
export default AddMovies;