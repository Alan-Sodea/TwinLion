import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHookstate } from '@hookstate/core';
import './App.css'
import { globalStore } from './stores/adminStore';
import { loadGlobalStore } from './stores/actionStore';

function ProjetCard({ text, img, title }) {
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


function TemoignageCard({ text, image }) {

  let [ishover, sethover] = useState(false);

  return (
    <>
      <div className='temoignage flex gap-3 flex-col shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-md' onClick={() => sethover(false)}>
        <div className='w-full aspect-short bg-cover bg-center rounded-sm' style={{ backgroundImage: `url('${image}')` }}></div>
        <div className='desc w-full aspect-auto pb-3 px-7 text-black text-sm' >{text}</div>
      </div >
    </>
  );
}

function ServiceCard({ text, image, title }) {
  return (
    <>
      <div className='service outline-amber-400 outline-2.5 outline flex gap-3 w-full h-fit flex-col p-2 shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-md'>
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
  const store = useHookstate(globalStore);

  useEffect(() => {
    (async () => {
      await loadGlobalStore();
      
      setServices(store[0].records)
    })()

    // console.log({printnow : store[0].records.get()})
  }, [])

  const [services, setServices] = useState();

  useEffect(() => {
    let a;
    clearInterval(a);
    a = setTimeout(async () => {
      let b = await translateX;
      b = await (b - 100);
      if (b == -100 * 7) b = 0;
      await setTranslateX(b);

    }, 4500);
  })

  return (
    <>

      {(services) && <div className='scroll-smooth'>
        <nav className='fixed z-50 flex justify-between items-center -top-3  pl-4 w-full bg-gray-200 shadow-md py-3 shadow-black flex-wrap'>
          <div className="icon text-2xl px-10 rounded-md py-3 mt-3 bg-black animate-loading-parent bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('./Logo.jpg')" }}><div className='animate'></div><div className='h-6'></div></div>

          <ul className={'md:flex md:justify-md:between md:gap-4 md:mr-6 ' + String(menuOpen && "flex z-50 fixed top-0 left-0 w-screen h-screen bg-black justify-center items-center gap-5 flex-col" || !menuOpen && "hidden")}>
            <li className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} href="#">Accueil</a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
            {
              store.map((section, index) => {
                return <li key={index} className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} href={`#${section.section.get()}`}>{section.section.get()}</a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
              })
            }

            <li className='relative p-2'><a className={'relative md:text-black md:text-lg z-30 hover:text-white text-white text-3xl'} onClick={() => setMenuOpen(false)} > <Link to="/gallery">Images</Link> </a><div className="z-20 absolute top-0 left-0 w-full h-0 bg-action back"></div></li>
          </ul>

        </nav>

        <div className='fixed top-0 h-16 flex flex-col justify-center items-center aspect-square z-50 right-4 md:hidden'>
          <div className={'flex flex-col h-8 aspect-square ' + String(menuOpen && "justify-center gap-0" || !menuOpen && "gap-2 justify-between")} onClick={() => { setMenuOpen(!menuOpen); }}>
            <div className={'w-full h-2 ' + String(menuOpen && "rotate-45 relative top-1 bg-white" || !menuOpen && "bg-black")} ></div>
            <div className={'w-full h-2 ' + String(menuOpen && "rotate-45 hidden bg-white" || !menuOpen && "bg-black")} ></div>
            <div className={'w-full h-2 ' + String(menuOpen && "-rotate-45 relative bottom-1 bg-white" || !menuOpen && "bg-black")} ></div>
          </div>
        </div >

        <div className='overflow-hidden top-bar mt-5'>
          <div className='relative h-fit outline outline-blue-200 outline-5 flex flex-col justify-between w-screen pt-10 pb-0 gap-12'>
            <div className='w-full'>
              <div className='h-full w-full bg-primary flex items-center justify-center gap-20 overflow-x-visible'>
                <div className="gap-5 flex h-full mb:w-2/3 md:w-2/3 w-full mt-10 items-center justify-center">



                  <div className='w-fit h-full aspect-square flex flex-col justify-center items-center'>
                    <div className='w-full flex flex-row-reverse md:justify-start justify-center'>
                      <div className='md:w-96 w-3/4'>
                        <div className="name text-2xl font-bold text-black px-4 mb-12">TWIN LIONS Entreprise</div>
                        <div className="desc text-xl text-black md:px-4 px-0">
                          Nous sommes une entreprise spécialisée dans le génie civil et l'architecture. Nous concevons et réalisons des infrastructures durables, telles que des bâtiments, des routes, des ponts et autres ouvrages  ou privés. Nos services englobent la planification, la conception, l'ingénierie structurelle, ainsi que la supervision et l'exécution des travaux de construction
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
                            services.map((service, index) => (
                              <div key={index} className=' w-full flex items-center justify-center h-full bg-accent rounded-md aspect-square shadow-2xl shadow-black bg-cover bg-left-top bg-no-repeat' style={{ backgroundImage: `url('${service.image.get()}')`, transform: `translate(${translateX}%)` }}>
                                <div className='w-full flex flex-col gap-3 h-full items-center justify-center' style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                                  <div className='w-full text-2xl text-center text-wrap text-action font-bold' style={{ fontFamily: "Poppins", textShadow: "5px 5px 5px black" }}>{service.title.get().toUpperCase()}</div>
                                  <div className='w-full text-center text-sm px-10 text-wrap text-white' style={{ fontFamily: "Poppins" }}>{service.text.get().slice(0, 150) + "..."}</div>
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
              <div className='flex gap-2 items-center'><span className='w-8 aspect-square bg-center bg-cover' style={{ backgroundImage: "url('./facebook (1).png')" }}></span><p className='text-black'>@twin-lions</p></div>
              <div className='flex gap-2 items-center'><span className='w-8 aspect-square bg-center bg-cover' style={{ backgroundImage: "url('./whatsapp (2).png')" }}></span><p className='text-black'>(+237) 697 55 37 23</p></div>
              <div className='flex gap-2 items-center'><span className='w-8 aspect-square bg-center bg-cover' style={{ backgroundImage: "url('./instagram (1).png')" }}></span><p className='text-black'>@twin-lion-ent</p></div>
              <div className='flex gap-2 items-center'><span className='w-8 aspect-square bg-center bg-cover' style={{ backgroundImage: "url('./gmail1.png')" }}></span><p className='text-black'>twinlion@twin-lions.com</p></div>
            </div>
          </div>
        </div>


        {store.map((section, index) => <>
          {(section.layout.get() == 0)
            ? <section key={index} id={section.section.get()}>
              <p className="title bg-action mx-5 rounded-md p-2 pl-5 text-black text-xl">{section.section.get()}</p>

              <div className="flex justify-center" >
                <div className='p-6 bg-primary grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-14 w-full xl:max-w-7xl max-w-5xl'>
                  {section.records.map((elt, index2) => {
                    
                    let md = "col-span-1";
                    let xl = "col-span-1";
                    let total = section.records.length; 
                    let target = 3;
                    
                    if (total%2 == 1)
                    {
                      if (index2 == target) md = "col-span-2"
                    }

                    if (total%3 == 1)
                    {

                      if (index2 == 0) {
                        return <>
                          <div key={index2} className={`lg:col-span-3 md:col-span-2  outline outline-1`}>
                            <div className='projet outline-amber-400 outline-3 flex outline md:flex-row overflow-hidden flex-col gap-3 p-2 w-full shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-sm'>
                              <div className='w-full aspect-video bg-cover rounded-sm bg-center' style={{ backgroundImage: `url('${elt.image.get()}')` }}></div>
                              <div className='w-full aspect-auto py-3 pl-2 text-black text-sm flex flex-col'>
                                <div className='text-2xl mb-1 text-amber-400 font-bold text-center' style={{ textShadow: "1.5px 1.5px black" }}>{elt.title.get()}</div>
                                <div className='text-black h-full flex flex-col justify-center w-full aspect-auto py-3 pl-2 text-lg font-bold'>
                                  {elt.text.get()}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      } 
                      else
                      {
                       
                      }
                    }
                    else if (total%3 == 2)
                    {
                      if (index2 == target) xl = "col-span-2"; 
                    }
                    
                    return <div key={index2} className={`col-span-1`}>
                      <ServiceCard key={index2} title={elt.title.get()} image={elt.image.get()} text={elt.text.get()} />
                    </div> 

                  })}
                </div>
              </div>
            </section>

            : (section.layout.get() == 2)
              ? <section key={index} id={section.section.get()}>
                <p className="title bg-action mx-5 rounded-md p-2 pl-5 text-black text-xl">{section.section.get()}</p>

                <div className="flex justify-center">
                  <div className='pt-6 bg-primary flex flex-col gap-5 w-full max-w-7xl'>
                    {/* {
                      section.records.map((elt, index2) => {

                        return <ProjetCard key={index2} img={elt.image.get()} title={elt.title.get()} text={elt.text.get()}/>

                      })
                    } */}

                    {
                      (section.records.length < 3) && section.records.map((elt, index2) => <ProjetCard key={index2} img={elt.image.get()} title={elt.title.get()} text={elt.text.get()}/>)
                    }
                    
                    {  
                      // (3 <= section.records.length) && <>
                      //   <div className='flex flex-col xl:flex-row md:flex-col gap-8'>

                      //     <div className='outline-2.5 outline w-full flex gap-3 justify-between cursor-pointer h-fit flex-col p-2 shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-md'>
                      //       <div className='w-full aspect-video bg-center bg-cover rounded-sm ' style={{ backgroundImage: `url(${section.records[0].image.get()})` }}></div>

                      //       <div>
                      //         <div className="text-gray-500 font-bold text-2xl text-center">{section.records[0].title.get().toUpperCase()}</div>
                      //         <div className='w-full aspect-auto py-3 pl-2 text-black text-md font-bold'>{section.records[0].text.get()}</div>
                      //       </div>
                      //     </div >

                      //     <div className='flex gap-2 w-full h-fit flex-col'>

                      //       <div className='projet flex outline h-72 outline-1 md:flex-row overflow-hidden flex-col gap-3 p-2 w-full shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-sm'>
                      //         <div className='w-full aspect-square bg-cover rounded-sm bg-center' style={{ backgroundImage: `url('${section.records[1].image.get()}')` }}></div>
                      //         <div className='w-full aspect-auto py-3 pl-2 text-black text-sm flex flex-col'>
                      //           <div className='text-gray-500 text-2xl mb-1'>{section.records[1].title.get()}</div>
                      //           <div className='text-black h-full flex flex-col justify-center'>
                      //             {section.records[1].text.get()}
                      //           </div>
                      //         </div>
                      //       </div>  

                      //       <div className='projet flex outline outline-1 md:flex-row overflow-hidden flex-col gap-3 p-2 w-full shadow-lg shadow-black rounded-sm hover:shadow-xl hover:shadow-black hover:rounded-sm'>
                      //         <div className='w-full aspect-video bg-cover rounded-sm bg-center' style={{ backgroundImage: `url('${section.records[1].image.get()}')` }}></div>
                      //         <div className='w-full aspect-auto py-3 pl-2 text-black text-sm flex flex-col'>
                      //           <div className='text-gray-500 text-2xl mb-1'>{section.records[1].title.get()}</div>
                      //           <div className='text-black h-full flex flex-col justify-center'>
                      //             {section.records[1].text.get()}
                      //           </div>
                      //         </div>
                      //       </div>  

                      //     </div >

                      //   </div>

                      // </> 
                      section.records.map((elt, index2) => <ProjetCard key={index2} img={elt.image.get()} title={elt.title.get()} text={elt.text.get()} pos={true}/>)
                    
                
                    }
                  </div>
                </div>

              </section >

              : <section key={index} id={section.section.get()}>
                <p className="title bg-action mx-5 rounded-md p-2 pl-5 text-black text-xl">{section.section.get()}</p>

                <div className="flex justify-center" >
                  <div className='py-6 bg-primary flex justify-center gap-7 w-full max-w-5xl flex-wrap'>
                    {
                      section.records.map((elt, index2) => <TemoignageCard key={index2} text={elt.text.get()} image={elt.image.get()}></TemoignageCard>)
                    }
                  </div>
                </div>
              </section>
          }
        </>

        )}
      </div >}

    </>
  )
}

export default App;
