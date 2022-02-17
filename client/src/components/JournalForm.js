import React, { Component } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components'

class JournalForm extends Component {
  constructor(props) {
      super(props)

      this.initialState = {
          title: '',
          body: ''
      }

      this.state = this.initialState
  }

  handleChange = event => {
      const {name, value } = event.target 

      this.setState({
          [name]: value
      })
  }

  submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
  }

  render() {
      const {title, body } = this.state;

      return (
          <JournalFormContainer>
              <form>
                  <FormGroup>
                    <Label>Title</Label>
                        <Input 
                            placeholder="Got a catchy title?"
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                      <Label>Entry</Label>
                        <Input 
                            placeholder="What's on your mind?"
                            type="textarea"
                            name="body"
                            id="body"
                            value={body}
                            onChange={this.handleChange} />
                  </FormGroup>
              </form>
              <Button color="warning" onClick={this.submitForm}>Submit</Button>
          </JournalFormContainer>
      )
  }
}

export default JournalForm;

const JournalFormContainer = styled.div`
  border: solid 5px goldenrod;
  border-radius: 40px;
  height: 50%;
  width: 50%;
  padding: 100px;
  box-shadow: 5px 5px 15px black;
  
`;