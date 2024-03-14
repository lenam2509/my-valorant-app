import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <h1 className="animate-pulse text-4xl text-center mt-10 text-transparent bg-gradient-to-r from-red-300 to-red-500 bg-clip-text">
          Welcome to Valorant Info
        </h1>
        <p className="text-white max-w-[500px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          voluptates, quas, est, quibusdam, quae quia soluta quod voluptatem
          laborum quidem nesciunt autem. Quisquam, voluptatibus, eaque, quidem
          quod quae voluptatem quos ab.
        </p>
      </div>
    </>
  );
}

export default App;
