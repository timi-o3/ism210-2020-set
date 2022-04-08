import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5';
const App: React.FC = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld2 name="Pius" />
      <HelloWorld3 name="Joy"/>
      <HelloWorld4 />
      <HelloWorld5 />
    </div>
 );
}
export default App;