import React from "react";
import logo from "../Images/logo.png";
import Icon3 from "../Images/icon3.png";
import Icon4 from "../Images/icon6.png";
import Icon5 from "../Images/icon5.png";
import Icon6 from "../Images/icon4.png";
import pages from "../Images/pagination.png";
import Footer from "../Images/Footer.png"


const Service=()=>{
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
                <p className="text-[48px] text-[#19456B] font-bold ">Services</p>
                <p>Home/Services</p>
            </div>

            <div>
                <div className="flex flex-row justify-between mx-[300px] mt-[150px]">
                    <div>
                        <div className="bg-[#D8D8D8] w-[300px] h-[300px] pt-[230px]">
                            <img src={Icon3} alt="Icon3" />
                        </div>
                        <p className="text-[#19456B] text-[20px] font-extrabold py-[20px]">Shipping Freight</p>
                        <p className="text-[14px] w-[300px] opacity-65">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi qui </p>
                    </div>
                    <div>
                        <div className="bg-[#D8D8D8] w-[300px] h-[300px] pt-[230px]">
                            <img src={Icon4} alt="Icon4" />
                        </div>
                        <p className="text-[#19456B] text-[20px] font-extrabold py-[20px]">Road Freight</p>
                        <p className="text-[14px] w-[300px] opacity-65">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi qui </p>
                    </div>
                    <div>
                        <div className="bg-[#D8D8D8] w-[300px] h-[300px] pt-[230px]">
                            <img src={Icon5} alt="Icon5" />
                        </div>
                        <p className="text-[#19456B] text-[20px] font-extrabold py-[20px]">Train Freight</p>
                        <p className="text-[14px] w-[300px] opacity-65">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi qui </p>
                    </div>
                </div>

                <div className="flex flex-row justify-between mx-[300px] mt-[26px]">
                    <div>
                        <div className="bg-[#D8D8D8] w-[300px] h-[300px] pt-[230px]">
                            <img src={Icon6} alt="Icon6" />
                        </div>
                        <p className="text-[#19456B] text-[20px] font-extrabold py-[20px]">Air Freight</p>
                        <p className="text-[14px] w-[300px] opacity-65">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi qui </p>
                    </div>
                    <div>
                        <div className="bg-[#D8D8D8] w-[300px] h-[300px] pt-[230px]">
                            <img src={Icon3} alt="Icon3" />
                        </div>
                        <p className="text-[#19456B] text-[20px] font-extrabold py-[20px]">Shiping Freight</p>
                        <p className="text-[14px] w-[300px] opacity-65">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi qui </p>
                    </div>
                    <div>
                        <div className="bg-[#D8D8D8] w-[300px] h-[300px] pt-[230px]">
                            <img src={Icon3} alt="Icon3" />
                        </div>
                        <p className="text-[#19456B] text-[20px] font-extrabold py-[20px]">Shipping Freight</p>
                        <p className="text-[14px] w-[300px] opacity-65">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi qui </p>
                    </div>
                </div>

            </div>

            <div className="ml-[628px] mt-[70px]">
                <img src={pages} alt="pages"/>
            </div>

            <div className="mt-[150px]">
                <img src={Footer} alt="Footer"/>
            </div>

        </div>
    );
}

export default Service;