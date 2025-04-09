import React from "react";
import "./GridView.css";
const GridView = () => {
  let students = [
    {
      name: "John Doe",
      phone: "+1234567890",
      age: 20,
      content: "Computer Science student at RVS Engineering College",
      cgpa: 8.5,
    },
    {
      name: "Jane Smith",
      phone: "+1987654321",
      age: 21,
      content:
        "Electronics and Communication student at RVS Engineering College",
      cgpa: 8.8,
    },
    {
      name: "Michael Johnson",
      phone: "+1122334455",
      age: 22,
      content: "Mechanical Engineering student at RVS Engineering College",
      cgpa: 7.9,
    },
    {
      name: "Emily Davis",
      phone: "+1555666777",
      age: 20,
      content: "Civil Engineering student at RVS Engineering College",
      cgpa: 8.2,
    },
    {
      name: "David Wilson",
      phone: "+1444333222",
      age: 23,
      content: "Information Technology student at RVS Engineering College",
      cgpa: 9.0,
    },
    {
      name: "Sarah Brown",
      phone: "+1666777888",
      age: 21,
      content:
        "Electrical and Electronics Engineering student at RVS Engineering College",
      cgpa: 8.7,
    },
    {
      name: "Christopher Lee",
      phone: "+1777888999",
      age: 22,
      content: "Computer Science student at RVS Engineering College",
      cgpa: 8.4,
    },
    {
      name: "Olivia Taylor",
      phone: "+1888999000",
      age: 20,
      content: "Biomedical Engineering student at RVS Engineering College",
      cgpa: 8.6,
    },
    {
      name: "Matthew Clark",
      phone: "+1999000111",
      age: 23,
      content: "Automobile Engineering student at RVS Engineering College",
      cgpa: 7.8,
    },
    {
      name: "Emma Martinez",
      phone: "+1222111333",
      age: 21,
      content:
        "Artificial Intelligence and Data Science student at RVS Engineering College",
      cgpa: 9.1,
    },
];

  return (
    <div className="grid-view">
      {students.map((students, index) => (
        <div className="student" key={index}>
          <h2>{students.name}</h2>
          <p>Phone: {students.phone}</p>
          <p>Age: {students.age}</p>
          <p>Content: {students.content}</p>
          <p>CGPA: {students.cgpa}</p>
        </div>
      ))}
    </div>
  );
};

export default GridView;