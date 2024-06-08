
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Faq() {
  const defaultContent =
  "We are open Monday through Friday from 11:00 AM to 10:00 PM, Saturday from 9:00 AM to 11:00 PM, and Sunday from 9:00 AM to 9:00 PM. We are closed on public holidays.";




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
                <div className="max-w-[20rem] relative mr-[3rem]">
                    <img className="" src="images/faq-img.png" alt="" />
                    <span className="absolute p-[36%] border-[10px] border-[#000] top-[-29px] right-[35px]">.</span>
                </div>
                <div className="max-w-[70rem]">
                    <h3 className="lora text-[28px] text-[#E24622] mb-[20px]">Do You Have Any Questions?</h3>
                    <p className="lora-Regular text-[20px]">Please read questions bellow and if you can not find your answer, please send us your question, we will answer you as soon as possible.</p>
                </div>

            </div>
            <div className="max-w-[90rem] w-full mx-auto flex items-center mt-[4rem]">
                <h3 className="text-[#7F3609] lora text-[35px] mb-[2rem]">General Information</h3>
            </div>
            <div className="max-w-[60rem] w-full mx-auto flex items-center">
              {/* accordion start */}
            <Accordion className="abodysty" defaultExpandedKeys={["1"]}>
              <AccordionItem className="bsty mb-[1rem]" key="1" aria-label="Accordion 1" subtitle="" title="What are your operating hours?">
                {defaultContent}
              </AccordionItem>
              <AccordionItem className="bsty mb-[1rem]" key="2" aria-label="Accordion 2" subtitle="" title="Do you offer parking?">
                <p>Yes, we have a dedicated parking lot for our guests. Additionally, there is ample street parking available nearby.</p>
              </AccordionItem>
              <AccordionItem className="bsty mb-[1rem]" key="3" aria-label="Accordion 3" subtitle="" title="Do you offer parking?">
                <p>Yes, we have a dedicated parking lot for our guests. Additionally, there is ample street parking available nearby.</p>
              </AccordionItem>
            </Accordion>
              {/* accordion end */}
            </div>
            {/* section 2 */}
            <div className="max-w-[90rem] w-full mx-auto flex items-center mt-[4rem]">
                <h3 className="text-[#7F3609] lora text-[35px] mb-[2rem]">Menu and Dietary Information</h3>
            </div>
            <div className="max-w-[60rem] w-full mx-auto flex items-center">
              {/* accordion start */}
            <Accordion className="abodysty" defaultExpandedKeys={["1"]}>
              <AccordionItem className="bsty mb-[1rem]" key="1" aria-label="Accordion 1" subtitle="" title="Do you offer vegetarian/vegan/gluten-free options?">
                <p>Yes, we have a variety of vegetarian, vegan, and gluten-free options on our menu. Please inform your server of any dietary restrictions or allergies, and they will be happy to assist you.</p>
              </AccordionItem>
              <AccordionItem className="bsty mb-[1rem]" key="2" aria-label="Accordion 2" subtitle="" title="Can I see the menu online?">
                <p>Yes, our full menu is available on our website. You can view it here.</p>
              </AccordionItem>
              
            </Accordion>
              {/* accordion end */}
            </div>

            

          </div>
          {/* faq page content part end */}
          
    </section>
    
  )
}
