import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Reservationform extends Component {
  render() {
    return (
      <section>
        <div className="w-full mb-[3rem]">
        <div className='w-full relative'>
        <img className="w-full" src="images/reservation.png" alt="" />
        <div className='w-full absolute top-[40%] flex items-center justify-center'>
            <h2 className='lora-Regular text-[52px] text-[#fff] uppercase'>Reservation</h2>
        </div>
        </div>
        
        </div>
        <div className='flex justify-center'>
            <h2 className="text-[28px] text-[#E24622] py-6 lora">Table Booking</h2>
        </div>
        <div>
            <form>
                <div className='max-w-[90rem] w-full mx-auto'>
                    <div className='max-w-[40rem] w-full mr-3 float-left'>
                        <div className='mb-[3rem]'>
                            <div>
                                <label className='lato-bold text-[16px]' htmlFor=''>First Name*</label>
                            </div>
                            <div>
                                <input type='text' name='name' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>

                        <div className='mb-[3rem]'>
                            <label className='lato-bold text-[16px]' htmlFor=''>Mobile Number*</label>
                            <div>
                                <input type='number' name='mobilenumber' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>

                    

                        <div className='mb-[3rem]'>
                            <label className='lato-bold text-[16px]' htmlFor=''>Select Date</label>
                            <div>
                                <input type='date' name='password' className='px-4 py-2 border w-full outline-none'  required/>
                            </div>
                        </div>

                        <div className='mb-[3rem]'>
                            <label className='lato-bold text-[16px]' htmlFor=''>Number of People</label>
                            <div>
                                <input type='date' name='password' className='px-4 py-2 border w-full outline-none'  required/>
                            </div>
                        </div>

                        </div>
                        

                    <div className='max-w-[40rem] w-full float-left'>
                        <div className='mb-[3rem]'>
                            <div>
                                <label className='lato-bold text-[16px]' htmlFor=''>Last Name</label>
                            </div>
                            <div>
                                <input type='text' name='name' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>

                        <div className='mb-[3rem]'>
                            <label className='lato-bold text-[16px]' htmlFor=''>Email ID</label>
                            <div>
                                <input type='email' name='email' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>

                        <div className='mb-[3rem]'>
                            <label className='lato-bold text-[16px]' htmlFor=''>Select Time</label>
                            <div>
                                <input type='time' name='time' className='px-4 py-2 border w-full outline-none' required />
                            </div>
                        </div>
                    </div>

                        <div className='mb-[3rem] w-full mx-auto float-left'>
                            <label className='lato-bold text-[16px]' htmlFor=''>Comments</label>
                            <div>
                            {/* <textarea class="resize-none border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"></textarea> */}
                            <textarea className="px-4 py-2 border w-full outline-none"></textarea>
                            </div>
                        </div>
                    </div>

                        <div className='w-full float-left flex justify-center'>
                            <div className='mb-[4rem]'>
                                <button type='submit' className='px-4 py-4 border rounded-xl w-full bg-[#E24622] text-white lato-black text-[18px] hover:bg-[#fff] hover:text-[#E24622]'>Submit Booking</button>
                            </div>
                        </div>
                        

                    </form>

        </div>
    </section>
  
    )
  }
}

export default Reservationform