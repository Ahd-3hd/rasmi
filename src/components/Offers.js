import React from "react";
export default class Offers extends React.Component {
  render() {
    return (
      <div id="offers-container">
        <h2>Our Offers</h2>
        <div id="offers-internal">
          <div className="offer">
            <h4>Offer One</h4>
            <ul>
              <li>is simply dummy text of the printing</li>
              <li>
                Lorem Ipsum has been the industry's standard dummy text ever
                since.
              </li>
              <li>
                There are many variations of passages of Lorem Ipsum available
              </li>
            </ul>
            <button>Click</button>
          </div>
          <div className="offer">
            <h4>Offer Two</h4>
            <ul>
              <li>is simply dummy text of the printing</li>
              <li>
                Lorem Ipsum has been the industry's standard dummy text ever
                since.
              </li>
              <li>
                There are many variations of passages of Lorem Ipsum available
              </li>
            </ul>
            <button>Click</button>
          </div>
          <div className="offer">
            <h4>Offer Two</h4>
            <ul>
              <li>is simply dummy text of the printing</li>
              <li>
                Lorem Ipsum has been the industry's standard dummy text ever
                since.
              </li>
              <li>
                There are many variations of passages of Lorem Ipsum available
              </li>
            </ul>
            <button>Click</button>
          </div>
        </div>
      </div>
    );
  }
}
