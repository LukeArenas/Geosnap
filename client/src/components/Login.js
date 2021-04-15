import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, setAuthenticated, setCreds } from '../store/actions/AuthAction'

//MAP STATE AND ACTIONS TO PROPS
const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapActionsToProps = (dispatch) => {
  return {
    login: (body) => dispatch(login(body)),
    setCreds: (e) => dispatch(setCreds(e)),
    setAuthenticated: () => dispatch(setAuthenticated())
  }
}

const Login = (props) => {
  //DESTRUCTURING
  const { password, username } = props.authState.loginCreds

  //USE HISTORY
  const history = useHistory()

  //METHODS
  const handleChange = (e) => {
    props.setCreds(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login(props.authState.loginCreds)
    props.setAuthenticated()
    history.push('/map')
  }

  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="username"
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <input
          name="password"
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <input className="page-buttons" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(Login)