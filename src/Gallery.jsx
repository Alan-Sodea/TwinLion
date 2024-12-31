import { useEffect, useState } from "react";
import { loadGallery, loadGlobalStore } from "./stores/actionStore";
import { useHookstate } from "@hookstate/core";
import { globalStore, imageStore } from "./stores/adminStore";
import { Link } from "react-router-dom";

function Gallery() {

  let [menuOpen, setMenuOpen] = useState(false);
  const store = useHookstate(imageStore);


  useEffect(() => {
    
    (async () => {
      await loadGallery();

      console.log(store.get());
    })()
  }, [])

  let gallery = useHookstate(imageStore)

  return <>
    <nav className='fixed z-50 flex justify-between items-center -top-3  pl-4 w-full bg-gray-200 shadow-md py-3 shadow-black flex-wrap'>
      <div className="icon text-2xl px-10 rounded-md py-3 mt-3 bg-black animate-loading-parent bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('./Logo.jpg')" }}><div className='animate'></div><div className='h-6'></div></div>

      <ul className={'md:flex md:justify-md:between md:gap-4 md:mr-6 ' + String(menuOpen && "flex z-50 fixed top-0 left-0 w-screen h-screen bg-black justify-center items-center gap-5 flex-col" || !menuOpen && "hidden")}>
        <li className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} ><Link to="/">Accueil</Link></a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
        {
          store.map((section, index) => {
            return <li key={index} className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)}> <Link to="/">{section.section.get()}</Link></a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
          })
        }

        <li className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} > <Link to="/gallery">Images</Link> </a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
      </ul>

    </nav>

    ((gallery) && (gallery[0]) && <div className="mt-8 bg-[rgb(240,240,240)]">
      <header className="bg-white shadow-sm py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Nos Réalisations
          </h1>
          <p className="mt-2 font-bold text-gray-600">
            Découvrez nos projets de construction et travaux publics
          </p>
        </div>
      </header>

      <div className="container outline outline-1 p-0 grid grid-cols-1 mx-auto lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
      { 
        gallery.map((image, index) => (<>
          <div key={index} className="the-card w-full p-0 aspect-square outline outline-1 outline-black rounded-md shadow-lg hover:shadow-2xl scale-95 hover:scale-100">
            <div className={"img relative z-0 w-full m-0 h-full bg-cover bg-center hover:cursor-pointer"} onClick={() => {setMain(1), pop(true)}} style={{backgroundImage : "url('"+image.image.get()+"')"}}>
            </div>
            <p className="absolute z-50 bottom-16 left-8 font-bold text-wrap hidden text-lg" style={{width : "calc(100% - 4rem)", maxHeight : "calc(100% - 4rem)"}}>{image.desc.get()}</p>
          </div>
        </>))
      }
      </div>
      
    </div>)
  </> 
}

export default Gallery;