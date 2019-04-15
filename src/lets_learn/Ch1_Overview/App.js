import React from "react"
import Helmet from "react-helmet"
import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <meta content="en-us" http-equiv="Content-Language" />
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <title>First Name</title>
    </Helmet>
    <div>
      <form action="" method="post">
      	<label id="Label1" htmlFor="FirstName">
          First Name:
        </label>
        <br /> {/* Let's remove this later */}
      	<input name="FirstName" type="text" required autoFocus />
        <label id="Label2" htmlFor="LastName">
          <br /><br /> {/* Let's remove this later */}
      		Last Name:
          <br /> {/* Let's remove this later */}
      	</label>
        <input name="LastName" type="text" required />
        <br /><br /> {/* Let's remove this later */}
      	Email Address:
        <br />
      	<input name="Text3" type="email" placeholder="yourname@email.com" />
        <br /><br /> {/* Let's remove this later */}
      	Age:
        <br /> {/* Let's remove this later */}
      	<input name="Text2" type="number" step="1" min="18"/>
        <br /><br /> {/* Let's remove this later */}
        Birthdate:
        <br /> {/* Let's remove this later */}
        <input name="Text4" type="date" />
        <br /><br /> {/* Let's remove this later */}
        Department:
        <br /> {/* Let's remove this later */}
      	<input name="Text5" type="text" list="departments" />
      	<datalist id="departments">
      		<option value="Accounting" />
      		<option value="Engineering" />
      		<option value="Human Resources" />
      		<option value="Sales" />
      		<option value="Support" />
      	</datalist>
      	<br /><br /> {/* Let's remove this later */}
        Gender:
        <br /> {/* Let's remove this later */}
      	<input checked="checked" name="Radio1" type="radio"
          onChange={()=>{}}
        />
        M
      	<input name="Radio1" type="radio" />
        F
        <br /><br /> {/* Let's remove this later */}
      	Check if US Citizen:
        <input name="Checkbox1" type="checkbox"/>
        <br /><br /> {/* Let's remove this later */}
      	<input name="Submit1" type="submit" value="submit" />
        <input name="Reset1" type="reset" value="reset" />
      	</form>
    </div>
  </div>
)

export default App
