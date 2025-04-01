import { useState } from "react";
import Quest from "~/component/quest";


export default function Uiux() {
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
            Figmara
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
            Figmara est une région mystique et élégante située aux confins du continent numérique. Ici, les habitants ne parlent 
            pas en balises, mais en courbes de Bézier. Chaque ville, 
            chaque territoire, incarne une facette de l’expérience utilisateur et du design d’interface. Figmara est l’endroit où l’on 
            façonne l’âme des projets, où l’esthétique rencontre la stratégie.
            </p>

            <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
              <Quest title="Le Grimoire du Designer (CV)" index={0}>
              Dans les archives brumeuses de Figmara, chaque designer doit consigner son essence dans un artefact sacré : le Grimoire 
              du Designer. Il ne s'agit pas simplement de lister ses faits d’armes, mais de capturer sa vision, son style, son unicité. 
              Cette relique sera examinée par les Veilleurs du Recrutement, des entités sévères qui scrutent chaque mot, chaque mise 
              en page. Le grimoire doit à la fois inspirer et convaincre, tout en restant lisible dans la nuit.
              </Quest>

              <Quest title="Forger le Miroir du Portfolio" index={1}>
              Dans les profondeurs du Lac du Reflet Créatif, les âmes des projets passés flottent, attendant d’être invoquées. Le 
              Miroir du Portfolio est une relique qui permet de les faire revivre : chaque reflet, chaque transition doit raconter
               une histoire claire et captivante. Pour réussir cette quête, il faut manier harmonieusement typographie, animation 
               et narration visuelle, afin que le miroir révèle la vraie valeur du voyageur. Attention : un miroir mal poli peut 
               tout aussi bien brouiller que révéler…
              </Quest>

              <Quest title="Le Protocole de la Dernière Station (UI de jeu)" index={2}>
              Aux confins de Figmara, dans un vaisseau plongée dans le silence, le designer est appelé à une mission 
              périlleuse : créer l’interface d’un jeu oublié, dans un style minimaliste, sci-fi et horrifique. Ici, le moindre 
              élément doit transmettre la tension, l’isolement, l'urgence. À l’aide des grimoires anciens comme gameuidatabase.com, 
              tu devras imaginer une interface à la fois immersive et discrète, capable d’amplifier le sentiment d’oppression sans 
              détourner l’attention du danger. La moindre erreur pourrait réveiller ce qui dort sous la surface…
              </Quest>
            </div>
          </div>
        </div>
      </div>

        <img src="/ornement.svg" className="absolute z-10 bottom-[-18px] right-[-18px] rotate-180" />
      </div>
  );
}
