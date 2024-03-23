import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";


  interface dataResponse<T> {
    count: number;
    results: T[];
  } 
 const useData = <T>(endpoint: string, requestConfig?:AxiosRequestConfig, deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] =  useState(false)
    console.log('data:',data)
    useEffect(() => {
      const controller = new AbortController()
      setLoading(true)
      apiClient
        .get<dataResponse<T>>(endpoint,{signal:controller.signal, ...requestConfig})
        .then((res) => {
            setData(res.data.results);
          setLoading(false)
        })
        .catch((err: AxiosError) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false)
        });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return {data, error, isLoading}
}

export default useData
