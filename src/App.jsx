import "./App.css";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import Routes from "./Components/Routes/Routes";

function App() {
  return (
    <>
      <header>
        <Routes></Routes>
      </header>
      <main>
        <PriceOptions></PriceOptions>
      </main>
    </>
  );
}

export default App;
