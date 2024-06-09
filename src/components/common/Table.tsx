"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import MuiTableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import MuiTableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";

const TableCell = styled(MuiTableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const TableRow = styled(MuiTableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const flexPropertiesData = [
  {
    property: "display",
    description: "Specifies the type of flex container for the flex items.",
    options: [
      { id: "display-block", label: "block" },
      { id: "display-flex", label: "flex" },
    ],
    resultId: "display-container",
    resultItems: ["1", "2", "3"],
  },
  {
    property: "flex-direction",
    description: "Defines the direction of the main axis.",
    options: [
      { id: "flex-direction-row", label: "row" },
      { id: "flex-direction-row-reverse", label: "row-reverse" },
      { id: "flex-direction-column", label: "column" },
      { id: "flex-direction-column-reverse", label: "column-reverse" },
    ],
    resultId: "flex-direction-container",
    resultItems: ["1", "2", "3"],
  },
  {
    property: "flex-wrap",
    description:
      "Determines whether the flex items are forced into a single line or can be wrapped onto multiple lines.",
    options: [
      { id: "flex-wrap-nowrap", label: "nowrap" },
      { id: "flex-wrap-wrap", label: "wrap" },
      { id: "flex-wrap-wrap-reverse", label: "wrap-reverse" },
    ],
    resultId: "flex-wrap-container",
    resultItems: ["1", "2", "3", "4", "5"],
  },
  // **************************************************************
  {
    property: "flex-flow",
    description:
      "Shorthand property for setting both the flex-direction and flex-wrap properties.",
    options: [
      { id: "flex-flow-row-nowrap", label: "row nowrap" },
      { id: "flex-flow-row-wrap", label: "row wrap" },
      { id: "flex-flow-row-wrap-reverse", label: "row wrap-reverse" },
      { id: "----------------", label: "----------------" },
      { id: "flex-flow-row-reverse-nowrap", label: "row-reverse nowrap" },
      { id: "flex-flow-row-reverse-wrap", label: "row-reverse wrap" },
      {
        id: "flex-flow-row-reverse-wrap-reverse",
        label: "row-reverse wrap-reverse",
      },
      { id: "----------------", label: "----------------" },
      { id: "flex-flow-column-nowrap", label: "column nowrap" },
      { id: "flex-flow-column-wrap", label: "column wrap" },
      { id: "flex-flow-column-wrap-reverse", label: "column wrap-reverse" },
      { id: "----------------", label: "----------------" },
      { id: "flex-flow-column-reverse-nowrap", label: "column-reverse nowrap" },
      { id: "flex-flow-column-reverse-wrap", label: "column-reverse wrap" },
      {
        id: "flex-flow-column-reverse-wrap-reverse",
        label: "column-reverse wrap-reverse",
      },
    ],
    resultId: "",
    resultItems: [],
  },
  {
    property: "justify-content",
    description: "Aligns flex items along the main axis.",
    options: [{ id: "justify-content-center", label: "center" }],
    resultId: "",
    resultItems: [],
  },
  {
    property: "align-items",
    description: "Aligns flex items along the cross axis.",
    options: [{ id: "align-items-center", label: "center" }],
    resultId: "",
    resultItems: [],
  },
  {
    property: "align-content",
    description: "Aligns a flex containerís lines within when there is extra space in the cross-axis.",
    options: [{ id: "align-items-space-between", label: "space-between" }],
    resultId: "",
    resultItems: [],
  },
  {
    property: "order",
    description: "Specifies the order of a flex item relative to the other flex items within the same container.",
    options: [{ id: "order-2", label: "2" }],
    resultId: "",
    resultItems: [],
  },
  {
    property: "flex-grow",
    description: "Determines how much a flex item will grow relative to the rest of the flex items inside the same container.",
    options: [{ id: "flex-grow-1", label: "1" }],
    resultId: "",
    resultItems: [],
  },
  {
    property: "flex-shrink",
    description: "Specifies the ability of a flex item to shrink if necessary.",
    options: [{ id: "flex-shrink-2", label: "2" }],
    resultId: "",
    resultItems: [],
  },
  {
    property: "flex-basis",
    description: "Defines the initial size of a flex item along the main axis before any available space is distributed.",
    options: [{ id: "flex-basis-200px", label: "200px" }],
    resultId: "",
    resultItems: [],
  },
  {
    property: "flex",
    description: "Shorthand property for setting the flex-grow, flex-shrink, and flex-basis properties.",
    options: [{ id: "flex-1-2-200px", label: "1 2 200px" }],
    resultId: "",
    resultItems: [],
  },
  {
    property: "align-self",
    description: "Allows the default alignment to be overridden for individual flex items.",
    options: [{ id: "align-self-flex-end", label: "flex-end" }],
    resultId: "",
    resultItems: [],
  },
];

export default function MainTable() {
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Flex Box
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <MuiTableRow>
              <TableCell>Property</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Result</TableCell>
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {flexPropertiesData.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.property}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  {row.options.map((option) => (
                    <div
                      key={option.id}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input type="radio" id={option.id} name={row.property} />
                      <label htmlFor={option.id}>{option.label}</label>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <div
                    id={row.resultId}
                    style={{
                      display: "flex",
                      backgroundColor: "#995db5",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    {row.resultItems.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor: "#f7941f",
                          width: "10px",
                          height: "10px",
                          margin: "1px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
