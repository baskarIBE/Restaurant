import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import useAuth from "../../shared/hooks/useAuth";
import { Link } from "react-router-dom";





export default function Home() {
  const {IsloggedIn,userdetails,logout}=useAuth();
    console.log(IsloggedIn);
console.log(userdetails());
  return (
    
    <section>
      {/* header section start */}
      <header1>
        <div className="absolute left-0 right-0 pt-[3rem] w-full">
            <div>
              <Navbar className="bg-transparent backdrop-blur-none">
                  {/* <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand> */}
                  <NavbarContent className="hidden sm:flex gap-6" justify="center">

                      <NavbarItem>
                          <Link to={'/'} color="foreground" className="text-white lato-bold text-[22px] tracking-[1px] hover:text-[#DF250E]" href="#">
                              Home
                          </Link>
                      </NavbarItem>
                      <NavbarItem isActive>
                          <Link to={'/'} href="#" aria-current="page" className="text-white lato-bold text-[22px] tracking-[1px] hover:text-[#DF250E]" color="secondary">
                              About Us
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link to={'/'} color="foreground" className="text-white lato-bold text-[22px] tracking-[1px] hover:text-[#DF250E]" href="#">
                              Menu
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link to={'/reservation'} color="foreground" className="text-white lato-bold text-[22px] tracking-[1px] hover:text-[#DF250E]" href="#">
                              Reservation
                          </Link>
                      </NavbarItem>

                      <NavbarItem>
                          <Link to={'/'} color="foreground" href="#">
                              <img className="mx-auto" src="images/logo.png" alt="" />
                          </Link>
                      </NavbarItem>

                      {/* <NavbarItem>
                          <Link color="foreground" className="text-white"  href="#">
                              Shop+
                          </Link>
                      </NavbarItem> */}
                      <Dropdown placement="bottom-end">
                      <DropdownTrigger className="text-white lato-bold text-[22px] tracking-[1px] cursor-pointer hover:text-[#DF250E]"><Link to={'/shop'}>Shop+</Link></DropdownTrigger>
                          <DropdownMenu aria-label="Profile Actions" variant="flat">
                              <DropdownItem key="settings">My Settings</DropdownItem>
                              <DropdownItem key="team_settings">Team Settings</DropdownItem>
                              <DropdownItem key="analytics">Analytics</DropdownItem>
                              <DropdownItem key="system">System</DropdownItem>
                              <DropdownItem key="configurations">Configurations</DropdownItem>
                              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                              <DropdownItem key="logout" color="danger">
                                  Log Out
                              </DropdownItem>
                          </DropdownMenu>
                      </Dropdown>
                      {/* <NavbarItem>
                          <Link color="foreground" className="text-white" href="#">
                              Contact Us+
                          </Link>
                      </NavbarItem> */}
                      <Dropdown placement="bottom-end">
                      <DropdownTrigger className="text-white lato-bold text-[22px] tracking-[1px] cursor-pointer hover:text-[#DF250E]"><Link to={'/Contactus'} color="foreground" className="text-white lato-bold text-[22px] tracking-[1px] hover:text-[#DF250E]" href="#">
                              Contact Us+
                          </Link></DropdownTrigger>
                          <DropdownMenu aria-label="Profile Actions" variant="flat">
                              <DropdownItem key="configurations"><Link to={'/faq'}>Faq</Link></DropdownItem>
                              <DropdownItem key="help_and_feedback">Site Map</DropdownItem>
                          </DropdownMenu>
                      </Dropdown>

                  </NavbarContent>

                  <NavbarContent as="div" justify="end">
                      <Dropdown placement="bottom-end">
                          <DropdownTrigger>
                              <Avatar
                                  isBordered
                                  as="button"
                                  className="transition-transform"
                                  color="secondary"
                                  name="Jason Hughes"
                                  size="sm"
                                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                              />
                          </DropdownTrigger>
                          {IsloggedIn && (
                          <DropdownMenu aria-label="Profile Actions" variant="flat">
                              <DropdownItem key="profile" className="h-14 gap-2">
                                  <p className="font-semibold">{userdetails().name}</p>
                                  <p className="font-semibold">{userdetails().email}</p>
                              </DropdownItem>
                              <DropdownItem onPress={logout} key="logout" color="danger">
                                  Log Out
                              </DropdownItem>
                          </DropdownMenu>
                          )}
                          <DropdownMenu className="bg-transparent" aria-label="Profile Actions" variant="flat">
                          <DropdownItem className="bg-transparent" key="system"><Link className="bg-transparent lato-bold text-[22px] tracking-[1px] cursor-pointer hover:text-[#DF250E]" to={'/registration'}>Register</Link></DropdownItem>
                          </DropdownMenu>
                      </Dropdown>
                  </NavbarContent>
              </Navbar>

              </div>
              <div>

      </div>

        </div>
    </header1>

      {/* header section end */}

      {/* banner part start */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper homeslide"
      >
        <SwiperSlide className="h-screen flex items-center justify-center homslicon bg-cover bg-center">
          <img className="w-full mx-auto" src="images/banner1.png" alt="" />
          <div className="absolute max-w-[90rem] w-full mx-auto">
            <h1 className="text-white text-[36px]  leading-[5rem] lato-black tracking-[3px]">Indulge in Culinary Delights at [Restaurant Name] - Where Every Bite Tells a Story! Explore Our Exquisite Menu of Flavors, From Traditional Classics to Contemporary Creations. Join Us for a Memorable Dining Experience Today!</h1>
            <h2 className="text-[white] flex justify-center items-center text-[38px] pb-[2rem] lato-black tracking-[3px]"><span className="bg-[url('images/phone-call.png')] bg-center bg-no-repeat p-[35px]"></span>TEL: 1 (234) 5555</h2>
            <div className="flex justify-center mb-[4rem]">
            <button className="py-3 px-5 bg-[#EB3224] text-white rounded-[10px] mr-[20px] text-[28px] lato-black tracking-[3px] hover:bg-[#fff] hover:text-[#EB3224]">BOOK A TABLE</button>
            <button className="py-3 px-5 bg-[#000] text-white rounded-[10px] text-[28px] lato-black tracking-[3px] hover:bg-[#fff] hover:text-[#000]">ORDER ONLINE</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen flex items-center justify-center homslicon">
          <img className="w-full mx-auto" src="images/banner1.png" alt="" />
          <div className="absolute max-w-[90rem] w-full mx-auto">
            <h1 className="text-white text-[36px]  leading-[5rem] lato-black tracking-[3px]">Indulge in Culinary Delights at [Restaurant Name] - Where Every Bite Tells a Story! Explore Our Exquisite Menu of Flavors, From Traditional Classics to Contemporary Creations. Join Us for a Memorable Dining Experience Today!</h1>
            <h2 className="text-[white] flex justify-center items-center text-[38px] pb-[2rem] lato-black tracking-[3px]"><span className="bg-[url('images/phone-call.png')] bg-center bg-no-repeat p-[35px]"></span>TEL: 1 (234) 5555</h2>
            <div className="flex justify-center mb-[4rem]">
            <button className="py-3 px-5 bg-[#EB3224] text-white rounded-[10px] mr-[20px] text-[28px] lato-black tracking-[3px] hover:bg-[#fff] hover:text-[#EB3224]">BOOK A TABLE</button>
            <button className="py-3 px-5 bg-[#000] text-white rounded-[10px] text-[28px] lato-black tracking-[3px] hover:bg-[#fff] hover:text-[#000]">ORDER ONLINE</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen flex items-center justify-center homslicon">
          <img className="w-full mx-auto" src="images/banner1.png" alt="" />
          <div className="absolute max-w-[90rem] w-full mx-auto">
            <h1 className="text-white text-[36px]  leading-[5rem] lato-black tracking-[3px]">Indulge in Culinary Delights at [Restaurant Name] - Where Every Bite Tells a Story! Explore Our Exquisite Menu of Flavors, From Traditional Classics to Contemporary Creations. Join Us for a Memorable Dining Experience Today!</h1>
            <h2 className="text-[white] flex justify-center items-center text-[38px] pb-[2rem] lato-black tracking-[3px]"><span className="bg-[url('images/phone-call.png')] bg-center bg-no-repeat p-[35px]"></span>TEL: 1 (234) 5555</h2>
            <div className="flex justify-center mb-[4rem]">
            <button className="py-3 px-5 bg-[#EB3224] text-white rounded-[10px] mr-[20px] text-[28px] lato-black tracking-[3px] hover:bg-[#fff] hover:text-[#EB3224]">BOOK A TABLE</button>
            <button className="py-3 px-5 bg-[#000] text-white rounded-[10px] text-[28px] lato-black tracking-[3px] hover:bg-[#fff] hover:text-[#000]">ORDER ONLINE</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen flex items-center justify-center homslicon">
          <img className="w-full mx-auto" src="images/banner1.png" alt="" />
          <div className="absolute max-w-[90rem] w-full mx-auto">
            <h1 className="text-white text-[36px] leading-[5rem] lato-black tracking-[3px]">Indulge in Culinary Delights at [Restaurant Name] - Where Every Bite Tells a Story! Explore Our Exquisite Menu of Flavors, From Traditional Classics to Contemporary Creations. Join Us for a Memorable Dining Experience Today!</h1>
            <h2 className="text-[white] flex justify-center items-center text-[38px] pb-[2rem] lato-black tracking-[3px]"><span className="bg-[url('images/phone-call.png')] bg-center bg-no-repeat p-[35px]"></span>TEL: 1 (234) 5555</h2>
            <div className="flex justify-center mb-[4rem]">
            <button className="py-3 px-5 bg-[#EB3224] text-white rounded-[10px] mr-[20px] text-[28px] lato-black tracking-[3px] hover:bg-[#fff] hover:text-[#EB3224]">BOOK A TABLE</button>
            <button className="py-3 px-5 bg-[#000] text-white rounded-[10px] text-[28px] lato-black tracking-[3px] hover:bg-[#fff] hover:text-[#000]">ORDER ONLINE</button>
          </div>
          </div>
        </SwiperSlide>
        
      </Swiper>

      {/* banner part end */}

      {/* about section Start */}
     
      <div className="bg-[url('images/about-bg.png')] w-full bg-no-repeat bg-cover py-[5rem]" id="about">
      <div className="max-w-[60rem] w-full mx-auto px-4 mb-10">
        
            <div className="relative">
              {/* <h2 className="text-center font-bold text-5xl mb-8 bg-[url('images/title-logo.png')] bg-center p-3 w-full bg-no-repeat">About Us</h2> */}
                <h2 className="text-center lato-bold text-5xl py-[4rem] text-[38px] tracking-[4px]">About Us</h2>
                <div className="absolute top-[40px] left-[240px]">
            <img className="mx-auto" src="images/title-logo.png" alt="" />
            </div>
            </div>
            
            

            <p className="leading-[58px] text-[22px] lora tracking-[0px] text-justify font-bold text-center w-full pb-[2rem]">Welcome to [Restaurant Name], where passion for food meets unparalleled hospitality. Nestled in the heart of [City/Area], our restaurant is a culinary oasis, dedicated to crafting unforgettable dining experiences. With a commitment to sourcing the finest ingredients and a creative approach to cooking, our talented chefs curate dishes that delight the senses and ignite the palate. Whether youre seeking a cozy meal with loved ones or a celebratory feast with friends, our warm ambiance and impeccable service ensure every visit is memorable. Join us and embark on a culinary journey that celebrates the art of food and the joy of shared moments.</p>
            <p className="leading-[58px] text-[22px] lora tracking-[0px] text-justify font-bold text-center w-full pb-[2rem]">Feel free to adjust the details to fit the specific concept, cuisine, and atmosphere of the restaurant.</p>
        </div>
        </div>
        {/* about section end */}
        {/* menu section Start */}
      <div className="w-full bg-no-repeat bg-cover py-[5rem]">
        <div className="max-w-[90rem] w-full mx-auto px-4 mb-10">

          <div className="relative">
            {/* <h2 className="text-center font-bold text-5xl mb-8 bg-[url('images/title-logo.png')] bg-center p-3 w-full bg-no-repeat">About Us</h2> */}
            <h2 className="text-center font-bold text-5xl py-[4rem] lato-bold text-[38px]">OUR MENU</h2>
            <div className="absolute top-[40px] left-[35%]">
              <img className="mx-auto" src="images/title-logo.png" alt="" />
            </div>
          </div>

            {/* tab section start */}
              <div className="flex w-full flex-col">
                  <Tabs aria-label="Options" className="tabclass2">
                    <Tab className="bg-noun lora font-bold text-[28px] text-[#000] tabclass" key="BRUNCH" title="BRUNCH">
                      <Card>
                        <CardBody>
                    {/* tab contened start */}
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                    <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 gap-4">


                    <div className="float-left row-span-1">
                      <div className="border rounded-xl p-[2rem]">
                        <h3 className="text-[28px] text-[#DF250E] lora-Regular font-normal">Entrees</h3>
                        <ul>
                          <li className="grid grid-cols-3 gap-1 align-self">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal ">Wood Oven Roasted Chicken</h4>
                              <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
                              <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
                              <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="float-left row-span-2">
                      <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
                        <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
                        <ul>
                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
                              <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
                              <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
                              <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
                              <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
                              <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
                              <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>



                    <div className="float-left row-span-3">
                      <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
                        <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
                        <ul>
                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
                              <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
                              <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
                              <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
                              <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
                              <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
                              <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>


                    <div className="float-left row-span-4">
                      <div className="border rounded-xl p-[2rem] min-h-0">
                        <h3 className="text-[28px] text-[#DF250E] lora-Regular">Entrees</h3>
                        <ul>
                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] font-normal lato-regular">Wood Oven Roasted Chicken</h4>
                              <p className="text-[17px] font-[300] lato-light">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
                              <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="text-[17px] lato-light inline-block">$15</span>
                            </div>
                          </li>

                          <li className="grid grid-cols-3 gap-1">
                            <div className=" overflow-hidden">
                              <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
                              <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
                            </div>
                            <div>
                              <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
                            </div>
                            <div>
                              <span className="lato-light text-[17px] inline-block">$15</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    </div>
                    
{/* tab contened end */}



                       
                        </CardBody>
                      </Card>  
                    </Tab>
                    <Tab key="LUNCH MENU" title="LUNCH MENU" className="lora font-bold text-[28px] text-[#000] tabclass">
                      <Card>
                        <CardBody>
                          {/* tab contened start */}
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                    <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 gap-4">


<div className="float-left row-span-1">
  <div className="border rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular font-normal">Entrees</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1 align-self">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal ">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>

<div className="float-left row-span-2">
  <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
          <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
          <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
          <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
          <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>



<div className="float-left row-span-3">
  <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
          <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
          <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
          <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
          <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>


<div className="float-left row-span-4">
  <div className="border rounded-xl p-[2rem] min-h-0">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Entrees</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] font-normal lato-regular">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] font-[300] lato-light">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="lato-light text-[17px] inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>

</div>

{/* tab contened end */}
                        </CardBody>
                      </Card>  
                    </Tab>
                    <Tab key="DINNER MENU" title="DINNER MENU" className="lora font-bold text-[28px] text-[#000] tabclass">
                      <Card>
                        <CardBody>
                         {/* tab contened start */}
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                    <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 gap-4">


<div className="float-left row-span-1">
  <div className="border rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular font-normal">Entrees</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1 align-self">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal ">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>

<div className="float-left row-span-2">
  <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
          <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
          <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
          <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
          <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>



<div className="float-left row-span-3">
  <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
          <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
          <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
          <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
          <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>


<div className="float-left row-span-4">
  <div className="border rounded-xl p-[2rem] min-h-0">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Entrees</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] font-normal lato-regular">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] font-[300] lato-light">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="lato-light text-[17px] inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>

</div>

{/* tab contened end */}
                        </CardBody>
                      </Card>  
                    </Tab>
                    <Tab key="KID'S MENU" title="KID'S MENU" className="lora font-bold text-[28px] text-[#000] tabclass">
                      <Card>
                        <CardBody>
                         {/* tab contened start */}
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                    <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 gap-4">


<div className="float-left row-span-1">
  <div className="border rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular font-normal">Entrees</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1 align-self">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal ">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>

<div className="float-left row-span-2">
  <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
          <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
          <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
          <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
          <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>



<div className="float-left row-span-3">
  <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
          <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
          <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
          <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
          <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>


<div className="float-left row-span-4">
  <div className="border rounded-xl p-[2rem] min-h-0">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Entrees</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] font-normal lato-regular">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] font-[300] lato-light">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="lato-light text-[17px] inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>

</div>

{/* tab contened end */}
                        </CardBody>
                      </Card>  
                    </Tab>
                    <Tab key="DESSERTS" title="DESSERTS" className="lora font-bold text-[28px] text-[#000] tabclass tabclass1">
                      <Card>
                        <CardBody>
                          {/* tab contened start */}
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                    <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 gap-4">


<div className="float-left row-span-1">
  <div className="border rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular font-normal">Entrees</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1 align-self">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal ">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>

<div className="float-left row-span-2">
  <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
          <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
          <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
          <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
          <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>



<div className="float-left row-span-3">
  <div className="border bg-[#E7F0F3] rounded-xl p-[2rem]">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Organic Pastas</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra Aglio e Olio</h4>
          <p className="text-[17px] lato-light font-[300]">olive oil, garlic, chili, Grana Padano (add anchovy 2.00)</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Bucatini All’ Amatriciana</h4>
          <p className="text-[17px] lato-light font-[300]">tomato, red onion, guanciale, chili, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Toasted Spaghetti with Clams & Shrimp</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Chitarra al Pomodoro</h4>
          <p className="text-[17px] lato-light font-[300]">tomatoes, garlic, basil, Grana Padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Canestri Cacio e Pepe</h4>
          <p className="text-[17px] lato-light font-[300]">pecorino, Grana Padano, black pepper</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Lasagna Verde Bolognese</h4>
          <p className="text-[17px] lato-light font-[300]">bechamel, mozzarella, grana padano</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>


<div className="float-left row-span-4">
  <div className="border rounded-xl p-[2rem] min-h-0">
    <h3 className="text-[28px] text-[#DF250E] lora-Regular">Entrees</h3>
    <ul>
      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] font-normal lato-regular">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] font-[300] lato-light">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="text-[17px] lato-light inline-block">$15</span>
        </div>
      </li>

      <li className="grid grid-cols-3 gap-1">
        <div className=" overflow-hidden">
          <h4 className="text-[24px] lato-regular font-normal">Wood Oven Roasted Chicken</h4>
          <p className="text-[17px] lato-light font-[300]">Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico.</p>
        </div>
        <div>
          <span className="bg-[url('images/dotted-arrow.png')] bg-center bg-no-repeat p-[20px] inline-block"></span>
        </div>
        <div>
          <span className="lato-light text-[17px] inline-block">$15</span>
        </div>
      </li>
    </ul>
  </div>
</div>

</div>

{/* tab contened end */}
                        </CardBody>
                      </Card>  
                    </Tab>
                  </Tabs>
              </div> 
            {/* tab section end */}
            
          <div className="flex justify-center mt-[6rem] mb-[2rem]">
            <p className="text-[20px] lato-bold"><span className="text-[#EB3224] text-[20px] font-bold lato-bold">KITCHEN OPEN: </span>MON-SAT 12-10PM / SUN 12PM-9:30PM</p>
          </div>
          <div className="flex justify-center mb-[4rem]">
            <button className="border py-3 px-6 bg-[#EB3224] text-white rounded-[10px] mr-[20px] text-[20px] lato-bold tracking-[2px] hover:bg-[#fff] hover:text-[#EB3224]">BOOK A TABLE</button>
            <button className="border py-3 px-6 bg-[#000] text-white rounded-[10px] text-[20px] lato-bold tracking-[2px] hover:bg-[#fff] hover:text-[#000]">ORDER ONLINE</button>
          </div>


            
        </div>
      </div>
        {/* menu section end */}
        {/* service section start */}
        <div className="bg-[url('images/service.png')] w-full bg-no-repeat bg-cover py-[8rem]">
      <div className="max-w-[60rem] w-full mx-auto mb-[6rem] bg-[url('images/service.png')] bg-center bg-no-repeat">
        <ul className="grid grid-cols-2 gap-8">
          <li className="align-self border rounded-xl p-[2rem] bg-white">
            <h3 className="text-[22px] lora text-[#DF250E] pb-[10px]"><span className="bg-[url('images/part-1.png')] bg-center bg-no-repeat p-[20px] mr-[20px]"></span> QUALITY FOOD</h3>
            <p className="lora text-[16px]">We love to serve quality indian food for our guest, Starting from Quality Oils, fresh Vegetables, fresh sea foods, we serve 100% Fresh & Quality food.</p>
          </li>
          <li className="align-self border rounded-xl p-[2rem] bg-white">
            <h3 className="text-[22px] lora text-[#DF250E] pb-[10px]"><span className="bg-[url('images/part-2.png')] bg-center bg-no-repeat p-[30px] mr-[20px]"></span> 100 % INDIAN</h3>
            <p className="lora text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur ipsa veritatis consectetur cupiditate minima quasi voluptates, eius magni?</p>
          </li>
          <li className=" align-self border rounded-xl p-[2rem] bg-white">
            <h3 className="text-[22px] lora text-[#DF250E] pb-[10px]"><span className="bg-[url('images/part-3.png')] bg-center bg-no-repeat p-[20px] mr-[20px]"></span> ECONOMIC PRICE</h3>
            <p className="lora text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur ipsa veritatis consectetur cupiditate minima quasi voluptates, eius magni?</p>
          </li>
          <li className="align-self border rounded-xl p-[2rem] bg-white">
            <h3 className="text-[22px] lora text-[#DF250E] pb-[10px]"><span className="bg-[url('images/part-4.png')] bg-center bg-no-repeat p-[30px] mr-[20px]"></span> 20 YEARS OF EXPERIENCE</h3>
            <p className="lora text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur ipsa veritatis consectetur cupiditate minima quasi voluptates, eius magni?</p>
          </li>

        </ul>

      </div>
      </div>
    {/* service section end */}
    {/* service section start */}
      <div className="bg-[url('images/testimonal.png')] w-full bg-no-repeat bg-cover py-[8rem]">
        <div className="max-w-[60rem] w-full mx-auto px-4 mb-10">
          <div className="relative">
            {/* <h2 className="text-center font-bold text-5xl mb-8 bg-[url('images/title-logo.png')] bg-center p-3 w-full bg-no-repeat">About Us</h2> */}
            <h2 className="text-center lato-bold text-[38px] text-[#DF250E] py-[4rem]">Our Guests Speak</h2>
            <div className="absolute top-[40px] left-[210px]">
              <img className="mx-auto" src="images/title-logo.png" alt="" />
            </div>
          </div>
          <p className="text-[22px] lora leading-relaxed tracking-[2px] mb-[3rem]">At [Restaurant Name], we take pride in providing exceptional dining experiences for our guests. But dont just take our word for it—heres what our valued customers have to say about their time with us:</p>
          <div className="max-w-[60rem] w-full mx-auto relative">
           
          <img className="" src="images/testimonal-img.png" alt="" />
          
          <div className="p-[2rem] max-w-[40rem] w-full mx-auto absolute top-[30%] right-[0] bg-[#000] rounded-[10px] bg-[url('images/testi-icon.png')] bg-no-repeat">
            {/* star start */}
              <div className="flex items-left pb-[20px]">
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              {/* star end */}
            <p className="text-[#fff] pb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur ipsa veritatis consectetur cupiditate minima quasi voluptates, eius magni?</p>

            <div className="float-left mr-[2rem] bg-[#fff]">
          <img className="mx-auto" src="images/dummy.png" alt="" />
          </div>
          <div className="float-left mt-[10px]">
          <h3 className="text-[#fff]">Miranda H. Halim<span className="block text-[#fff]">Restaurant Manager</span></h3>
          </div>

          </div>
          
          </div>
        </div>
      </div>
    {/* service section end */}
    {/* Reservation page start */}
<div className="bg-[url('images/bg-reservation.png')] w-full bg-no-repeat bg-cover">
<div className="max-w-[80rem] w-full mx-auto px-4">
          <div className="relative pb-[10%]">
            {/* <h2 className="text-center font-bold text-5xl mb-8 bg-[url('images/title-logo.png')] bg-center p-3 w-full bg-no-repeat">About Us</h2> */}
            <h2 className="text-center lato-bold text-[38px] text-[#DF250E] py-[4rem]">MAKE A RESERVATION</h2>
            <div className="absolute top-[40px] left-[300px]">
              <img className="mx-auto" src="images/title-logo.png" alt="" />
            </div>
          </div>
            <div className="flex justify-center pb-[20%]">
            <ul className="flex flex-col-3 gap-10">
              <li className="text-white flex items-center lato-bold text-[35px] border py-2 pl-[10px] pr-[30px]"><span className="inline-block pr-[5px]"><img className="mx-auto" src="images/Calendar.png" alt="" /></span>dd-mm-yy</li>
              <li className="text-white flex items-center lato-bold text-[35px] border py-2 pl-[10px] pr-[30px]"><span className="inline-block pr-[5px]"><img className="mx-auto" src="images/clock.png" alt="" /></span>00:00</li>
              <li className="text-white flex items-center lato-bold text-[35px] border py-2 pl-[10px] pr-[30px]"><span className="inline-block pr-[5px]"><img className="mx-auto" src="images/woman.png" alt="" /></span>1</li>
              <li><button className="bg-[#EB3224] text-white text-[35px] lato-bold rounded py-[20px] px-[30px] hover:bg-[#fff] hover:text-[#EB3224]">BOOK A TABLE</button></li>
            </ul>
            </div>



        </div>
</div>
    {/* Reservation page end */}


    {/* footer start */}
    <div className="grid justify-center w-full bg-[#2C2C2C] py-4 pb-10">
      <div className="flex justify-center pb-4">
      <img className="mx-auto" src="images/logo.png" alt="" />
      </div>
      <div className="flex justify-center pb-4">
        <ul className="flex gap-4 text-white">
          <li><Link className="border-r-1 pr-3 leading-1 text-white cursor-pointer hover:text-[#DF250E]">Home</Link></li>
          <li><Link className="border-r-1 pr-3 leading-1 text-white cursor-pointer hover:text-[#DF250E]">About Us</Link></li>
          <li><Link className="border-r-1 pr-3 leading-1 text-white cursor-pointer hover:text-[#DF250E]">Menu</Link></li>
          <li><Link to={'/reservation'} className="border-r-1 pr-3 leading-1 text-white cursor-pointer hover:text-[#DF250E]">Reservation</Link></li>
          <li><Link className="border-r-1 pr-3 leading-1 text-white cursor-pointer hover:text-[#DF250E]">Shop+</Link></li>
          <li><Link className="border-r-1 pr-3 leading-1 text-white cursor-pointer hover:text-[#DF250E]">Pages+</Link></li>
          <li><Link className=" text-white cursor-pointer hover:text-[#DF250E]">Contact Us</Link></li>
        </ul>
      </div>
      <div className="flex justify-center pb-4">
        <p className="text-[#999999] justify-center">Copyright © 2024 YourCompanyName. All rights reserved</p>
      </div>
      <div>
        <ul className="flex justify-center gap-8">
          <li><Link className="cursor-pointer"><img className="mx-auto border rounded-full hover:bg-[#E24622] p-2 hover:border-[#E24622]" src="images/facebook.png" alt="" /></Link></li>
          <li><Link className="cursor-pointer"><img className="mx-auto border rounded-full hover:bg-[#E24622] p-1 hover:border-[#E24622]" src="images/google-plus.png" alt="" /></Link></li>
          <li><Link className="cursor-pointer"><img className="mx-auto border rounded-full hover:bg-[#E24622] p-2 hover:border-[#E24622]" src="images/linkedin.png" alt="" /></Link></li>
          <li><Link className="cursor-pointer"><img className="mx-auto border rounded-full hover:bg-[#E24622] p-2 hover:border-[#E24622]" src="images/twitter.png" alt="" /></Link></li>
        </ul>
      </div>
    </div>

    {/* footer end */}
    
    </section>
  )
}
