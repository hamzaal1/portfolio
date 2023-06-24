import Image from "next/image";
import TextSlide from "./textslide";

function Hero() {
    return (
        <div className="flex mb-10 flex-col md:flex-row justify-center items-center">
            <div className="flex-1">
                <div className="grid grid-cols-1  ps-7 md:ps-16 xl:justify-center">
                    <div className="text-3xl font-medium mb-2 md:mb-0">
                        <h1 className="text-white">
                            Hey 👋, I'm
                        </h1>
                        {/* <p className="text-secondary">Hamza Demnani</p> */}
                        <TextSlide />
                        <TextSlide delay={6000} Content="Web FullStack Developer😃"  />
                    </div>
                    <div className="flex gap-3 text-white mt-3">
                        <button className="bg-primary hover:bg-secondary hover:text-primary py-1 px-3 rounded-sm">Hire Me</button>
                        <button className="bg-primary hover:bg-secondary hover:text-primary py-1 px-3 rounded-sm">Watch My Resume</button>
                    </div>
                    <div className="flex gap-2 text-white mt-3">
                        <a href="">
                            <i className="fa-brands fa-linkedin text-4xl hover:text-slate-200"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-square-instagram text-4xl hover:text-slate-200"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-square-github text-4xl hover:text-slate-200"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1 mb-10 md:mb-0 order-first md:order-last">
                <Image className="mx-auto " src={`/images/hero-section-avatar.svg`} alt="me" width="350" height="35" />
            </div>
        </div>
    )
}

export default Hero;