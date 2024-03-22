import React from 'react';
import TableView from './TableView';
import './index.css';

const App = () => {
  const data = [
     { ID: 1, Name: 'Brendon McCullum', Age: 45 },
     { ID: 2, Name: 'Kane Williamson', Age: 33 },
     { ID: 3, Name: 'Stuart Broad', Age: 37 },
     { ID: 4, Name: 'Ben Stokes', Age: 32 },
     { ID: 5, Name: 'Pat Cummins', Age: 30 },
  ];
  return (
     <div>
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid blue', paddingTop: '20px', marginBottom: '100px' }}>
           Array of Objects - Table View
        </h1> 
        <TableView data={data} />
     </div>
  );
};
export default App;