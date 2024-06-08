import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
// import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";

import useAuth from "../../shared/hooks/useAuth.js";
// import { useState } from "react";
import { Link } from "react-router-dom";





export default function Header() {
    
    const {IsloggedIn,userdetails,logout}=useAuth();
    console.log(IsloggedIn);
console.log(userdetails());
  return (
    <header>
        <div className="py-6 bg-[#E24622]">
            <div>
              <Navbar className="bg-transparent backdrop-blur-none">
                  {/* <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand> */}
                  <NavbarContent className="hidden sm:flex gap-8" justify="center">

                      <NavbarItem>
                          <Link to={''} color="foreground" className="text-white lato-bold hover:text-[#2C2C2C]" href="#">
                              Home
                          </Link>
                      </NavbarItem>
                      <NavbarItem isActive>
                          <Link to={'/'} href="#" aria-current="page" className="text-white lato-bold hover:text-[#2C2C2C]" color="secondary">
                              About Us
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link color="foreground" className="text-white lato-bold hover:text-[#2C2C2C]" href="#">
                              Menu
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link to={'reservation'} color="foreground" className="text-white lato-bold hover:text-[#2C2C2C]" href="#">
                              Reservation
                          </Link>
                      </NavbarItem>

                      <NavbarItem>
                          <Link to={'/'} color="foreground" href="#">
                              <img className="mx-auto" src="images/logo.png" alt="" />
                          </Link>
                      </NavbarItem>

                      {/* <NavbarItem>
                          <Link color="foreground" className="text-white lato-bold hover:text-[#2C2C2C]" href="#">
                              Reservation
                          </Link>
                      </NavbarItem> */}

                          <Dropdown placement="bottom-end">
                              <DropdownTrigger className="text-white lato-bold hover:text-[#2C2C2C] cursor-pointer"><Link to={'/shop'}>Shop+</Link></DropdownTrigger>
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

                          <Dropdown placement="bottom-end">
                              <DropdownTrigger className="text-white lato-bold hover:text-[#2C2C2C] cursor-pointer"><Link to={'/Contactus'}>Contact Us</Link></DropdownTrigger>
                              <DropdownMenu aria-label="Profile Actions" variant="flat">
                              <DropdownItem  key="configurations"><Link to={'/faq'}>Faq</Link></DropdownItem>
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
                          <DropdownMenu aria-label="Profile Actions" variant="flat">
                          <DropdownItem key="system"><Link to={'/registration'}>Register</Link></DropdownItem>
                          </DropdownMenu>
                      </Dropdown>
                  </NavbarContent>
              </Navbar>

              </div>
              <div>

      </div>

        </div>
    </header>
  )
}
