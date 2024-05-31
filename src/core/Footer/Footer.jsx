import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="grid justify-center w-full bg-[#2C2C2C] py-4 pb-10">
      <div className="flex justify-center pb-4">
      <img className="mx-auto" src="images/logo.png" alt="" />
      </div>
      <div className="flex justify-center pb-4">
        <ul className="flex gap-4 text-white">
          <li><Link className="border-r-1 pr-3 leading-1 cursor-pointer hover:text-[#DF250E]">Home</Link></li>
          <li><Link className="border-r-1 pr-3 leading-1 cursor-pointer hover:text-[#DF250E]">About Us</Link></li>
          <li><Link className="border-r-1 pr-3 leading-1 cursor-pointer hover:text-[#DF250E]">Menu</Link></li>
          <li><Link className="border-r-1 pr-3 leading-1 cursor-pointer hover:text-[#DF250E]">Reservation</Link></li>
          <li><Link className="border-r-1 pr-3 leading-1 cursor-pointer hover:text-[#DF250E]">Shop+</Link></li>
          <li><Link className="hover:text-[#DF250E]">Contact Us</Link></li>
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
  )
}

