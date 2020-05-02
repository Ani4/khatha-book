import React from "react";
export default function BillTable() {
  return (
    <>
      <div className="container">
        <h3 className="text-dark mb-4">Bill Table</h3>
        <div className="row">
          <div className="col-sm-6">
            <table
              id="example"
              className="table table-striped table-bordered"
              cellSpacing={0}
              width="100%"
            >
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>300</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>TOTAL</th>
                  <th>00000</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="col-sm-6">
            <div className="bootstrap_img_upload">
              <p className="font-italic text-white text-center">
                The image uploaded will be rendered inside the box below.
              </p>
              <div className="image-area mt-4">
                <img
                  id="imageResult"
                  src="#"
                  alt
                  className="img-fluid rounded shadow-sm mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
