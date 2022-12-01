import React from "react"
import Card from "./Card"
import cardsData from "../data.js"

export default function Main() {
    
    const cards = cardsData.map(card => {
        return (
            <Card 
            imageUrl={card.imageUrl} 
            location={card.location} 
            googleMapsUrl={card.googleMapsUrl}
            title={card.title}
            startDate={card.startDate}
            endDate={card.endDate}
            description={card.description} />
        )
    })
    return (
        <div className="main">
        {cards}
        </div>
    )
}