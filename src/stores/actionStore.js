import { globalStore } from "./adminStore";
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
};
