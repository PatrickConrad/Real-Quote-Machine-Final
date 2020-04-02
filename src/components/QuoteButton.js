import React from 'react';

const QuoteButton = ({buttonDisplayName, clickHandler}) => 
(<button id="new-quote" onClick={clickHandler}>{buttonDisplayName}</button>);

export default QuoteButton