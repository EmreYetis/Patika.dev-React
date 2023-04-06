import { useRef } from "react";
import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { city, setCity, weatherData } = useWeather();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setCity(inputRef.current.value);
    setTimeout(() => {
      inputRef.current.value = "";
    }, 500);
  };

  return (
    <div>
      <form className="my-10 font-bold" onSubmit={handleSubmit}>
        <input
          className="w-100 h-10 rounded mr-5  text-center "
          type="text"
          placeholder="Şehir adını giriniz."
          ref={inputRef}
        />
        <button className="border-solid bg-slate-300 w-20 h-8" type="submit">
          Search
        </button>
      </form>

      <div>
        <h2 className="font-bold text-2xl text-center mb-5">
          {city.toUpperCase()}
        </h2>
        <div className="container mx-auto flex">
          {weatherData?.map((a) => (
            <div className="card col-span-3 m-5 border bg-slate-300 flex justify-center text-center flex-col rounded-md font-bold">
              <h6 className="text-xl">
                {new Date(a.dt_txt).toLocaleDateString("tr-TR", {
                  weekday: "long",
                })}
              </h6>
              <img
                src={`http://openweathermap.org/img/wn/${a.weather[0].icon}.png`}
                alt=""
              />

              <h5>{a.weather[0].description}</h5>

              <h5>Sıcaklık: {a.main.temp} °C</h5>
              <h6>Max: {a.main.temp_max} °C</h6>
              <h6>Min: {a.main.temp_min} °C</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Weather;
