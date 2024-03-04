import React from 'react'
import Link from 'next/link'

const DashBoard = () => {
  return (
    <div>
      <div className="bg-primary w-100">
        <div className="d-flex justify-content-between">
          <div className="">
            <h2 className="p-2 ms-5">AIMS</h2>
          </div>
          <div className="fs-4 d-flex align-items-center me-5">
            <div>Sign Out</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between p-3">
        <div className="fs-2 ms-5">Welcome Jafar</div>
        <div className="d-flex align-items-center me-5">
          <div>My Profile</div>
        </div>
      </div>
      <div
        className={`mx-auto col-10 p-3 border rounded-3 bg-light mb-5 shadow-lg my-5`}
      >
        <h2 className="text-center p-2">Booking History</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mercedz-Benz</td>
              <td>C-300</td>
              <td>2018</td>
              <td>
                <Link href={"/"} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Toyota</td>
              <td>Camry (Muscle)</td>
              <td>2012</td>
              <td>
                <Link href={"/"} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Honda</td>
              <td>Accord</td>
              <td>2019</td>
              <td>
                <Link href={"/"} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Toyota</td>
              <td>Corolla</td>
              <td>2020</td>
              <td>
                <Link href={"/"} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-between">
            <div></div>
            <div className="me-5">
              <Link href={"/"} className="">
                View all
              </Link>
            </div>
          </div>
      </div>
      <footer className="bg-light"></footer>
    </div>
  );
}

export default DashBoard