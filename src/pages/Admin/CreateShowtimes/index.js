import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Notification from "components/Notification";

import {
  actGetCinemaClusterInformationBySystemId,
  actGetCinemaSystemInformation,
} from "redux/actions/CinemaManagementActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "components/Loading";
import { actCreateShowtimes } from "redux/actions/TicketManagementActions";
import moment from "moment";

const validate = (values) => {
  const error = {};

  !values.heThongRap && (error.heThongRap = "Vui chọn hệ thống rạp");

  values.heThongRap && !values.maRap && (error.maRap = "Vui chọn mã rạp");

  !values.ngayChieuGioChieu &&
    (error.ngayChieuGioChieu = "Vui lòng chọn ngày chiếu giờ chiếu");

  !values.giaVe && (error.giaVe = "Vui lòng nhập giá vé");

  return error;
};

export default function CreateShowtimes(props) {
  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "warning",
  });

  useEffect(() => {
    dispatch(actGetCinemaSystemInformation());
  }, [dispatch]);

  const {
    cinemaSystemInformation,
    isLoading,
    error,
    cinemaClusterInformation,
  } = useSelector((state) => state.cinemaManagementReducer);

  const formik = useFormik({
    initialValues: {
      heThongRap: "",
      maPhim: props.match.params.id,
      ngayChieuGioChieu: new Date(),
      maRap: "",
      giaVe: 75000,
    },
    validate,
    onSubmit: (values) => {
      values.maPhim = +values.maPhim;
      values.ngayChieuGioChieu = moment(values.ngayChieuGioChieu).format(
        "DD/MM/YYYY hh:mm:ss"
      );
      dispatch(actCreateShowtimes(values, setNotify, formik.resetForm));
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <span>{error.response?.data.content}</span>;
  }

  const handleChangeOnlyValue = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleRenderSystemCinema = () => {
    return cinemaSystemInformation?.map((cinemaSystem) => {
      return (
        <MenuItem
          key={cinemaSystem.maHeThongRap}
          value={cinemaSystem.maHeThongRap}
        >
          {cinemaSystem.tenHeThongRap}
        </MenuItem>
      );
    });
  };

  const handleRenderCinemaCluster = () => {
    return cinemaClusterInformation?.map((cinemaCluster) => {
      return (
        <MenuItem key={cinemaCluster.maCumRap} value={cinemaCluster.maCumRap}>
          {cinemaCluster.tenCumRap}
        </MenuItem>
      );
    });
  };

  const handleSelectCinemaSystem = async (e) => {
    const { name, value } = e.target;
    await dispatch(actGetCinemaClusterInformationBySystemId(value));
    formik.setFieldValue(name, value);
    formik.setFieldValue("maRap", "");
  };

  return (
    <>
      <Notification notify={notify} setNotify={setNotify} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <Box component="h2">Thêm lịch chiếu</Box>
          <FormControl sx={{ width: "600px" }}>
            <Box sx={{ paddingBottom: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="heThongRap">Hệ thống rạp</InputLabel>
                <Select
                  labelId="heThongRap"
                  id="heThongRap-select"
                  label="Hệ thống rạp"
                  value={formik.values.heThongRap}
                  name="heThongRap"
                  onChange={handleSelectCinemaSystem}
                >
                  {handleRenderSystemCinema()}
                </Select>
                {formik.touched.heThongRap && formik.errors.heThongRap ? (
                  <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                    {formik.errors.heThongRap}
                  </FormHelperText>
                ) : null}
              </FormControl>
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Rạp</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Rạp"
                  value={formik.values.maRap + ""}
                  name="maRap"
                  onChange={formik.handleChange}
                >
                  {handleRenderCinemaCluster()}
                </Select>
              </FormControl>
              {formik.touched.maRap && formik.errors.maRap ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.maRap}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Ngày chiếu giờ chiếu"
                  value={formik.values.ngayChieuGioChieu}
                  onChange={handleChangeOnlyValue("ngayChieuGioChieu")}
                />
              </LocalizationProvider>
              {formik.touched.ngayChieuGioChieu &&
              formik.errors.ngayChieuGioChieu ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.ngayChieuGioChieu}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                defaultValue={75000}
                label="Giá Vé *"
                name="tenPhim"
                type="number"
                InputProps={{
                  inputProps: {
                    max: 120000,
                    min: 75000,
                  },
                }}
              />

              {formik.touched.tenPhim && formik.errors.tenPhim ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.tenPhim}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <Button
                onSubmit={formik.handleSubmit}
                variant="contained"
                type="submit"
              >
                Tạo lịch
              </Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </>
  );
}
