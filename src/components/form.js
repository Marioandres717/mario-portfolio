import React, { Fragment, useReducer } from "react"

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
      <div
        as="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: 768,
          mr: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={updateFieldValue("name")}
          />
        </label>
        <label>
          Email value
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={updateFieldValue("email")}
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            value={state.subject}
            onChange={updateFieldValue("subject")}
          />
        </label>
        <label>
          Body
          <textarea
            name="body"
            value={state.body}
            onChange={updateFieldValue("body")}
          />
        </label>
        <button mt={2}>Send</button>
      </div>
    </Fragment>
  )
}

export default Form
