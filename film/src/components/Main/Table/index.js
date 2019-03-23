import React, {PureComponent} from "react";
import './styles.css';

class Table extends PureComponent {
  constructor(props) {
    super(props);

    this.managFilmOnEdit = this.managFilmOnEdit.bind(this);
  }

  managFilmOnEdit(film) {
    this.props.onFilmEditClick(film);
  }

  getBody() {
    return this.props.data.map((film) => {
      return (
        <tr class="body">
          <td>{film.id}</td>
          <td>{film.name}</td>
          <td>{film.release}</td>
          <td>{film.type}</td>
          <td>{film.provider}</td>
          <td class="custom-actions">
            <i class="fas fa-trash-alt"></i>
            <i class="fas fa-edit" onClick={(e) => this.managFilmOnEdit(film)}></i>
          </td>
        </tr>
      )
    });
  }

  render() {
    return(
      <div className="second-div">
        <table class="table">
          <thead>
            <tr class="header">
              <th >ID</th>
              <th>NAME</th>
              <th>RELEASE</th>
              <th>TYPE</th>
              <th>PROVIDER</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {this.getBody()}
          </tbody>
      </table>
      </div>
    );
  }
}
export default Table;