import React from 'react';
import { Link } from 'react-router-dom';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
// import './styles/globals.css'; // Import your global styles

const UserTable = ({ users, selectedRows, handleDeleteUser }) => {
  const handleRowSelect = (row) => {
    // Toggle selection for the clicked row
    const isSelected = selectedRows.some((selectedRow) => selectedRow.id === row.id);
    if (isSelected) {
      setSelectedRows(selectedRows.filter((selectedRow) => selectedRow.id !== row.id));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  return (
    <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="text-text font-semibold">
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-accent">
          {users?.map((user) => (
            <TableRow key={user.id} className="text-text">
              <TableCell>{user.name || 'N/A'}</TableCell>
              <TableCell>{user.username || 'N/A'}</TableCell>
              <TableCell>{user.email || 'N/A'}</TableCell>
              <TableCell>{user.phone || 'N/A'}</TableCell>
              <TableCell>{user.company_name || 'N/A'}</TableCell>
              <TableCell>{user.role || 'N/A'}</TableCell>
              <TableCell className="flex items-center justify-between mb-1">
                <Link
                  to={`/users/${user.id}/edit`}
                  className={`flex items-center gap-2 cursor-pointer ${
                    selectedRows.some((selectedRow) => selectedRow.id === user.id)
                      ? 'text-destructive'
                      : 'text-accent'
                  }`}
                >
                  <IoDocumentAttachOutline />
                  <span className="ml-3 mt-[-1px]">View User Info</span>
                </Link>
                <Button
                  onClick={() => handleDeleteUser(user.id)}
                  className="ml-2 bg-transparent border-none text-destructive hover:bg-transparent hover:text-destructive"
                >
                  <AiOutlineDelete size={18} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
