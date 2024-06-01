import { Link } from "react-router-dom";

export default function Registrationform() {
  return (
    <section>
          <div className="w-full">
              <div className='w-full relative'>
                  <img className="w-full" src="images/reservation.png" alt="" />
                  <div className='w-full absolute top-[40%] flex items-center justify-center'>
                      <h2 className='lora-Regular text-[52px] text-[#fff] uppercase'>Register</h2>
                  </div>
              </div>
          </div>
          <div className='bg-[#D9D9D9] py-[8%] flex'>
          {/* content section start */}
          <div className='max-w-[90rem] w-full mx-auto bg-[#fff] rounded-[20px] bg-[#fff] float-left'>
            <div className='max-w-[30rem] float-left'>
            <img src="images/registration-img.png" alt="" />
            </div>
            <div className='max-w-[60rem] w-full float-left px-[40px] py-[40px]'>
                <form>
                          <div className='float-left w-full mb-[20px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[28px] text-[#E24622]' htmlFor=''>Name</label>
                              </div>
                              <div>
                                  <input type='text' name='name' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' required />
                              </div>
                          </div>
                          <div className='float-left w-full mb-[20px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[28px] text-[#E24622]' htmlFor=''>Email</label>
                              </div>
                              <div>
                                  <input type='Email' name='Email' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' required />
                              </div>
                          </div>
                          <div className='float-left w-full mb-[20px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[28px] text-[#E24622]' htmlFor=''>Phone number</label>
                              </div>
                              <div>
                                  <input type='number' name='number' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' required />
                              </div>
                          </div>
                          <div className='float-left w-full mb-[20px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[28px] text-[#E24622]' htmlFor=''>Address</label>
                              </div>
                              <div>
                                  <input type='text' name='address' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' required />
                              </div>
                          </div>
                          <div className='float-left w-full mb-[20px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[28px] text-[#E24622]' htmlFor=''>Create Password</label>
                              </div>
                              <div>
                                  <input type='password' name='create_password' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' required />
                              </div>
                          </div>
                          <div className='float-left w-full mb-[20px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[28px] text-[#E24622]' htmlFor=''>Confirm Password</label>
                              </div>
                              <div>
                                  <input type='password' name='confirm_password' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' required />
                              </div>
                          </div>
                          <div className='float-left flex gap-[18rem] pt-[10px]'>
                              <div>
                                  <p className='text-[#5B5B5B] text-[16px] lora-Regular'>Already have an account? <Link className="hover:text-[#E24622]">Login here</Link></p>
                              </div>
                          </div>
                          <div className='float-left w-full pt-[20px] mb-[20px]'>
                              <div className='flex justify-center'>
                                  <button className='text-[#fff] text-[28px] lora-Regular border bg-[#E24622] py-[10px] px-[40px] rounded hover:bg-[#fff]  hover:text-[#E24622]'>Register</button>
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
