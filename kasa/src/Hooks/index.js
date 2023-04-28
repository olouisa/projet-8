import {useState } from "react";
import Data from "../Lists/fichierJSON.json";

export function useLogement() {
    const [logement, setLogement] = useState(Data);

       return {
        logement
    }

};

export function useOneLogement(id) {
      const [logement, setLogement] = useState(Data.find((l) => l.id == id));

       return {
        logement
    }


}



