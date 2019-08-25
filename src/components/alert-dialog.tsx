import React from "react";

import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";

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
