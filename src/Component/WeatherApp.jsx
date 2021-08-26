import React, { useEffect, useState } from 'react';

const WeatherApp = () => {
    const [city, setCity] = useState(null);
    const [search,setSearch]= useState("Brisbane");

    useEffect(()=>{
        const fetchAPI= async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d8e5489d437bd8df3a62511e565503ad`
            const response =await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        };
        fetchAPI();
    },[search])

    const inputEvent = (event) => {
        setSearch(event.target.value);
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1><i class="fas fa-cloud"></i> Weather <i class="fas fa-temperature-low"></i></h1>
                    <input name='search' onChange={inputEvent} placeholder='Enter the city name...' autoComplete='off' />
                    {!city?(
                        <p>No Data Found</p>
                    ):(
                        <div className="temp">
                        <h3 className="city"><i className="fas fa-street-view fa-2x"></i> {search} </h3>
                        <h1>{city.temp} <sup>o</sup>C </h1>
                        <small>feels like {city.feels_like} <sup>o</sup>C </small><br/>
                        <small>Max Temp: {city.temp_max} <sup>o</sup>C | Min Temp:{city.temp_min} <sup>o</sup>C </small>
                        </div>
                    )
                    }
                    
                   
                    <svg viewBox="0 0 1320 400">
                        <path fill-opacity="0.7" d="
                                M0,192
                                C220,100,440,100,660,192
                                C880,290,1100,290,1320,192
                                L1320 500
                                L0 500
                                " fill="#DFFAFB" />
                            <path fill-opacity="0.7" d="
                                M0,192
                                C220,100,440,100,660,192
                                C880,290,1100,290,1320,192
                                L1320 500
                                L0 500
                                " fill="#BFE9EA" />
                            <path fill-opacity="0.7" d="
                                M0,192
                                C220,100,440,100,660,192
                                C880,290,1100,290,1320,192
                                L1320 500
                                L0 500
                                " fill="#D6EBEC" />
                                                    
                    </svg>




                </div>
            </div>
        </>
    )

}
export default WeatherApp;