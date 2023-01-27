import React from "react";

function Items() {
  return (
    <>
      <h1>
        Items <span>( List )</span>
      </h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Water Bottle</td>
            <td>12</td>
            <td>Blue</td>
            <td>
              <button className="btn btn-success me-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Cup</td>
            <td>12</td>
            <td>Blue</td>
            <td>
              <button className="btn btn-success me-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Items;
