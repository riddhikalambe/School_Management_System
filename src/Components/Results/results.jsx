import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import {
  DeleteOutlineOutlined,
  Search,
  SearchOffOutlined,
} from '@mui/icons-material';
import { stuData } from '../../utils/Constants';

const Results = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [formattedData, setFormattedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const formatted = [];
    stuData.forEach((student) => {
      student.academics.forEach((academic) => {
        formatted.push({
          name: student.name,
          group: student.group,
          year: academic.year,
          english: academic.subjects.English,
          hindi: academic.subjects.Hindi,
          maths: academic.subjects.Maths,
          science: academic.subjects.Science,
          grade: academic.grade,
          result: academic.result,
          percentage: academic.percentage,
          attendance: academic.attendance,
        });
      });
    });
    setFormattedData(formatted);
    setFilteredData(formatted);
  }, []);

  const handleFilterData = () => {
    let tempData = formattedData;

    if (selectedYear) {
      tempData = tempData.filter((item) => item.year === selectedYear);
    }
    if (selectedGroup) {
      tempData = tempData.filter((item) => item.group === selectedGroup);
    }

    setFilteredData(tempData);
  };

  const handleClearFilters = () => {
    setSelectedYear('');
    setSelectedSubject('');
    setSelectedGroup('');
    setFilteredData(formattedData);
  };

  return (
    <div className="container-fluid">
 <div className="col-md-12 col-sm-6 mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Results From 2019 - 2024</h5>
          <TableContainer component={Paper} style={{ maxHeight: 300 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <FormControl variant="outlined" style={{ width: '100px' }}>
                      <InputLabel id="year-filter-label">Year</InputLabel>
                      <Select
                        labelId="year-filter-label"
                        id="year-filter"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        label="Year"
                        name="year"
                      >
                        <MenuItem value="">
                          <em>All</em>
                        </MenuItem>
                        {['2019', '2020', '2021', '2022', '2023', '2024'].map(
                          (year, index) => (
                            <MenuItem key={index} value={year}>
                              {year}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" style={{ width: '100px' }}>
                      <InputLabel id="subject-filter-label">Subject</InputLabel>
                      <Select
                        labelId="subject-filter-label"
                        id="subject-filter"
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        label="Subject"
                        name="subject"
                      >
                        <MenuItem value="">
                          <em>All</em>
                        </MenuItem>
                        {['English', 'Hindi', 'Maths', 'Science'].map(
                          (subject, index) => (
                            <MenuItem key={index} value={subject}>
                              {subject}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" style={{ width: '100px' }}>
                      <InputLabel id="group-filter-label">Group</InputLabel>
                      <Select
                        labelId="group-filter-label"
                        id="group-filter"
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value)}
                        label="Group"
                        name="group"
                      >
                        <MenuItem value="">
                          <em>All</em>
                        </MenuItem>
                        {['Group 1', 'Group 2'].map((group, index) => (
                          <MenuItem key={index} value={group}>
                            {group}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell onClick={handleFilterData}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Search />}
                    >
                      Filter
                    </Button>
                  </TableCell>
                  <TableCell onClick={handleClearFilters}>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteOutlineOutlined />}
                    >
                      Clear
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Group</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Year</strong>
                  </TableCell>
                  <TableCell>
                    <strong>English</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Hindi</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Maths</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Science</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Grade</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Result</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Percentage</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Attendance</strong>
                  </TableCell>
                </TableRow>
                {filteredData.map((academic, index) => (
                  <TableRow key={index}>
                    <TableCell>{academic.name}</TableCell>
                    <TableCell>{academic.group}</TableCell>
                    <TableCell>{academic.year}</TableCell>
                    <TableCell>{academic.english}</TableCell>
                    <TableCell>{academic.hindi}</TableCell>
                    <TableCell>{academic.maths}</TableCell>
                    <TableCell>{academic.science}</TableCell>
                    <TableCell>{academic.grade}</TableCell>
                    <TableCell>{academic.result}</TableCell>
                    <TableCell>{academic.percentage}</TableCell>
                    <TableCell>{academic.attendance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Results;
