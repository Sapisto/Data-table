import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

const rowsPerPageOptions = [10, 25, 50];

export function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(""); 
  const [filterValue, setFilterValue] = useState("");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
    if (!selectedColumn || !event.target.value) {
      setColumnFilters([]);
      return;
    }

    setColumnFilters([
      {
        id: selectedColumn,
        value: event.target.value.toLowerCase(),
      },
    ]);
  };
  

  return (
    <>
      <div className="p-4">
        <div className="flex space-x-2">
          <select
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select Column</option>
            {columns.map((column) => (
              <option key={column.accessorKey} value={column.accessorKey}>
                {column.header}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={filterValue}
            onChange={handleFilterChange}
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <Table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="bg-gray-800 text-white font-semibold text-sm uppercase py-2 px-4 border-b border-gray-300 cursor-pointer"
                >
                  {header.isPlaceholder ? null : (
                    <span
                      onClick={() => header.column.toggleSorting()}
                      className="flex items-center"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {sorting.find((sort) => sort.id === header.id)
                        ? sorting.find((sort) => sort.id === header.id).desc
                          ? " ↓"
                          : " ↑"
                        : null}
                    </span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="px-4 py-2 border-b text-sm text-gray-700"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-gray-500"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between space-x-4 mt-[30px] mb-[50px]">
        <div className="flex items-center space-x-2 h-[50px]">
          <span className="text-black text-md">Rows per page:</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="px-3 py-2 outline-none border border-blue-500 rounded h-full"
          >
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Pagination Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 text-sm"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 text-sm"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
