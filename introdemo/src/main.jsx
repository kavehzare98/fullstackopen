// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import App from './App'
// a react component with the name App which renders its contents into the div-element
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

