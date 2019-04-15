import React from "react"
import Helmet from "react-helmet"
import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the autocomplete attribute</title>
    </Helmet>
    <div>
      <h1>Using the autocomplete Attribute</h1>
      <p>Some browsers provide native support for remembering the values of form fields and displaying those
      values to the user to speed data entry later.</p>
       <p>The <code>autocomplete</code> attribute allows you to control whether a form field remembers its value.
       Try changing the values of the autocomplete attribute in the source code of this demo to see
       what happens.</p>
      <form method="get" action="">
      <p><label htmlFor="Text1">Field 1: </label><input name="Text1" type="text" id="Text1" autoComplete="on" /></p>
      <p><label htmlFor="Text2">Field 2: </label><input name="Text2" type="text" id="Text2" autoComplete="off" /></p>
      <p><label htmlFor="Text3">Field 3: </label><input name="Text3" type="text" id="Text3" autoComplete="off" /></p>
      <p><input type="submit" value="Submit" /></p>
      </form>
    </div>
  </div>
)

export default App
