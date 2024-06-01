
export default function Faq() {
  return (

    <section>
          <div className="w-full mb-[3rem]">
              <div className='w-full relative'>
                  <img className="w-full" src="images/reservation.png" alt="" />
                  <div className='w-full absolute top-[40%] flex items-center justify-center'>
                      <h2 className='lora-Regular text-[52px] text-[#fff] uppercase'>Faq</h2>
                  </div>
              </div>
          </div>
          {/* faq page content part start */}
          <div className="max-w-[90rem] w-full mx-auto bg-[#D9D9D9] py-[3%] px-[3%]">
            <div className="max-w-[90rem] w-full mx-auto flex items-center">
                <div className="max-w-[20rem] relative">
                    <img className="" src="images/faq-img.png" alt="" />
                    <span className="absolute p-[36%] border-[10px] border-[#000] top-[-29px] right-[35px]">.</span>
                </div>
                <div className="max-w-[70rem]">
                    <h3>Do You Have Any Questions?</h3>
                    <p>Please read questions bellow and if you can not find your answer, please send us your question, we will answer you as soon as possible.</p>
                </div>

            </div>

          </div>
          {/* faq page content part end */}
          
    </section>
    
  )
}
