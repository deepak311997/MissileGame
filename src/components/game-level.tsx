import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { red, green, blue } from '@material-ui/core/colors';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import GameLevelContext from '../context/game-level-context';
import { Typography } from '@material-ui/core';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const BlueRadio = withStyles({
    root: {
        color: blue[400],
        '&$checked': {
            color: blue[600],
        },
    },
    checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);


export default function RadioButtons() {
    const gameContext = useContext(GameLevelContext);
    const level = gameContext["level"];
    const handleLevelChange = gameContext["handleLevelChange"];

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        handleLevelChange(Number(event.target.value));
    }

    return (
        <div className='level-container'>
            <GreenRadio
                checked={level === 1}
                onChange={handleChange}
                value={1}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Easy' }}
            />
            <Typography>
                Easy
            </Typography>
            <BlueRadio
                checked={level === 2}
                onChange={handleChange}
                value={2}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Medium' }}
            />
            <Typography>
                Medium
            </Typography>
            <RedRadio
                checked={level === 3}
                onChange={handleChange}
                value={3}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Hard' }}
            />
            <Typography>
                Hard
            </Typography>
        </div>
    );
}
