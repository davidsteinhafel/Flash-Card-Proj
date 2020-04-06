import React from 'react'


export default function FlashCard({flashCard}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={flashCard.complete}/>
            {flashCard.name}
            </label>  
        </div>
    )
}
