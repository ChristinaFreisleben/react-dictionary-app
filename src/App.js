import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Supersmart Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/ChristinaFreisleben/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Christina Freisleben
        </footer>
      </div>
    </div>
  );
}

export default App;
