import React from "react";

function Form() {
  return (
    <div className="wrap">
      <div className="container">
        <form action="/">
          <h1>
            FORM <span>( Add New Item )</span>
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="form-group">
                <label>Name</label>
                <input className="form-control" placeholder="Enter Item Name" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="form-group">
                <label>Price</label>
                <input className="form-control" placeholder="Enter Price" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="form-group">
                <label>Color</label>
                <input className="form-control" placeholder="Enter Color" />
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary">Add Item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
