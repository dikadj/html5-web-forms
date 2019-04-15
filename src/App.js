import React from "react"
import Helmet from "react-helmet"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Ch1
import Ch1P1 from "./lets_learn/Ch1_Overview/App"
import Ch2P1 from "./lets_learn/Ch2_NewAttributesAndMethods/Ch2_1_Autofocus"
import Ch2P2 from "./lets_learn/Ch2_NewAttributesAndMethods/Ch2_2_Autocomplete"
import Ch2P3 from "./lets_learn/Ch2_NewAttributesAndMethods/Ch2_3_Placeholder"

// import "./App.scss"

const Home = () => (
  <div>
    <Helmet>
      <title>HTML5 Web Forms Personal Docs (based on Joe Marini's course on Lynda.com)</title>
    </Helmet>
    <div>
      <h1>
        HTML5 Web Forms Personal Docs <br />
        <em><small>(based on Joe Marini's course on Lynda.com)</small></em>
      </h1>

      <div>
        <ul>
          <li><Link to="/ch1/">Chapter 1: Overview</Link></li>
          <li><Link to="/ch2/">Chapter 2: New Attributes and Methods</Link></li>
          <li><Link to="/ch3/">Chapter 3: New Input Type Attributes</Link></li>
          <li><Link to="/ch4/">Chapter 4: New Form Elements</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

const Ch1 = ({ match }) => (
  <div>
    <h1>Chapter 1: Overview</h1>
    <Link to="/ch2/" style={{
      // position: "absolute",
      float: "right"
    }}>
      next &gt;
    </Link>
    <img src={require("./lets_learn/Ch1_Overview/html5_forms_new_features/new_attributes_for_forms_and_form_elements.png")}
      alt="New Form Elements"
      style={{
        maxWidth: "100%"
      }}
    />
    <img src={require("./lets_learn/Ch1_Overview/html5_forms_new_features/new_html5_forms_input_types.png")}
      alt="New Input Type Attributes"
      style={{
        maxWidth: "100%"
      }}
    />
    <img src={require("./lets_learn/Ch1_Overview/html5_forms_new_features/css_pseudo_classes_for_form_elements.png")}
      alt="New Input Type Attributes"
      style={{
        maxWidth: "100%"
      }}
    />
    <img src={require("./lets_learn/Ch1_Overview/html5_forms_new_features/new_text_selection_apis.png")}
      alt="New Input Type Attributes"
      style={{
        maxWidth: "100%"
      }}
    />
    <Link to="/ch2/" style={{
      // position: "absolute",
      float: "right"
    }}>
      next &gt;
    </Link>
  </div>
)

const Ch2s = ({ match }) => {
  switch (match.params.part) {
    case "autofocus":
      return (
        <div>
          <Link to="/ch2/autocomplete" style={{ float: "right" }}>next &gt;</Link>
          <Ch2P1 />
          <Link to="/ch2/autocomplete" style={{ float: "right" }}>next &gt;</Link>
        </div>
      )
    case "autocomplete":
      return (
        <div>{/* let's put this later in an object or array to simplify boilerplate code */}
          <Link to="/ch2/autofocus" style={{ float: "left" }}>&lt; prev</Link>
          <Link to="/ch2/placeholder" style={{ float: "right" }}>next &gt;</Link>
          <Ch2P2 />
          <Link to="/ch2/autofocus" style={{ float: "left" }}>&lt; prev</Link>
          <Link to="/ch2/autocomplete" style={{ float: "right" }}>next &gt;</Link>
        </div>
      )
    case "placeholder":
      return <Ch2P3 />
    default:
      return "nothing"
  }
}

const Ch2 = ({ match }) => (
  <div>
    <h1>Chapter 2: New Attributes and Methods</h1>
    {match.params.part}
  </div>
)

const Ch3 = () => (
  <div>
    <h1>Chapter 3: New Input Type Attributes</h1>
  </div>
)

const Ch4 = () => (
  <div>
    <h1>Chapter 4: New Form Elements</h1>
  </div>
)

const App = () => (
  <div>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/ch1/" component={Ch1} />
          <Route path="/ch2/" component={Ch2} />
            <Route path="/ch2/:part" component={Ch2s} />
          <Route path="/ch3/" component={Ch3} />
            {/* <Route path="/ch3/:part" component={Ch3s} /> */}
          <Route path="/ch4/" component={Ch4} />
            {/* <Route path="/ch4/:part" component={Ch4s} /> */}
        </div>
      </Router>
  </div>
)

export default App
