import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import dataSet from './../dataset.json';

const rows = [
  {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2'
  },
  {
    id: 2,
    first_name: 'Giavani',
    last_name: 'Frediani',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
    ip_address: '229.179.4.212'
  },
  {
    id: 3,
    first_name: 'Noell',
    last_name: 'Bea',
    email: 'nbea2@imageshack.us',
    gender: 'Female',
    ip_address: '180.66.162.255'
  },
  {
    id: 4,
    first_name: 'Willard',
    last_name: 'Valek',
    email: 'wvalek3@vk.com'
  }
];

export default function DenseTable() {
  console.log('logdata', dataSet);
  const datafromAPI = dataSet.data.teams;
  console.log('this is data', datafromAPI);

  const [formValues, setFormValues] = useState({
    name: {
      value: '',
      error: false,
      errorMessage: 'You must some input',
      id: uuidv4()
    },
    text: {
      value: '',
      error: false,
      errorMessage: 'must enter text',
      id: uuidv4()
    },
    core: {
      value: '',
      error: false,
      errorMessage: 'do not enter text',
      id: uuidv4()
    }
  });

  const firstinput = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value
      }
    });
  };

  const seconInput = (e) => {
    const { text, value } = e.target;
    setFormValues({
      ...formValues,
      [text]: {
        ...formValues[text],
        value
      }
    });
  };

  const thrirdinput = (e) => {
    const { core, value } = e.target;
    setFormValues({
      ...formValues,
      [core]: {
        ...formValues[core],
        value
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === '') {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true
          }
        };
      }
    }

    setFormValues(newFormValues);
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Please enter your data</Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>UtilData</TableCell>
                {datafromAPI[0].memberList.map((member) => {
                  return (
                    <TableCell align="left">
                      {member.fName} {member.lName}
                    </TableCell>
                  );
                })}
                <TableCell align="left">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* need unique id for each row and and each textInput field */}
              {rows.map((row) => (
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Checkbox />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" component="th" key={row.id}>
                    <TextField
                      name="name"
                      required
                      id="1"
                      value={formValues.name.value}
                      onChange={firstinput}
                      error={formValues.name.error}
                      helperText={formValues.name.error && formValues.name.errorMessage}
                    />
                  </TableCell>
                  <TableCell align="center" component="th" key={row.id}>
                    <TextField
                      name="lastName"
                      required
                      id="2"
                      value={formValues.text.value}
                      onChange={seconInput}
                      error={formValues.text.error}
                      helperText={formValues.text.error && formValues.text.errorMessage}
                    />
                  </TableCell>
                  <TableCell align="center" component="th" key={row.id}>
                    <TextField
                      name="middleName"
                      required
                      id="3"
                      value={formValues.core.value}
                      onChange={thrirdinput}
                      error={formValues.core.error}
                      helperText={formValues.core.error && formValues.core.errorMessage}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button type="submit" variant="outlined" color="secondary">
          Submit
        </Button>
      </form>
    </div>
  );
}
