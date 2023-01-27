import React, { Fragment } from "react";
import Items from "./Items";
import {useNavigate} from 'react-router-dom';

function ItemsList() {
  let history = useNavigate();

  const handleDelete = (id) => {
    var index = Items.map(function (e) {
      return e.id;
    }).indexOf(id);
    Items.splice(index, 1);
    history('/')
  };

  return (
    <Fragment>
      <div className="wrap invert">
        <div className="container">
          <h1>
            Items <span>( List )</span>
          </h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price ($)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Items && Items.length > 0 ? (
                Items.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          onClick={() => alert(item.id)}
                          className="btn btn-success me-2">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="text-center bg-light">
                    <span className="text-danger">Nothing Found!</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default ItemsList;
