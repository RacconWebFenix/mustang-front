import React, { useState, useEffect } from "react";
import { Api } from "../../Api/Api";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./style.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const getCart = Api.cart;
  const [dataCart, setDataCart] = useState([]);

  const loadDataCart = () => {
    setDataCart(getCart);
  };
  useEffect(() => {
    loadDataCart();
  });
  return (
    <div className="tableCart">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "auto" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tipo</StyledTableCell>
              <StyledTableCell align="right">Preço</StyledTableCell>
              <StyledTableCell align="right">Quantidade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataCart.map((row) => (
              <StyledTableRow key={row.tipo}>
                <StyledTableCell component="th" scope="row">
                  <p>{row.tipo}</p>
                  <p>{row.marca}</p>
                </StyledTableCell>
                <StyledTableCell align="right">{row.preco}</StyledTableCell>
                <StyledTableCell align="right">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "2" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Quantidade"
                      variant="outlined"
                    />
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
