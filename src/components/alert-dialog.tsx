import React from "react";

import { DialogTitle, DialogContent, DialogContentText, Button, Dialog, DialogActions } from "@material-ui/core";

export default function AlertDialog(props){

    return(
        <Dialog
            open={true}
            onClose={props.handleDialogAlert}
            aria-labelledby="responsive-dialog-title"
    >
        <DialogTitle id="responsive-dialog-title">Game Alert</DialogTitle>
        <DialogContent>
        <DialogContentText>
            {props.isLost ? 'Sorry, you lost the game !!' : 'Cheers !! You won the game :D'}
        </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleDialogAlert} color="primary">Close</Button>
            <Button onClick={props.handleDialogAlert} color="primary">Restart</Button>
        </DialogActions>
    </Dialog>
    );
};
