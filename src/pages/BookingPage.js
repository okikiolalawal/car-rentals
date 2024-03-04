import React from 'react'

const BookingPage = () => {
  return (
    <div>
        <div className='mx-auto p-5'>
            <label htmlFor="" className='form-label text-center'>Which Car Do You Wish For</label>
            <div className='row '>
                <div className='col-5 p-3'>
                    <label className='form-label'>Make</label>
                <select
                className="form-select"
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              >
                <option value="parent" className="form-control">
                  Mercedez-Benz
                </option>
                <option value="principal" className="form-control">
                   Toyota
                </option>
                <option value="teacher" className="form-control">
                  Honda
                </option>
                <option value="teacher" className="form-control">
                  Ford
                </option>
              </select>
                </div>
                <div className='col-5 p-3'>
                    <label className='form-label'>Model</label>
                <select
                className="form-select"
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              >
                <option value="parent" className="form-control">
                  Mercedez-Benz
                </option>
                <option value="principal" className="form-control">
                   Toyota
                </option>
                <option value="teacher" className="form-control">
                  Honda
                </option>
                <option value="teacher" className="form-control">
                  Ford
                </option>
              </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingPage