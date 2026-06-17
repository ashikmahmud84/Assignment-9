import React from "react";
import image1 from "../assets/pubg.jfif"
import image2 from "../assets/free-fire-max.jfif"
import image3 from "../assets/clash-clans.jfif"


const Swiper = () => {

    return (
        <div>
            <div className="carousel ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={image1}
                        className="w-full h-[340px] rounded-2xl"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={image2}
                        className="w-full h-[340px] rounded-2xl"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={image3}
                        className="w-full h-[340px] rounded-2xl"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.freepik.com/free-vector/children-toys-set_74855-7019.jpg?semt=ais_hybrid&w=740&q=80"
                        className="w-full h-[340px] rounded-2xl"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swiper;
