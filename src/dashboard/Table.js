import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from './Modal';
import ModalDesfazer from './ModalDesfazer'

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
              {/* Modais recebem as funçoes que controlam os status das vendas e outros parâmetros necessários.
                  O acesso ao modal é disponibilizado de acordo com a classificação da venda, para que seja possível
                  classificá-la ou desfazer a ação.*/}  
              <TableCell align="right">{row.status === 0 ? <Modal statusVenda = {props.statusVenda} mId = {row} vendas = {rows}/> : 
                                                            <ModalDesfazer statusVenda={row.status} funcaoUndo={props.funcaoUndo} mId = {row} vendas = {rows}/>}
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </React.Fragment>
    );     
}