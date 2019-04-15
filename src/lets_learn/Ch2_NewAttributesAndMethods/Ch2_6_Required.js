import React from "react"
import Helmet from "react-helmet"

import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the required attribute</title>
    </Helmet>
    <div>
      <h1>Using the required attribute</h1>
    	<p>The <code>required</code> attribute indicates to the browser that the form field must
    	be given a value before the form can be submitted.</p>
        <p>Browsers that support this attribute will check to see that the field was given a value
        before the form can be allowed to submit. In this case, we have also included a third-party
        JavaScript library to provide support for browsers that don't have native support.</p>
        <p>Try moving the required attributes around in the source code to see what happens.</p>
    	<form action="" method="get">
    		<p><label htmlFor="Text1" >First Name: </label><input name="Text1" type="text" required /></p>
    		<p><label htmlFor="Text2">Last Name: </label><input name="Text2" type="text" /></p>
    		<p><label htmlFor="Text3">Favorite Color: </label><input name="Text3" type="text" /></p>
    		<p><input name="Submit1" type="submit" value="submit" />&nbsp;</p>
    	</form>
    </div>
  </div>
)

export default App
