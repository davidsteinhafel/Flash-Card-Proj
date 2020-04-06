import React from 'react'
import FlashCard from './FlashCard'
export default function FlashCardList({flashCards}) {
    return (
        flashCards.map(flashCard => {
            return <FlashCard key={flashCard.id} flashCard={flashCard}/>
        })
    )
}
