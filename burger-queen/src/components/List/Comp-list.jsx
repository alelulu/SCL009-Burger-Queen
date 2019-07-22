import React, { Component } from 'react';
import Item from '../Item/Comp-item'
import './Comp-list.css';

class List extends Component {

  

  render() {
    return (
      <div className="container list-container">
        <div className="row name-container">

          <div className="col-2 client-container">
            <i className="fas fa-user-alt client-icon"></i>
          </div>
          <div className="col-10 input-container">
            <input className="input-name form-control" type="text" placeholder="Nombre del cliente"/>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="items-list">
              <table className="table table-borderless">
                <tbody>
                  {this.props.list.map(el=><Item name={el.item} price={el.price} count={el.quantity} handleRemove={this.props.handleRemove}/>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row price-container">
          <div className="col-2 offset-5">
            <h6 className="total-text">Total:</h6>
          </div>
          <div className="col-5">
            <h5 className="total-price">$ 100.000</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default List