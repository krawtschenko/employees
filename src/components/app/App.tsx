import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import EmployeesList from "../employees-list/Employees-list";
import EmployeesAddForm from "../employees-add-form/Employees-add-form";
import "./app.css";

export interface IData {
  id: string;
  name: string;
  salary: number;
  increase: boolean;
}

function App() {
  const data: IData[] = [
    { id: crypto.randomUUID(), name: "John C.", salary: 800, increase: false },
    { id: crypto.randomUUID(), name: "Alex M.", salary: 3000, increase: true },
    { id: crypto.randomUUID(), name: "Carl W.", salary: 5000, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
