import { useState } from "react";
import Quest from "~/component/quest";


export default function Gamedev() {
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
            Godoria
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
              <Quest title="MidgardNostalgia – Les Ruines du Souvenir" index={0}>
              Dans les Archives Perdues de Midgard, les échos d’un ancien monde persistent. Inspiré par un mythe nommé Ragnarok Online, le voyageur entreprend la création d’un temple à la nostalgie, 
              réinterprété sous les codes du roguelike. En 2.5D, chaque couloir, chaque pixel doit rappeler les grandes batailles passées, tout en respectant les lois modernes du gameplay procédural. 
              <br/>
              Cette quête est celle de l’apprentissage : apprendre à manipuler les artefacts de Godot, comprendre la logique du moteur, les collisions, les états, les ennemis, les loots. Peu de voyageurs 
              en ressortent indemnes, mais tous en sortent transformés.
              </Quest>

              <Quest title="Cryonaut – L’Éveil dans le Vide" index={1}>
              Une alarme hurle dans le silence d’un vaisseau abandonné. Le Cryonaut se réveille dans un corps inconnu, dans un couloir métallique glacé. Sa conscience est instable, transférée entre 
              enveloppes cryogéniques... mais son instinct de survie est intact.
              <br/>
              Cryonaut est une odyssée horrifique en vue subjective, inspirée de Half-Life, Doom et Isaac. Les vaisseaux sont générés pièce par pièce, formant des labyrinthes cauchemardesques. Chaque 
              partie est différente. Chaque réveil est un pari contre la mort.
              <br/>
              Cette quête est un chantier titanesque : architecture procédurale, systèmes de combat dynamiques, interfaces immersives, lore cryptique… Le Cryonaut doit tout affronter — même ses propres 
              fragments mentaux.  
              </Quest>

            </div>
          </div>
        </div>
      </div>

        <img src="/ornement.svg" className="absolute z-10 bottom-[-18px] right-[-18px] rotate-180" />
      </div>
  );
}
