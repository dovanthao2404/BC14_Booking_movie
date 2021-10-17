import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Notification from "components/Notification";
import ConfirmDialog from "components/ConfirmDialog";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  actDeleteFilm,
  actGetListFilm,
} from "redux/actions/FilmManagementActions";
import moment from "moment";

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

export default function FilmManagement(props) {
  const dispatch = useDispatch();
  const [sortModel, setSortModel] = useState([
    {
      field: "maPhim",
      sort: "desc",
    },
  ]);
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
    dispatch(actGetListFilm());
  }, []);

  const { listFilm } = useSelector((state) => state.filmManagementReducer);

  const columns = [
    { field: "maPhim", headerName: "Mã phim", width: 100 },
    {
      field: "tenPhim",
      headerName: "Tên phim",
      width: 300,
      renderCell: (cell) => {
        return (
          <Box component="h3" sx={{ color: "#30e" }}>
            {cell.row.tenPhim.length > 25
              ? cell.row.tenPhim.slice(0, 25) + "..."
              : cell.row.tenPhim}
          </Box>
        );
      },
    },
    {
      field: "hinhAnh",
      headerName: "Hình ảnh",
      width: 150,
      sortable: false,
      renderCell: (cell) => {
        return (
          <img
            src={cell.row.hinhAnh}
            alt={cell.row.tenPHim}
            style={{ width: 100, height: 150, objectFit: "cover" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://bitsofco.de/content/images/2018/12/broken-1.png";
            }}
          />
        );
      },
    },
    {
      field: "moTa",
      headerName: "Mô Tả",
      width: 300,
      rowHeight: 800,
    },
    {
      field: "ngayKhoiChieu",
      headerName: "Ngày khởi chiếu",
      width: 200,
      renderCell: (cell) => {
        return <p>{moment(cell.row.ngayKhoiChieu).format("DD/MM/YYYY")}</p>;
      },
    },
    { field: "danhGia", headerName: "Đánh giá", width: 100 },

    {
      field: "chuNang",
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
                props.history.push(`/admin/edit-film/${cell.row.maPhim}`);
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
                  title: `Bạn có chắc muốn xóa phim ${cell.row.tenPhim} không?`,
                  subTitle: "Nếu xóa bạn sẽ không thể hoàn tác được.",
                  onConfirm: () => {
                    setConfirmDialog({ ...confirmDialog, isOpen: false });
                    dispatch(actDeleteFilm(cell.row.maPhim, setNotify));
                  },
                });
              }}
            />
            <CalendarTodayIcon
              style={{
                color: "#2563eb",
                fontSize: 24,
                cursor: "pointer",
                margin: "0 4px",
              }}
              onClick={() => {
                props.history.push(
                  `/admin/create-showtimes/${cell.row.maPhim}`
                );
              }}
            />
          </>
        );
      },
      sortable: false,
    },
  ];

  const listUserSearch = listFilm?.filter((phim) => {
    return toSlug(phim.tenPhim.trim().toLowerCase()).includes(
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
          onClick={() => props.history.push("/admin/add-film")}
        >
          Thêm phim
        </Button>
      </Box>
      <Box sx={{ marginY: "30px" }}>
        <TextField
          id="outlined-search"
          sx={{ width: "100%" }}
          label="Tìm kiếm phim theo tên"
          type="search"
          onChange={(e) => {
            setValueSearch(e.target.value);
          }}
        />
      </Box>

      <div style={{ height: "auto", width: "100%" }}>
        {listFilm && (
          <DataGrid
            rows={listUserSearch}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            getRowId={(row) => row.maPhim}
            disableColumnMenu={true}
            rowHeight={200}
            disableVirtualization
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
            autoHeight={true}
          />
        )}
      </div>
    </div>
  );
}
