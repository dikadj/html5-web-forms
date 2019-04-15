import React from "react"
import Helmet from "react-helmet"
import $ from "jquery"

import "./App.scss"

$(document).ready(() => {
  $("label").css({
    display: "block",
    marginBottom: "5px"
  })
})

const App = () => (
  <div>
    <Helmet>
      <title>Using the Range Input type</title>
    </Helmet>
    <div>
      <h1>Using the Range Input type</h1>
      <p>The range input type indicates to the browser that the field is expecting a numeric defaultValue selected from within a given range.</p>
      <p>This input type can also be used with the min, max, and step attributes to provide additional UI features to help
      the user select a number.</p>
      <form action="" method="get">
      <p><label>Regular Text Field:</label><input name="Text1" type="text" /></p>
      <p><label>Range Field:</label><input name="Text2" type="range" defaultValue="5"/></p>
      <p><label>Range Field (Min and Max):</label><input name="Text3" type="range" min="0" max="120" defaultValue="5"/></p>
      <p><label>Range Field (Step):</label><input name="Text4" type="range" defaultValue="5" step="5"/></p>
      <p><label>Range Field (Min, Max, and Step):</label><input name="Text5" type="range" min="2" max="12" step="2" defaultValue="6"/></p>
      <p><label>Range Field (Fractions, Min, Max, and Step):</label><input name="Text5" type="range" min="0.0" max="2.0" step="0.2" defaultValue="0.8"/></p>
      <p><input type="submit" defaultValue="submit" /></p>
      </form>
    </div>
  </div>
)

export default App
