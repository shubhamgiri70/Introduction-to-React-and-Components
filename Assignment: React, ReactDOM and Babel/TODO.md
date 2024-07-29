Answer the questions given below

Create a div HTML element with the id of root using React.createElement

```js
React.createElement("div", { id: "root" });
```

In the given HTML find out the tag name , attributes and children while using React.createElement.

```html
<span class="sub--heading" id="main"> Hello React Element</span>
```

// tag name is span, attributes are class and id and children is Hello React Element

Create a h1 React element with text Hello React🔥 and class heading

```js
React.createElement("h1", { class: "heading" }, "Hello React🔥");
```

Convert this React element into HTML element and JSX

```js
React.createElement("input", {
  type: "checkbox",
  placeholder: "What are you learning?",
});
```

// html
<input type='checkbox' placeholder ='What are you learning?' >

// jsx
<input type='checkbox' placeholder ='What are you learning?' />

Using ReactDOM render the element created in step 4 into DOM. (div with id root).

```js
ReactDOM.render(
  <input type="checkbox" placeholder="What are you learning?" />,
  document.querySelector("#root")
);
```

Convert the following HTML element into React element using React.createElement. After converting to React.createElement convert the code below to JSX.

```js
<div class="container">
  <img src="https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" />
  <input type="checkbox" />
  <p>Learing React</p>
  <span>Delete</span>
</div>
```

```js
React.createElement('div', {classname: 'container'}, React.createElement('img', {src: "https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"})React.createElement('input', {type: "chackbox"})
React.createElement('p', null, 'Learning React')
React.createElement('span', null, 'Delete'));

```

// jsx

<div className="container"/>
  <img src="https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" />
  <input type="checkbox" />
  <p>Learing React</p>
  <span>Delete</span>
</div>

Convert the following HTML element into React element using React.createElement. After converting to React.createElement convert the code below to JSX.

<div>
  <div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese" />
  </div>
  <div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas" />
  </div>
  <h2>List of numbers!</h2>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
</div>

```js
React.createElement(
  "div",
  null,
  React.createElement("div", { className: "preference" },
   React.createElement("label", { htmlFor: "preference" }, "Do you like cheese?")
   React.createElement("input",{type: 'checkbox' name: 'cheese' id: 'cheese'}, 'Do you like cheese?')
   )
  React.createElement("div", { className: "preference" },
  React.createElement("label",{htmlFor: 'peas'}, 'Do you like peas?')
  React.createElement("input",{type: 'checkbox' name: 'peas' id: 'peas'}, 'Do you like peas?')
  )
  React.createElement("h2", null, 'List of numbers!')
  React.createElement("div", null,
  React.createElement("li", null, 'one')
  React.createElement("li", null, 'two')
  React.createElement("li", null, 'three')
));
```

// jsx

<div>
  <div className="preference"/>
    <label htmlFor="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese" />
  </div>
  <div className="preference"/>
    <label htmlFor="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas" />
  </div>
  <h2>List of numbers!</h2>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
</div>

Why you need to name the components capital case? Explain with examples.

// component names must be capitalized to differentiate them from HTML elements and to ensure they are treated as React components rather than standard HTML tags. This convention helps React distinguish between built-in DOM tags and custom React components.
for eg :-
import React from 'react';

```js
// Defining a component with a lowercase name
function welcome() {
  return <h1>Hello, world!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <welcome />
    </div>
  );
}

export default App;
```

In this example, React will treat <welcome /> as an unknown HTML tag, not as a custom component. This will result in an error or unexpected behavior.
