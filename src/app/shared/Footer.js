import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="az-footer ht-40">
          <div className="container ht-100p pd-t-0-f">
            <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://rizq.us/v2/" target="_blank" rel="noopener noreferrer">RizqPay Solutions</a>2021</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Dashboard Fe by JustEd.  </span>
            </div>
          </div>{/* container */}
        </div>{/* az-footer */}
      </div>
    )
  }
}

export default Footer
