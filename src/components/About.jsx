import React from "react";
import { makeStyles } from "@mui/styles";
import snake_front from "../images/snake_front.jpg";
import snake_side from "../images/snake_side.jpg";
import snake_full from "../images/snake_full.jpg";
import nk65 from "../images/nk65.jpg";
import mode80 from "../images/mode80.jpg";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#242c38",
    color: "white",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    height: "100%",
  },
  text: {
    margin: "auto",
    width: "50%",
    fontSize: 20,
    paddingBottom: 50,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <h1>About Me</h1>
      <p className={classes.text}>
        Hello there and welcome to my portfolio website! My name is Eric Nguyen
        and I am a 4th-year student at University of California, Irvine studying
        Computer Science. I am also currently a software engineering intern at
        Ardent Labs, a company that is local to UCI in University Town Center.
        My hobbies include watching anime, playing games, and making keyboards.
        I have a family dog but also my own pet, a corn snake.
      </p>
      <h1>My Corn Snake - Citrus</h1>
      <img src={snake_front} alt="red corn snake front face" width="25%"></img>
      <img src={snake_side} alt="red corn snake side face" width="25%"></img>
      <img src={snake_full} alt="red corn snake full body" width="40%"></img>
      <p className={classes.text}>
        Her coloration or "morph" is called motley where she has red scales on
        top and sides of her body with orange circles. The underbelly of this
        morph is white with some red scales. I've had her for almost 3 and a
        quarter years now and she is now considered an adult. I got her when she
        was just 6 months old from another individual who was selling her on
        craigslist because they could no longer keep her. I took her in and have
        not regretted it once although my parents are scared to death.
      </p>
      <h1>Mechanical Keyboards</h1>
      <img src={nk65} alt="nk65 keyboard" width="45%"></img>
      <img src={mode80} alt="mode 80 keyboard" width="45%"></img>
      <p className={classes.text}>
        The left keyboard is called the NK65 Aluminum Edition and the right
        keyboard is called the Mode 80 with Dart colorway. The NK65 was my
        first, entry level keyboard into the hobby and my Mode 80 was my second,
        enthusiast level board that is now my daily driver. To spare you the
        details, there is a whole other world out there besides your average
        Dell membrane and clicky gamer keyboards. You can customize a keyboard
        to tailor your preferences in what you want to hear and how your fingers
        feel each time you press on a key.
      </p>
      <h1>MOBA - League of Legends</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KBFpsY79TPs"
        title="naayil aatrox montage"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p className={classes.text}>
        League of Legends is a Multiplayer Online Battle Area (MOBA for short)
        where you go against other people playing a certain character on a set
        map. It is not my favorite game but one I keep going back to. I usually
        play a character called Aatrox (pronounced ay-trox) who regains health
        from doing damage to other characters. The player in this montage is not
        me nor the individual who posted this video but by Naayil who is known
        to be the best player for this character.
      </p>
      <h1>That Time I Got Reincarnated as a Slime</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GhGTc6p8sg0"
        title="slime isekai anime opening"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p className={classes.text}>
        Tensei shitara Slime Datta Ken is the Japanese name for this anime and
        this is my most liked anime at the moment. It's main genre is called
        isekai which essentially means "another world" in Japanese. This is a
        veru popular anime trope that follows a story where the main character
        is normal human being on Earth and then is suddently transported into
        another world. Usually, this other world has some form of superpowers or
        magic that governs its world and the main character slowly tries to
        adapt to these new surroundings.
      </p>
    </div>
  );
}
