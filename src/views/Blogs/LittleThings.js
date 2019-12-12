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
import LiveProgressBar from "components/CustomLinearProgress/LiveProgressBar.js";

import Quote from "components/Typography/Quote.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LittleThings(props) {
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
              <h1 className={classes.title}>Little Things</h1>
              <h4>
                This was my CS-2 Speech at Infosys Toastmasters, Mangalore. Mentored by Shivna Tiwari & Sagnik Biswas
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>

<LiveProgressBar /><div className="blogStyle">
        <span>&emsp;
          <p className={classes.blog}>&emsp;&emsp;There was an old man playing harmonium just outside the Chandan theatre for an hour and then another hour outside Four Bungalows area 
          in Mumbai, India. He sang almost 25 songs in these places. He was quite unassuming. He was wearing shoddy clothes. 
          The funny thing is that many people walked past and very few people noticed him at first. 
          But soon people started connecting to the melodious voice of his. Within an hour he had accrued many people around him and 
          that’s a good crowd for an old busker, but the fascinating thing was the old busker had dressed up to conduct a social experiment and he 
          was none other than the legendary Sonu Nigam, a mogul singer of India.</p>
          &emsp;
          <p className={classes.blog}>&emsp;&emsp;Are we not able to observe talent, observe beauty? Do we miss the amazing things in life when we see it unexpectedly? Is it because we don’t see them on 
    television or on YouTube? Or is it because these things are not presented in a certain format that our mind can conceive? 
    Do we need it to be presented in a box as a gift to understand its beauty? Or do we need to observe only the big things 
    happening in our life that we don’t observe the small beautiful things happening daily?</p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;As a kid, I had lots of tantrums when it came to food. “Aami ae khabo na, aamake mach chai”, which meant “I just want fish and nothing else to eat” 
    in Bengali language.  My mother always cooked twice if I didn’t like the food. But now when I eat in Shree Sai or Palki 
    (food courts at my present company, Infosys) with each morsel, I miss even my Mom’s mediocre dishes. Fighting with sister, routine drop to school 
    with dad on a bike, long talks with friends over the phone and many more. All these small routine things were so beautiful that, 
    I didn’t realize I’ll miss these things the most once I’m out of it.</p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;Albert Einstein once said, “Look deep into nature, and then you’ll understand things better.”</p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;Many of us wanted to pursue their dreams or hobbies, but are now stuck in the matrix of life. Somebody dreamt of acting, but don’t have time for it 
    because of his work life. Somebody loves dancing, but performing on stage scares her. Somebody wants to be Mr. India but 
    doesn’t have time for a gym. Life is not to be taken seriously, no one makes it out alive anyway.</p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;Follow your instincts, intuitions friends. The more you’ll tune out of the comfortable space you are in, the more you can tune in your instincts. 
    Mind it, people, big egos have small ears. There is beauty in everything, spark in everything, energy in everything, happiness in everything, 
    life in everything, but you don’t have the eyes to see it, perceive it. Let’s become more attentive, more conscious and develop new ways of perception. 
    Become a better observer of reality rather than a mere participant. </p></span>
    <span><Quote
                text="&quot;WHAT is this life if, full of care, we have no time to stand and stare?
                No time to see, when woods we pass, where squirrels hide their nuts in grass
                No time to see, in broad daylight, streams full of stars, like skies at night
                A poor life this if, full of care, we have no time to stand and stare.&quot;"
                author=" William Henry Davies, Poet and Writer"
              /></span></div>


      </div>
      <Footer />
    </div>
  );
}
