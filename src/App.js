import logo from './logo.svg';
import './App.css';
import Wallet from "@components/wallet"

function App({children}) {
  return (
    <Wallet>
      {children}
    </Wallet>
  );
}

export default App;
