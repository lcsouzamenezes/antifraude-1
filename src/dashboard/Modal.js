import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import orange from '@material-ui/core/colors/orange'
import ModalConfirmacao from './ModalConfirmacao'

const useStyles = makeStyles(theme => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 0,
  },
  paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: 15,
  },
  modalButton: {
    color: orange[600],
    borderColor: orange[600],
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 550,
    },
  },
}));

export default function AnimatedModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return (    
      <div>
          <Button variant="outlined" onClick={handleOpen} className={classes.modalButton}>
              A validar
          </Button>

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
                      <h2>Classificação da Venda</h2>
                      <p>
                          Aqui você pode classificar a venda como fraudulenta ou fiel e justificar a sua escolha.
                      </p>                     

                      <form className={classes.root} noValidate autocomplete="off">
                        <div>
                        <TextField
                          id="outlined-textarea"
                          label="Comentário"
                          placeholder="Justifique sua classificação da venda."
                          multiline
                          variant="outlined"
                        />                        
                        </div>
                      </form>  

                       <ModalConfirmacao statusVenda={props.statusVenda} vendas={props.vendas} mId={props.mId}/>                    
                  </div>
              </Fade>
          </Modal>
      </div>
  );
}