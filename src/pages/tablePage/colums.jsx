import DropdownMenuComponent from "./DropDownMenu";

export const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "username", header: "Username" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "phone", header: "Phone" },
  { accessorKey: "website", header: "Website" },
  // { accessorKey: "company.name", header: "Company" },
  { accessorKey: "address.street", header: "Street" },
  { accessorKey: "address.suite", header: "Suite" },
  { accessorKey: "address.city", header: "City" },
  { accessorKey: "address.zipcode", header: "Zip Code" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <DropdownMenuComponent rowId={row.id} />,
  },
];
