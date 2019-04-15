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
      <title>Using the Email Input type</title>
    </Helmet>
    <div>
      <h1>Using the Email Input type</h1>
      <p>The email field is used to indicate to the browser that the field is expecting an email address.</p>
      <p>Browsers that support this field may also validate input values to ensure that they are valid email addresses.</p>
      <form action="" method="get">
      <p><label>Regular Text Field:</label><input name="Text1" type="text" /></p>
      <p><label>Email Text Field:</label><input name="Text2" type="email" /></p>
      <p><input type="submit" value="submit" /></p>
      </form>
    </div>
  </div>
)

export default App
