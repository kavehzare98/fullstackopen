// a parameter-less Javascript function that's then assigned to a constant variable, App
// () => {} This is called an arrow function expression
  // 1. don't have their own bindings

// // First attempt
// const App = () => {
//   // writes the following message to console terminal
//   console.log("Hello from component")
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   )
// }

// export default App

// // Second attempt
// // Now we're going to add some dynamic content inside the component

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b)

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )

// }



// Definining a new component
// Side note: find out why props.name is showing as an issue
//  course explanation, they did the thinking on my part: it's not an error, but an ESLint warning which can be turned off.
//  FIX: Add ` 'react/prop-types': 0 ` to the `eslint.config.js` file
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}


const App = () => {
  const friends = [
    {name: 'Peter', age: 4},
    {name: 'Maya', age: 10}
  ]

  const enemies = ['Kaveh ', 'Larry']

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{enemies}</p>
    </div>
  )
}

// without the export, the whole app breaks down
export default App


// Notes:
//--------------------------------------------------------------------------------------


// BIG PROMISE TO SELF: I promise to keep the console open all the time during this 
// course, and for the rest of my life when I'm doing web development.

// JSX:
//--------------------------------------------------------------------------------------

// Note: JSX looks like HTML but in fact, it's compiled into JavaScript
// Compilation is handled by Babel
// Also, it's possible to write React as "pure JavaScript" without JSX, not recommended

// JSX is "XML-like", meaning every tag needs to be closed.
//  ex. newline is written as follows: <br />

// Multiple components:
//--------------------------------------------------------------------------------------

// Components make code reusable and maintainable

// you can pass data to components via props.

// Note: React components need to be title cased, otherwise React creates an empty 
// element, a built-in HTML element instead of the custom react element of the same name.

// content of a react component needs to contain one root element.

// You cannot render an entire object inside of a React component, it must be a primitive
// value such as an integer, string, ...

// React also allows array that contain numbers and string to be rendered 


//--------------------------------------------------------------------------------------

