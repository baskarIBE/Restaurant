import React from 'react'

export default function Contactform() {
  return (
    <section>
          <div className="w-full mb-[3rem]">
              <div className='w-full relative'>
                  <img className="w-full" src="images/reservation.png" alt="" />
                  <div className='w-full absolute top-[40%] flex items-center justify-center'>
                      <h2 className='lora-Regular text-[52px] text-[#fff] uppercase'>Contact Us</h2>
                  </div>
              </div>

          </div>
          <div className='flex justify-center mb-[60px]'>
              <h2 className="text-[28px] text-[#E24622] py-6 lora">WE ARE LOCATED IN THE HEART OF INDIA.</h2>
          </div>
          <div className='max-w-[80rem] w-full mx-auto flex items-center justify-center mb-[8%]'>
              <div className='max-w-[35rem] w-full mx-auto mr-[10%] float-left'>
                  <h4 className="w-full lora text-[18px] text-[#000] flex"><span className='inline-block'><img src="images/address.png" alt="" /></span>ADDRESS</h4>
                  <p className="w-full lora text-[18px] text-[#000] pl-[40px]">Mohali, Punjab</p>
                  <p className="w-full lora text-[18px] text-[#000] pl-[40px]">Industrial Area, Phase 8 </p>
              </div>
              <div className='max-w-[35rem] w-full mx-auto float-left'>
                  <h4 className="w-full lora text-[18px] text-[#000] flex"><span className='inline-block pr-[10px]'><img src="images/contact.png" alt="" /></span>CONTACT</h4>
                  <p className="w-full lora text-[18px] text-[#000] pb-[20px] pl-[50px]">01622 222 222</p>
                  <h4 className="w-full lora text-[18px] text-[#000] flex"><span className='inline-block pr-[10px]'><img src="images/mail.png" alt="" /></span>EMAIL</h4>
                  <p className="w-full lora text-[18px] text-[#000] pl-[45px]">INFO@RESTUARANT.COM</p>
              </div>
          </div>
          <div className='max-w-[80rem] w-full mx-auto mb-[10%]'>
             <h3 className='lora text-[28px] text-[#E24622] w-full flex justify-center pb-[2%]'>LOOKING TO HAVE AN EVENT?</h3>
             <p className='lora text-[16px] text-[#000] w-full flex justify-center pb-[4%]'>Fill out this form below and we'll get right back to you!</p>

              <form>
                  
                  <div className='max-w-[90rem] w-full mx-auto'>
                    <div className='flex'>
                      <div className='max-w-[40rem] w-full mr-3 float-left'>
                          <div className='mb-[3rem]'>
                              {/* <div>
                                  <label className='lato-bold text-[16px]' htmlFor=''>First Name*</label>
                              </div> */}
                              <div>
                                  <input placeholder='Name*' type='text' name='name' className='px-4 py-2 border w-full outline-none rounded-[10px]' required />
                              </div>
                          </div>

                          <div className='mb-[3rem]'>
                              {/* <label className='lato-bold text-[16px]' htmlFor=''>Mobile Number*</label> */}
                              <div>
                                  <input placeholder='phone Number*' type='Email' name='mobilenumber' className='px-4 py-2 border w-full outline-none rounded-[10px]' required />
                              </div>
                          </div>

                          <div className='mb-[3rem]'>
                              {/* <label className='lato-bold text-[16px]' htmlFor=''>Mobile Number*</label> */}
                              <div>
                                  <input placeholder='DD-MM-YY*' type='date' name='date' className='px-4 py-2 border w-full outline-none rounded-[10px]' required />
                              </div>
                          </div>
                          <div className='mb-[3rem]'>
                              {/* <label className='lato-bold text-[16px]' htmlFor=''>Mobile Number*</label> */}
                              <div>
                                  <input placeholder='Guest count*' type='number' name='gestcount' className='px-4 py-2 border w-full outline-none rounded-[10px]' required />
                              </div>
                          </div>



                         

                      </div>


                      <div className='max-w-[40rem] w-full float-left'>
                          <div className='mb-[3rem]'>
                              <div>
                                  {/* <label className='lato-bold text-[16px]' htmlFor=''>Last Name</label> */}
                              </div>
                              <div>
                                  <input placeholder='Email*' type='text' name='name' className='px-4 py-2 border w-full outline-none rounded-[10px]' required />
                              </div>
                          </div>

                          <div className='mb-[3rem]'>
                              {/* <label className='lato-bold text-[16px]' htmlFor=''>Email ID</label> */}
                              <div>
                                  <input placeholder='Type of Event*' type='email' name='email' className='px-4 py-2 border w-full outline-none rounded-[10px]' required />
                              </div>
                          </div>

                          <div className='mb-[3rem]'>
                              {/* <label className='lato-bold text-[16px]' htmlFor=''>Select Time</label> */}
                              <div>
                                  <input type='time' name='time' className='px-4 py-2 border w-full outline-none rounded-[10px]' required />
                              </div>
                          </div>
                      </div>
                    </div> 

                    <div className='flex'>
                      <div className='w-full mx-auto float-left'>
                          {/* <label className='lato-bold text-[16px]' htmlFor=''>Comments</label> */}
                          <div>
                              {/* <textarea class="resize-none border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"></textarea> */}
                              <textarea className="px-4 py-2 border w-full outline-none rounded-[10px]"></textarea>
                          </div>
                      </div>
                      <div className='w-full float-left flex justify-center items-end'>
                      <div className=''>
                          <button type='submit' className='px-4 py-4 border rounded-xl w-full bg-[#E24622] text-white lato-black text-[18px] hover:bg-[#fff] hover:text-[#E24622]'>Submit Booking</button>
                      </div>
                  </div> 
                  </div>

                  </div>

                  


              </form>

          </div>
    </section>
  )
}
