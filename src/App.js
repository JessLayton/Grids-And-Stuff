import columns from './data/columns';
import rows from './data/rows';
import MuiDataGridCustomExample from './MuiDataGridCustomExample';

function App() {
  return (
      <MuiDataGridCustomExample rows={rows} columns={columns} />
  );
}

export default App;
