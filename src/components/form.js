import React, { Fragment, useReducer } from "react"

import * as formStyles from "../styles/form.module.css"

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
  status: "IDLE",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value }

    case "updateStatus":
      return { ...state, status: action.status }

    case "reset":
    default:
      return INITIAL_STATE
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const setStatus = status => dispatch({ type: "updateStatus", status })

  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setStatus("PENDING")

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then(response => response.json())
      .then(response => {
        setStatus("SUCCESS")
      })
      .catch(error => {
        setStatus("ERROR")
      })
  }

  if (state.status === "SUCCESS") {
    return (
      <p>
        Message sent!
        <button type="reset" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </p>
    )
  }

  return (
    <Fragment>
      {state.status === "ERROR" && (
        <p>Something went wrong. Please try again.</p>
      )}
      <form className={formStyles.form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={updateFieldValue("name")}
        />

        <label>Email value</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={updateFieldValue("email")}
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={state.subject}
          onChange={updateFieldValue("subject")}
        />
        <label>Body</label>
        <textarea
          name="body"
          value={state.body}
          onChange={updateFieldValue("body")}
        />
        <button>Send</button>
      </form>
    </Fragment>
  )
}

export default Form
