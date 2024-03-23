import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

export interface Ganres {
    id: number;
    name: string;
  }
  interface GanresResponse {
    count: number;
    results: Ganres[];
  }
 const useGenres = () => {
    const [Ganres, setGanres] = useState<Ganres[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] =  useState(false)
  
    useEffect(() => {
      setLoading(true)
      apiClient
        .get<GanresResponse>("/genres")
        .then((res) => {
          setGanres(res.data.results);
          console.log("Ganres response-->", res.data.results)
          setLoading(false)
        })
        .catch((err: AxiosError) => {
          setError(err.message);
          setLoading(false)
          console.log("Error fetching ganres")
        });
    }, []);

    return {Ganres, error, isLoading}
}

export default useGenres
