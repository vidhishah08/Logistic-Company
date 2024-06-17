import React from "react";
import logo from "../Images/logo.png"
import Image1 from "../Images/package.png"
import Number3 from "../Images/nomber3.png"
import Calender from "../Images/calendar.png"
import Number1 from "../Images/nomber1.png"
import Number2 from "../Images/nomber2.png"
import Hourglass from "../Images/hourglass.png"
import Checked from "../Images/check-circle.png"
import Right from "../Images/Image1.png"
import Address from "../Images/address.png"
import Phone from "../Images/phone-call.png"
import Progress from "../Images/progress_bars.png"
import Mail from "../Images/mail.png"
import Map from "../Images/map.png"
import Footer from "../Images/Footer.png"

const About=()=>{
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

            <div className="bg-white drop-shadow-xl text-center mx-[500px] py-[30px] mt-[-88px]">
                <p className="text-[48px] text-[#19456B] font-bold ">About Us</p>
                <p>Home/About</p>
            </div>

            <div>
                <div className="text-center px-[450px] mt-[120px]">
                    <div className="mx-[170px]"><p className="text-[38px] text-[#19456B] font-extrabold w-[300px] leading-[45px]">Steps of Cooperation</p></div>
                    <div className="mx-[20px] mt-[10px]"><p className="w-[600px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ipsa nemo deserunt reiciendis quaerat, officiis mollitia doloribus labore vitae </p></div>
                </div>

                <div className="flex flex-row justify-center">
                    <div className="mt-[60px] mr-[30px]">
                        <div className="flex flex-row ml-[90px]">
                            <div className="mr-[-20px] px-[40px] py-[40px] rounded-full bg-white drop-shadow-xl"><img src={Calender} alt="calender" className="w-[50px] h-[50px]"/></div>
                            <div className="z-20"><img src={Number1} alt="Number1" className="w-[50px]"/></div>
                        </div>
                        <div className="w-[300px] text-center mt-[30px]">
                            <p className="text-[#19456B] text-[24px] font-bold">Thinking strategy</p>
                            <p className="text-[14px] pt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque, distinctio deserunt deleniti, animi </p>
                        </div>   
                    </div>
                    <div className="mt-[130px] mr-[28px]">
                        <div className="flex flex-row ml-[90px]">
                            <div className="mr-[-20px] px-[40px] py-[40px] rounded-full bg-white drop-shadow-xl"><img src={Hourglass} alt="Hourglass" className="w-[50px] h-[50px]"/></div>
                            <div className="z-20"><img src={Number2} alt="Number2" className="w-[50px]"/></div>
                        </div>
                        <div className="w-[300px] text-center mt-[30px]">
                            <p className="text-[#19456B] text-[24px] font-bold">Thinking strategy</p>
                            <p className="text-[14px] pt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque, distinctio deserunt deleniti, animi </p>
                        </div>   
                    </div>
                    <div className="mt-[60px]">
                        <div className="flex flex-row ml-[90px]">
                            <div className="mr-[-20px] px-[40px] py-[40px] rounded-full bg-white drop-shadow-xl"><img src={Image1} alt="Image1" className="w-[50px] h-[50px]"/></div>
                            <div className="z-20"><img src={Number3} alt="Number3" className="w-[50px]"/></div>
                        </div>
                        <div className="w-[300px] text-center mt-[30px]">
                            <p className="text-[#19456B] text-[24px] font-bold">Route Building</p>
                            <p className="text-[14px] pt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque, distinctio deserunt deleniti, animi </p>
                        </div>   
                    </div>
                </div>
            </div>

            <div className="mx-[320px] mt-[150px]">
                <div className="flex flex-row">
                    <div className="py-[50px] w-[600px] mr-[60px]">
                        <p className="text-[38px] text-[#19456B] font-extrabold pb-[20px] leading-[40px]">Powerfull Features of Transpoterium</p>
                        <p className="text-[14px] pt-[10px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam veniam expedita, ad cupiditate architecto vero provident repudiandae hic beatae nulla quidem facilis a suscipit eveniet, deleniti aut necessitatibus nisi qui!</p>
                        <div className="flex flex-row mt-[40px]">
                            <img src={Checked} alt="checked" className="mr-[5px]"/>
                            <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="flex flex-row mt-[8px]">
                            <img src={Checked} alt="checked" className="mr-[5px]"/>
                            <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex flex-row mt-[8px]">
                            <img src={Checked} alt="checked" className="mr-[5px]"/>
                            <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                        <button className="bg-[#0F0FB1] px-[50px] py-[8px] text-white mt-[40px]">Consultation</button>
                        <button className="bg-[#00008E] py-[14px] mt-[40px] px-[10px]"><img src={Right} alt="Right"/></button>

                    </div>
                    <div className="bg-[#D8D8D8] h-[520px] w-[360px]"></div>
                </div>  
            </div>

            <div className="flex flex-row mt-[150px]">
                <div className="bg-[#D8D8D8] w-[700px] h-[700px] "></div>
                <div className="mx-[40px] mt-[100px]">
                    <p className="text-[48px] font-bold text-[#19456B] w-[600px] leading-[35px]  "><span className="text-[#00008E]">Rolso</span> transportation company</p>
                    <p className="text-[22px] pt-[35px] w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas illum excepturi veritatis </p>
                    <div className="flex flex-row ml-[-100px] mt-[50px]">
                        <div className="flex flex-row  mr-[40px] bg-white drop-shadow-xl">
                            <div className="bg-[#00008E] px-[20px] py-[20px]"><img src={Address} alt="Address" className=""/></div>
                            <div className="ml-[30px] mr-[30px] pt-[10px]">
                                <p className="text-[16px] font-medium pt-[15px]">Address</p>
                                <p className="text-[#19456B] font-extrabold w-[200px]">4621 Hill Craft Farm Road</p>
                            </div>
                        </div>
                        <div className="flex flex-row bg-white drop-shadow-xl">
                            <div className="bg-[#2E8995] px-[20px] py-[18px]"><img src={Phone} alt="phone" className=""/></div>
                            <div className="ml-[30px] mr-[30px] pt-[10px]">
                                <p className="text-[16px] font-medium pt-[15px]">Phone</p>
                                <p className="text-[#2E8995] font-extrabold w-[200px] text-[14px]">+8(495)989 20 11</p>
                                <p className="text-[#2E8995] font-extrabold w-[200px] text-[14px]">+8(495)969 60 12</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="ml-[130px] w-[500px] mt-[100px] mb-[100px] mr-[70px]">
                    <p className="text-[48px] font-bold text-[#19456B]  leading-[40px]  ">Excellent company quality services</p>
                    <p className="text-[22px] pt-[35px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis voluptates voluptatibus harum. Quod fugit enim, quisquam mollitia</p>
                    <button className="bg-[#0F0FB1] px-[50px] py-[8px] text-white mt-[40px]">Appointment</button>
                    <button className="bg-[#00008E] py-[14px] mt-[40px] px-[10px]"><img src={Right} alt="Right"/></button>
                </div>
                <div className="bg-[#D8D8D8] w-[820px] h-[600px] mt-[-100px]"></div>
            </div>
            
            <div className="mt-[150px] mx-[320px] flex flex-row">
                <div className="bg-[#D8D8D8] w-[420px] h-[450px]"></div>
                <div className="ml-[50px] py-[50px]">
                    <p className="text-[38px] text-[#19456B] font-extrabold pb-[20px] leading-[40px]">Powerfull Features<br/> of Transporterium</p>
                    <p className="text-[14px] pt-[10px] pb-[25px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, fugiat. Provident quaerat in inventore voluptatibus recusandae a </p>
                    <img src={Progress} alt="Progress"/>
                </div>
            </div>

            <div className="mt-[150px] mx-[320px]">
                <div className="w-[500px] text-center mx-[190px] "><p className="text-[48px] text-[#19456B] font-extrabold  leading-[55px]">We provide future of dilivery</p></div>
                <div className="flex flex-row justify-between mt-[50px]">
                    <div className="flex flex-row bg-white drop-shadow-xl ">
                        <div className="bg-[#2E8995] px-[30px] pt-[20px]"><img src={Phone} alt="phone" className="w-[40px]"/></div>
                        <div className="mx-[20px] pt-[10px]">
                            <p className="text-[16px] font-medium pt-[15px]">Phone</p>
                            <p className="text-[#2E8995] font-extrabold  text-[14px]">+8(495)989 20 11</p>
                            <p className="text-[#2E8995] font-extrabold  text-[14px]">+8(495)969 60 12</p>
                        </div>
                    </div>
                    <div className="flex flex-row  bg-white drop-shadow-xl ">
                        <div className="bg-[#00008E] px-[30px] pt-[20px]"><img src={Address} alt="Address" className="w-[40px]"/></div>
                        <div className="mx-[20px] pt-[5px]">
                            <p className="text-[16px] font-medium pt-[15px]">Address</p>
                            <p className="text-[#19456B] font-extrabold w-[200px] ">4621 Hill Craft Farm Road</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-white drop-shadow-xl">
                        <div className="bg-[#2E8995] px-[30px] pt-[20px]"><img src={Mail} alt="mail" className="w-[40px]"/></div>
                        <div className="mx-[20px] pt-[5px]">
                            <p className="text-[16px] font-medium pt-[15px]">Phone</p>
                            <p className="text-[#2E8995] font-extrabold  text-[14px]">rolso@site.com</p>
                            <p className="text-[#2E8995] font-extrabold  text-[14px]">rolso@support.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px]"><img src={Map} alt="Map" className="w-full"/></div>
            </div>

            <div className="mt-[150px]">
                <img src={Footer} alt="footer" />
            </div>

        </div>
    );
}

export default About;