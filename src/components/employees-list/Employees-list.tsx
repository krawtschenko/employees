import { FC } from "react";
import { IData } from "../app/App";
import EmployeesListItem from "../employees-list-item/Employees-list-item";
import "./employees-list.css";

interface IEmployeesList {
  data: IData[];
}

const EmployeesList: FC<IEmployeesList> = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployeesListItem key={id} {...itemProps} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
