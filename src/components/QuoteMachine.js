import React from 'react'
import QuoteButton from './QuoteButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter } from '@fortawesome/free-brands-svg-icons';


const QuoteMachine =  (props)=> {
    return(

    <>
        <div className="quoteArea">
            <div>
                <h1 id="text">
                    {`"${props.selectedQuote.quote}"`}
                </h1> 
                <p id="author">
                    {`- ${props.selectedQuote.author}`}
                </p>
            </div>
        </div>
        
        <div className="buttonArea">
        <QuoteButton  buttonDisplayName="Next Quote" clickHandler={props.assignedQuote} />
        
        <a id="tweet-quote" target='_blank' href={encodeURI(`https://twitter.com/intent/tweet?text="${props.selectedQuote.quote}" - ${props.selectedQuote.author} `)} >
               <button id="tweetQuote">
                    <FontAwesomeIcon icon={faTwitter} size="md">
                    
                    </FontAwesomeIcon>
               </button>
            </a>
        
        </div>
    </>
    )
};

export default QuoteMachine