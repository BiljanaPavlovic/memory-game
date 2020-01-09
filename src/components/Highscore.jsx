import React, { useEffect, useState } from 'react';
import Score from './Score';
import { getScores } from '../util/coetus-service';

const Highscore = ({ history }) => {

  const [scores,setScores] = useState([])

  useEffect(() => {
    getScores()
    .then(data => {
        setScores(data.data)
    })
  },[])

  


    return (
        <ol>
            {scores.sort((b,a) => {
              return a.score - b.score
            }).slice(0,10).map((score) => {
                return <Score key={score.score_id} score={score.score} userID={score.user_id} history={history}/>
            })}
        </ol>
    )
}

export default Highscore