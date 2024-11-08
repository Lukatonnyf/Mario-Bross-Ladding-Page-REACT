import Home from "./components/home.jsx";

import backgroundVideo from "./assets/background-video.mp4";

import "./App.css";

function App() {
  return (
    <>
      <Home />

      <div className="background">
        <video autoPlay src={backgroundVideo}></video>
      </div>
    </>
  );
}

export default App;
