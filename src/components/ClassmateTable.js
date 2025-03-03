// import React from "react";
import React, { useState, useRef , useEffect} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "react-bootstrap";
import { 
    ClientSideRowModelModule,
    ModuleRegistry,
    CsvExportModule,
    ValidationModule
} from "ag-grid-community";

// Register required AG Grid modules
ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    CsvExportModule,
    ValidationModule
]);

function ClassmateTable({ people, onEdit, onDelete, likes }) {
    const [searchText, setSearchText] = useState("");
    const [filteredPeople, setFilteredPeople] = useState(people);
    const gridRef = useRef();

    // Update filteredPeople when search text or people data changes
    useEffect(() => {
        setFilteredPeople(people.filter(person =>
            person.name.toLowerCase().includes(searchText) ||
            person.favoriteColor.toLowerCase().includes(searchText) ||
            person.favoriteFood.toLowerCase().includes(searchText)
        ));
    }, [people, searchText]);

    // Column Definitions (Moved Outside to Improve Readability)
    const columnDefs = [
        { headerName: "Name", field: "name", sortable: true, flex: 0.8, wrapText: true, filter: true,
            comparator: (valueA, valueB) => valueA.localeCompare(valueB),
            cellRenderer: renderTextCell
        },
        { headerName: "Favorite Color", field: "favoriteColor", sortable: true, flex: 0.8, wrapText: true, filter: true,
            comparator: (valueA, valueB) => valueA.localeCompare(valueB),
            cellRenderer: renderTextCell
        },
        { headerName: "Favorite Food", field: "favoriteFood", sortable: true, flex: 0.8, wrapText: true, filter: true,
            comparator: (valueA, valueB) => valueA.localeCompare(valueB),
            cellRenderer: renderTextCell
        },
        { headerName: "Likes", field: "likes", sortable: true, flex: 0.3,
            comparator: (valueA, valueB) => valueA - valueB,
            valueGetter: (params) => params.data.likes || 0,
            cellRenderer: renderCenteredCell
        },
        { headerName: "Actions", field: "actions", sortable: false, flex: 1,
            cellRenderer: params => renderActionButtons(params, onEdit, onDelete)
        },
    ];

    // Generic cell renderers
    function renderTextCell(params) {
        return <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", height: "100%", whiteSpace: "normal", overflow: "auto" }}>{params.value}</div>;
    }
    function renderCenteredCell(params) {
        return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>{params.value}</div>;
    }
    function renderActionButtons(params, onEdit, onDelete) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Button variant="warning" size="sm" onClick={() => onEdit(params.data.id)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => onDelete(params.data.id)} className="ms-3">Delete</Button>
            </div>
        );
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchText(searchValue);
        setFilteredPeople(people.filter(person =>
            person.name.toLowerCase().includes(searchValue) || person.favoriteColor.toLowerCase().includes(searchValue) || person.favoriteFood.toLowerCase().includes(searchValue)
        ));
    };

    return (
        <div>
             {/* Search Input */}
            <input type="text" placeholder="Search..." value={searchText} onChange={handleSearch} style={{ marginBottom: "10px", padding: "5px", width: "100%" }} />
            {/* AG Grid Table */}
            <div className="ag-theme-alpine" style={{height: "400px", width: "100%", maxWidth: "100%", marginBottom: "50px", overflowX: "auto", overflowY: "auto", whiteSpace: "nowrap" }} >
                <AgGridReact 
                    ref={gridRef} 
                    rowData={filteredPeople.map(person => ({ ...person, id: person.id }))}  
                    columnDefs={columnDefs} 
                    pagination={true} 
                    domLayout="normal"
                    rowHeight={50} 
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        floatingFilter: true,
                        resizable: true,
                        suppressMovable: true,
                        suppressSizeToFit: false,
                    }}/>
            </div>

        </div>
      );
}

export default ClassmateTable;

/*                   
height: "400px",  // Fixed height to ensure scrollbars appear
width: "100%",  // Ensure it takes full width
maxWidth: "100%",
marginBottom: "50px",
overflowX: "auto", // Enables horizontal scrolling
overflowY: "auto", // Enables vertical scrolling
whiteSpace: "nowrap" // Prevents column wrapping
resizable: true,  // Allow resizing but within limits
suppressMovable: true,  // Prevent columns from being dragged outside
suppressSizeToFit: false, // Allow resizing but within bounds
*/