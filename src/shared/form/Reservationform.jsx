import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Reservationform extends Component {
  render() {
    return (
      <section>
        <div className="w-full">
        <img className="w-full" src="images/reservation.png" alt="" />
        </div>
        <div className='flex justify-center'>
            <h2 className=" text-2xl text-[#E24622] py-6 font-bold">Table Booking</h2>
        </div>
        <div>
            <form>
                <div className='max-w-[90rem] w-full mx-auto'>
                    <div className='max-w-[40rem] w-full mr-3 float-left'>
                        <div className='mb-3'>
                            <div>
                                <label htmlFor=''>First Name*</label>
                            </div>
                            <div>
                                <input type='text' name='name' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor=''>Mobile Number*</label>
                            <div>
                                <input type='number' name='mobilenumber' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>

                    

                        <div className='mb-3'>
                            <label htmlFor=''>Select Date</label>
                            <div>
                                <input type='date' name='password' className='px-4 py-2 border w-full outline-none'  required/>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor=''>Number of People</label>
                            <div>
                                <input type='date' name='password' className='px-4 py-2 border w-full outline-none'  required/>
                            </div>
                        </div>

                        </div>
                        

                    <div className='max-w-[40rem] w-full float-left'>
                        <div className='mb-3'>
                            <div>
                                <label htmlFor=''>Last Name</label>
                            </div>
                            <div>
                                <input type='text' name='name' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor=''>Email ID</label>
                            <div>
                                <input type='email' name='email' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor=''>Select Time</label>
                            <div>
                                <input type='time' name='time' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>
                    </div>

                        <div className='mb-3 w-full mx-auto float-left'>
                            <label htmlFor=''>Comments</label>
                            <div>
                            {/* <textarea class="resize-none border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"></textarea> */}
                            <textarea className="px-4 py-2 border w-full outline-none"></textarea>
                            </div>
                        </div>
                    </div>

                        <div className='mb-3 justify-center'>
                            <div className=''>
                                <button type='submit' className='px-4 py-2 border rounded-xl w-full bg-blue-700 text-white w-auto'>Register</button>
                            </div>
                        </div>
                        <div>
                            Already have Account ? <Link to={'/login'} className="text-red-500">Login</Link>
                        </div>

                    </form>

        </div>
    </section>
  
    )
  }
}

export default Reservationform