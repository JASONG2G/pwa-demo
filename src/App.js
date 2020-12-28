import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://orangevalleycaa.org/api/videos"
      ).then((response) => response.json());
      setData(result);
    };
    fetchData();
  }, []); // second argument means we want to fetch this data only when the component mounts
  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>
      {data.map((video) => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
        </div>
      ))}
    </div>
  );
}

export default App;
