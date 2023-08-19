import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/Dropdown";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import allData from "../../components/data/verifyData";
import { fetchUserData } from '../../components/AuthForms/SessionManager';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const index = () => {
  const [selectedData, setSelectedData] = useState([]);
  const [data, setData] = useState(allData);
  const [globalFilter, setGlobalFilter] = useState("");
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [selectedTable, setSelectedTable] = useState("All");

  const { data: userData, isLoading, isError, error } = useQuery('userData', fetchUserData);

console.log(userData?.user)
  const addData = () => {
    console.log("click")
  };

  const onPageChange = (event) => {
    setFirst(event.first); 
    setRows(event.rows); 
  };

  const paginateLayout = {
    layout:
      "RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 },
      ];

      return (
        <React.Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Rows per page{" "}
          </span>
          <Dropdown
            value={options.value}
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </React.Fragment>
      );
    },
  };


  // filter table 
  useEffect(() => {
    if (selectedTable === "All") {
      setData(allData);
    } else {
      // Filter data based on selectedState
      const filteredData = allData.filter((item) => item.status === selectedTable);
      setData(filteredData);
    }
  }, [selectedTable]);

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };

  const header = (
    <div className="table-header md:flex justify-between mb-6 bg-transparent border-0 px-0">
      <div className="">
        <select
          id="state"
          name="state"
          value={selectedTable}
          onChange={handleTableChange}
          className="table-select"
        >
          <option value="All">All</option>
          <option value="Active">Active Verifiers</option>
          <option value="Awaiting approval">Pending Verifiers</option>
          <option value="Deactivated">Deactivated Verifiers</option>
        </select>
      </div>
      <div>
        <div className="">
          <span className="p-input-icon-left mr-6 mb-3 md:mb-0">
            <i className="pi pi-search" />
            <InputText
              type="search"
              onInput={(e) => setGlobalFilter(e.target.value)}
              placeholder="Name/Phone no / Location"
              className="text-xs text-[#C4C4C4] placeholder:text-xs py-3 mb-3"
            />
          </span>
          <Button
            icon="pi pi-plus"
            label="Add New Verifier"
            className="bg-primary ml-4 mt-3 text-sm"
            onClick={addData}
          />
        </div>
      </div>
    </div>
  );

  const statusBodyTemplate = (rowData) => {
    let statusClass = "";
    switch (rowData.status) {
      case "Active":
        statusClass = "active-status";
        break;
      case "Awaiting approval":
        statusClass = "awaiting-status";
        break;
      case "Deactivated":
        statusClass = "deactivated-status";
        break;
      default:
        break;
    }

    return (
      <span className={`status-label ${statusClass}`}>{rowData.status}</span>
    );
  };

  const actionBodyTemplate = () => {
    return (
      <Button
        icon="pi pi-ellipsis-h"
        className="p-button-rounded p-button-text p-button-secondary  p-button-outlined"
      />
    );
  };

  return (
    <div>

      <p className="text-xl">Welcome, {userData?.user?.contactName} </p>

      <div className="bg-white rounded">
        <DataTable
          value={data}
          selection={selectedData}
          onSelectionChange={(e) => setSelectedData(e.value)}
          globalFilter={globalFilter}
          header={header}
          first={first}
          rows={rows}
          paginator
          onPage={onPageChange}
          paginatorPosition="bottom"
          rowsPerPageOptions={[5, 10, 20]}
          paginatorTemplate={paginateLayout}
        >
          <Column selectionMode="multiple" style={{ width: "3rem" }} />
          <Column field="firstName" header="First Name" />
          <Column field="lastName" header="Last Name" />
          <Column field="phone" header="Phone Number" />
          <Column field="partner" header="Partner" />
          <Column field="location" header="Location" />
          <Column field="status" header="Status" body={statusBodyTemplate} />
          <Column field="" header="Action" body={actionBodyTemplate} />
        </DataTable>
      </div>
    </div>
  );
};
export default index;
