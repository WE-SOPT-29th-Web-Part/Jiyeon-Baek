import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TodosContainer from "./components/TodosContainer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <TodosContainer />
      <Footer />
    </>
  );
}

export default App;
