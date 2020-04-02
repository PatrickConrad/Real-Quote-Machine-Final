import React, {Component} from 'react';
import {random } from 'lodash'
import QuoteMachine from './components/QuoteMachine'
import 'typeface-roboto';
import './App.css';

 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        quotes: [],
        selectedQuoteIndex: null
     }

     this.assignedQuote = this.assignedQuote.bind(this)
     this.choosenQuote = this.choosenQuote.bind(this);
   }
   
   componentDidMount(){
     fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
     .then(data => data.json())
     .then(quotes=> this.setState({quotes}, this.assignedQuote))
   }

   get selectedQuote(){
     if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
       return undefined;
     }
     return this.state.quotes[this.state.selectedQuoteIndex];

    }
   

choosenQuote(){
  if(!this.state.quotes.length ){
  return undefined;
  }

  // random is from lodash
  return random(0, this.state.quotes.length-1)
}

assignedQuote(){
  this.setState({selectedQuoteIndex: this.choosenQuote()})
}

  render() {
    // console.log(this.state.quotes)
    console.log(this.state.selectedQuoteIndex)

    return (
    
        <div className="App">
        
          <div id="quote-box">
            {
              this.selectedQuote ?
            <QuoteMachine selectedQuote={this.selectedQuote} assignedQuote={this.assignedQuote}/>
            : null
            }
            
          </div>
      </div>

         
    )
  }
}

export default App;




