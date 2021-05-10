import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';

function App() {
  return (
    <div className="App">
      <div className="card" style={{"width" : "18rem"}}>
      <ProfilePhoto/>
        <div className="card-body">
          <FullName/>
          <Address/>
        </div>
      </div>
    </div>
  );
}

export default App;
