"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState ,useEffect} from "react";
import axios from "axios";

// function createData(
//   brand: string,
//   slug: string,
//   status: string,
//   createdDate: string,
//   updatedDate: string,
// ) {
//   return { brand, slug, status, createdDate, updatedDate };
// }
const CarDataTable = () => {
  const [rows,setrows]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/user/getAllBrands")
    .then((res)=>{
      console.log(res.data.data,"dataaaaaaaaaaaaaaaaaaaaa")
      setrows(res.data.data)
      console.log(rows,"rowssssssssssssssssssssss")
    })
    .catch((err)=>{
      console.log("ddddddddddddd")
    })
  },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Brand</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Slug
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
          {rows.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.slag}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.createdDate}</TableCell>
              <TableCell align="center">{row.updatedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CarDataTable
