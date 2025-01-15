import React from "react";
import { columns } from "@/pages/tablePage/colums";
import { DataTable } from "@/pages/tablePage/data-table";
import { useMemo } from "react";
import { useJsonPlaceholder } from "@/hooks/usePosts";

const DataTablePage = () => {
  const generateMockData = (count) => {
    const mockData = [];
    for (let i = 1; i <= count; i++) {
      mockData.push({
        id: i,
        name: `User${i}`,
        username: `Abdul${i}`,
        email: `Abdul${i}@example.com`,
        phone: `123-456-78${i % 10}`,
        website: `www.user${i}.com`,
        company: { name: `Company ${i}` },
        address: {
          street: `Street${i}`,
          suite: `Suite${i}`,
          city: `City${i}`,
          zipcode: `Zip-${10000 + i}`,
        },
      });
    }
    return mockData;
  };

  const users = useMemo(() => generateMockData(10000), []);
  const isLoading = false;
  const error = null;

  if (users) {
    console.log(users, "userssss");
    console.log(users.length, "userssss length");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const { users, error, isLoading } = useJsonPlaceholder();
  // if (users) {
  //   console.log(users, "userssss");
  //   console.log(users.length, "userssss");
  // }
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="flex flex-col mx-auto w-11/12 min-h-screen">
      <h1 className="text-center font-[700] mb-4 mt-[10px] text-black">
        Data Table
      </h1>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default DataTablePage;
