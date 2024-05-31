import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
// import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";





export default function Header() {
  return (
    <header>
        <div className="bg-[#E24622] py-6">
            <div>
              <Navbar className="bg-transparent backdrop-blur-none">
                  {/* <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand> */}
                  <NavbarContent className="hidden sm:flex gap-8" justify="center">

                      <NavbarItem>
                          <Link color="foreground" className="text-white lato-bold hover:text-[#DF250E]" href="#">
                              Home
                          </Link>
                      </NavbarItem>
                      <NavbarItem isActive>
                          <Link href="#" aria-current="page" className="text-white lato-bold hover:text-[#DF250E]" color="secondary">
                              About Us
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link color="foreground" className="text-white lato-bold hover:text-[#DF250E]" href="#">
                              Menu
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link color="foreground" className="text-white lato-bold hover:text-[#DF250E]" href="#">
                              Reservation
                          </Link>
                      </NavbarItem>

                      <NavbarItem>
                          <Link color="foreground" href="#">
                              <img className="mx-auto" src="images/logo.png" alt="" />
                          </Link>
                      </NavbarItem>

                      <NavbarItem>
                          <Link color="foreground" className="text-white lato-bold hover:text-[#DF250E]" href="#">
                              Reservation
                          </Link>
                      </NavbarItem>

                      <NavbarItem>
                          <Link color="foreground" className="text-white lato-bold hover:text-[#DF250E]"  href="#">
                              Shop+
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link color="foreground" className="text-white lato-bold hover:text-[#DF250E]" href="#">
                              Contact Us+
                          </Link>
                      </NavbarItem>

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
                          <DropdownMenu aria-label="Profile Actions" variant="flat">
                              <DropdownItem key="profile" className="h-14 gap-2">
                                  <p className="font-semibold">Signed in as</p>
                                  <p className="font-semibold">zoey@example.com</p>
                              </DropdownItem>
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
                  </NavbarContent>
              </Navbar>

              </div>
              <div>

      </div>

        </div>
    </header>
  )
}
