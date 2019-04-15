import React from "react"
import Helmet from "react-helmet"

import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the Color Input type</title>
    </Helmet>
    <div>
      <h1>Using the Color Input type</h1>
      <p>The color input type gives a hint to the browser that the field is used for selecting colors.</p>
      <form action="" method="get">
      <p>What is your favorite color?</p>
      <input name="Text1" type="color" />
      <p><input type="submit" value="submit" /></p>
      </form>
    </div>
  </div>
)

export default App
