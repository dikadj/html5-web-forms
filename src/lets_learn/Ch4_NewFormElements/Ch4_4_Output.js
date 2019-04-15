import React from "react"
import Helmet from "react-helmet"

import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the &lt;output&gt; element</title>
    </Helmet>
    <div>
      <h1>Using the &lt;output&gt; element</h1>
      <p>The &lt;output&gt; element represents the results of a calculation.</p>
      <h2>Example:</h2>
      <p>Using the output element to contain the results of a calculation</p>
      <p>Value 1: <input type="number" name="num1" id="num1"/></p>
      <p>Value 2: <input type="number" name="num2" id="num2"/></p>
      <p>Results: <output name="result" id="result" htmlFor="num1 num2"></output></p>
      <p><button onClick={() => {
        var o = document.getElementById("result");
        var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");

        o.value = parseFloat(num1.value) + parseFloat(num2.value);
      }}>Perform Calulation</button></p>
    </div>
  </div>
)

export default App
