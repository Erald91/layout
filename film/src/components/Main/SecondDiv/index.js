import React, {Component} from "react";
import './styles.css';

class SecondDiv extends Component {
    render() {
        return(
            <div className="second-div">
            <table className="table">
                <tr className="header">
                    <th >ID</th>
                    <th>NAME</th>
                    <th>RELEASE</th>
                    <th>TYPE</th>
                    <th>PROVIDER</th>
                    <th>ACTIONS</th>
                </tr>
                <tr className="body">
                    <td>T1506908900</td>
                    <td>Ariel</td>
                    <td>1999</td>
                    <td>Feature</td>
                    <td>Disney</td>
                    <td><i className="fas fa-edit font-color"></i> <i className="fas fa-link font-color"></i></td>
                </tr>
                <tr className="body">
                    <td>T1508584395</td>
                    <td>Another</td>
                    <td>1994</td>
                    <td>Series</td>
                    <td>ACME</td>
                    <td><i className="fas fa-edit font-color"></i> <i className="fas fa-link font-color"></i></td>
                </tr>
            </table>
    </div>
        );
    }
}
export default SecondDiv;