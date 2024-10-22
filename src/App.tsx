import { useEffect, useState } from 'react';
import './App.css'

function ProjetCard({ text, img, title }: any) {
  return (
    <>
      <div className='projet flex outline outline-1 md:flex-row overflow-hidden flex-col gap-3 p-2 w-full shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-sm'>
        <div className='w-full aspect-video bg-cover rounded-sm bg-center' style={{ backgroundImage: `url('${img}')` }}></div>
        <div className='w-full aspect-auto py-3 pl-2 text-black text-sm flex flex-col'>
          <div className='text-gray-500 text-2xl mb-1'>{title}</div>
          <div className='text-black h-full flex flex-col justify-center'>
            {text}
          </div>
        </div>
      </div>
    </>
  );
}


function TemoignageCard({ text, image }: any) {

  return (
    <>
      <div className='temoignage flex gap-3 flex-col shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-md' onClick={() => sethover(false)}>
        <div className='w-full aspect-short bg-cover bg-center rounded-sm' style={{ backgroundImage: `url('${image}')` }}></div>
        <div className='desc w-full aspect-auto pb-3 px-7 text-black text-sm' >{text}</div>
      </div >
    </>
  );
}

function ServiceCard({ text, image, title }: any) {
  return (
    <>
      <div className='service outline-amber-400 outline-2.5 outline flex gap-3 w-full cursor-pointer h-fit flex-col p-2 shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-md'>
        <div className='w-full aspect-video bg-center bg-cover rounded-sm' style={{ backgroundImage: `url(${image})` }}></div>
        <div className="text-amber-400 font-bold text-xl text-center" style={{ textShadow: "2px 2px black" }}>{title.toUpperCase()}</div>
        <div className='w-full aspect-auto py-3 pl-2 text-black text-md font-bold'>{text}</div>
      </div >
    </>
  );
}

function App() {

  let [translateX, setTranslateX] = useState(0);
  let [menuOpen, setMenuOpen] = useState(false);
  const [images, setImages] = useState(["Templates/img_7.jpg", "Templates/img_2.jpg", "Templates/img_4.jpg", "Templates/img_3.jpg", "Templates/solaire.jpeg", "Templates/maison-ecologique.jpg", "Templates/forage.jpg"]);
  setImages(["Templates/img_7.jpg", "Templates/img_2.jpg", "Templates/img_4.jpg", "Templates/img_3.jpg", "Templates/solaire.jpeg", "Templates/maison-ecologique.jpg", "Templates/forage.jpg"])

  const [titres, setTitres] = useState(["Construction de batiment", "Conceptions architecturales", "Design de mobilier", "Design d'intérieur", "Installation de panneaux solaire", "Maisons écologiques et autonomes", "Contruction de forage"]);
  setTitres(["Construction de batiment", "Conceptions architecturales", "Design de mobilier", "Design d'intérieur", "Installation de panneaux solaire", "Maisons écologiques et autonomes", "Contruction de forage"])

  const [services, setServices] = useState([
    {
      image: images[0],
      text: "Nous réalisons des projets de construction de bâtiments, allant des structures résidentielles aux complexes commerciaux. De la fondation à la finition, nous garantissons des constructions solides et conformes aux normes les plus élevées en matière de qualité et de sécurité.",
      title: titres[0],
    },
    {
      image: images[1],
      text: "Nous offrons des services complets d'architecture, de la conception initiale à la réalisation des plans détaillés. Nos solutions architecturales sont innovantes, esthétiques et respectueuses des contraintes techniques et environnementales.",
      title: titres[1],
    },
    {
      image: images[2],
      text: "Nous concevons et fabriquons du mobilier sur mesure, alliant esthétique et fonctionnalité. Nos créations visent à répondre aux besoins spécifiques de chaque espace, en intégrant des matériaux durables et un savoir-faire artisanal.",
      title: titres[2],
    },
    {
      image: images[3],
      text: "Nous proposons des services de design d'intérieur sur mesure, en transformant vos espaces pour refléter votre style et vos besoins. Nous optimisons l'agencement, les matériaux et les couleurs pour créer des environnements à la fois fonctionnels et élégants.",
      title: titres[3],
    },
    {
      image: images[4],
      text: "Notre service d'installation de panneaux solaires vous offre une solution durable pour produire votre propre énergie. Nous gérons tout le processus, de l'évaluation à l'installation, en garantissant un rendement optimal. Profitez d'économies sur vos factures d'énergie tout en contribuant à un avenir plus vert. Faites le choix de l'énergie solaire dès aujourd'hui !",
      title: titres[4],
    },
    {
      image: images[5],
      text: "Nous construisons des maisons écologiques autonomes, combinant confort moderne et respect de l'environnement. Utilisant des matériaux durables et des technologies innovantes, nos maisons sont conçues pour maximiser l'efficacité énergétique. Profitez d'un habitat autosuffisant en énergie qui préserve notre planète.",
      title: titres[5],
    },
    {
      image: images[6],
      text: "Notre service de construction de forage garantit un accès fiable à l'eau potable pour vos besoins résidentiels ou agricoles. Nous utilisons des techniques modernes pour créer des forages adaptés et durables. Notre équipe s'assure d'une installation rapide et sécurisée, vous offrant ainsi une source d'eau saine et pérenne, essentielle pour votre quotidien.",
      title: titres[6],
    }
  ]);

  setServices([
    {
      image: images[0],
      text: "Nous réalisons des projets de construction de bâtiments, allant des structures résidentielles aux complexes commerciaux. De la fondation à la finition, nous garantissons des constructions solides et conformes aux normes les plus élevées en matière de qualité et de sécurité.",
      title: titres[0],
    },
    {
      image: images[1],
      text: "Nous offrons des services complets d'architecture, de la conception initiale à la réalisation des plans détaillés. Nos solutions architecturales sont innovantes, esthétiques et respectueuses des contraintes techniques et environnementales.",
      title: titres[1],
    },
    {
      image: images[2],
      text: "Nous concevons et fabriquons du mobilier sur mesure, alliant esthétique et fonctionnalité. Nos créations visent à répondre aux besoins spécifiques de chaque espace, en intégrant des matériaux durables et un savoir-faire artisanal.",
      title: titres[2],
    },
    {
      image: images[3],
      text: "Nous proposons des services de design d'intérieur sur mesure, en transformant vos espaces pour refléter votre style et vos besoins. Nous optimisons l'agencement, les matériaux et les couleurs pour créer des environnements à la fois fonctionnels et élégants.",
      title: titres[3],
    },
    {
      image: images[4],
      text: "Notre service d'installation de panneaux solaires vous offre une solution durable pour produire votre propre énergie. Nous gérons tout le processus, de l'évaluation à l'installation, en garantissant un rendement optimal. Profitez d'économies sur vos factures d'énergie tout en contribuant à un avenir plus vert. Faites le choix de l'énergie solaire dès aujourd'hui !",
      title: titres[4],
    },
    {
      image: images[5],
      text: "Nous construisons des maisons écologiques autonomes, combinant confort moderne et respect de l'environnement. Utilisant des matériaux durables et des technologies innovantes, nos maisons sont conçues pour maximiser l'efficacité énergétique. Profitez d'un habitat autosuffisant en énergie qui préserve notre planète.",
      title: titres[5],
    },
    {
      image: images[6],
      text: "Notre service de construction de forage garantit un accès fiable à l'eau potable pour vos besoins résidentiels ou agricoles. Nous utilisons des techniques modernes pour créer des forages adaptés et durables. Notre équipe s'assure d'une installation rapide et sécurisée, vous offrant ainsi une source d'eau saine et pérenne, essentielle pour votre quotidien.",
      title: titres[6],
    }
  ])

  useEffect(() => {
    let a;
    clearInterval(a);
    a = setTimeout(async () => {
      let b = await translateX;
      b = await (b - 100);
      if (b == -100 * (images.length)) b = 0;
      await setTranslateX(b);

    }, 2000);
  })

  return (
    <>

      <div className='scroll-smooth'>
        <nav className='fixed z-50 flex justify-between items-center -top-3  pl-4 w-full min-h-16 h-auto bg-gray-200 shadow-md py-3 shadow-black flex-wrap'>
          <div className="icon text-2xl px-10 rounded-md py-3 mt-3 bg-black animate-loading-parent bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('Logo.jpg')" }}><div className='animate'></div><div className='h-6'></div></div>

          <ul className={'md:flex md:justify-md:between md:gap-4 md:mr-6 ' + String(menuOpen && "flex z-50 fixed top-0 left-0 w-screen h-screen bg-black justify-center items-center gap-5 flex-col" || !menuOpen && "hidden")}>
            <li className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} href="#">Home</a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
            <li className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} href="#service">Services</a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
            <li className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} href="#projet">Projects</a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
            <li className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} href="#temoignage">Témoignages</a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
          </ul>

        </nav>


        <div className='fixed top-0 h-16 flex flex-col justify-center items-center aspect-square z-50 right-4 md:hidden'>
          <div className={'flex flex-col h-8 aspect-square ' + String(menuOpen && "justify-center gap-0" || !menuOpen && "gap-2 justify-between")} onClick={() => { setMenuOpen(!menuOpen); }}>
            <div className={'w-full h-2 ' + String(menuOpen && "rotate-45 relative top-1 bg-white" || !menuOpen && "bg-black")} ></div>
            <div className={'w-full h-2 ' + String(menuOpen && "rotate-45 hidden bg-white" || !menuOpen && "bg-black")} ></div>
            <div className={'w-full h-2 ' + String(menuOpen && "-rotate-45 relative bottom-1 bg-white" || !menuOpen && "bg-black")} ></div>
          </div>
        </div >

        <div className='overflow-hidden mt-5'>
          <div className='relative h-fit w-2/3 outline outline-blue-200 outline-5 flex flex-col justify-between w-screen pt-10 pb-0 gap-12'>
            <div className='w-full'>
              <div className='h-full w-full bg-primary flex items-center justify-center gap-20 overflow-x-visible'>
                <div className="gap-5 flex h-full mb:w-2/3 md:w-2/3 w-full mt-10 items-center justify-center">



                  <div className='w-fit h-full aspect-square flex flex-col justify-center items-center'>
                    <div className='w-full flex flex-row-reverse md:justify-start justify-center'>
                      <div className='md:w-96 w-3/4'>
                        <div className="name text-2xl font-bold text-black px-4 mb-12">TWIN LIONS Entreprise</div>
                        <div className="desc text-xl text-black md:px-4 px-0">
                          Nous sommes une entreprise spécialisée dans le génie civil et l'architecture. Nous concevons et réalisons des infrastructures durables, telles que des bâtiments, des routes, des ponts et autres ouvrages publics ou privés. Nos services englobent la planification, la conception, l'ingénierie structurelle, ainsi que la supervision et l'exécution des travaux de construction
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className='md:flex h-fit aspect-ratio w-1/2 items-center hidden'>

                    <div className='relative w-full'>
                      <div className='absolute w-24 z-20 aspect-square rounded-md bg-contain bg-no-repeat bg-center' style={{ backgroundImage: "url('/Logo.jpg')" }}></div>


                      <div className='flex relative z-10 outline outline-accent mb-5 outline-4 w-full bg-accent rounded-md aspect-square shadow-2xl shadow-black bg-cover bg-left-top bg-no-repeat overflow-hidden'>
                        <div className='h-full w-fit flex slider'>
                          {
                            images.map((image, index) => (
                              <div key={index} className=' w-full flex items-center justify-center h-full bg-accent rounded-md aspect-square shadow-2xl shadow-black bg-cover bg-left-top bg-no-repeat' style={{ backgroundImage: `url('${image}')`, transform: `translate(${translateX}%)` }}>
                                <div className='w-full flex flex-col gap-3 h-full items-center justify-center' style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                                  <div className='w-full text-2xl text-center text-wrap text-action font-bold' style={{ fontFamily: "Poppins", textShadow: "5px 5px 5px black" }}>{titres[index].toUpperCase()}</div>
                                  <div className='w-full text-center text-sm px-10 text-wrap text-white' style={{ fontFamily: "Poppins" }}>{services[index].text.slice(0, 150) + "..."}</div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        <div className='absolute w-16 aspect-square bottom-5 right-5 rounded-md bg-action shadow-lg animate-spin-5'></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className='pt-4 w-full min-h-16 pb-3 h-auto text-lg bg-primary flex justify-center items-center md:flex-row flex-col md:gap-14 gap-5 flex-wrap'>
              <div className='flex gap-2 items-center'><span className='w-8 aspect-square bg-center bg-cover' style={{ backgroundImage: "url('Templates/facebook (1).png')" }}></span><p className='text-black'>@freelion</p></div>
              <div className='flex gap-2 items-center'><span className='w-8 aspect-square bg-center bg-cover' style={{ backgroundImage: "url('Templates/whatsapp (2).png')" }}></span><p className='text-black'>(+237) 676 18 72 61</p></div>
              <div className='flex gap-2 items-center'><span className='w-8 aspect-square bg-center bg-cover' style={{ backgroundImage: "url('Templates/instagram (1).png')" }}></span><p className='text-black'>@twin-lion-ent</p></div>
              <div className='flex gap-2 items-center'><span className='w-8 aspect-square bg-center bg-cover' style={{ backgroundImage: "url('Templates/gmail1.png')" }}></span><p className='text-black'>contact@twin_lion.com</p></div>
            </div>
          </div>
        </div>


        <section id='service'>
          <p className="title bg-action mx-5 rounded-md p-2 pl-5 text-black text-xl">Nos Services</p>

          <div className="flex justify-center" >
            <div className='p-6 bg-primary grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-14 w-full xl:max-w-7xl max-w-5xl'>
              {services.map((service, index) => <ServiceCard key={index} title={service.title} image={service.image} text={service.text} ></ServiceCard>)}
            </div>
          </div>
        </section>



        <section id='projet'>
          <p className="title bg-action mx-5 rounded-md p-2 pl-5 text-black text-xl">Nos Projets</p>

          <div className="flex justify-center">
            <div className='p-6 bg-primary flex flex-col gap-5 w-full max-w-5xl'>
              <ProjetCard img={"Templates/old.img_1.jpg"} title={"Construction d'une villa R+1 avec piscine et terrain de basket – Nsimalen, Cameroun"} text={"Ce projet à Nsimalen comprend une villa R+1 avec 6 chambres, 2 salons spacieux et une cuisine moderne. En plus des espaces de vie confortables, nous avons intégré une piscine privée et un terrain de basket pour les loisirs. Ce projet allie fonctionnalité, confort et élégance, répondant aux attentes élevées du client en termes de qualité et d'aménagement."}></ProjetCard>
              <ProjetCard img={"Templates/1npsp.png"} title={"ShowRoom, Mercedes"} text={"Nous avons conçu une showroom moderne pour Mercedes, offrant un espace d’exposition élégant et fonctionnel. Le bâtiment met en valeur les véhicules de la marque grâce à une architecture épurée et des espaces optimisés. Le projet intègre des zones dédiées aux clients, avec un agencement raffiné, répondant aux standards internationaux de la marque en matière de qualité et d’esthétique."}></ProjetCard>
              <ProjetCard img={"Templates/img_2.jpg"} title={"Villa R+1 avec 4 chambres et garage – Yaoundé, Cameroun"} text={"Ce projet résidentiel R+1 à Yaoundé comprend 4 chambres spacieuses, un garage privé et une terrasse exploitable, idéale pour les activités extérieures. Nous avons conçu cet espace pour allier confort et praticité, avec des finitions modernes et des agencements optimisés. La terrasse offre une vue dégagée et peut être utilisée pour diverses activités, ajoutant une valeur supplémentaire à la propriété."}></ProjetCard>
            </div>
          </div>
        </section >



        <section id='temoignage'>
          <p className="title bg-action mx-5 rounded-md p-2 pl-5 text-black text-xl">Témoignages</p>

          <div className="flex justify-center" >
            <div className='py-6 bg-primary flex justify-center gap-7 w-full max-w-5xl flex-wrap'>
              <TemoignageCard text={"J'ai fait appel à cette entreprise pour la construction d'un meublé à Bastos, Cameroun, et j'ai été impressionné par leur rapidité d'exécution. Non seulement le projet a été livré dans les délais, mais la qualité du travail était également irréprochable. Leur équipe a fait preuve de professionnalisme tout au long du processus. Je recommande vivement leurs services pour leur efficacité et leur sérieux."} image={"Templates/imgdub2.png"}></TemoignageCard>
              <TemoignageCard text={"Résidant à Dubaï, j'ai fait appel à cette entreprise lors de mon retour au Cameroun pour la construction d'un immeuble R+2 à usage locatif avec terrasse d'exploitation. Leur équipe a fait preuve d'un grand professionnalisme et d'une écoute attentive. Le projet a été mené avec rigueur et le résultat est au-delà de mes attentes. Je recommande vivement leurs services pour leur qualité et leur efficacité."} image={"Templates/old.img_7.jpg"}></TemoignageCard>
              <TemoignageCard text={"Après un projet mal réalisé par un autre prestataire pour mon R+1 à usage d'habitation avec terrasse, j'ai sollicité cette entreprise. Leur professionnalisme et leur maîtrise m'ont impressionné. Ils ont repris le projet avec soin et le résultat dépasse largement mes attentes. La qualité du travail est remarquable, tant sur le plan technique qu'esthétique."} image={"Templates/img 10.png"}></TemoignageCard>
            </div>
          </div>
        </section>
      </div >

    </>
  )
}

export default App
