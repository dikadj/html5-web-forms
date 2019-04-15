import React from "react"
import Helmet from "react-helmet"

import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the &lt;meter&gt; element</title>
    </Helmet>
    <div>
      <h1>Using the &lt;meter&gt; element</h1>
      <p>The &lt;meter&gt; element provides a way to show the user a measurement relative to an
          overall maximum amount. For example, a &lt;meter&gt; element might show the user how
          much storage space is left in a storage area.</p>
      <p><strong>Note:</strong> &lt;meter&gt; elements should not be used to indicate
          progress against a number of steps.
          That is what &lt;progress&gt; is for.</p>
      <h2>Example:</h2>
      <p>Showing remaining storage space from an allotted amount</p>
      <p>Current storage space usage: <meter value="30.0" min="0.0" max="100.0" low="20.0" high="80.0" optimum="40.0">300MB out of 1GB used</meter></p>
    </div>
  </div>
)

export default App
