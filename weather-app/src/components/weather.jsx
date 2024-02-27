import { useEffect, useState } from "react";
import Search from "./search";

function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    async function fetchData(search) {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=id`);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData("Mumbai");
    }, []);

    function handleSearch() {
        fetchData(search);
    }

    function formatTemperature(temp) {
        return (temp - 273.15).toFixed(2) + " °C";
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString("en-us", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
    
    return (
        <div className="Weather">
            <h2>Weather-App</h2>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {data && (
                        <div className="data">
                            <h2 className="country">{data.name} ,<span>{data?.sys?.country}</span></h2>
                            <p className="date">{getCurrentDate()}</p>
                            <p className="temparature">{formatTemperature(data.main.temp)}</p>
                            <div className="otherinfo">
                                <div className="Weather">
                                    <p>{data.weather[0].description}</p>
                                    <p>Weather</p>
                                </div>
                                <div className="Humidity">
                                    <p>{data.main.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                                <div className="Wind-Speed">
                                    <p>{data.wind.speed} m/s</p>
                                    <p>Wind-Speed</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Weather;
