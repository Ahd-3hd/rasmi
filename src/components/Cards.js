import React from "react";

export default class Cards extends React.Component {
  render() {
    return (
      <div id="cards-container">
        <div className="card">
          <div className="card-img-1"></div>
          <div className="card-text">
            <h3>LOREM IPSUM</h3>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever
              since.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-img-2"></div>
          <div className="card-text">
            <h3>LOREM IPSUM</h3>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever
              since.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-img-3"></div>
          <div className="card-text">
            <h3>LOREM IPSUM</h3>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever
              since.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
