import React, { useState } from "react";
import "./Header.css";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url:
        "https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1513863842",
    },
    {
      name: "mark zuckerberg",
      url:
        "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fbriansolomon%2Ffiles%2F2016%2F04%2Fmark-zuckerberg.jpg",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__tinderCardContainer ">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
