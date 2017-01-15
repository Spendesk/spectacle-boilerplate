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
  efounders: require("../assets/logos/efounders.svg"),
  spendesk: require("../assets/logos/spendesk.svg"),
  fbWeb: require("../assets/fb-1.jpg"),
  fbNew: require("../assets/fb2017.jpg"),
  firework: require("../assets/firework.gif"),
  why: require("../assets/why.gif"),
  questions: require("../assets/questions.gif"),
  appRn: require("../assets/app_rn.png"),
  spendeskMobile: require("../assets/spendesk_mobile.png"),
  graphql: require("file!../assets/graphql.mov"),
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
        strings: ['React-Native', 'GraphQL', 'Relay'],
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
                Comment être un <Purple>hipster</Purple> en 2018<br/>
              feat. <Purple id="typedHome" />
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Appear fid="0">
                <Fill>
                  <Image bgImage={images.flg.replace("/", "")} style={Styles.avatar}/>
                  <Image src={images.efounders} style={Styles.logos}  />
                  <List style={Styles.list}>
                    <ListItem textColor="tertiary" className="u-tc">
                      <Link href="https://www.linkedin.com/in/fannylegallou" target="_blank" style={{fontSize: '0.8em'}}>
                        <i className="fa fa-linkedin"/> @flg
                      </Link>
                    </ListItem>
                  </List>
                </Fill>
              </Appear>
              <Appear fid="1">
                <Fill>
                  <Image bgImage={images.ababol.replace("/", "")} style={Styles.avatar}/>
                  <Image src={images.spendesk} style={Styles.logos}  />
                  <List style={Styles.list}>
                    <ListItem textColor="tertiary" className="u-tc">
                      <Link href="https://github.com/ababol" target="_blank" style={{fontSize: '0.8em'}}>
                        <i className="fa fa-github"/> @ababol
                      </Link>
                    </ListItem>
                  </List>
                </Fill>
              </Appear>
              <Appear fid="2">
                <Fill>
                  <Image bgImage={images.ilyes.replace("/", "")} style={Styles.avatar}/>
                  <Image src={images.spendesk} style={Styles.logos} />
                  <List style={Styles.list} className="u-tc">
                    <ListItem textColor="tertiary">
                      <Link href="https://github.com/ilyes" target="_blank" style={{fontSize: '0.8em'}}>
                        <i className="fa fa-github"/> @ilyes
                      </Link>
                    </ListItem>
                    <ListItem textColor="tertiary">
                      <Link href="https://github.com/js-and-chill" target="_blank" style={{fontSize: '0.8em'}}>
                        <i className="fa fa-github"/> @js-and-chill
                      </Link>
                    </ListItem>
                  </List>
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading fit size={4} bold={false} textColor="tertiary">
              React-Native: <Purple>Pourquoi ?</Purple>
            </Heading>
            <Image src={images.why.replace("/", "")} margin="30px 0 0 0" />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={purple} bold={false} textSize="3.5rem" margin="0 0 30px">Problèmes</Heading>
            <List>
              <Appear><ListItem>2 plateformes</ListItem></Appear>
              <Appear><ListItem>2 langages différents</ListItem></Appear>
              <Appear><ListItem>2 pattern design/convertions différentes</ListItem></Appear>
              <Appear><ListItem>2 fois plus de temps à coder</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="buggy and slow, garnering one-star ratings in the App Store and crashing more often than it worked.">
            <Heading textColor={purple} bold={false} textSize="3.5rem" margin="0">Solution 1</Heading>
            <Text>Full Web</Text>
            <Layout>
              <Fit>
                <Image src={images.fbWeb.replace("/", "")} />
              </Fit>
              <Fill>
                <BlockQuote textColor="tertiary" bold={false} caps="none" textSize={2}>
                  <Quote textSize={40} textWeight={300}><Purple style={{fontWeight: 500}}>It was probably one of the biggest mistakes we have ever made.</Purple></Quote>
                  <Cite>Mark Zuckerberg</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px">Problèmes <Purple>solution web</Purple></Heading>
            <List>
              <Appear><ListItem>Performances et optimisation</ListItem></Appear>
              <Appear><ListItem>Sensations</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px">L'application <Purple>full native</Purple></Heading>
            <Image src={images.fbNew.replace("/", "")} height={450} />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px">Solution 2 - <Purple>React-Native</Purple></Heading>
            <Image src={images.firework.replace("/", "")} width={300} margin="0 auto" />
            <List>
              <Appear><ListItem>Rapidité/agilité/flexibilité du web</ListItem></Appear>
              <Appear><ListItem>Un langage bridge</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px"><Purple>React-Native</Purple> en 2017</Heading>
            <Image src={images.appRn.replace("/", "")} width={400} /><br/>
            <Link href="https://facebook.github.io/react-native/showcase.html" textSize={20}>https://facebook.github.io/react-native/showcase.html</Link>
            <Text><i className="fa fa-github"/> 42832 <i className="fa fa-star"/></Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} fit>En pratique <Purple>construisons une Todo List</Purple></Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor="#bbb" bold={false} fit><Purple>Ce que nous allons construire</Purple></Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px">React-Native chez <Purple>Spendesk</Purple></Heading>
            <Image src={images.spendeskMobile.replace("/", "")} height={450} />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px"><Purple>GraphQL</Purple>: A query language for your API</Heading>
            <video src={images.graphql.replace("/", "")} height={450} autoPlay={true} loop={true} />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor={black} bold={false} textSize="3.5rem" margin="0 0 30px"><Purple>GraphQL</Purple>: A query language for your API</Heading>
            <video src={images.graphql.replace("/", "")} height={450} autoPlay={true} loop={true} />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor="#bbb" bold={false} margin="0 0 30px 0">Questions ?</Heading>
            <Image src={images.questions.replace("/", "")} style={{ width: '500px' }} />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
