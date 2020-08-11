/** @jsx jsx */
import { jsx } from "theme-ui"
import { useReducer } from "react"
import Layout from "./layout"
import { Box, Input, Label, Button, Textarea, Styled } from "theme-ui"

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
        console.log(response)
        setStatus("SUCCESS")
      })
      .catch(error => {
        console.error(error)
        setStatus("ERROR")
      })
  }

  if (state.status === "SUCCESS") {
    return (
      <Layout>
        <p>
          Message sent!
          <Button type="reset" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </Button>
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      {state.status === "ERROR" && (
        <p>Something went wrong. Please try again.</p>
      )}
      <Styled.h2>I Would Love to heard from you!</Styled.h2>
      <Box
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
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={state.name}
            onChange={updateFieldValue("name")}
          />
        </Label>
        <Label>
          Email value
          <Input
            type="email"
            name="email"
            value={state.email}
            onChange={updateFieldValue("email")}
          />
        </Label>
        <Label>
          Subject
          <Input
            type="text"
            name="subject"
            value={state.subject}
            onChange={updateFieldValue("subject")}
          />
        </Label>
        <Label>
          Body
          <Textarea
            name="body"
            value={state.body}
            onChange={updateFieldValue("body")}
          />
        </Label>
        <Button mt={2}>Send</Button>
      </Box>
    </Layout>
  )
}

export default Form
