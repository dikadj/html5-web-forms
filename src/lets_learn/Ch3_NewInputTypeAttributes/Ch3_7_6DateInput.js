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
      <title>Using the 6 Date Input type</title>
    </Helmet>
    <div>
      <h1>Using the 6 Date Input type</h1>
      <p>The Date and Time input fields allow the user to easily select dates and times.</p>
      <p>There are multiple versions of this input type, used for selecting dates, weeks, months, and times.</p>
      <form action="" method="get">
      <p><label>Regular Text Field:</label><input name="Text1" type="text" /></p>
      <p><label>Time Field:</label><input type="time" defaultValue="01:30" step="3600" /></p>
      <p><label>Date Field:</label><input type="date" defaultValue="2011-12-22" /></p>
      <p><label>DateTime Field: (DEPRECATED)</label><input type="datetime" defaultValue="2011-12-22T01:30Z" /></p>
      <p><label>Local DateTime Field:</label><input type="datetime-local" defaultValue="2011-12-22T01:30" /></p>
      <p><label>Week Field:</label><input type="week" defaultValue="2011-W11" /></p>
      <p><label>Month Field:</label><input type="month" defaultValue="2011-07" /></p>
      <p><label>Month Field (Min, Max):</label><input type="month" defaultValue="2011-07" min="2011-01" max="2011-12" /></p>
      <p><input type="submit" defaultValue="submit" /></p>
      </form>
    </div>
  </div>
)

export default App
