// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Typeface,
  Text
} from "spectacle";

import { init } from 'ityped';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
import Styles from './style';

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  ababol: require("../assets/photos/ababol.jpg"),
  ilyes: require("../assets/photos/ilyes.jpg"),
  flg: require("../assets/photos/flg.jpg"),
  efoundersLogo: require("../assets/logos/efounders.svg"),
  spendesk: require("../assets/logos/spendesk.svg"),
  fbWeb: require("../assets/fb-1.jpg"),
  fbNew: require("../assets/fb2017.jpg"),
  firework: require("../assets/firework.gif"),
  why: require("../assets/why.gif"),
  questions: require("../assets/questions.gif"),
  appRn: require("../assets/app_rn.png"),
  spendeskMobile: require("../assets/spendesk_mobile.png"),
  graphql: require("file!../assets/graphql.mov"),
  firstname: require("../assets/code/firstname.png"),
  fullname: require("../assets/code/fullname.png"),
  hiring: require("../assets/hiring.gif"),
  efounders: require("../assets/efounders.png"),
  screen1: require("../assets/screen-1.png"),
  screen2: require("../assets/screen-2.png"),
};

preloader(images);

const purple = "#6E00FF";
const white = "#FFFFFF";
const black = "#202020";
const green = "#83EA8D";
const colors = {
  primary: purple,
  secondary: black,
  tertiary: black,
  quartenary: "#8336FF"
};

const fonts = {
  primary: "Work Sans",
  secondary: "Work Sans"
};

const theme = createTheme(colors, fonts);

class Color extends React.Component {
  render() {
    const { style, children, color, ...others } = this.props;

    return (
      <span style={{ color, ...style }} {...others}>
        {children}
      </span>
    );
  }
}
class Purple extends React.Component {
  render() {
    return <Color color={purple} {...this.props} />;
  }
}
class White extends React.Component {
  render() {
    return <Color color={white} {...this.props} />;
  }
}
class Black extends React.Component {
  render() {
    return <Color color={black} {...this.props} />;
  }
}

export default class Presentation extends React.Component {
  componentDidMount() {
    init(`#typedHome`, {
      // required - for now, only accepting texts
        strings: ['React Native', 'GraphQL', 'Relay'],
        //optional
        typeSpeed: 55, //default
        //optional
        backSpeed: 30, //default
        //optional
        startDelay: 0, //default
        //optional
        backDelay: 1000, //default
        //optional
        loop: true, //default
        //optional
        showCursor: false, //default
        //optional
        cursorChar: "|", //default
        // optional callback called once the last string has been typed
        onFinished: function(){}
    });
  }

  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} controls={false} progress="bar">
          <Slide transition={["slide"]} bgColor="white">
            <Heading fit bold={false} textColor={black}>
              Comment être un dev <Purple>hipster</Purple><br/>
              en 2018 feat. <Purple id="typedHome" />
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Appear>
                <Fit>
                  <Image bgImage={images.flg.replace("/", "")} style={Styles.avatar}/>
                  <Image src={images.efoundersLogo} style={Styles.logos}  />
                  <List style={Styles.list}>
                    <ListItem textColor="tertiary">
                      <Link href="https://www.linkedin.com/in/fannylegallou" target="_blank" style={{fontSize: '0.5em'}}>
                        <i className="fa fa-linkedin" style={{color: purple}}/> @flg
                      </Link>
                    </ListItem>
                  </List>
                </Fit>
              </Appear>
              <Appear>
                <Fill>
                  <Image src={images.efounders.replace("/", "")} height="404" style={{display: 'flex', alignItems: 'center'}} />
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Appear>
                <Fill>
                  <Image bgImage={images.ababol.replace("/", "")} style={Styles.avatar}/>
                  <Image src={images.spendesk} style={Styles.logos} />
                  <List style={Styles.list}>
                    <ListItem textColor="tertiary">
                      <Link href="mailto:arnaud@spendesk.com" style={{fontSize: '0.5em'}}>
                        <i className="fa fa-envelope-o" style={{color: purple}}/> arnaud@spendesk.com
                      </Link>
                    </ListItem>
                    <ListItem textColor="tertiary">
                      <Link href="https://github.com/ababol" target="_blank" style={{fontSize: '0.5em'}}>
                        <i className="fa fa-github" style={{color: purple}}/> @ababol
                      </Link>
                    </ListItem>
                  </List>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Image bgImage={images.ilyes.replace("/", "")} style={Styles.avatar}/>
                  <Image src={images.spendesk} style={Styles.logos} />
                  <List style={Styles.list}>
                    <ListItem textColor="tertiary">
                      <Link href="mailto:ilyes@spendesk.com" style={{fontSize: '0.5em'}}>
                        <i className="fa fa-envelope-o" style={{color: purple}}/> ilyes@spendesk.com
                      </Link>
                    </ListItem>
                    <ListItem textColor="tertiary">
                      <Link href="https://github.com/yachaka" target="_blank" style={{fontSize: '0.5em'}}>
                        <i className="fa fa-github" style={{color: purple}}/> @yachaka
                      </Link>
                    </ListItem>
                    <ListItem textColor="tertiary">
                      <Link href="https://github.com/js-and-chill" target="_blank" style={{fontSize: '0.5em'}}>
                        <i className="fa fa-github" style={{color: purple}}/> @js-and-chill
                      </Link>
                    </ListItem>
                  </List>
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading fit size={4} bold={false} textColor="tertiary">
              React Native: <Purple>Pourquoi ?</Purple>
            </Heading>
            <Image src={images.why.replace("/", "")} margin="30px 0 0 0" />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={purple} bold={false} textSize="3.5rem" margin="0 0 30px">Problèmes</Heading>
            <List>
              <Appear><ListItem>2 plateformes</ListItem></Appear>
              <Appear><ListItem>2 langages différents</ListItem></Appear>
              <Appear><ListItem>2 patterns design différents</ListItem></Appear>
              <Appear><ListItem>2 fois plus de temps</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="buggy and slow, garnering one-star ratings in the App Store and crashing more often than it worked.">
            <Heading textColor={purple} bold={false} textSize="3.5rem" margin="0">Solution 1</Heading>
            <Appear><Text>Full Web</Text></Appear>
            <Layout>
              <Appear>
                <Fit>
                  <Image src={images.fbWeb.replace("/", "")} />
                </Fit>
              </Appear>
              <Fill>
                <Appear>
                  <BlockQuote textColor="tertiary" bold={false} caps="none" textSize={2}>
                    <Quote textSize={40} textWeight={300}><Purple style={{fontWeight: 500}}>It was probably one of the biggest mistakes we have ever made.</Purple></Quote>
                    <Cite>Mark Zuckerberg</Cite>
                  </BlockQuote>
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px">Problèmes <Purple>full web</Purple></Heading>
            <List>
              <Appear><ListItem>Performances et optimisation</ListItem></Appear>
              <Appear><ListItem>Sensations</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={purple} bold={false} textSize="3.5rem" margin="0">Solution 2</Heading>
            <Appear><Text>Application native</Text></Appear>
            <Appear><Image src={images.fbNew.replace("/", "")} height={450} /></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={purple} bold={false} textSize="3.5rem" margin="0">Solution 3</Heading>
            <Appear><Text>React Native</Text></Appear>
            <Appear fid="0"><Image src={images.firework.replace("/", "")} width={300} margin="0 auto" /></Appear>
            <List>
              <Appear><ListItem>Rapidité/agilité/flexibilité</ListItem></Appear>
              <Appear><ListItem>Un framework bridge</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px"><Purple>React Native</Purple> en 2017</Heading>
            <Appear>
              <div>
                <Image src={images.appRn.replace("/", "")} width={400} /><br/>
                <Link href="https://facebook.github.io/react-native/showcase.html" textSize={20}>https://facebook.github.io/react-native/showcase.html</Link>
              </div>
            </Appear>
            <Appear><Text><i className="fa fa-github"/> 42832 <i className="fa fa-star"/></Text></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} fit margin="0 0 40px 0">En pratique <Purple>construisons une Todo List</Purple></Heading>
            <Appear><Image style={{ height: 550, float: 'left', border: '1px solid black' }} margin="0 20px 0 0" src={images.screen1.replace("/", "")}  /></Appear>
            <Appear><Image style={{ height: 550, border: '1px solid black' }} src={images.screen2.replace("/", "")} /></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px">React Native chez <Purple>Spendesk</Purple></Heading>
            <Image src={images.spendeskMobile.replace("/", "")} height={450} />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px"><Purple>GraphQL</Purple>: A query language for your API</Heading>
            <Appear><video src={images.graphql.replace("/", "")} height={450} autoPlay={true} loop={true} /></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="2.5rem" margin="0 0 30px"><Purple>Relay</Purple>: A JavaScript framework for building data-driven react applications</Heading>
            <Layout>
              <Fill style={{marginRight: 10}}>
                <Appear><Image src={images.firstname.replace("/", "")} margin="0 auto" width={365} /></Appear>
                <Appear><CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code/fragment_firstName.example")}
                  margin="20px auto"
                /></Appear>
              </Fill>
              <Fill style={{marginLeft: 10}}>
                <Appear><Image src={images.fullname.replace("/", "")} margin="0 auto" width={365} /></Appear>
                <Appear><CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code/fragment_fullname.example")}
                  margin="20px auto"
                /></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} margin="0 0 30px 0">Questions <Purple>?</Purple></Heading>
            <Image src={images.questions.replace("/", "")} style={{ width: '500px' }} /><br/>
            <span style={{fontSize: '0.8em'}}>Slides: </span><Link href="https://spendesk.github.io/hipster-2018/" style={{fontSize: '0.8em'}}>https://<Purple>spendesk.github.io</Purple>/hipster-2018</Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} margin="0 0 30px 0">On <Purple>recrute</Purple> !</Heading>
            <Image src={images.hiring.replace("/", "")} width={480} margin="0 auto" /><br/>
            <Link href="mailto:dev@spendesk.com">dev<Purple>@spendesk.com</Purple></Link><br/>
            <Link href="mailto:fanny@e-founders.com">fanny<Purple>@e-founders.com</Purple></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
