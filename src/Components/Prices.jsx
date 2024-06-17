import React from "react";
import logo from "../Images/logo.png";
import Image1 from "../Images/Benefits.png";
import Right from "../Images/Image1.png";
import Image2 from "../Images/Benefits1.png";
import Footer from "../Images/Footer.png"

const Prices=()=>{
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
                <p className="text-[48px] text-[#19456B] font-bold ">Prices</p>
                <p>Home/About Us/Prices</p>
            </div>

            <div className="bg-[#017280] text-center text-white mx-[700px] mt-[150px]"><p>Best Offer</p></div>
            <div className="mx-[250px] flex flex-row justify-between">
                <div className="px-[50px] py-[30px] bg-white drop-shadow-xl">
                    <div className="flex flex-row justify-between py-[20px]">
                        <p className="text-[20px] text-[#19456B] font-extrabold pr-[50px]">Basics</p>
                        <p className="text-[12px] text-[#017280] font-extrabold pt-[9px]">Save 10%</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="py-[15px]">
                        <p className="text-[#2E8995] text-[48px] font-bold">$25<span className="font-light text-[24px]">/mo</span></p>
                        <p className="text-[16px] opacity-65 pt-[-15px] pb-[15px]">Only $85 per month</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="my-[30px]">
                        <img src={Image1} alt="Image1" className="w-[200px]"/>
                    </div>
                    <button className="bg-[#00008E] text-white text-center py-[5px] px-[20px]">Buy Now</button>
                </div>
                <div className="px-[50px] py-[30px] bg-white drop-shadow-xl">
                    <div className="flex flex-row justify-between py-[20px]">
                        <p className="text-[20px] text-[#19456B] font-extrabold pr-[50px]">Full Pack</p>
                        <p className="text-[12px] text-[#00008E] font-extrabold pt-[9px]">Save 20%</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="py-[15px]">
                        <p className="text-[#00008E] text-[48px] font-bold">$75<span className="font-light text-[24px]">/mo</span></p>
                        <p className="text-[16px] opacity-65 pt-[-15px] pb-[15px]">Only $165 per month</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="my-[30px]">
                        <img src={Image1} alt="Image1" className="w-[200px]"/>
                    </div>
                    <button className="bg-[#00008E] text-white text-center py-[5px] px-[20px]">Buy Now</button>
                </div>
                <div className="px-[50px] py-[30px] bg-white drop-shadow-xl">
                    <div className="flex flex-row justify-between py-[20px]">
                        <p className="text-[20px] text-[#19456B] font-extrabold pr-[50px]">Advanced</p>
                        <p className="text-[12px] text-[#017280] font-extrabold pt-[9px]">Save 15%</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="py-[15px]">
                        <p className="text-[#2E8995] text-[48px] font-bold">$35<span className="font-light text-[24px]">/mo</span></p>
                        <p className="text-[16px] opacity-65 pt-[-15px] pb-[15px]">Only $120 per month</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="my-[30px]">
                        <img src={Image1} alt="Image1" className="w-[200px]"/>
                    </div>
                    <button className="bg-[#00008E] text-white text-center py-[5px] px-[20px]">Buy Now</button>
                </div>
            </div>

            <div className="">
                <div className="mx-[360px] mt-[150px] text-[#19456B] text-[48px] font-extrabold text-center"><p className="leading-[60px]">The right prices for you,<br />whoever you are</p></div>
                <div className="mx-[400px] mt-[20px] text-center mb-[20px]"><p className="text-[16px] opacity-55">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat dolores aliquid autem! Architecto minima quia reiciendis quod exercitationem reprehenderit soluta optio in vitae, ipsum incidunt aliquam quaerat quam vero?</p></div>
                <button className="bg-[#0F0FB1] px-[50px] py-[8px] text-white mt-[25px] ml-[650px]">Consultation</button>
                <button className="bg-[#00008E] py-[14px] mt-[25px] px-[10px]"><img src={Right} alt="Right"/></button>
            </div>

            <div className="bg-white drop-shadow-2xl px-[20px] py-[20px] flex flex-row justify-between mx-[250px] my-[50px]">
                <div className="">
                        <p className="text-[20px] text-[#19456B] font-extrabold pr-[50px]">Basics</p>
                        <p className="text-[12px] text-[#017280] font-extrabold pt-[9px]">Save 10%</p>
                </div>
                <div className="mt-[-10px]">
                    <p className="text-[#2E8995] text-[38px] font-bold">$25<span className="font-light text-[24px]">/mo</span></p>
                    <p className="text-[14px] opacity-65 pt-[-15px] pb-[15px]">Only $85 per month</p>
                </div>
                <div className="pt-[10px]">
                    <img src={Image1} alt="Image1" className="w-[200px]"/>
                </div>
                <div className="px-[30px] py-[20px]"><button className="bg-[#00008E] text-white text-center py-[10px] px-[20px]">Buy Now</button></div>
            </div>

            <div className=" bg-gradient-to-br from-[#00008E] to-[#017280] drop-shadow-2xl px-[20px] py-[20px] flex flex-row justify-between mx-[250px] my-[50px] text-white">
                <div className="">
                        <p className="text-[20px]  font-extrabold pr-[50px]">Full Pack</p>
                        <p className="text-[12px]  font-extrabold pt-[9px]">Save 20%</p>
                </div>
                <div className="mt-[-10px]">
                    <p className=" text-[38px] font-bold">$75<span className="font-light text-[24px]">/mo</span></p>
                    <p className="text-[14px] opacity-65 pt-[-15px] pb-[15px]">Only $165 per month</p>
                </div>
                <div className="pt-[10px]">
                    <img src={Image2} alt="Image2" className="w-[200px]"/>
                </div>
                <div className="px-[30px] py-[20px]"><button className=" text-white text-center py-[10px] px-[20px] border-white border-[1px]">Buy Now</button></div>
            </div>

            <div className="bg-white drop-shadow-2xl px-[20px] py-[20px] flex flex-row justify-between mx-[250px] my-[50px]">
                <div className="">
                        <p className="text-[20px] text-[#19456B] font-extrabold pr-[50px]">Advanced</p>
                        <p className="text-[12px] text-[#017280] font-extrabold pt-[9px]">Save 15%</p>
                </div>
                <div className="mt-[-10px]">
                    <p className="text-[#2E8995] text-[38px] font-bold">$35<span className="font-light text-[24px]">/mo</span></p>
                    <p className="text-[14px] opacity-65 pt-[-15px] pb-[15px]">Only $120 per month</p>
                </div>
                <div className="pt-[10px]">
                    <img src={Image1} alt="Image1" className="w-[200px]"/>
                </div>
                <div className="px-[30px] py-[20px]"><button className="bg-[#00008E] text-white text-center py-[10px] px-[20px]">Buy Now</button></div>
            </div>

            <div className="mt-[150px]">
                <img src={Footer} alt="Footer" />
            </div>

        </div>
    );
}

export default Prices;