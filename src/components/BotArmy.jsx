import React from 'react'
import BotCard from "../components/BotCard"

function BotArmy(props) {

  const displayBots = props.bots.map(bot => {
    return <BotCard bot={bot} action={props.action} removeCard={props.removeCard} />
  })


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {displayBots}
        </div>
      </div>
    </div>
  )

}
export default BotArmy