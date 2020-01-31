import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 550,
    },
  },
}));

export default function AnimatedModal(props) {

    var status;

    if(props.statusVenda === 1){
        status = 'fraudulenta';
    }
    else{
        status = 'fiel';
    }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  //essa função chama a função "undoStatus" dentro de "Orders", possibilitando o usuário desfazer a classificação.
  const handleUndo = () => {
      props.funcaoUndo(props.vendas.indexOf(props.mId), props.statusVenda);
      handleClose();
  }

  return (    
      <div>
          <Button variant="outlined" onClick={handleOpen} color="primary">
              Validada
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
                          Você classificou a venda como {status}. Deseja desfazer esssa ação?
                      </p>         
                       
                      <Button className={classes.button} variant="contained" color="primary" onClick={handleUndo}>
                            Sim
                      </Button>
                      <Button className={classes.button} variant="contained" color="secondary" onClick={handleClose}>
                            Não
                     </Button>                     
                  </div>
              </Fade>
          </Modal>
      </div>
  );
}