import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/blogs.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function IceBreaker(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="RIPAN HALDER"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/ripan-halder-cover.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>A Star From Nowhere!</h1>
              <h4>
                This was my P1 Ice Breaker Speech at Infosys Toastmasters, Mangalore. Mentored by Shivna Tiwari
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>

<div className="blogStyle">
        <span>&emsp;
          <p className={classes.blog}>&emsp;&emsp;The year – 1994, Nelson Mandela becomes the first black president of South Africa. Sushmita Sen is crowned as the first Indian miss universe and Aishwarya Rai crowned as the miss world. When all these remarkable events were happening across the world, the Halder family also witnessed the birth of a star.
          </p>
          &emsp;
          <p className={classes.blog}>&emsp;&emsp;Dear fellow toastmasters and guests, I’m toastmaster Ripan Anadi Halder, hailing from Shrirampur, a city near Shirdi and hometown of the most successful Indian fast bowler Zaheer Khan. It gives me immense pleasure to stand in front of you and tell you my story today.
          </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;First things first! ‘Ripan’ – Doesn’t the name sound non-Indian and totally out of the world? So does it for many of my friends too, and whenever someone asks me more about it, this is the story I tell them. I was christened by a Hindu priest. I often wondered why did he give me a British name, until I came to Std IX. One fine day, we were having our usual dull, monotonous history lecture wherein I sat feeling all drowsy, heavy-eyed and was just nodding my head. Suddenly I heard my teacher saying ‘Lord Ripan’ and this broke off my slumber. According to my teacher ‘Lord Ripan’ was the most compassionate viceroy that England had ever sent to India. So from that day onwards I started feeling very proud of my name.
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;Now let me introduce my family to you which comprises my caring and motivating father, a railway station master, has always given me the freedom to live my life on my own. In contrast to the cool and calm head of the family that we have, the first lady of the house, my Mom has always been the real ‘Narayan Shankar’ whenever it came to our studies. No wonder, a school teacher, a Bengali lady and top of that my Mom. “Shanto bosho are boi podho”, meaning “Sit quiet and study” has always been the most heard dialogue of my house and finally coming to my amiable little sister is so make-up centric that even if she goes out, she does a half-an-hour make-up for it.
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;Since my childhood, I was a very studious kid, all thanks to my ‘Narayan Shankar’ mother. Once I stepped out of my ‘Gurukul’ akin home and entered college, I was a free bird and rarely opened my books, apart from the mandatory one night before exam studies that every engineering student religiously does. How can I speak of my engineering days and not mention my monstorly engineering friends. I’m very lucky to get good friends at all times in my life, because it’s rightly said, “Friends are easy to find, but true friends are truly rare.” Thankfully, I’ve a group called ‘Beshtttaaa Buddies’. You’ll find the world’s most unique characters in it bonding with each other with unconditional friendship. Innocent, caring, dramebazz, hilarious, faithful, talented, fabulous one-of-a-kind each.
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;Talking about my hobbies. I love ‘gaming’! From Fifa07 to Fifa15, series of GTA, Assassins Creed, Batman, Far Cry, Battlefield, Call of Duty, Counter Strike and many more, I’ve played them all and have had high world rankings in quite few of them. 
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    Apart from gaming, I like to cook, go trekking and watch movies and loads of TV serials. We ‘Beshtttaaa Buddies’ had a lot of ‘dabba-parties’ together wherein their master chef cooked ‘Chicken Gravy and biryanis’, ‘Fish fry’s’. The kind of awesome responses I got made me love cooking a lot. I love watching and playing cricket, football, table-tennis, badminton and recently have developed a love for billiards too.
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    I’m a very passionate person and quite emotional and I love to explore new things. I came to Infosys toastmasters club as soon as I heard about it. Today when I’ve already been a part of it I believe I couldn’t have gotten a better platform to get over the little stage fear I have. And of course, meet such wonderful people to share their stories. So here I am to share my story too. I hope you all will enjoy my company.
    </p><br /></span>
    </div>


      </div>
      <Footer />
    </div>
  );
}
