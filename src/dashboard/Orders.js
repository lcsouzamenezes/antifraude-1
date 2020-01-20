import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData( id, cartao, valor, combustivel, data, status ) {
  return {id, cartao, valor, combustivel, data, status};
}

const rows = [
  createData(0, 'VISA ⠀•••• 3719', 312.44, 'Gasolina', '16 Mar, 2019', 'A validar'),
  createData(1, 'VISA ⠀•••• 2574', 866.99, 'Gasolina', '16 Mar, 2019', 'A validar'),
  createData(2, 'MC ⠀•••• 1253'  , 100.81, 'Etanol'  , '16 Mar, 2019', 'A validar'),
  createData(3, 'AMEX ⠀•••• 2000', 654.39, 'Gasolina', '16 Mar, 2019', 'A validar'),
  createData(4, 'VISA ⠀•••• 5919', 212.79, 'Diesel'  , '15 Mar, 2019', 'A validar'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Vendas Suspeitas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Número do Cartão</TableCell>
            <TableCell>Valor da Compra</TableCell>
            <TableCell>Combustível</TableCell>
            <TableCell>Data</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.cartao}</TableCell>
              <TableCell>{row.valor}</TableCell>
              <TableCell>{row.combustivel}</TableCell>
              <TableCell>{row.data}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}
