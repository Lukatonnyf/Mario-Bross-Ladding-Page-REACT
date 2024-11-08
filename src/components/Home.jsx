import "./home.css";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

// IMAGES IMPORT
import logoCap from "../assets/imgs/logo-cap.png";
import marioMovieCartaz from "../assets/imgs/logo-movie.png";
import marioELuigi from "../assets/imgs/mario-and-luigi.png";

// ICONS IMPORT
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";

function home() {
  function trailer() {}

  function ingresso() {}

  //MARGIO AND LUIGI
  useLayoutEffect(() => {
    gsap.to(".mario-e-luigi", {
      y: 0,
      opacity: 1,
    });
  }, []);

  // CARTAS MOVIE
  useLayoutEffect(() => {
    gsap.to(".image-cartas", {
      y: 0,
      opacity: 1,
    });
  }, []);

  // ABOUT MOVIE TEXT
  useLayoutEffect(() => {
    gsap.to(".h1-txt-aboutmovie", {
      y: 0,
      opacity: 1,
    });
  }, []);

  // BTNS ANIMATION
  useLayoutEffect(() => {
    gsap.to(".btn-trailer", {
      x: 0,
      opacity: 1,
    });
  }, []);

  useLayoutEffect(() => {
    gsap.to(".btn-ingresso", {
      x: 0,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <header>
        <div className="header-navgation">
          <div className="rotes-pages">
            <img src={logoCap} alt="" className="logo" />
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">STORY</a>
              </li>
              <li>
                <a href="">WALLPAPERS</a>
              </li>
              <li>
                <a href="">TRAILER</a>
              </li>
            </ul>
            <div className="navigation-links"></div>
          </div>

          <div className="navlinks">
            {/* BOX FACEBOOK */}
            <div className="box-icon facebook">
              <IoLogoFacebook />
            </div>
            {/* BOX INSTAGRAM*/}
            <div className="box-icon instagram">
              <IoLogoInstagram />
            </div>
            {/* BOX TIKTOK */}
            <div className="box-icon tiktok">
              <IoLogoTiktok />
            </div>
            {/* BOX TWITTER */}
            <div className="box-icon twitter">
              <IoLogoTwitter />
            </div>
            {/* BOX YOTUBE */}
            <div className="box-icon yotube">
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        {/* aside */}
        <aside>
          <img src={marioMovieCartaz} alt="" className="image-cartas" />

          <div className="about-movie-txt">
            <h1 className="h1-txt-aboutmovie">
              Um dia, Mario e Luigi vão para no reino dos cogumelos, governado
              pela <br /> Princesa Peach, mas ameaçado pelo rei dos Koopas,
              Bowser, que vai fazer de <br /> tudo para conseguir reinar todos
              os lugares. É então quando Luigi é raptado <br /> por Bowser e o
              usa para procurar Mario, o único capaz de deter o Koopa e <br />
              reestabelexcer a paz.
            </h1>
          </div>

          <div className="nav-btns">
            <button className="btn-trailer" onClick={trailer()}>
              assistir trailer
            </button>

            <button className="btn-ingresso" onClick={ingresso()}>
              comprar ingresso
            </button>
          </div>
        </aside>
        {/* main */}
        <main>
          <img className="mario-e-luigi" src={marioELuigi} />
        </main>
      </div>
    </>
  );
}

export default home;
