import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* grille de fond */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grille"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à donner à <span className="text-purple">votre</span> présence digitale un nouveau souffle ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi dès aujourd'hui et discutons de la manière dont je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:arwaarij12344@gmail.com">
          <MagicButton
            title="Entrons en contact"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2026 Arwa BenMansour. Tous droits réservés.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icône" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
