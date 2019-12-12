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

export default function CycleOfLoveAndLoatheWithMangalore(props) {
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
              <h1 className={classes.title}>Cycle Of Love And Loathe With Mangalore</h1>
              <h4>
                This was my P3 Speech at Infosys Toastmasters, Mangalore. Mentored by Sagnik Biswas
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>

<div className="blogStyle">
        <span>&emsp;
          <p className={classes.blog}>&emsp;&emsp;
          After the end of an equally rigorous and pleasing 5 months in the elegant Mysore training campus, I was waiting for the DC allocation. All my friends and I were praying for Pune. If not Pune, at least Hyderabad. Why Hyderabad? Well it’s near to Pune. We were praying not to get Chennai because all the previous .NET batches were allocated to Chennai.
          </p>
          &emsp;
          <p className={classes.blog}>&emsp;&emsp;
          Finally after a long wait, the day arrives. My batch was called upon by our HR for some meeting. We were both excited and trembling about this unique meet with HR just before our allocation. In a packed room of all .Net trainees, comes the HR, asks security to close the door and then she starts, “Forget about your preferred allocations, you won’t get allocated this time.”
          </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    “Good evening dear toastmasters and guests,” I wish the HR had told so pleasantly.
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    We all looked at each other in confusion and fear by the havoc created by this HR. She continued, “Many of you did not attend the last session of your training. It is fine but your lecturer caught many proxies and I have that proxy list with me. Whoever did these proxies have to reveal themselves now or entire batch has to face the consequences.” Between all these messes, I was feeling bit relieved since I had nothing to do with this. And soon few folks started to whisper something. They started sending their usernames and passwords to their friends. I wondered why!
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    After few minutes a boy got irked and said his neighbor, “Mangalore!” I heard this and I asked him in fear, “Why Mangalore?” Before he could reply many trainees started whispering the word Mangalore and Hyderabad. I became more tensed and started praying. That meeting went for just half an hour but it felt like eternity to me and few trainees already knew their allocations. As soon as the HR left us with more notices and warnings, I rushed to my classroom, logged in and there it was – my allocation window – Mangalore.
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    I got upset. I applied for swapping the location but knew was never going to change except if swapped for Chennai. I started mentally preparing myself for this unwanted, secluded place where none of my friends got allocated. All we 10 trainees including Saher and Sanjana who got Mangalore hardly knew each other. But we were set on a journey where our future was unpredictable. 10-10 friends of each 10 of us came to say good bye to us. Many of us downhearted, dejected and depressed with despairing motives started this journey together to the mysterious Mangalore.
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    From the day we arrived Mangalore, we all grew in friendship. It all started from ECC stay to house hunts and we all were together. Lunch time used to exceed more than 2 hours, where we ate less mocked more. As soon as the hour hand of clock used to touch 4, we all were present at pool tables. Every evening we spend hours to become champions in pool, at least among us. We were everywhere to support and cheer our friends for every different sports they played. Each MetLife working day used to pass with dumb charades and many other small games. We were in a project but were on project-bench.
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    With every happy story comes few twists and heartbreaks. For us this time it was Pune. Each one of us continuously trying for Pune and few succeeding to get transfer. As time flew so did they to Pune. Soon we started feeling deserted in our beautiful Mangalore. Sanjana used to say, “It does not matter where you stay, what matters is with whom. We understand their value once they leave us.”
    
    </p>
    &emsp;
    <p className={classes.blog}>&emsp;&emsp;
    From the place I started my journey I’m on the brim to reach their again. But what this journey has given me is very precious and I learnt that people will come and go in life, but make memories with them to cherish forever.
    </p><br /></span>
    </div>
      </div>
      <Footer />
    </div>
  );
}
