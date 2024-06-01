import React from 'react'
import { Link } from 'react-router-dom'

export default function Loginform() {
  return (
    <section>
          <div className="w-full">
              <div className='w-full relative'>
                  <img className="w-full" src="images/reservation.png" alt="" />
                  <div className='w-full absolute top-[40%] flex items-center justify-center'>
                      <h2 className='lora-Regular text-[52px] text-[#fff] uppercase'>Login</h2>
                  </div>
              </div>
          </div>
          <div className='bg-[#D9D9D9] py-[8%] flex'>
          {/* content section start */}
          <div className='max-w-[90rem] w-full mx-auto bg-[#fff] rounded-[20px] bg-[#fff] float-left'>
            <div className='max-w-[30rem] float-left'>
            <img src="images/login-img.png" alt="" />
            </div>
            <div className='max-w-[60rem] w-full float-left px-[8%]'>
                <form>
                          <div className='float-left w-full py-[8%]'>
                              <div className='flex justify-center pb-[20px]'>
                                  <label className='lora text-[28px] text-[#E24622]' htmlFor=''>UserName</label>
                              </div>
                              <div>
                                  <input type='text' name='name' className='px-4 py-2 border w-full outline-none rounded-[10px] py-[20px] bg-[#D9D9D9]' required />
                              </div>
                          </div>
                          <div className='float-left w-full'>
                              <div className='flex justify-center pb-[20px]'>
                                  <label className='lora text-[28px] text-[#E24622]' htmlFor=''>Password</label>
                              </div>
                              <div>
                                  <input type='password' name='password' className='px-4 py-2 border w-full outline-none rounded-[10px] py-[20px] bg-[#D9D9D9]' required />
                              </div>
                          </div>
                          <div className='float-left flex gap-[18rem] pt-[10px]'>
                              <div>
                                  <p className='text-[#5B5B5B] text-[16px] lora-Regular'>Don't have an account? <Link>Register here</Link></p>
                              </div>
                              <div>
                                 <p className='text-[#5B5B5B] text-[16px] lora-Regular'><Link>Forget Password ?</Link></p>
                              </div>
                          </div>
                          <div className='float-left w-full pt-[20px] mb-[20px]'>
                              <div className='flex justify-center'>
                                  <button className='text-[#fff] text-[28px] lora-Regular border bg-[#E24622] py-[10px] px-[40px] rounded hover:bg-[#fff]  hover:text-[#E24622]'>Login</button>
                              </div>
                          </div>
                          <div className='float-left w-full pt-[20px] mb-[40px]'>
                              <div className='flex justify-center'>
                              <span className="bg-[url('images/line.png')] bg-no-repeat w-full"></span>
                                  <p className='lato-black text-[20px] mt-[-15px] mr-[30px]'>or</p>
                              <span className="bg-[url('images/line.png')] bg-no-repeat w-full"></span>
                              </div>
                          </div>
                          <div className='float-left w-full pt-[20px]'>
                              <ul className='flex justify-evenly gap-4'>
                              <li className='border py-[20px] px-[20px]'><span className="bg-[url('images/google.png')] bg-no-repeat w-full p-[6px]"><Link className="ml-[35px] text-[#000] text-[20px] lato-black">Sign Up with Google</Link></span></li>
                              <li className='border py-[20px] px-[20px]'><span className="bg-[url('images/fb-login.png')] bg-no-repeat w-full p-[6px]"><Link className="ml-[35px] text-[#000] text-[20px] lato-black">Sign Up with Facebook</Link></span> </li>
                              </ul>
                          </div>
                </form>
            </div>
                
          </div>
          {/* content section end */}
        </div>

    </section>
  )
}
