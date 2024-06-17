import React from "react";
import logo from "../Images/logo.png";
import Map from "../Images/map.png";
import Phone from "../Images/phone-call.png"
import Address from "../Images/address.png"
import Mail from "../Images/mail.png"
import Right from "../Images/Image1.png"
import Footer from "../Images/Footer.png"

const  Contact=()=>{
    return(
        <div>
            <div className=" bg-gradient-to-br from-[#00008E] to-[#017280] w-full h-[500px] px-[300px] pt-[20px] text-white">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row">
                        <img src={logo} alt="logo"/>
                        <p className="text-[24px] font-bold py-[3px] pl-[8px]">Rolso</p>
                    </div>
                    <div className="flex flex-row">
                        <button className="text-center bg-[#0F0FB1] py-[4px] px-[30px] mr-[30px]">Calculator</button>
                        <button className="text-center py-[4px] px-[30px] border-white border-[1px]">Tracking</button>
                    </div>    
                </div>
                <div className="flex flex-row w-full justify-between mt-[30px]">
                    <div className="flex flex-row">
                        <p className="pr-[30px]">Home</p>
                        <p className="pr-[30px]">About</p>
                        <p className="pr-[30px]">Service</p>
                        <p className="pr-[30px]">Prices</p>
                        <p className="pr-[30px]">Contact</p>
                    </div>
                    <div>
                        <p className=" font-bold">+8(495) 989 20 11</p>
                    </div>
                </div>
                <div className="w-full mt-[20px]">
                    <hr/>
                </div>
            </div>

            <div>
                <img src={Map} alt="Map" className="w-full"/>
            </div>

            <div className="bg-white drop-shadow-xl text-center mx-[500px] py-[30px] mt-[-800px]">
                <p className="text-[48px] text-[#19456B] font-bold ">Contacts</p>
                <p>Home/Contacts</p>
            </div>

            <div className="flex flex-row justify-between mt-[600px] mx-[300px]">
                    <div className="flex flex-row bg-white drop-shadow-xl ">
                        <div className="bg-[#2E8995] px-[30px] pt-[20px]"><img src={Phone} alt="phone" className="w-[40px]"/></div>
                        <div className="mx-[20px] pt-[2px]">
                            <p className="text-[16px] font-medium pt-[15px]">Phone</p>
                            <p className="text-[#2E8995] font-extrabold  text-[14px]">+8(495)989 20 11</p>
                            <p className="text-[#2E8995] font-extrabold  text-[14px]">+8(495)969 60 12</p>
                        </div>
                    </div>
                    <div className="flex flex-row  bg-white drop-shadow-xl ">
                        <div className="bg-[#00008E] px-[30px] pt-[20px]"><img src={Address} alt="Address" className="w-[40px]"/></div>
                        <div className="mx-[20px] pt-[2px]">
                            <p className="text-[16px] font-medium pt-[15px]">Address</p>
                            <p className="text-[#19456B] font-extrabold w-[200px] ">4621 Hill Craft Farm Road</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-white drop-shadow-xl">
                        <div className="bg-[#2E8995] px-[30px] pt-[20px]"><img src={Mail} alt="mail" className="w-[40px]"/></div>
                        <div className="mx-[20px] pt-[2px]">
                            <p className="text-[16px] font-medium pt-[15px]">Phone</p>
                            <p className="text-[#2E8995] font-extrabold  text-[14px]">rolso@site.com</p>
                            <p className="text-[#2E8995] font-extrabold  text-[14px]">rolso@support.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mx-[300px] mt-[150px]">
                    <div><form className="bg-white drop-shadow-xl mr-[50px] px-[20px]">
                        <div className="flex flex-row ">
                            <div>
                                <label className="text-[14px] opacity-60">Full Name</label><br />
                                <input type="text" className="py-[5px] px-[15px] w-[200px] border-black border-[1px] mr-[20px]"/>
                            </div>
                            <div className="ml-[30px]">
                                <label className="text-[14px] opacity-60">Phone</label><br />
                                <input type="number" className="py-[5px] px-[15px] w-[200px] border-black border-[1px]"/>
                            </div>
                        </div>

                        <div className="flex flex-row  mt-[20px]">
                            <div>
                                <label className="text-[14px] opacity-60">Email</label><br />
                                <input type="text" className="py-[5px] px-[15px] w-[200px] border-black border-[1px] mr-[20px]"/>
                            </div>
                            <div className="ml-[30px]">
                                <label className="text-[14px] opacity-60">Subject</label><br />
                                <input type="text" className="py-[5px] px-[15px] w-[200px] border-black border-[1px]"/>
                            </div>
                        </div>

                        <div className="mt-[20px]">
                            <label className="text-[14px] opacity-60">Message</label><br />
                            <textarea type="textbox" className="py-[5px] px-[15px] w-full border-black border-[1px] h-[120px] mt-[8px]"/>
                        </div>

                        <button className="bg-[#0F0FB1] text-white py-[5px] px-[20px] ml-[320px] mt-[20px] mb-[50px]">Appointment</button>
                    </form>
                    </div>
                    <div className="bg-[#D8D8D8] px-[50px] w-[450px] mb-[150px]">
                        <p className="text-[40px] text-white font-bold  w-[200px] leading-[45px] pt-[225px] ">Quality Services</p>
                        <button className="bg-[#0F0FB1] px-[50px] py-[8px] text-white mt-[12px] mb-[50px]">Services</button>
                        <button className="bg-[#00008E] py-[14px] mt-[12px] px-[10px] mb-[50px]"><img src={Right} alt="Right"/></button>
                    </div>
                </div>

                <div>
                    <img src={Footer} alt="Footer"/>
                </div>

        </div>
    );
}

export default Contact;