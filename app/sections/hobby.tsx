import { useState } from "react";
import Quest from "~/component/quest";


export default function Hobby() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const previous = () => {
    if (isAnimating) return; // Bloquer pendant l'animation
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
      setIsAnimating(false);
    }, 500); // Temps de transition
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex + 1));
      setIsAnimating(false);
    }, 500);
  };

  const [activeQuest, setActiveQuest] = useState<number | null>(null);
  return (
    <div id="main" className="bg-[#232221] h-full overflow-hidden">
      {/* Header avec images et titres */}
      <div className="h-[200px] relative border-b-4 border-[#481A1A] overflow-hidden">
        {/* Images avec transitions */}
        <img
          id="figma_bg"
          src="/figmara.jpg"
          className={`object-cover h-full w-full absolute top-0 transition-opacity duration-500 ease-in-out ${currentIndex === 0 ? "opacity-100" : "opacity-0"}`}
        />

        {/* Navigation */}
        <div className="absolute top-5 z-20 w-full flex justify-between px-5">
          <span
            id="figmaratitle"
            className={`mx-auto text-4xl transition-opacity duration-500 ease-in-out ${currentIndex === 0 ? "" : "hidden"}`}
          >
            Ludogarde
          </span>
        </div>

        <div className="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-[#232221] to-transparent"></div>
      </div>

      {/* Section Description */}
      <div className="m-[17px] border-[1px] border-[#94806D] h-[calc(100%-236px)]  relative">
        <img src="/ornement.svg" className="absolute z-10 top-[-18px] left-[-18px]" />

        <div
          id="figma_desc"
          className={`w-full top-0 left-0 transition-opacity duration-500 ease-in-out overflow-scroll h-full ${currentIndex === 0 ? 'block' : 'hidden'}`}
        >
          <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
            <p className="mb-6">
            Située au croisement de l’Imaginaire et de la Logique, Godoria est une cité d’expérimentation, façonnée par des architectes du pixel et des sorciers du gameplay. 
            Ici, les rêves prennent forme grâce à la magie du moteur Godot, et chaque idée devient une mécanique jouable.
            </p>

            <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
              <Quest title="Les Chroniques Perdues de Ludogarde" index={0}>
              "Chaque conteur forge son propre mythe."
              <br/>
              Les vents du passé soufflent sur Ludogarde, portant avec eux les échos d’histoires anciennes. Anima, Donjon de Naheulbeuk, Fading Suns, Warhammer… autant de mondes jadis explorés, de récits
               gravés dans les mémoires des joueurs d’antan. Mais aujourd’hui, ces chroniques s’effacent, menacées d’oubli.
              <br/>
              À la Bibliothèque des Récits Perdus, un archiviste excentrique t’accueille d’un regard perçant. Il sait qui tu es. Un voyageur des histoires, un maître du destin. Il te confie 
              une mission : rassembler ces fragments d’aventure, revivre ces épopées, et surtout, comprendre comment elles ont façonné ton propre art du jeu.
              <br/>
              Tu devras explorer les ruelles et tavernes de Ludogarde, retrouver d’anciens compagnons de route, exhumer les reliques de parties passées. Mais le véritable défi ne 
              sera pas simplement de se souvenir… Il te faudra bâtir l’héritage de demain.
              <br/>
              Car au bout du chemin, une énigme t’attend : Quel sera ton propre univers ?
              Tant d’histoires ont nourri ton imagination, tant de règles et de mondes ont influencé ta vision du jeu… et si c’était enfin le moment d’écrire tes propres Chroniques ?
              </Quest>

            </div>
          </div>
        </div>
      </div>

        <img src="/ornement.svg" className="absolute z-10 bottom-[-18px] right-[-18px] rotate-180" />
      </div>
  );
}
