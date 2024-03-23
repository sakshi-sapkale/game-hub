import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";


  interface dataResponse<T> {
    count: number;
    results: T[];
  } 
 const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] =  useState(false)
  
    useEffect(() => {
      setLoading(true)
      apiClient
        .get<dataResponse<T>>(endpoint)
        .then((res) => {
            setData(res.data.results);
          console.log("Ganres response-->", res.data.results)
          setLoading(false)
        })
        .catch((err: AxiosError) => {
          setError(err.message);
          setLoading(false)
          console.log("Error fetching ganres")
        });
    }, []);

    return {data, error, isLoading}
}

export default useData
