import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      {/* /* NavBar */} 

      <Navbar />

      {/* Banner */}
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Treding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rating" fetchUrl={requests.fetchTopRating} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
