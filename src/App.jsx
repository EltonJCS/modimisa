import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Customizer />
        <Footer />
      </main>
    </>
  );
}

export default App;
