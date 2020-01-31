import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import orange from '@material-ui/core/colors/orange'

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
  const [openFiel, setOpenFiel] = React.useState(false);
  const [openFraude, setOpenFraude] = React.useState(false);

  const handleOpenFiel = () => {
      setOpenFiel(true);
  };

  const handleCloseFiel = () => {
      setOpenFiel(false);
  };

  const handleOpenFraude = () => {
      setOpenFraude(true);
  };

  const handleCloseFraude = () => {
      setOpenFraude(false);
  };

  const handleFraude = () => {
    //vendas são removidas de acordo com o retorno do seu índice
    props.statusVenda(props.vendas.indexOf(props.mId),1);   
    handleCloseFraude();
  };

  const handleFiel = () => {
    //vendas são removidas de acordo com o retorno do seu índice
    props.statusVenda(props.vendas.indexOf(props.mId),2);  
    handleCloseFiel();
  };

  return (    
      <div>
          {/* Como os dois botões abaixo sempre executam o onClick assim que este modal é chamado, foi necessário
              criar dois modais diferentes, que aparecem de acordo com o botão selecionado. */}
        <Button className={classes.button} variant="contained" color="primary" onClick={handleOpenFiel}>
                Fiel
        </Button>
        <Button className={classes.button} variant="contained" color="secondary" onClick={handleOpenFraude}>
                Fraudulenta
        </Button>

          <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openFiel}
              onClose={handleCloseFiel}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                  timeout: 500,
              }}
          >
              <Fade in={openFiel}>
                  <div className={classes.paper}>
                      <h2>Confirmação</h2>
                      <p>
                            Você classificou a venda como fiel. Deseja confirmar a sua ação?
                      </p>

                      <Button className={classes.button} variant="contained" color="primary" onClick={handleFiel}>
                            Sim
                      </Button>
                        <Button className={classes.button} variant="contained" color="secondary" onClick={handleCloseFiel}>
                            Não
                        </Button>                 
                  </div>
              </Fade>
          </Modal>

          <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openFraude}
              onClose={handleCloseFraude}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                  timeout: 500,
              }}
          >
              <Fade in={openFraude}>
                  <div className={classes.paper}>
                      <h2>Confirmação</h2>
                      <p>
                            Você classificou a venda como fraudulenta. Deseja confirmar a sua ação?
                      </p>

                      <Button className={classes.button} variant="contained" color="primary" onClick={handleFraude}>
                            Sim
                      </Button>
                        <Button className={classes.button} variant="contained" color="secondary" onClick={handleCloseFraude}>
                            Não
                        </Button>                       
                  </div>
              </Fade>
          </Modal>
      </div>
  );
}