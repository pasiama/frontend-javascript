/// <reference path="../js/crud.d.ts" />

// Import types and functions
import { RowID, RowElement } from "./interface";
import * as CRUD from "../js/crud";

// Create a RowElement object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert a new row and get its ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted Row ID: ${newRowID}`);

// Update the row with an age field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
