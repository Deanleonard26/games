import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
import playstation from '../img/playstation.svg'
import nintendo from '../img/nintendo.svg'
import xbox from '../img/xbox.svg'
import steam from '../img/steam.svg'
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// import starEmpty from '../img/star-empty.png';
// import starFull from '../img/star-full.png'


const GameDetail = ({ pathId}) => {
  const history = useHistory();
  const { screen, game, isLoading } = useSelector((state) => state.detail);


  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // // Get Stars for review section
  // const getStars = () => []
  // const stars = [];
  // const rating = Math.floor(game.rating);
  // for (let i = 1; i <= 5; i++){
  //   if(i <= rating) {
  //     stars.push(<img src={starFull} alt="star" key={i}></img>)
  //   } else {
  //     stars.push(<img src={starEmpty} alt="star" key={i}></img>)
  //   }
  //   return stars
  // }

  // Get Platform Images
  const getPlatform = (platform) => {
    if (platform.includes("PlayStation 4")) {
      return playstation;
    } else if (platform.includes("Xbox ")) {
      return xbox;
    } else if (platform === "PC") {
      return steam;
    } else if (platform === "Nintendo Switch") {
      return nintendo;
    } else if (platform.includes("OS")) {
      return apple;
    } else {
      return gamepad;
    }
  };

  //Data
  return (
    <>
      {!isLoading && (
        <CardShadow  className="shadow" onClick={exitDetailHander}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}/5</p>
                {/* {getStars} */}
              </div>
              <Info>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img key={data.platform.id} src={getPlatform(data.platform.name)} alt='name'>
                    </img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <motion.img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index:10;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }

  @media (max-width: 500px) {
    padding: .5rem;
    margin:0;

    img {
    width: 100%;
    margin:0;
    padding:0;
  }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width:2rem;
    height:2rem;
    display:inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content:space-between;
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;

  img {
    margin-left: 1rem;
    width:10%;
  }

  @media (max-width:600px) {
    width:100%;
    flex-direction:column;
    justify-content:right;
  flex-wrap:wrap;

  img {
    margin: 5px;
    width:10px;
  }
}
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }

  @media (max-width: 400px) {
    margin-top:20px;
  
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;

  @media (max-width: 400px) {
    margin: 20px;

    p {
      font-size:10px;
    }
  
  }
`;

export default GameDetail;
