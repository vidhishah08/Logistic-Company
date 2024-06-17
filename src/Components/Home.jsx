import React from "react";
import logo from "../Images/logo.png"
import Image1 from "../Images/Image1.png"
import a from "../Images/worldwide-pin.png"
import b from "../Images/24-hours.png"
import c from "../Images/truck-delay.png"
import d from "../Images/box.png"
import e from "../Images/qr-code.png"
import f from "../Images/check-list.png"
import Services from "../Images/Services.png"
import Icon1 from "../Images/icon1.png"
import Icon2 from "../Images/icon2.png"
import Image2 from "../Images/Image2.png"
import Plans from "../Images/Plans.png"
import Map from "../Images/map.png"
import Footer from "../Images/Footer.png"

const Home=()=>{
    return(
        <div className=" overflow-x-clip">
            <div>
                <div className=" bg-gradient-to-br from-[#00008E] to-[#017280] w-full h-[700px] px-[300px] pt-[20px] text-white">
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
                    <div className="w-[700px]">
                        <p className="text-[48px] font-bold pt-[50px] leading-[50px]">Transportation services around the World</p>
                        <p className="text-[16px] font-medium pt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia! Amet ad mollitia temporibus? Repudiandae quas inventore temporibus consequuntur ex quibusdam, animi dolore. </p>
                        <button className="bg-[#0F0FB1] text-center px-[40px] py-[20px] mt-[20px]">Consultation</button>
                        <button className="bg-[#00008E] text-center px-[40px] py-[25px] mt-[20px]"><img src={Image1} alt="right" /></button>
                    </div>
                </div>
                <div className=" ml-[948px] mt-[-448px]">
                    <p className="text-[250px] font-bold text-white text-opacity-10">Rolso</p>
                </div>
                <div className=" drop-shadow-xl mx-[300px] bg-white mb-[150px]">
                    <div className="flex flex-row">
                        <div className="mt-[30px] mx-[30px]">
                            <div className="flex flex-row mb-[20px]">
                                <div className="mr-[3px] pt-[10px]"><img src={a} alt="a"/></div>
                                <div className="ml-[10px] ">
                                    <p className="text-[16px] font-bold text-[#19456B]">WorldWide</p>
                                    <p className="text-[14px]  pt-[2px] w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="flex flex-row mb-[20px]">
                                <div className="mr-[3px] pt-[10px]"><img src={b} alt="b"/></div>
                                <div className="ml-[10px] ">
                                    <p className="text-[16px] font-bold text-[#19456B]">Service 24/7</p>
                                    <p className="text-[14px]  pt-[2px] w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="flex flex-row mb-[20px]">
                                <div className="mr-[3px] pt-[10px]"><img src={c} alt="c"/></div>
                                <div className="ml-[10px] ">
                                    <p className="text-[16px] font-bold text-[#19456B]">Always on Time</p>
                                    <p className="text-[14px]  pt-[2px] w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex flex-row mb-[20px]">
                                <div className="mr-[3px] pt-[10px]"><img src={d} alt="d"/></div>
                                <div className="ml-[10px] ">
                                    <p className="text-[16px] font-bold text-[#19456B]">Warehouse</p>
                                    <p className="text-[14px]  pt-[2px] w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="flex flex-row mb-[20px]">
                                <div className="mr-[3px] pt-[10px]"><img src={e} alt="e"/></div>
                                <div className="ml-[10px] ">
                                    <p className="text-[16px] font-bold text-[#19456B]">Online Tracking</p>
                                    <p className="text-[14px]  pt-[2px] w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="flex flex-row mb-[20px]">
                                <div className="mr-[3px] pt-[10px]"><img src={f} alt="f"/></div>
                                <div className="ml-[10px] ">
                                    <p className="text-[16px] font-bold text-[#19456B]">Cargo Insaurance</p>
                                    <p className="text-[14px]  pt-[2px] w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-gradient-to-br from-[#00008E] to-[#017280] px-[30px] py-[30px] text-white w-[300px] mt-[-35px] mb-[35px] drop-shadow-xl">
                            <p className="text-[20px]">Services</p>
                            <p className="pt-[15px]">Road Frieght</p>
                            <p className="pt-[15px]">Shipping Frieght</p>
                            <p className="pt-[15px]">Air Frieght</p>
                            <p className="pt-[15px]">Train Frieght</p>
                            <div className="flex flex-row pt-[15px]">
                                <p className="pr-[10px]">ALL SERVICES</p>
                                <img src={Image1} alt="Image1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-center mx-[200px]">
                <div className="pl-[350px]"><p className="text-[48px] font-bold text-[#19456B] w-[400px]">Rolso Logistic Services</p></div>
                <img src={Services} alt="Services" className="mt-[50px]"/>
            </div>

            <div >
                <div className="flex flex-row w-full mt-[200px]">
                    <div className="bg-[#D8D8D8] w-[750px] h-[600px]"></div>
                    <div className="pt-[100px] w-[500px] ml-[40px]">
                        <p className="text-[#19456B] font-bold text-[48px] leading-[50px]">Excellent company quality services</p>
                        <p className="py-[25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur deserunt provident. Repellat, quam eos, quibusdam aliquid natus, possimus esse totam blanditiis</p>
                        <button className="text-white py-[10px] px-[15px] bg-[#0F0FB1] mt-[10px]">Appointment</button>
                        <button className="py-[16px] px-[10px] bg-[#00008E] "><img src={Image1} alt="Image1"/></button>
                    </div>
                </div>
                <div className="">
                    <div className="ml-[200px] mt-[150px]">
                        <p className="text-[48px] font-bold text-[#19456B] w-[500px] leading-[50px]"><span className="text-[#00008E]">Rolso</span> transportation company</p>
                        <p className="w-[400px] py-[25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusamus nihil, quos repellat </p>
                        <div className="flex flex-row ">
                            <div className="flex flex-row  mr-[40px] bg-white drop-shadow-xl">
                                <div><img src={Icon1} alt="Icon1" className=""/></div>
                                <div className="ml-[30px] mr-[30px] pt-[10px]">
                                    <p className="text-[48px] font-bold text-[#00008E]">1255+</p>
                                    <p>Delivered Packages</p>
                                </div>
                            </div>
                            <div className="flex flex-row bg-white drop-shadow-xl">
                                <div><img src={Icon2} alt="Icon2" className=""/></div>
                                <div className="ml-[30px] mr-[30px] pt-[10px]">
                                    <p className="text-[48px] font-bold text-[#017280]">50<span className="text-[14px]">years</span></p>
                                    <p>Total warehouse area</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#D8D8D8] w-[870px] h-[700px] mt-[-600px] ml-[750px]"></div>
                </div>
            </div>

            <div className="py-[60px] flex flex-row justify-center mt-[100px]">
                <div className="">
                    <p className="text-[48px] text-[#19456B] font-bold leading-[50px] w-[350px]">How much will i earn?</p>
                    <p className="py-[25px] w-[400px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illum corporis magnam. Libero.</p>
                    <p className="text-[16px] font-bold text-[#19456B]">Call us for consultation</p>
                    <p className="text-[28px] font-extrabold text-[#00008E] pt-[-10px]">+8(495)989 20 11</p>
                </div>
                <div className="bg-white drop-shadow-xl mt-[-70px]">
                    <form className="my-[20px] mx-[50px]">
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
            </div>

            <div className="my-[100px]">
                <img src={Image2} alt="Image2"/>
            </div>

            <div className="text-center mx-[400px] mt-[180px]">
                <p className="text-[48px] text-[#19456B] font-bold leading-[50px] ">The right price for you,whoever you are</p>
                <p className="py-[25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum assumenda perspiciatis eum ipsa quae fugiat sed cupiditate accusamus saepe consequuntur, non blanditiis soluta quo cum, neque quibusdam cumque obcaecati.</p>
                <button className="bg-[#0F0FB1] text-center px-[40px] py-[9px] mt-[20px] text-white">Consultation</button>
                <button className="bg-[#00008E] text-center px-[20px] py-[15px] mt-[20px]"><img src={Image1} alt="right" /></button>
                
            </div>
            <div className="mt-[60px]"><img src={Plans} alt="Plans" className="w-[1000px] ml-[280px]"/></div>

            <div className="text-center mx-[500px] mt-[150px]">
                <p className="text-[48px] font-bold text-[#19456B] leading-[50px]">We provide future of dilivery</p>
            </div>
            <div className="mx-[300px] mt-[50px] mb-[150px]"><img src={Map} alt="Map" className="w-full"/></div>

            <div className="w-full">
                <img src={Footer} alt="Footer"/>
            </div>

        </div>
    );
}

export default Home;