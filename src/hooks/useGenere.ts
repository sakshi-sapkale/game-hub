
import useData from "./useData";

export interface Ganres {
    id: number;
    name: string;
    image_background :string
  }
 const useGenres = () => useData<Ganres>("/genres")

export default useGenres
