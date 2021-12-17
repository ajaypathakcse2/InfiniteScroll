import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [photos]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2) {
      setLoading(true);
      setTimeout(getPhotos, 1000);
    }
  };

  const getPhotos = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_page=0&_limit=10`)
      .then((res) => {
        setPhotos([...photos, ...res?.data]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", minHeight: "101vh" }}>
      <div style={{ backgroundColor: "#ccc", padding: "20px", display: "flex", justifyContent: "flex-end" }}>
        <button onClick={() => handleLogout()}>Log out</button>
      </div>
      <div style={{ backgroundColor: "white", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
        {photos.map((user, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <img src={user.url} height="100px" width="200px" alt="img" />
          </div>
        ))}
      </div>
      {loading && (
        <dev style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
          <span>Loading..........</span>
        </dev>
      )}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={{ backgroundColor: "#aaa", padding: "20px" }}>Footer...</div>
      </div>
    </div>
  );
};

export default Home;
