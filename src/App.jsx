// App.jsx

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import './App.css';

const App = () => {
  return (
    <div className="appContainer">
      <LoginForm />
      <SignUpForm />
    </div>
  );
};

export default App;
