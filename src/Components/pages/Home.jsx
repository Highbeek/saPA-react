import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import "./Home.css";
import { useState, useEffect } from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
// import yourself from './yourself.png'
// import friends from './friends.png'
// import charity from './charity (1).png'

const Home = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.pexels.com/v1/search?query=blackkid",
        {
          headers: {
            Authorization:
              "563492ad6f9170000100000125f6d5d52d1f432b83f152596f4ce9a4",
          },
        }
      );
      const data = await response.json();
      setPhotos(data.photos);
      if (data.photos[imageIndex]) {
        setImageUrl(data.photos[imageIndex].src.large);
      }
    };

    fetchData();
    console.log("before interval: ", imageIndex, photos);

    const intervalId = setInterval(() => {
      setImageIndex((index) => (index + 1) % photos.length);
    }, 20000);
    console.log("after interval: ", imageIndex, photos);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageIndex]);

  return (
    <div>
      <section className="home__hero">
        <div className="motto">
          <div className="motto__head">
            <h1>
              Give <br />
              Happiness <br />
              With Every <span className="motto__span">Naira</span>
            </h1>
            <h4>
              Give Help, Show Kindness, <br />
              Put a Smile on a Face.
            </h4>
          </div>
          <div>
            <button className="btn download__btn">
              {<AppleIcon />} Download
            </button>
            <button className="btn download__btn">
              {" "}
              {<AppleIcon />}Download
            </button>
          </div>
        </div>
        <div motto__img>
          {imageUrl ? (
            <img className="img-fluid w-50" src={imageUrl} alt="Random" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
      <section className="home__about">
        <div className="home__about2">
          <p>What to expect</p>
          <h2>Getting help on saPA takes just a few minutes</h2>
        </div>
        <div className="home__ul">
          <ul>
            <li className="home__items a">
              <strong>1</strong>
              <h3>Begin</h3>
              <p>Start with your name and location.</p>
            </li>
            <li className="home__items b">
              <strong>2</strong>
              <h3>Yarn your tori</h3>
              <p>Let our template guide you</p>
            </li>
            <li className="home__items c">
              <strong>3</strong>
              <h3>Share with the world</h3>
              <p>Soro Soke and get help.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="home__action">
        <div className="home__action1">
          <h1>end saPA for ...</h1>
        </div>
        <div className="cards">
          <div className="home__card">
            <div class="card-content action2">
              {/* <img src={yourself} alt="yourself" /> */}
              <h3 class="card-title">Yourself</h3>
              {<ArrowCircleRightOutlinedIcon />}
            </div>
            <div class="card-content action3">
              {/* <img src={friends} alt="yourself" /> */}
              <h3 class="card-title">Paddy</h3>
              {<ArrowCircleRightOutlinedIcon />}
            </div>
            <div class="card-content action4">
              {/* <img src={charity} alt="yourself" /> */}
              <h3 class="card-title">Do Giveaway</h3>
              {<ArrowCircleRightOutlinedIcon />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
