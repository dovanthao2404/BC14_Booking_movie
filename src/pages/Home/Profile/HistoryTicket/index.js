import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";

const columns = [
  { id: "tenPhim", label: "Tên phim", minWidth: 100 },
  {
    id: "hinhAnh",
    label: "Hình ảnh",
    minWidth: 100,
    format: (rowData) => console.log(rowData) || <img src={rowData} alt="" />,
  },
  {
    id: "ngayDat",
    label: "Ngày đặt",
    minWidth: 100,
    align: "right",
  },
  {
    id: "rap",
    label: "Rạp",
    minWidth: 200,
    align: "right",
    value: "rap",
  },
  {
    id: "dsGhe",
    value: "danhSachGhe",
    label: "Danh sách ghế",
    minWidth: 100,
    align: "right",
  },
  {
    id: "giaVe",
    label: "Giá vé",
    minWidth: 50,
    align: "right",
  },
];

export default function StickyHeadTable(props) {
  const { infoTiket } = props;
  console.log(infoTiket);

  const renderCell = (column, value, index) => {
    let newRender = "";
    if (column.format && typeof value === "number") {
      newRender = column.format(value);
    } else if (column.id === "hinhAnh") {
      newRender = (
        <img
          src={value}
          style={{
            width: "80px",
            height: "133.6666px",
            objectFit: "cover",
          }}
          alt={value}
        />
      );
    } else if (column.value === "danhSachGhe") {
      newRender = infoTiket[index]?.danhSachGhe.reduce((totalSeat, seat) => {
        return totalSeat + seat.tenGhe + ", ";
      }, "Ghế ");
    } else if (column.value === "rap") {
      newRender = infoTiket[index]?.danhSachGhe[0].tenHeThongRap;
    } else if (column.id === "ngayDat") {
      newRender = moment(value).format("DD/MM/YYYY - hh:mm");
    } else if (column.id === "tenPhim") {
      return value.length > 25 ? value.slice(0, 25) + "..." : value;
    } else {
      newRender = value;
    }
    return newRender;
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {infoTiket?.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.maVe}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {renderCell(column, value, index)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
