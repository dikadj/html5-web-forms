import React from "react"
import Helmet from "react-helmet"
import $ from "jquery"
import "./App.scss"

const { Modernizr } = window // declared in public html file
// put the commented code below in the <head> tag of your public html file to use Modernizr
// <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" crossorigin="anonymous"></script>

$(document).ready(function() { // support for older browsers
  if (!Modernizr.input.autofocus) {
    $("input[autofocus]").focus(); // give focus to whichever element has the autofocus attribute
  }
});

const App = () => (
  <div>
    <Helmet>
      <title>Using the autofocus attribute</title>
    </Helmet>
    <div>
      <h1>Using the autofocus Attribute</h1>
      <p>
        This form has several input fields. On platforms that have native support for
        <code>autofocus</code>, the input focus is automatically directed to the first
        form element that has the autofocus attribute.
      </p>
      <p>
        Otherwise, a custom javascript function is used to accomplish the same effect.
        Try moving the autofocus attribute around in the source code to see what happen.
      </p>
      <form method="get" action="">
        <p><label htmlFor="Text1">Field 1: </label><input name="Text1" type="text" id="Text1" autoFocus /></p>
        <p><label htmlFor="Text2">Field 2: </label><input name="Text2" type="text" id="Text2" /></p>
        <p><label htmlFor="Text3">Field 3: </label><input name="Text3" type="text" id="Text3" /></p>
      </form>
    </div>
  </div>
)

export default App
