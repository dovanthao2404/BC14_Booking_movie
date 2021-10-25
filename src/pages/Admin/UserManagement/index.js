import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actDeleteUser,
  actGetListUser,
} from "../../../redux/actions/UserManagementActions";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Notification from "components/Notification";
import ConfirmDialog from "components/ConfirmDialog";

function toSlug(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
}

export default function UserManagement(props) {
  const dispatch = useDispatch();

  const [valueSearch, setValueSearch] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "warning",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  useEffect(() => {
    dispatch(actGetListUser());
  }, [dispatch]);

  const { listUser } = useSelector((state) => state.userManagementReducer);

  const columns = [
    { field: "taiKhoan", headerName: "Tài khoản", width: 200 },
    { field: "hoTen", headerName: "Họ tên", width: 200 },
    { field: "soDt", headerName: "Số điện thoại", width: 150, sortable: false },
    { field: "email", headerName: "Email", width: 300 },
    { field: "maLoaiNguoiDung", headerName: "Loại Người dùng", width: 200 },
    {
      field: "",
      headerName: "Chức năng",
      width: 200,
      renderCell: (cell) => {
        return (
          <>
            <EditIcon
              style={{
                color: "#D97706",
                fontSize: 24,
                cursor: "pointer",
                margin: "0 4px",
              }}
              onClick={() => {
                props.history.push(`/admin/edit-user/${cell.row.taiKhoan}`);
              }}
            />
            <DeleteIcon
              style={{
                color: "#ef4444",
                fontSize: 24,
                cursor: "pointer",
                margin: "0 4px",
              }}
              onClick={() => {
                setConfirmDialog({
                  isOpen: true,
                  title: `Bạn có chắc muốn xóa tài khoản ${cell.row.taiKhoan} không?`,
                  subTitle: "Nếu xóa bạn sẽ không thể hoàn tác được.",
                  onConfirm: () => {
                    setConfirmDialog({ ...confirmDialog, isOpen: false });
                    dispatch(actDeleteUser(cell.row.taiKhoan, setNotify));
                  },
                });
              }}
            />
          </>
        );
      },
      sortable: false,
    },
  ];

  const listUserSearch = listUser?.filter((user) => {
    return toSlug(user.hoTen.trim().toLowerCase()).includes(
      toSlug(valueSearch.trim().toLocaleLowerCase())
    );
  });

  return (
    <div>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Box>
        <Button
          variant="contained"
          onClick={() => props.history.push("/admin/add-user")}
        >
          Thêm người dùng
        </Button>
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

      <div style={{ height: "auto", width: "100%" }}>
        {listUser && (
          <DataGrid
            rows={listUserSearch}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            sortingOrder={["desc", "asc"]}
            getRowId={(row) => row.taiKhoan}
            disableColumnMenu={true}
            autoHeight={true}
          />
        )}
      </div>
    </div>
  );
}
