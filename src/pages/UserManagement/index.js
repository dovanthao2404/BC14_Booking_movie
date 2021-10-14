import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actDeleteUser, actGetListUser } from "./../../redux/actions/UserManagementActions";
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Notification from 'components/Notification';
import ConfirmDialog from 'components/ConfirmDialog';



export default function UserManagement(props) {
  const dispatch = useDispatch();

  const [valueSearch, setValueSearch] = useState("");
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "warning" });
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" });
  useEffect(() => {
    dispatch(actGetListUser());
  }, []);

  const { listUser } = useSelector(state => state.userManagementReducer);

  const columns = [
    { field: 'taiKhoan', headerName: 'Tài khoản', width: 200, },
    { field: 'hoTen', headerName: 'Họ tên', width: 200 },
    { field: 'soDt', headerName: 'Số điện thoại', width: 150, sortable: false },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'maLoaiNguoiDung', headerName: 'Loại Người dùng', width: 200 },
    {
      field: "", headerName: "Chức năng", width: 200, renderCell: (cell) => {
        return <>
          <EditIcon style={
            {
              color: "yellow",
              fontSize: 24,
              cursor: "pointer",
              margin: "0 4px"
            }
          }
            onClick={() => { console.log("b"); }}
          />
          <DeleteIcon style={
            {
              color: "red",
              fontSize: 24,
              cursor: "pointer",
              margin: "0 4px"
            }
          }
            onClick={() => {
              setConfirmDialog({ isOpen: true, title: `Bạn có chắc muốn xóa tài khoản ${cell.row.taiKhoan} không`, subTitle: "neu xoa ban khong the khoi phuc lai" });
              // dispatch(actDeleteUser(cell.row.taiKhoan, setNotify));
            }}
          />
        </>;
      }, sortable: false
    }

  ];


  const listUserSearch = listUser?.filter((user) => {
    return user.hoTen.trim().toLowerCase().includes(valueSearch.trim().toLocaleLowerCase());

  });

  return (
    <div>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      <Box >
        <Button variant="contained" onClick={() => props.history.push("/admin/add-user")}>Thêm người dùng</Button>
      </Box>
      <Box sx={{ marginY: "30px" }}>
        <TextField
          id="outlined-search"
          sx={{ width: "100%" }}
          label="Tìm kiếm người dùng theo tên"
          type="search"
          onChange={(e) => {
            setValueSearch(e.target.value);
          }}
        />
      </Box>

      <div style={{ height: "auto", width: '100%' }}>
        {listUser && <DataGrid
          rows={listUserSearch}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          getRowId={(row) => row.taiKhoan}
          disableColumnMenu={true}
          autoHeight={true}

        />}
      </div>

    </div>);

}
