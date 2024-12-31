import { globalStore, imageStore } from "./adminStore";
import { supabase } from "../lib/supabase";

export const loadGlobalStore = async (filename = 'global-store.json') => {

    try {
        // console.log('Début du chargement du state...');
        // Charger le dernier state sauvegardé (par exemple, le plus récent)
        // Télécharger le fichier JSON depuis le bucket 'state'
        const { data: file, error } = await supabase.storage
            .from('state')
            .download(`${filename}?cache-buster=${Date.now()}`);

        if (error) {
            // console.error('Erreur lors du chargement :', error.message);
            return false;
        }

        if (file instanceof Blob) {
            // Lire le contenu du Blob en texte
            const text = await file.text();
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

    // let e = [{"section":"Nos Services","layout":0,"records":[{"title":"CONSTRUCTIONS DE BÂTIMENTS","text":"Nous réalisons des projets de construction de bâtiments, allant des structures résidentielles aux complexes commerciaux. De la fondation à la finition, nous garantissons des constructions solides et conformes aux normes les plus élevées en matière de qualité et de sécurité.","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735294423679_image1.png"},{"title":"CONCEPTIONS ARCHITECTURALES","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735295447556_image12.jpg","text":"Nous offrons des services complets d'architecture, de la conception initiale à la réalisation des plans détaillés. Nos solutions architecturales sont innovantes, esthétiques et respectueuses des contraintes techniques et environnementales."},{"title":"DESIGN DE MOBILIER","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735295623168_image11.jpg","text":"Nous concevons et fabriquons du mobilier sur mesure, alliant esthétique et fonctionnalité. Nos créations visent à répondre aux besoins spécifiques de chaque espace, en intégrant des matériaux durables et un savoir-faire artisanal."},{"title":"DESIGN D'INTÉRIEUR","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735295653288_image9.jpg","text":"Nous proposons des services de design d'intérieur sur mesure, en transformant vos espaces pour refléter votre style et vos besoins. Nous optimisons l'agencement, les matériaux et les couleurs pour créer des environnements à la fois fonctionnel et élégant."},{"title":"INSTALLATION DE PANNEAUX SOLAIRE","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735296235059_image5.jpg","text":"Notre service d'installation de panneaux solaires vous offre une solution durable pour produire votre propre énergie. Nous gérons tout le processus, de l'évaluation à l'installation, en garantissant un rendement optimal. Profiter de l'économie faite sur vos factures d'énergie tout en contribuant à un avenir plus vert. Faites le choix de l'énergie solaire dès aujourd'hui !"},{"title":"MAISONS ÉCOLOGIQUES ET AUTONOMES","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735296318972_image8.jpg","text":"Nous construisons des maisons écologiques autonomes, combinant confort moderne et respect de l'environnement. Utilisant des matériaux durables et des technologies innovantes, nos maisons sont conçues pour maximiser l'efficacité énergétique. Profitez d'un habitat autosuffisant en énergie qui préserve notre planète."},{"title":"CONTRUCTIONS DE FORAGES","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735297028207_image13.jpg","text":"Notre service de construction de forages garantit un accès fiable à l'eau potable pour vos besoins résidentiels ou agricoles. Nous utilisons des techniques modernes pour créer des forages adaptés et durables. Notre équipe s'assure d'une installation rapide et sécurisée, vous offrant ainsi une source d'eau saine et pérenne, essentielle pour votre quotidien."}]},{"section":"Nos Projets","layout":2,"records":[{"title":"Construction d'une villa R+1 avec piscine et terrain de basket – Nsimalen, Cameroun","text":"Ce projet à Nsimalen comprend une villa R+1 avec 6 chambres, 2 salons spacieux et une cuisine moderne. En plus des espaces de vie confortables, nous avons intégré une piscine privée et un terrain de basket pour les loisirs. Ce projet allie fonctionnalité, confort et élégance, répondant aux attentes élevées du client en termes de qualité et d'aménagement.","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735321168750_image7.jpg"},{"title":"Concours d'architecture : ShowRoom de Mercedes","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735298424834_image1.png","text":"Nous avons conçu une showroom moderne pour Mercedes, offrant un espace d’exposition élégant et fonctionnel. Le bâtiment met en valeur les véhicules de la marque grâce à une architecture épurée et des espaces optimisés. Le projet intègre des zones dédiées aux clients, avec un agencement raffiné, répondant aux standards internationaux de la marque en matière de qualité et d’esthétique."},{"title":"Etude : Villa R+1 avec 4 chambres et garage – Yaoundé, Cameroun","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735298577436_image12.jpg","text":"Ce projet résidentiel R+1 à Yaoundé comprend 4 chambres spacieuses, un garage privé et une terrasse exploitable, idéale pour les activités extérieures. Nous avons conçu cet espace pour allier confort et praticité, avec des finitions modernes et des agencements optimisés. La terrasse offre une vue dégagée et peut être utilisée pour diverses activités, ajoutant une valeur supplémentaire à la propriété."}]},{"section":"Témoignages","layout":1,"records":[{"title":"","text":"J'ai fait appel à cette entreprise pour la construction d'un meublé à Bastos, Cameroun, et j'ai été impressionné par leur rapidité d'exécution. Non seulement le projet a été livré dans les délais, mais la qualité du travail était également irréprochable. Leur équipe a fait preuve de professionnalisme tout au long du processus. Je recommande vivement leurs services pour leur efficacité et leur sérieux.","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735297171484_image4.png"},{"title":"","text":"Résidant à Dubaï, j'ai fait appel à cette entreprise lors de mon retour au Cameroun pour la construction d'un immeuble R+2 à usage locatif avec terrasse d'exploitation. Leur équipe a fait preuve d'un grand professionnalisme et d'une écoute attentive. Le projet a été mené avec rigueur et le résultat est au-delà de mes attentes. Je recommande vivement leurs services pour leur qualité et leur efficacité.","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735298377678_image6.jpg"},{"title":"","text":"Après un projet mal réalisé par un autre prestataire pour mon R+1 à usage d'habitation avec terrasse, j'ai sollicité cette entreprise. Leur professionnalisme et leur maîtrise m'ont impressionné. Ils ont repris le projet avec soin et le résultat dépasse largement mes attentes. La qualité du travail est remarquable, tant sur le plan technique qu'esthétique.","image":"https://sbgppqdhbazcvbueykgl.supabase.co/storage/v1/object/public/images/1735298404343_image3.jpg"}]}]
    // globalStore.set(e);
};

export const loadGallery = async (filename = 'gallery.json') => { 

    try {
        console.log('Début du chargement du state...');
        // Charger le dernier state sauvegardé (par exemple, le plus récent)
        // Télécharger le fichier JSON depuis le bucket 'state'
        const { data: file, error } = await supabase.storage
            .from('state')
            .download(filename);

        if (error) {
            console.error('Erreur lors du chargement :', error.message);
            return false;
        }

        if (file instanceof Blob) {
            // Lire le contenu du Blob en texte
            const text = await file.text();

            // Analyser le texte comme du JSON
            const loadedStore = JSON.parse(text);

            // Mettre à jour le globalStore avec les données téléchargées
            imageStore.set(loadedStore);
    
            console.log('GlobalStore chargé avec succès :', loadedStore);
            return true;
        } else {
                console.error('Le fichier téléchargé n\'est pas un Blob');
            return false;
        }

    } catch (error) {
        console.error('Erreur :', error);
        return false;
    }

}