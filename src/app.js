import "./styles/app.css";
import Header from "./components/header.js";
import NavLeftMenu from "./components/navLeftMenu";
import Main from "./components/mainComponents/main";
import NavEmailToolbar from "./components/mainComponents/navEmailToolbar";
import Article from "./components/mainComponents/article";

function App() {
  return (
    <div className="app">
      <Header />
      <NavLeftMenu />
      <Main />
    </div>
  );
}

export default App;
