import "./App.css";
import { readImage } from "@tauri-apps/plugin-clipboard-manager";

function App() {
  return (
    <main className="container">
      <button onClick={async () => {
        const image = await readImage()
      }}>Greet</button>
    </main>
  );
}

export default App;
