import React, {useState, useContext, useEffect} from 'react';
import ReactSVG from 'react-svg';
import styled, {keyframes} from "styled-components";
import PlayerContext from '../context/player-info';
import { bounceInDown } from "react-animations";
import AlertDialog from './alert-dialog';

const Symbol = styled.div`
  width: 50px
  fill: #aaa;
  height: 50px;
  `;

const Player: React.FC = () => {
    const player = useContext(PlayerContext);
    const [ direction, setDirection ] = useState('right');
    const [ distance, updateDistance ] = useState(0);
    const [ isDialogOpen, handleDialog ] = useState(false);
    const [ isLost, setLost ] = useState(false);
    const [ isSuccess, setSuccess ] = useState(false);
    const isRunning = player["isRunning"];
    const toggleRunning = player["toggleRunning"];

    function changeDirection(event) {
      if (event.keyCode === 39) {
        setDirection('right');
        if(!isRunning) {
            toggleRunning();
        }
      }
      if (event.keyCode === 37) {
        setDirection('left');
          if(!isRunning) {
          toggleRunning();
        }
      }
    }

    function resetGameData() {
        setLost(false);
        setSuccess(false);
        updateDistance(0);
        if(isRunning) {
            toggleRunning();
        }
    }

    useEffect(() => {
      document.addEventListener('keydown', changeDirection);

      return () => document.removeEventListener('keydown', changeDirection);
    });

    useEffect(() => {
        const man = document.getElementById('man');
        const missiles = document.querySelectorAll('#missile');
        const destination = document.getElementById('destination');
        var missileBoundaries = new Array(3);
        var finalBoundary;

        if(missiles) {
            for(let i = 0;i<missileBoundaries.length;i++) {
                missileBoundaries[i] = missiles[i].getBoundingClientRect();
            }
        }
        if(destination) {
            finalBoundary = destination.getBoundingClientRect();
        }
        if(man) {
            const manBoundary = man.getBoundingClientRect();
            var isExploded = missileBoundaries.some(missile => !(missile.right < manBoundary.left - 5 ||
                missile.left > manBoundary.right - 5 ||  missile.bottom < manBoundary.top - 5 ||
                missile.top > manBoundary.bottom - 5));
            var isFinished = !(finalBoundary.right + 10 < manBoundary.left - 5 ||
                finalBoundary.left + 10 > manBoundary.right - 5 ||  finalBoundary.bottom < manBoundary.top - 5 ||
                finalBoundary.top > manBoundary.bottom - 5);
        }
        const distanceUpdate = setTimeout(() => {
            if(isExploded) {
                setLost(true);
            } else if(isFinished) {
                setSuccess(true);
            } else {
                if(direction === 'right' && isRunning) {
                    updateDistance(distance + 20);
                } else if(direction === 'left' && isRunning) {
                    updateDistance(distance - 20);
                }
            }
        }, 100);

        return () => clearTimeout(distanceUpdate);
    }, [isRunning, direction, distance]);

    useEffect(() => {
        if(isLost || isSuccess) {
            handleDialog(true);
        }
    }, [isLost, isSuccess]);

    const handleDialogAlert = () => {
        resetGameData();
        handleDialog(false);
    };

    return (
        <React.Fragment>
          <Symbol>
              <div style={{ transform: `translateX(${distance}px)` }}>
                  <ReactSVG
                      id='man'
                      src="running-man.svg"
                  />
              </div>
          </Symbol>
            {isDialogOpen && <AlertDialog
                handleDialogAlert={() => handleDialogAlert()}
                isLost={isLost}
            />}
        </React.Fragment>
    );
};

export default Player;
