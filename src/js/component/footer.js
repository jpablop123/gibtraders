import React from 'react';

export const Footer = () => (
  <footer style={{ backgroundColor: '#ffeecc' }}>
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#818963' }}>Acerca de nosotros!</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
            voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#818963' }}>links</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <a href="#!" style={{ color: '#4f4f4f' }}>Frequently Asked Questions</a>
            </li>
            <li className="mb-1">
              <a href="#!" style={{ color: '#4f4f4f' }}>Delivery</a>
            </li>
            <li className="mb-1">
              <a href="#!" style={{ color: '#4f4f4f' }}>Pricing</a>
            </li>
            <li>
              <a href="#!" style={{ color: '#4f4f4f' }}>Where we deliver?</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-1" style={{ letterSpacing: '2px', color: '#818963' }}>Working Hours</h5>
          <table className="table" style={{ color: '#4f4f4f', borderColor: '#666' }}>
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Sat:</td>
                <td>8am - 1am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="text-center p-3" style={{ backgroundColor: 'rgb(255, 165, 0)' }}>
      © 2020 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
);
