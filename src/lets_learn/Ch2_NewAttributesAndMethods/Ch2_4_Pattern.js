import React from "react"
import Helmet from "react-helmet"
// import "./webforms2/webforms2" // support for webforms in older browsers
                                  // I didn't know why but it failed when imported here
                                  // so included it in public html <script> tag source
import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the pattern attribute</title>
    </Helmet>
    <div>
      <h1>Using the pattern Attribute</h1>
      <p>The <code>pattern</code> attribute ensures that text entered into a field matches a specified RegEx pattern. When
      the form is submitted, a browser that supports this feature checks to see if the value entered into the
      field matches the given Regular Expression (if the supplied value is not an empty string).</p>
       <p>The Zip Code field in this form uses the pattern attribute to specify a pattern for a 5-digit ZIP code.
       For browsers without native pattern attribute support, the webforms2 JavaScript library provides the necessary logic.</p>
      <form method="get" action="">
      <p>This field is limited to 5 digits</p>
      <p><label htmlFor="Text1">Zip Code: </label><input name="Text1" type="text" id="Text1" pattern="^[0-9]{5}$" autoComplete="off"/></p>
      <p><input name="Submit1" type="submit" value="submit" />&nbsp;</p>
      </form>
    </div>
  </div>
)

export default App
