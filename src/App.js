import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import RegistrationForm from './components/RegistrationForm';

function App() {

  const { register, handleSubmit} = useForm();

  const onSubmit = (data) =>{
    console.log(data);
  }

  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

export default App;
