import React, { Component } from 'react'
import JournalForm from './JournalForm';
import Entries from './Entries';


class JournalPage extends Component {
  state = {
    entries: [

    ]
  }

  removeEntry = index => {
    const { entries } = this.state

    this.setState({
      entries: entries.filter ((entry, i) => {
        return i != index
      })
    })
  }

  handleSubmit = entry => {
    this.setState({ entries: [...this.state.entries, entry]})
  }

  render () {
    const { entries } = this.state;
    
    return (
      <div className="Journal Page container">
          <h1 style={{paddingBottom: "30px", paddingTop: "10px"}}>Moonchild Journal</h1>
          <JournalForm handleSubmit={this.handleSubmit}/>
          <Entries entryData={entries} removeEntry={this.removeEntry}/>
      </div>
    );
  }
}

export default JournalPage;