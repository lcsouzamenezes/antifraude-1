import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from '../Modal';

var rows = [];

export default function TabelaVendas(props){ 
    
  //converte o objeto de volta em array
    rows = Object.values(props.vendas);

      return(
        <React.Fragment>
            <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Número do Cartão</TableCell>
            <TableCell>Valor da Compra</TableCell>
            <TableCell>Combustível</TableCell>
            <TableCell>Quantidade (L)</TableCell>
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
              <TableCell>{row.quantidade}</TableCell>
              <TableCell>{row.data}</TableCell>
              {/* Modal recebe a função que controla o status da venda*/}  
              <TableCell align="right">{row.status === 0 ? <Modal statusVenda = {props.statusVenda} mId = {row} vendas = {rows}/> : 'Venda validada'}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </React.Fragment>
    );     
}