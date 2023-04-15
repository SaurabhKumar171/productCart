 
import './App.css';

import Card from './components/Card';

function App() {
    const products =[
        {
          id:"p1",
          name:"Nirma",
          amount:400,
          date : new Date(2021 , 12, 12)
        },

        {
          id:"p2",
          name:"Tide",
          amount:600,
          date : new Date(2012 , 9, 10)
        },

        {
          id:"p3",
          name:"Surf Excel",
          amount:800,
          date : new Date(2021 , 5, 12)
        },

        {
          id:"p4",
          name:"555",
          amount:900,
          date : new Date(2017 , 1, 2)
        },
    ];

  return (
    <div className="App">

        <Card items={products}>  </Card>
                
    </div>
  );
}

export default App;
