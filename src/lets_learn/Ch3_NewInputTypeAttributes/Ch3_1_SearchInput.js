import React from "react"
import Helmet from "react-helmet"

import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the Search Input type</title>
    </Helmet>
    <div>
      <h1>Using the Search Input type</h1>
      <p>The search input type gives a hint to the browser that the field is used for performing searches.</p>
      <p>Some browsers may choose to give the search field a different appearance, or provide some extra features
      like auto-suggesting some search terms that have been previously used.</p>
      <form action="" method="get">
      <input name="Text1" type="search" />
      <p><input type="submit" value="submit" /></p>
      </form>
    </div>
  </div>
)

export default App
