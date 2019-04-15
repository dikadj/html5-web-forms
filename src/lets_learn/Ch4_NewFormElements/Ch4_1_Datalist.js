import React from "react"
import Helmet from "react-helmet"

import "./App.scss"

const App = () => (
  <div>
    <Helmet>
      <title>Using the &lt;datalist&gt; element</title>
    </Helmet>
    <div>
      <h1>Using the &lt;datalist&gt; element</h1>
      <p>The &lt;datalist&gt; element provides a way to give the browser a list of
      suggestions for a given form field. The &lt;datalist&gt; encloses one or more &lt;option&gt;
      tags that can be displayed to the user when they are filling out a particular
      form field. A &lt;datalist&gt; is associated with a form field by using the <code>list</code>
      attribute.</p>
      <p><strong>Note:</strong> this does not force the user to pick a particular entry, it simply
      provides the user with suggestions that might be common for the field. To
      constrain the value of the field, you must either use a drop-down selector or
      use a validation method like the pattern attribute or some script code to
      enforce the constraints.</p>
      <h2>Example:</h2>
      <p>The following form field is a regular one-line text input element with an
      associated &lt;datalist&gt;. In browsers that support this feature, a drop-down
      list of suggested entries will appear when the field is given the input focus. The code to do so looks like:</p>
      <pre>
        &lt;input
        <br />{"  "}name=&quot;Text5&quot;
        <br />{"  "}type=&quot;text&quot;
        <br />{"  "}<span className="highlight">list=&quot;suggestions&quot;</span>
        <br />/&gt;

        <br />
        <br />&lt;datalist <span className="highlight">id=&quot;suggestions&quot;</span>;
        <br />{"  "}&lt;option value=&quot;Suggestion Value 1&quot;&gt;&lt;/option&gt;
        <br />{"  "}&lt;option value=&quot;Suggestion Value 2&quot;&gt;&lt;/option&gt;
        <br />{"  "}&lt;option value=&quot;Suggestion Value 3&quot;&gt;&lt;/option&gt;
        <br />{"  "}&lt;option value=&quot;Suggestion Value 4&quot;&gt;&lt;/option&gt;
        <br />{"  "}&lt;option value=&quot;Clyde&quot;&gt;&lt;/option&gt;
        <br />&lt;/datalist&gt;</pre>
      <form action="" method="post">
      	<label id="Label1" htmlFor="Text5">Input Field With Suggestions: </label><input name="Text5" type="text" list="suggestions" />

      	<datalist id="suggestions">
      	  <option value="Suggestion Value 1"></option>
      	  <option value="Suggestion Value 2"></option>
      	  <option value="Suggestion Value 3"></option>
      	  <option value="Suggestion Value 4"></option>
      	  <option value="Clyde"></option>
      	</datalist>
      	</form>
    </div>
  </div>
)

export default App
