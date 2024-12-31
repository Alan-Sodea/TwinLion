import { useEffect, useState } from "react";


function Gallery() {

  const [gallery, setGallery] = useState([{image : "https://blog-fr.orson.io/wp-content/uploads/2022/12/scott.art_A_compelling_photograph_showing_a_collection_of_print_ab712c98-6913-4116-882e-4d9717ccb689.png", desc : "Visite de Chantier à Garoua Boulaï"}])

  useEffect(() => {
    (async () => {
      try {
          // console.log('Début du chargement du state...');
          // Charger le dernier state sauvegardé (par exemple, le plus récent)
          // Télécharger le fichier JSON depuis le bucket 'state'
          const { data: file, error } = await supabase.storage
              .from('state')
              .download(`${"gallery.json"}?cache-buster=${Date.now()}`);
  
          if (error) {
              // console.error('Erreur lors du chargement :', error.message);
              return false;
          }
  
          if (file instanceof Blob) {
              // Lire le contenu du Blob en texte
              const text = await file.text();
              console.log({text});
              // Analyser le texte comme du JSON
              const loadedStore = JSON.parse(text);
  
              // Mettre à jour le globalStore avec les données téléchargées
              globalStore.set(loadedStore);
              // console.log('GlobalStore chargé avec succès :', loadedStore);
              return true;
          } else {
              console.error('Le fichier téléchargé n\'est pas un Blob');
              return false;
          }
  
      } catch (error) {
          console.error('Erreur :', error);
          return false;
      }
    })()
  })

  return <>
    <div className="min-h-screen bg-[rgb(240,240,240)]">
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
          <div className="the-card w-full p-0 aspect-square outline outline-1 outline-black rounded-md shadow-lg hover:shadow-2xl scale-95 hover:scale-100">
            <div className={"img relative z-0 w-full m-0 h-full bg-cover bg-center hover:cursor-pointer"} onclick={() => {setMain(1), pop(true)}} style={{backgroundImage : "url('"+image.image+"')"}}>
            </div>
            <p className="absolute z-50 bottom-16 left-8 font-bold text-wrap hidden text-lg" style={{width : "calc(100% - 4rem)", maxHeight : "calc(100% - 4rem)"}}>{image.desc}</p>
          </div>
        </>))
      }
      </div>
      
    </div>
  </> 
}

export default Gallery;