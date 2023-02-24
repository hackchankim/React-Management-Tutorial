import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { withStyles } from '@mui/material/styles';
import { Component } from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const styles = themes => ({
  root: {
    innerWidth : '100%'
  },
  table: {
    minWidth: 1080
  },
  progress: {}
})

/*
Component Life Cycle
1) constructor()
2) componentWillMount()
3) render()
4) componentDidMount()
props or state => shouldComponentUpdate()  
*/

class App extends Component {
  // state = {
  //   customers: "",
  //   completed: 0
  // }

constructor(props){
  super(props);
  this.state = {
    customers: '',
    completed: 0
  }
}

stateRefresh = () => {
  this.setState({
    customers: '',
    completed: 0
  });
  this.callApi()
  .then(res=>this.setState({customers:res}))
  .catch(err=>console.log(err));
}

componentDidMount(){
  this.timer = setInterval(this.progress, 20);
  this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err)); // callApi 주석처리하면 circularProgress 확인 가능 
}

callApi = async() => {
  const response = await fetch('/api/customers');
  const body = await response.json();
  return body; 
}

progress = () => {
  const { completed } = this.state; 
  this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
}

render() {
  const {classes} = this.props;
  return (
    <div>
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
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>}) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress varient="determinate" value={this.state.completed}/>
            </TableCell>
          </TableRow>
        }
        </TableBody>
        </Table>
      </Paper>
      <CustomerAdd stateRefresh={this.stateRefresh}/>
    </div>
  )
  };
}

// export default withStyles(styles)(App);
export default App; 