
import useData from "./useData";

export interface Ganres {
    id: number;
    name: string;
  }
 const useGenres = () => useData<Ganres>("/genres")

export default useGenres
