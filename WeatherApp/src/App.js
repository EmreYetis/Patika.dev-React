import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="bg-red-100 flex justify-center">
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
