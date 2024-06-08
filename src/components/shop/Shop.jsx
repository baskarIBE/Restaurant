import { Link } from "react-router-dom";


export default function Shop() {
  return (
    <section>
          <div className="w-full mb-[3rem]">
              <div className='w-full relative'>
                  <img className="w-full" src="images/reservation.png" alt="" />
                  <div className='w-full absolute top-[40%] flex items-center justify-center'>
                      <h2 className='lora-Regular text-[52px] text-[#fff] uppercase'>Shop</h2>
                  </div>
              </div>
          </div>
          {/* faq page content part start */}
          <div className="max-w-[90rem] w-full mx-auto">
            <div className="mb-[2rem] flex flex-col-3 items-center border border-[#000] rounded-[20px] pr-[20px]"><span className="display-ruby float-left w-full"><img src="images/left.png" alt="" /><h2 className="lora text-[28px] text-[#000]">Vegetarian Starters</h2></span><span className="inline-block float-right"><img src="images/close.png" alt="" /></span></div>
            <div className="flex items-center mb-[2rem]"><ul className="flex items-center gap-10"><li className="lora text-[28px] text-[#7A7979] border border-[#7A7979] rounded-[20px] p-[20px]">Restaurants</li><li className="lora text-[28px] text-[#7A7979] p-[20px] border border-[#7A7979] rounded-[20px]">Dishes</li></ul></div>
          </div>
          <div className="max-w-[90rem] w-full mx-auto">
            <div className="max-w-[11rem] mx-auto float-left w-full">
                <ul className="w-auto float-left w-full">
                    <li className="float-left w-full"><Link className="lora text-[18px] text-[#000] bg-[#8E8D8D] rounded-[20px] p-[20px] float-left mb-[2rem]">Sort by</Link></li>
                    <li className="float-left w-full"><Link className="lora text-[18px] text-[#000] bg-[#8E8D8D] rounded-[20px] p-[20px] float-left mb-[2rem]">Veg</Link></li>
                    <li className="float-left w-full"><Link className="lora text-[18px] text-[#000] bg-[#8E8D8D] rounded-[20px] p-[20px] float-left mb-[2rem]">Rated 4+</Link></li>
                    <li className="float-left w-full"><Link className="lora text-[18px] text-[#000] bg-[#8E8D8D] rounded-[20px] p-[20px] float-left mb-[2rem]">Rs 100-Rs 250</Link></li>
                    <li className="float-left w-full"><Link className="lora text-[18px] text-[#000] bg-[#8E8D8D] rounded-[20px] p-[20px] float-left mb-[2rem]">Rs 250+</Link></li>

                </ul>
            </div>
            <div className="max-w-[79rem] mx-auto float-left w-full bg-[#D9D9D9]">
                <ul className="grid grid-cols-2 gap-4 float-left">
                    <li className="w-full">
                        <div className="float-left max-w-[34rem]">
                        <h3>Caprese Skewers</h3>
                        <p>Cherry tomatoes, mozzarella balls, and basil leaves drizzled with olive oil and balsamic reduction.</p>
                        <button>Add</button>
                        <button>More Details</button>
                        </div>
                        <div className="max-w-[34rem]">
                        <img className="" src="images/product1.png" alt="" />
                        </div>
                    </li>
                </ul>

            </div>
          </div>
          {/* faq page content part end close*/}
          
    </section>
  )
}
