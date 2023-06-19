import Image from "next/image";

function Hero() {
    return (
        <div className="container py-16 flex justify-center items-center">
            <div className="flex-1">
                <div className="text-4xl font-medium">
                    <h1 className="mb-1 text-white">
                        Hey 👋, I'm
                    </h1>
                    <p className="text-secondary">Hamza Demnani</p>
                </div>
                <div className="flex gap-3 text-white mt-3">
                    <button className="bg-primary py-1 px-3 rounded-sm">Contact Me</button>
                    <button className="bg-primary py-1 px-3 rounded-sm">Download My Resume</button>
                </div>
                <div className="flex gap-2 text-white mt-2">
                    <a href="">
                        <i className="fa-brands fa-linkedin text-2xl"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-square-instagram text-2xl"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-square-github text-2xl"></i>
                    </a>
                </div>
            </div>
            <div className="flex-1">
                <Image className="mx-auto" src={`/images/hero-section-avatar.svg`} alt="me" width="350" height="35" />
            </div>
        </div>
    )
}

export default Hero;