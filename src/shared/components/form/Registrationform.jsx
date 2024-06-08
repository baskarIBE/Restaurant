import { useState } from "react";
import { Link } from "react-router-dom";
// import { RegisterPostServices } from "../../../services/authendication/apiregister";
import { apiemailotp,apiverifyotp } from "../../../services/authendication/apiemailverification.js";




export default function Registrationform(props) {
    const {handlechange,handleregister}=props;


    // OTP state and functions
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
  };


  const sendOtp = async () => {
    console.log(email);
    
      const res=await apiemailotp(email);
        console.log(res)

    if (res!=null) {
      setOtpSent(true);
      alert('OTP sent to your email.');
    } else {
      alert('Failed to send OTP. Please try again.');
    }
  }

  
  const verifyOtp = async () => {
    const data={otp : otp, email:email}
    const response=await apiverifyotp(data);

    if (response.status=="OTP verified") {
      setOtpVerified(true);
      alert('Email verified successfully.');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

    // const [add,setAdd] = useState('');
    // useEffect(()=>{
        
    //     navigator.geolocation.getCurrentPosition(pos=>{
    //         alert("hi");
    //         const {latitude,longitude}=pos.coords;
    //         console.log(latitude,longitude)
    //         const url =`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    //         // fetch(url).then(res=>res.json()).then(data=>console.log(data));
    //         fetch(url).then(res=>res.json()).then(data=>setAdd(data.address));
    //         // const country=add.country;
    //         // console.log(country);
    //     })
    // },[])

    // const LocationFetcher = () => {
    //     const [address, setAddress] = useState('');
    //     const [error, setError] = useState('');
    
    //     useEffect(() => {
    //         const fetchLocation = async () => {
    //             if (navigator.geolocation) {
    //                 navigator.geolocation.getCurrentPosition(
    //                     async (pos) => {
    //                         const { latitude, longitude } = pos.coords;
    //                         console.log(latitude, longitude);
    //                         const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    //                         try {
    //                             const response = await fetch(url);
    //                             const data = await response.json();
    //                             setAddress(data.address);
    //                             console.log(data.address);
                                
    //                         } catch (error) {
    //                             setError('Error fetching address data.');
    //                             console.error(error);
    //                         }
    //                     },
    //                     (error) => {
    //                         setError('Error getting location.');
    //                         console.error(error);
    //                     }
    //                 );
    //             } else {
    //                 setError('Geolocation is not supported by this browser.');
    //             }
                
    //         };
    
    //         fetchLocation();
            
    //     }, []);
    // }
    


    

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
                <form onSubmit={handleregister}>
                          <div className='float-left w-full mb-[50px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[20px] text-[#E24622]' htmlFor=''>Name</label>
                              </div>
                              <div>
                                  <input type='text' name='name' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' onChange={handlechange} required />
                              </div>
                          </div>
                          <div className='float-left w-full mb-[50px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[20px] text-[#E24622]' htmlFor=''>Email</label>
                              </div>
                              <div>
                                  <input type='Email' name='email' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' value={email} onChange={handleChangeEmail} required />
                                  <button type='button' onClick={sendOtp} disabled={otpSent}>Send OTP</button>
                                  {otpSent && (
                                      <div className='flex flex-col mt-4'>
                                          <label htmlFor='otp' className='lora-Regular text-[20px] text-[#E24622]'>Enter OTP</label>
                                          <input
                                              type='text'
                                              name='otp'
                                              className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]'
                                              value={otp}
                                              onChange={handleChangeOtp}
                                              required
                                          />
                                          <button type='button' onClick={verifyOtp}>Verify OTP</button>
                                      </div>
                                  )}
                                  {otpVerified && (
                                      <div className='mt-4'>
                                          <p className='text-green-500'>Email verified successfully!</p>
                                      </div>
                                  )}
                              </div>
                          </div>
                          <div className='float-left w-full mb-[50px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[20px] text-[#E24622]' htmlFor=''>Phone number</label>
                              </div>
                              <div>
                                  <input type='number' name='number' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' onChange={handlechange} required />
                              </div>
                          </div>

                        <div className="flex w-full mx-auto float-left gap-4">
                          <div className='float-left w-full mb-[50px]'>
                                <div className='flex justify-start pb-[10px]'>
                                    <label className='lora-Regular text-[20px] text-[#E24622]' htmlFor=''>District</label>
                                </div>
                                <div>
                                    <select name='district' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' onChange={handlechange} required>
                                        <option value=''>Select your district</option>
                                        <option value='DistrictA'>Vellore</option>
                                        {/* <option value='DistrictB'>DistrictB</option>
                                        <option value='DistrictC'>DistrictC</option> */}
                                    </select>
                                </div>
                            </div>
                            <div className='float-left w-full mb-[50px]'>
                                <div className='flex justify-start pb-[10px]'>
                                    <label className='lora-Regular text-[20px] text-[#E24622]' htmlFor=''>Town</label>
                                </div>
                                <div>
                                    <select name='district' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' onChange={handlechange} required>
                                        <option value=''>Select your Town</option>
                                        <option value='DistrictA'>Katpadi</option>
                                        <option value='DistrictB'>Thangal</option>
                                        <option value='DistrictC'>Brammapuram</option>
                                        <option value='DistrictC'>Sugarmill</option>
                                        <option value='DistrictC'>Thiruvalam</option>
                                        <option value='DistrictC'>Arcot</option>
                                        <option value='DistrictC'>Puttuthakku</option>
                                        <option value='DistrictC'>Seavur</option>

                                    </select>
                                </div>
                            </div>
                        </div>


                          <div className='float-left w-full mb-[50px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[20px] text-[#E24622]' htmlFor=''>Create Password</label>
                              </div>
                              <div>
                                  <input type='password' name='password' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' onChange={handlechange} required />
                              </div>
                          </div>
                          <div className='float-left w-full mb-[20px]'>
                              <div className='flex justify-start pb-[10px]'>
                                  <label className='lora-Regular text-[20px] text-[#E24622]' htmlFor=''>Confirm Password</label>
                              </div>
                              <div>
                                  <input type='password' name='confirm_password' className='border w-full outline-none rounded-[10px] py-[15px] bg-[#D9D9D9]' onChange={handlechange} required />
                              </div>
                          </div>
                          <div className='float-left flex gap-[18rem] pt-[10px]'>
                              <div>
                                  <p className='text-[#5B5B5B] text-[16px] lora-Regular'>Already have an account? <Link className="hover:text-[#E24622]" to={'/login'}>Login here</Link></p>
                              </div>
                          </div>
                          <div className='float-left w-full pt-[20px] mb-[20px]'>
                              <div className='flex justify-center'>
                                  <button className='text-[#fff] text-[24px] lora-Regular border bg-[#E24622] py-[10px] px-[40px] rounded hover:bg-[#fff]  hover:text-[#E24622]'>Register</button>
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




