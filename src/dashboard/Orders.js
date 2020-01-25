import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import TabelaVendas from './Table';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Generate Order Data
function createData( id, cartao, valor, combustivel, data, status){
  return {id, cartao, valor, combustivel, data, status};
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function Orders() {

  //Arrays de vendas são criados aqui para facilitar a manipulação de seus estados. 
  const [suspeitas, setSuspeitas] = React.useState([
    createData(0, 'VISA ⠀•••• 3719', 112.44, 'Gasolina', '16 Mar, 2019', 0),
    createData(1, 'VISA ⠀•••• 2574', 53.99, 'Gasolina', '16 Mar, 2019', 0),
    createData(2, 'MC   ⠀•••• 1253', 100.81, 'Etanol'  , '16 Mar, 2019', 0),
    createData(3, 'AMEX ⠀•••• 2000', 30.39, 'Gasolina', '16 Mar, 2019', 0),
    createData(4, 'VISA ⠀•••• 5919', 112.79, 'Diesel'  , '15 Mar, 2019', 0),
  ]);

  const [fieis, setFieis] = React.useState([]);
  const [fraudes, setFraudes] = React.useState([]);

  // essa função recebe do modal o status da venda selecionado pelo usuário e atualiza os arrays
  function changeStatus(id, status){  

    suspeitas[id].status = status;

    if(status === 1){
      fraudes.push(suspeitas[id]);
      setFraudes(Object.values(fraudes));
      //console.log(fraudes);
    }
    else if(status === 2){ 
      fieis.push(suspeitas[id]);   
      setFieis(Object.values(fieis));
     //console.log(fieis);
    }

    //setFraudes(fraudes);
    suspeitas.splice(id,1);
    setSuspeitas(Object.values(suspeitas));  
    console.log(suspeitas);  
  }

  const classes = useStyles();
  return (    
    <React.Fragment>       
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Vendas Suspeitas</Title>                   
          <TabelaVendas vendas = {suspeitas} statusVenda = {changeStatus}/>
        </Paper>
         
      </Grid>
         
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Vendas Fraudulentas</Title>
          <TabelaVendas vendas = {fraudes} statusVenda = {changeStatus}/> 
        </Paper>       
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Vendas Fiéis</Title>
          <TabelaVendas vendas = {fieis} statusVenda = {changeStatus}/>  
        </Paper>        
      </Grid>        
    </React.Fragment>    
  );
}
