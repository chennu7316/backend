"use client";
import React from "react";
import { useState,useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../car_models/ModelsDataTable.css"
import axios from "axios";

function createData(
  model: string,
  brand: string,
  status: string,
  createdDate: string,
  updatedDate: string,
) {
  return { model, brand, status, createdDate, updatedDate };
}

// const rows = [
//   createData("Compass", "Jeep", "Active", "30/08/2023", "30/08/2023"),
//   createData("Compass", "Jeep", "Active", "30/08/2023", "30/08/2023"),
//   createData("Compass", "Jeep", "Active", "30/08/2023", "30/08/2023"),
//   createData("Compass", "Jeep", "Active", "30/08/2023", "30/08/2023"),
//   createData("Compass", "Jeep", "Active", "30/08/2023", "30/08/2023"),
//   createData("Compass", "Jeep", "Active", "30/08/2023", "30/08/2023"),
// ];

const ModelsDataTable = () => {

  const [rows,setrows]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/user/getAllCarModel")
    .then((res)=>{
  setrows(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Model</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Brand
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Status
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Created Date
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Updated Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.model}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="center">{row.Brand}</TableCell>
              <TableCell align="center">{row.Status}</TableCell>
              <TableCell align="center">{row.CreatedDate}</TableCell>
              <TableCell align="center">{row.UpdatedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ModelsDataTable
