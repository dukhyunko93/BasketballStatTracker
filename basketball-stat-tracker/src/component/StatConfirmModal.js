import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, Backdrop, Fade } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ConfirmModal({submitHandler, handleClose, open}) {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Are you finished?</h2>
                    <p id="transition-modal-description">You will not be able to edit when you press yes.</p>
                    <Button onClick={submitHandler} >Yes</Button> <Button onClick={handleClose}>No</Button>
                </div>
            </Fade>
        </Modal>
    );
}