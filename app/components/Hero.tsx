import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Script from "next/script";

const Hero = () => {
    return (
        <div className="pb-20 ">
        
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

    
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
    absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Création web dynamique et intelligente
                    </p>
                     <TextGenerateEffect
                        words="Transformer les idées en expériences utilisateurs fluides"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />
                    {/* Load Spline Viewer */}
                    <Script
                        type="module"
                        src="https://unpkg.com/@splinetool/viewer@1.12.39/build/spline-viewer.js"
                        strategy="afterInteractive"
                    />
                    <div className="flex justify-center h-[400px]  w-screen z-10">
                        <spline-viewer url="https://prod.spline.design/0t7C-MvDQB3hFLhx/scene.splinecode" />
                    </div>

                   
                    
                <div className=" flex flex-row items-center">
                  
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                        <div className="w-1 sm:h-40 h-20 bg-gradient-to-b from-[#915eff] to-transparent z-10" />
                    </div>
                    <div>
                        <TextGenerateEffect
                        words="Bonjour ! Je suis Arwa BenMansour,"
                        className="-mt-18 px-4 text-[80px] md:text-5xl lg:text-6xl"
                    />
                    <p className="text-center md:tracking-wider mb-4 mt-6 text-sm md:text-lg lg:text-2xl">
                        développeuse full stack passionnée, spécialisée dans Next.js, NestJS, React et Node.js.
                        Basée à Douz, Kébili (Tunisie), je conçois des applications web modernes et intelligentes.
                    </p>
                    </div>
                </div>
                    <a href="#projects">
                        <MagicButton
                            title="Voir mes projets"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;