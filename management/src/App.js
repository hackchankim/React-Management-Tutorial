import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { withStyles } from '@mui/material/styles';

const styles = themes => ({
  root :{
    innerWidth : '100%'
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name':'티모시',
  'birthday':'210104',
  'gender':'남자',
  'job':'회사원'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'210104',
  'gender':'남자',
  'job':'회사원'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name':'김티모',
  'birthday':'210104',
  'gender':'남자',
  'job':'회사원'
}
]

function App() {
  return (
    <div>
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
        {
        customers.map( c=> {
          return <Customer 
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}/>
        })
      }
        </TableBody>

      </Table>

      
    </div>
  );
}

export default App;
