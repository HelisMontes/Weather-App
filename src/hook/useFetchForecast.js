import { useEffect, useState } from "react";

export const useFetchForecast = () => {
  const APP_ID = '366c702cc6505ba2ca508a46c7d8552b';
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=current,minutely,hourly&units=metric&appid=${APP_ID}`;
   
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = new XMLHttpRequest();
    response.onreadystatechange = () => {
      if (response.readyState === 4 && response.status === 200)
      setData(JSON.parse(response.responseText ) );
    }
    response.open("GET", URL, true); // true for asynchronous 
    response.send(null);
  }, [URL]);
  
  if(data?.daily){
    return data.daily.slice(1,4);
  }
  return data
}
