import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import TabelaVendas from './Table';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Generate Order Data
function createData( id, cartao, valor, combustivel, quantidade, data, status){
  return {id, cartao, valor, combustivel, quantidade, data, status};
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
    createData(0, 'VISA ⠀•••• 3719', 123.0, 'Gasolina', 30.0, '16 Mar, 2019', 0),
    createData(1, 'VISA ⠀•••• 2574', 108.10, 'Gasolina', 26.365, '16 Mar, 2019', 0),
    createData(2, 'MC   ⠀•••• 1253', 70.37, 'Etanol'  , 18.52 , '16 Mar, 2019', 0),
    createData(3, 'AMEX ⠀•••• 2000', 41.0, 'Gasolina', 10.0, '16 Mar, 2019', 0),
    createData(4, 'VISA ⠀•••• 5919', 180.60, 'Diesel' , 58.26,'15 Mar, 2019', 0),
  ]);

  const [fieis, setFieis] = React.useState([]);
  const [fraudes, setFraudes] = React.useState([]);

  // essa função recebe do modal o status da venda selecionado pelo usuário e atualiza os arrays
  function changeStatus(id, status){  
    
    suspeitas[id].status = status;

    if(status === 1){
      fraudes.push(suspeitas[id]);
      setFraudes(Object.values(fraudes));
    }
    else if(status === 2){ 
      fieis.push(suspeitas[id]);   
      setFieis(Object.values(fieis));
    }

    suspeitas.splice(id,1);
    setSuspeitas(Object.values(suspeitas));  
  }

  function undoStatus(id, status){
    if(status === 1){
      fraudes[id].status = 0;
      suspeitas.push(fraudes[id]);
      setSuspeitas(Object.values(suspeitas));

      fraudes.splice(id,1);
      setFraudes(Object.values(fraudes));
    }
    else{
      fieis[id].status = 0;
      suspeitas.push(fieis[id]);
      setSuspeitas(Object.values(suspeitas));

      fieis.splice(id,1);
      setFieis(Object.values(fieis));
    }
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
          <TabelaVendas vendas = {fraudes} statusVenda = {changeStatus} funcaoUndo={undoStatus}/> 
        </Paper>       
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Vendas Fiéis</Title>
          <TabelaVendas vendas = {fieis} statusVenda = {changeStatus} funcaoUndo={undoStatus}/>  
        </Paper>        
      </Grid>        
    </React.Fragment>    
  );
}
