import { useEffect, useState } from "react";

export const useFetch = (city) => {
  const APP_ID = '366c702cc6505ba2ca508a46c7d8552b';
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APP_ID}`;
   
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const response = new XMLHttpRequest();
    response.onreadystatechange = () => {
      if (response.readyState === 4 && response.status === 200)
      setData(JSON.parse(response.responseText ) );
      setLoading(false)
    }
    response.open("GET", URL, true); // true for asynchronous 
    response.send(null);
  }, [URL]);

    return {data, loading};
}