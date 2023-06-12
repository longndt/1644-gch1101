import React, { useEffect, useState } from "react";
import axios from "axios";
const baseURL = "http://localhost:3001";

const Student = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseURL);
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container text-center col-md-8 mt-3 mb-3">
      <table border="1">
        <tr>
          <th colspan="6">STUDENT LIST</th>
        </tr>
        <tr>
          <th>Full Name</th>
          <th>Birth year</th>
          <th>Email</th>
          <th>Grade</th>
          <th>Gender</th>
        </tr>
        {data.map((student) => (
          <tr>
            <th>{student.full_name}</th>
            <th>{student.birth_year}</th>
            <th>{student.email}</th>
            <th>{student.grade}</th>
            <th>{student.gender}</th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Student;
