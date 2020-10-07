// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();

// import React from 'react'
// import ReactDOM from 'react-dom'

// import {
//   Route,
//   NavLink,
//   BrowserRouter as Router,
//   Switch,
// } from 'react-router-dom'
// import App from './App'
// import Current from './Current'

// const routing = (
//   <Router>
//     <div className = 'box'>
//       <ul>
//         <li>
//           <NavLink exact activeClassName="active" to="/">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink exact activeClassName="active" to="/Current">
//             Current
//           </NavLink>
//         </li>
//       </ul>
//       <hr />
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route path="/Current" component={Current} />
       
        
//       </Switch>
//     </div>
//   </Router>
// )
// ReactDOM.render(routing, document.getElementById('root'))



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
