import React, {Component} from "react";
import Modal from 'react-modal';

import './styles.css';

class ViewModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      id: '',
      price: '',
      name: '',
      description: '',
      createdDate: ''
    }

    this.onClose = this.onClose.bind(this);
  }

//   componentDidMount() {
//     let data = this.props.data;
//     this.setState({isOpen: this.props.isOpen, id: data.id, 
//         price: data.price, name: data.name, description: data.description, createdDate: data.createdDate});
//   }

  componentWillReceiveProps(nextProps){
    let data = nextProps.data;
    console.log(data)
    this.setState({isOpen: this.props.isOpen, id: data.id, 
        price: data.price, name: data.name, description: data.description, createdDate: data.createdDate});
  }

  onClose() {
    this.props.onClose();
  }

  render() {
      console.log(this.props)
    return (
      <Modal isOpen={this.props.isOpen}>
        <div className="modal-content">
          <div className="modal-content_header">
            <div className="modal-content_header_title">View Product</div>
            
          </div>
          <div className="modal-content_content">
            <div className="control">
              <div className="modal-content_content_label">ID</div>
              <div className="modal-content_header_input">
                <input value={this.state.id} placeholder="ID" readOnly />
              </div>
            </div>
            <div className="control">
              <div className="modal-content_content_label">Price</div>
              <div className="modal-content_header_input">
                <input value={this.state.price} placeholder="Price" readOnly/>
              </div>
            </div>
            <div className="control">
              <div className="modal-content_content_label">Name</div>
              <div className="modal-content_header_input">
                <input value={this.state.name} placeholder="Name" readOnly/>
              </div>
            </div>
            <div className="control">
              <div className="modal-content_content_label">Description</div>
              <div className="modal-content_header_input">
                <input value={this.state.description} placeholder="Description" readOnly/>
              </div>
            </div>
            <div className="control">
              <div className="modal-content_content_label">Created Date</div>
              <div className="modal-content_header_input">
                <input value={this.state.createdDate} placeholder="Created Date"/>
              </div>
            </div>
            <div >
                <button id="closeButton"onClick={this.onClose}>Close</button>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}
export default ViewModal;