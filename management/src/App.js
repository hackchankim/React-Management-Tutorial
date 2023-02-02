import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name':'티모시',
  'birthday':'210104',
  'gender':'남자',
  'job':'회사원'
}

function App() {
  return (
    <Customer 
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
