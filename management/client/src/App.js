import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { withStyles } from '@mui/material/styles';
import { Component } from 'react';

const styles = themes => ({
  root :{
    innerWidth : '100%'
  },
  table: {
    minWidth: 1080
  }
})

class App extends Component {
  state = {
    customers: ""
  }


componentDidMount(){
     this.callApi()
     .then(res => this.setState({customers:res}))
     .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body; 
  }
  render() {
    const {classes} = this.props;
    return (
      <Paper>
        <Table>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
        { this.state.customers ? this.state.customers.map( c=> {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>}) : ""
        }
        </TableBody>
        </Table>
      </Paper>
    )
    };
}

// export default withStyles(styles)(App);
export default App; 