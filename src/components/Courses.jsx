import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

const courses = [
  {
    id: "CS 122B",
    name: "Project in Databases and Web Applications",
  },
  {
    id: "CS 171",
    name: "Introduction to Artificial Intelligence",
  },
  {
    id: "CS 178",
    name: "Machine Learning and Data-Mining",
  },
  {
    id: "CS 122A",
    name: "Introduction to Data Management",
  },
  {
    id: "ICS 45J",
    name: "Programming in Java",
  },
  {
    id: "ICS 46",
    name: "Data Structure Implementation and Analysis",
  },
  {
    id: "IN4MATX 43",
    name: "Introduction to Software Engineering",
  },
  {
    id: "ICS 45C",
    name: "Programming in C/C++",
  },
  {
    id: "ICS 33",
    name: "Intermediate Programming (Python)",
  },
];

export default function Courses() {
  return (
    <Box
      display="flex"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      <Table
        sx={{
          maxWidth: 500,
          borderWidth: 1,
          borderColor: "white",
          borderStyle: "solid",
        }}
        aria-label="coursework table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Department and ID</TableCell>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
              key={course.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ color: "white" }}>
                {course.id}
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                {course.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
