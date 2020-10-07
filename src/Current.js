import React from 'react'
import { Route, Link } from 'react-router-dom'
const cur = ({ match }) => <p>{match.params.id}</p>
class Current extends React.Component {
  render() {
    const { url } = this.props.match
    return (
      <div>
        <h1>Current</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/cur/1">Issue 1 </Link>
          </li>
          
        </ul>
        <Route path="/users/:id" component={cur} />
      </div>
    )
  }
}
export default Current