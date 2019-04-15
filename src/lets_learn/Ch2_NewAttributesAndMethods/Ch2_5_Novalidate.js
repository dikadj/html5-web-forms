import React from "react"
import Helmet from "react-helmet"

import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the novalidate attribute</title>
    </Helmet>
    <div>
      <h1>Using the novalidate Attribute</h1>
    	<p>The <code>novalidate</code> attribute indicates to the browser that the form can be submitted
        without running any of the built-in validation logic.</p>
        <p>Why do this? Some sites allow their users to save their form progress without actually "submitting" it -
        this attribute makes that possible. The attribute actually has two forms - novalidate for the form, or
        formnovalidate for a particular control.</p>
    	<form action="" method="get" noValidate>
    		<p><label htmlFor="Text1" >First Name: </label><input name="Text1" type="text" required /></p>
    		<p><label htmlFor="Text2">Last Name: </label><input name="Text2" type="text" /></p>
    		<p><label htmlFor="Text3">Favorite Color: </label><input name="Text3" type="text" /></p>
    		<p><input name="Submit1" type="submit" value="submit" />&nbsp;</p>
    		<p><input name="Save" type="button" value="save" formNoValidate />&nbsp;</p>
    	</form>
    </div>
  </div>
)

export default App
