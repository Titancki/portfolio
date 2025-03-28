import { useState } from "react";
import Quest from "~/component/quest";


export default function Devweb() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const previous = () => {
    if (isAnimating) return; // Bloquer pendant l'animation
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
      setIsAnimating(false);
    }, 500); // Temps de transition
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
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
          id="django_bg"
          src="/djangopolis.jpg"
          className={`object-cover h-full w-full absolute top-0 transition-opacity duration-500 ease-in-out ${currentIndex === 0 ? "opacity-100" : "opacity-0"}`}
        />
        <img
          id="react_bg"
          src="/reactia.jpg"
          className={`object-cover h-full w-full absolute top-0 transition-opacity duration-500 ease-in-out
          ${currentIndex === 1 ? "opacity-100" : "opacity-0"}`}
        />
        <img
          id="angular_bg"
          src="/angularis.jpg"
          className={`object-cover h-full w-full absolute top-0 transition-opacity duration-500 ease-in-out ${currentIndex === 2 ? "opacity-100" : "opacity-0"}`}
        />

        {/* Navigation */}
        <div className="absolute top-5 z-20 w-full flex justify-between px-5">
          <button onClick={previous} className="text-5xl">&lt;</button>
          <span
            id="django_title"
            className={`mx-auto text-4xl transition-opacity duration-500 ease-in-out ${currentIndex === 0 ? "" : "hidden"}`}
          >
            Djangopolis
          </span>
          <span
            id="react_title"
            className={`mx-auto text-4xl transition-opacity duration-500 ease-in-out ${currentIndex === 1 ? "" : "hidden"}`}
          >
            Reactia
          </span>
          <span
            id="angular_title"
            className={`mx-auto text-4xl transition-opacity duration-500 ease-in-out ${currentIndex === 2 ? "" : "hidden"}`}
          >
            Angularis
          </span>
          <span
            id="docker_title"
            className={`mx-auto text-4xl transition-opacity duration-500 ease-in-out ${currentIndex === 3 ? "" : "hidden"}`}
          >
            Dockerheaven
          </span>
          <button onClick={next} className="text-5xl">&gt;</button>
        </div>

        <div className="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-[#232221] to-transparent"></div>
      </div>

      {/* Section Description */}
      <div className="m-[17px] border-[1px] border-[#94806D] h-[calc(100%-236px)]  relative">
        <img src="/ornement.svg" className="absolute z-10 top-[-18px] left-[-18px]" />

        <div
          id="django_desc"
          className={`w-full top-0 left-0 transition-opacity duration-500 ease-in-out overflow-scroll h-full ${currentIndex === 0 ? 'block' : 'hidden'}`}
        >
          <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
            <p className="mb-6">
              Au cœur du Royaume du Dev Web, <strong>Djangopolis</strong> est une ville fortifiée, véritable bastion du backend. 
              C’est ici que l’Empereur a posé les bases de son empire en maniant Django et Python.
            </p>

            <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
              <Quest title="Améliorer la Route d’Apéhi chez Covage" index={0}>
                La France veut une couverture fibre d’ici 2025... Je sais le réve est bien trop grand, mais celui qui ne rève pas n’ira pas loin. 
                La route d’Apéhi devra passer par différentes guildes, ainsi par Angularis où le spectacle sera fait. Avec l’aide des grands mages de 
                télécommunication nous agrandiront ce réseau.
              </Quest>

              <Quest title="Construire les Automates S.C.R.A.P" index={1}>
                Nos transporteurs n’ont pas de connexion vers la route d’Apéhi. Le transport vers l’international est malheureusement ralenti... La guilde IMX
                veut créer des Automates S.C.R.A.P pour les connecter à ce réseau. <br/>
                Parler à Caporal Selenium, il saura comment construire les automates.
              </Quest>
            </div>
          </div>
        </div>
        <div
        id="react_desc"
        className={` w-full top-0 left-0 transition-opacity duration-500 ease-in-out overflow-scroll h-full ${currentIndex === 1 ? "block" : "hidden"}`}
        >
        <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
          <p className="mb-6">
          Dans l'univers du Dev Web, <strong>Reactia</strong> est la métropole innovante où les interfaces prennent vie. Ici, les développeurs façonnent des expériences 
          utilisateurs captivantes et réactives grâce à la puissance de React et JavaScript, redéfinissant la manière dont le web interagit avec ses utilisateurs.
          </p>

          <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
              <Quest title="Unir les Champions de France Masters" index={0}>
                <div>
                  <p className="my-2">
                  Aux portes de Reactia, là où les lignes de code vibrent au rythme des claviers effrénés, l’Ordre de France Masters lança une missive 
                  il y a de cela deux années : ériger un sanctuaire digital pour glorifier les plus valeureux combattants de Rocket League.
                  </p>
                  <p className="my-2">
                  Cette quête ne fut pas de tout repos. Le chantier dura deux cycles lunaires, mobilisant les plus vaillants développeurs du royaume. 
                  Ensemble, ils bâtirent une plateforme capable d’inscrire les équipes par l’intermédiaire d’un ancien esprit mécanique : le Bot Discord, 
                  lien sacré entre les joueurs et le site.
                  </p>
                  <p className="my-2">
                  Les tournois prirent vie, les matchs furent enregistrés dans les grimoires numériques, et les pages sacrées se générèrent automatiquement 
                  pour être projetées sur les oracles d’OBS, révélant au monde entier les affrontements légendaires.
                  </p>
                  <p className="my-2">
                  Grâce à toi, cette forteresse d’e-sport s’élève, au cœur de Reactia, inspirant les nouvelles générations de champions.
                  </p>
                </div>
              
              </Quest>

            </div>

        </div>
      </div>
      <div
        id="angular_desc"
        className={` w-full top-0 left-0 transition-opacity duration-500 ease-in-out overflow-scroll h-full ${currentIndex === 2 ? "block" : "hidden"}`}
        >
        <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
          <p className="mb-6">
          Aux confins du royaume, <strong>Angularis</strong> s’élève telle une cité rigoureuse et bien ordonnée. Berceau des applications robustes et modulaires, 
          elle repose sur une architecture solide où TypeScript règne en maître. Les artisans du code y manient Angular avec précision, bâtissant des systèmes 
          durables dignes des plus grandes guildes du web.
          </p>

          <div className="mx-auto my-16 px-4 sm:px-6 lg:px-8 max-w-screen">
              <Quest title="Donner forme à l’Intranet des Guildes" index={0}>
                <div>
                  <p className="my-2">
                  Dans les terres connectées de Covage, après avoir renforcé la Route d’Apéhi depuis Djangopolis, une autre mission t’attend à Angularis.
                  Les guildes commerciales du royaume réclamaient un outil clair et fiable pour suivre les pactes d’abonnement tissés avec les cités clientes.
                  </p>
                  <p className="my-2">
                  C’est ainsi que l’intranet des Guildes vit le jour.
                  </p>
                  <p className="my-2">
                  Grâce à la magie d’Angularis, tu as relié aux routes de l'Apéhi pour en extraire données et informations, donnant forme et lisibilité à un monde auparavant brumeux.
                  Suivi, gestion et visualisation des abonnements télécom : tout fut pensé pour simplifier la tâche des artisans de l’ombre.
                  Ce portail, utilisé par toutes les entreprises du groupe, est devenu un pilier dans la gestion quotidienne des flux.
                  </p>
                </div>
              </Quest>

            </div>

        </div>
      </div>

        <img src="/ornement.svg" className="absolute z-10 bottom-[-18px] right-[-18px] rotate-180" />
      </div>
    </div>
  );
}
