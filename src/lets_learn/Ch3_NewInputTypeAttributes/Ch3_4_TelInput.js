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
      <title>Using the Tel Input type</title>
    </Helmet>
    <div>
      <h1>Using the Tel Input type</h1>
      <p>The tel input type indicates to the browser that the field is expecting a telephone number.</p>
      <p>Due to the large variety of world telephone numbers, browsers don't explicitly try to validate this field.</p>
      <form action="" method="get">
      <p><label>Regular Text Field:</label><input name="Text1" type="text" /></p>
      <p><label>Telephone Field:</label><input name="Text2" type="tel" /></p>
      <p><input type="submit" value="submit" /></p>
      </form>
    </div>
  </div>
)

export default App
