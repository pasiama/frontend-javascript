// Import types from interface.ts
import { RowID, RowElement } from "../js/interface";

// Declare types for CRUD operations
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
