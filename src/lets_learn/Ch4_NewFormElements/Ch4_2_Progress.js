import React from "react"
import Helmet from "react-helmet"

import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the &lt;progress&gt; element</title>
    </Helmet>
    <div>
      <h1>Using the &lt;progress&gt; element</h1>
      <p>The &lt;progress&gt; element provides a way to show the user how far along they are in
          completing a task. For example, when filling out a form that spans multiple
          pages, a &lt;progress&gt; element could be used to indicate how many steps have been
          completed out of a total number.</p>
      <p><strong>Note:</strong> &lt;progress&gt; elements should not be used to indicate
          measurements, such as how much storage space is left.
          That is what &lt;meter&gt; is for.</p>
      <h2>Example:</h2>
      <p>You're halfway there!</p>
      <form action="" method="get">
      <p>Progress: <progress value="50.0" max="100.0">50%</progress></p>
      </form>
    </div>
  </div>
)

export default App
