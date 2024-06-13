import { Link } from "react-router-dom";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function Shop() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
            <div className="max-w-[79rem] mx-auto float-left w-full bg-[#D9D9D9] p-[4rem]">
                <ul className="float-left w-full">
                    
                    <li className="float-left mr-[2.5rem] bg-[#fff] rounded-[10px] mb-[2rem]">
                    
                        <div className="float-left w-full hovbglis relative">
                            <div className="float-left max-w-[20rem] py-[10px] px-[10px]">
                                <h3 className="text-[#393838] lora text-[15px] py-[10px] pl-[20px] border-b-2 border-dotted">Caprese Skewers</h3>
                                <p className="text-[#706E6E] lora text-[15px] py-[10px] pb-[20px]">Cherry tomatoes, mozzarella balls, and basil leaves drizzled with olive oil and balsamic reduction.</p>
                            </div>
                                <div className="absolute bottom-[30px] left-[24px]">
                                <button className="border rounded-[10px] px-[20px] bg-[#fff] py-[10px] border-[#000] mr-[10px] text-[#5BB074] lora text-[14px]">Add</button>
                                <Button onPress={onOpen} className="border rounded-[10px] px-[20px] bg-[#fff] py-[10px] border-[#000] text-[#5BB074] lora text-[14px]">More Details</Button>
                                </div>
                            <div className="max-w-[20rem] float-left">
                            <img className="" src="images/product1.png" alt="" />
                            </div>
                        </div>
                    
                    </li>
                    <li className="float-left bg-[#fff] rounded-[10px] mb-[2rem]">
                        <div className="float-left w-full hovbglis relative">
                            <div className="float-left max-w-[20rem] py-[10px] px-[10px]">
                                <h3 className="text-[#393838] lora text-[15px] py-[10px] pl-[20px] border-b-2 border-dotted">Caprese Skewers</h3>
                                <p className="text-[#706E6E] lora text-[15px] py-[10px] pb-[20px]">Cherry tomatoes, mozzarella balls, and basil leaves drizzled with olive oil and balsamic reduction.</p>
                            </div>
                                <div className="absolute bottom-[30px] left-[24px]">
                                <button className="border rounded-[10px] px-[20px] bg-[#fff] py-[10px] border-[#000] mr-[10px] text-[#5BB074] lora text-[14px]">Add</button>
                                <Button onPress={onOpen} className="border rounded-[10px] px-[20px] bg-[#fff] py-[10px] border-[#000] text-[#5BB074] lora text-[14px]">More Details</Button>
                                </div>
                            <div className="max-w-[20rem] float-left">
                            <img className="" src="images/product1.png" alt="" />
                            </div>
                        </div>
                    </li>
                    <li className="float-left mr-[2.5rem] bg-[#fff] rounded-[10px] mb-[2rem]">
                        <div className="float-left w-full hovbglis relative">
                            <div className="float-left max-w-[20rem] py-[10px] px-[10px]">
                                <h3 className="text-[#393838] lora text-[15px] py-[10px] pl-[20px] border-b-2 border-dotted">Caprese Skewers</h3>
                                <p className="text-[#706E6E] lora text-[15px] py-[10px] pb-[20px]">Cherry tomatoes, mozzarella balls, and basil leaves drizzled with olive oil and balsamic reduction.</p>
                            </div>
                                <div className="absolute bottom-[30px] left-[24px]">
                                <button className="border rounded-[10px] px-[20px] bg-[#fff] py-[10px] border-[#000] mr-[10px] text-[#5BB074] lora text-[14px]">Add</button>
                                <Button onPress={onOpen} className="border rounded-[10px] px-[20px] bg-[#fff] py-[10px] border-[#000] text-[#5BB074] lora text-[14px]">More Details</Button>
                                </div>
                            <div className="max-w-[20rem] float-left">
                            <img className="" src="images/product1.png" alt="" />
                            </div>
                        </div>
                    </li>
                    <li className="float-left bg-[#fff] rounded-[10px] mb-[2rem]">
                        <div className="float-left w-full hovbglis relative">
                            <div className="float-left max-w-[20rem] py-[10px] px-[10px]">
                                <h3 className="text-[#393838] lora text-[15px] py-[10px] pl-[20px] border-b-2 border-dotted">Caprese Skewers</h3>
                                <p className="text-[#706E6E] lora text-[15px] py-[10px] pb-[20px]">Cherry tomatoes, mozzarella balls, and basil leaves drizzled with olive oil and balsamic reduction.</p>
                            </div>
                                <div className="absolute bottom-[30px] left-[24px]">
                                <button className="border rounded-[10px] px-[20px] bg-[#fff] py-[10px] border-[#000] mr-[10px] text-[#5BB074] lora text-[14px]">Add</button>
                                <Button onPress={onOpen} className="border rounded-[10px] px-[20px] bg-[#fff] py-[10px] border-[#000] text-[#5BB074] lora text-[14px]">More Details</Button>
                                </div>
                            <div className="max-w-[20rem] float-left">
                            <img className="" src="images/product1.png" alt="" />
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
          </div>
          {/* faq page content part end close*/}


          
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
          
    </section>
  )
}
