import React from 'react';

const counterStyles = {
    marginBottom: 40
}

const ReadRecipesCounter = ({counter}) => {
    return (
        <div className="text-center" style={counterStyles}>
            <h2>
                Read recipes: {counter}
            </h2>
        </div>
    )
}

export default ReadRecipesCounter;
