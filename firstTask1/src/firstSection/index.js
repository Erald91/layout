import React, {Component}  from "react";
import ViewModal from "./components/Modal.js";
import './styles.css';

class FirstSection extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isOpen: false,
            openData: {},
            data: [],
    }
    this.viewProduct = this.viewProduct.bind(this);
    this.onClose = this.onClose.bind(this);
}
    componentDidMount(){
        let data =[
            {
              id: '1111',
              price: '20',
              name: 'Test',
              description: 'description test',
              createdDate: '2019-01-01'
            },
            {
                id: '2222',
                price: '220',
                name: 'Test2',
                description: 'description test2',
                createdDate: '2018-01-01'
              }
        ];
        this.setState({data: data});
    }

    viewProduct(id){
        let findedData = this.state.data.find(line => line.id === id);
        this.setState({isOpen: true, openData: findedData});
    }
    onClose(){
        this.setState({isOpen: false});
    }
    render() {
        let data = this.state.data.map(line =>{
            return (<tr key={line.id}>
                <th>{line.id}</th>
                <th>{line.price}</th>
                <th>{line.name}</th>
                <th>{line.description}</th>
                <th>{line.createdDate}</th>
                <th onClick={() => this.viewProduct(line.id)}>Syri</th>
            </tr>)
        });
        return(
        <div className="firstSection">
        <div className="firstDiv">
            <button id="list">List of Products</button>
            <button id="edit">Edit Product</button>
        </div>
        <div className="secondDiv">
            <table className="table">
                <thead className="head">
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Creation Date</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {data}
                </tbody>            
            </table>
            <ViewModal 
                isOpen = {this.state.isOpen}
                data = {this.state.openData}
                onClose ={this.onClose}
            />
        </div>
        </div>
        );
    }
}
export default FirstSection ;