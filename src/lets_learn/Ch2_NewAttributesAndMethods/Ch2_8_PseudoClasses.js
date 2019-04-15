import React from "react"
import Helmet from "react-helmet"
import $ from "jquery"

import "./App.scss"

$(document).ready(() => {
  $("input:valid").css({
    background: "rgb(0, 255, 0)"
  })

  $("input:invalid").css({
    background: "rgb(255, 0, 0)"
  })

  $("input:required, input[required]").css({ //
    border: "yellow)"
  })
})

const App = () => (
  <div>
    <Helmet>
      <title>Using valid, invalid, required css pseudo classes</title>
    </Helmet>
    <div>
      <form action="" method="get">
      	<label id="Label1" htmlFor="FirstName">First Name:</label><br />
      	<input name="FirstName" type="text" required autoFocus/> <label id="Label2" htmlFor="LastName"><br />
      		<br />
      		Last Name:<br />
      	</label><input name="LastName" type="text" required/>
      		<br />
      	<br />
      	Email Address:<br />
      	<input name="Text3" type="email" placeholder="name@domain.com"/><br />
      	<br />
      	<input name="Submit1" type="submit" value="submit" /> <input name="Reset1" type="reset" value="reset" />
      	</form>
    </div>
  </div>
)

export default App
