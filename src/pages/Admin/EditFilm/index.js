import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import moment from "moment";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import Rating from "@mui/material/Rating";

import Typography from "@mui/material/Typography";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import Notification from "components/Notification";
import { LocalizationProvider } from "@mui/lab";
import {
  actUpdateFilm,
  atcGetInfoFilm,
} from "redux/actions/FilmManagementActions";
import Loading from "components/Loading";

import { useHistory } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  !values.tenPhim && (errors.tenPhim = "Vui lòng nhập tên phim");

  !values.trailer && (errors.trailer = "Vui lòng nhập trailer");

  !values.moTa && (errors.moTa = "Vui lòng nhập mô tả");

  !values.danhGia && (errors.danhGia = "Vui lòng chọn đánh giá");

  return errors;
};

const EditFilm = (props) => {
  const [srcImg, setSrcImg] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const { infoFilmEdit, isLoading, error } = useSelector(
    (state) => state.filmManagementReducer
  );

  useEffect(() => {
    dispatch(atcGetInfoFilm(props.match.params.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tenPhim: infoFilmEdit?.tenPhim,
      trailer: infoFilmEdit?.trailer,
      moTa: infoFilmEdit?.moTa,
      maNhom: infoFilmEdit?.maNhom,
      ngayKhoiChieu: infoFilmEdit?.ngayKhoiChieu,
      sapChieu: infoFilmEdit?.sapChieu,
      dangChieu: infoFilmEdit?.dangChieu,
      hot: infoFilmEdit?.hot,
      danhGia: infoFilmEdit?.danhGia,
      hinhAnh: null,
    },
    validate,
    onSubmit: (values) => {
      const formData = handleNewFormData(values);

      dispatch(actUpdateFilm(formData, setNotify, setSrcImg));
    },
  });

  const handleNewFormData = (values) => {
    const formData = new FormData();
    for (let key in values) {
      if (key !== "hinhAnh" && key !== "ngayKhoiChieu") {
        formData.append(key, values[key]);
      } else if (key === "hinhAnh") {
        values[key] && formData.append("File", values[key], values[key].name);
      } else if (key === "ngayKhoiChieu") {
        const date = moment(values[key]).format("DD/MM/YYYY");
        formData.append(key, date);
      }
    }
    formData.append("maPhim", infoFilmEdit.maPhim);

    return formData;
  };

  const handleChangeFile = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file?.type.includes("image")) {
      const reader = new FileReader();
      await reader.readAsDataURL(file);
      reader.onload = (e) => {
        setSrcImg(e.target.result);
      };
      await formik.setFieldValue(name, file);
    }
  };

  const handleChangeRate = async (e) => {
    const { name, value } = e.target;
    const valueNumber = parseInt(value);
    await formik.setFieldValue(name, valueNumber);
  };

  const handleGetValueByName = (name) => {
    return async (value) => {
      await formik.setFieldValue(name, value);
    };
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <p>{error.response?.data?.content || error.response?.data?.MaPhim}</p>
        <Button onClick={() => history.replace("/admin/film-management")}>
          Quay Về Quản Lý Phim
        </Button>
      </>
    );
  }

  return (
    <>
      <Notification notify={notify} setNotify={setNotify} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl sx={{ width: "600px" }}>
            <Box component="h2">Chỉnh sửa phim</Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tenPhim || ""}
                sx={{ width: "100%" }}
                label="Tên phim *"
                name="tenPhim"
              />
              {formik.touched.tenPhim && formik.errors.tenPhim ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.tenPhim}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.trailer || ""}
                sx={{ width: "100%" }}
                label="Trailer *"
                name="trailer"
              />
              {formik.touched.trailer && formik.errors.trailer ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.trailer}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                placeholder="Mô tả *"
                name="moTa"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.moTa || ""}
                style={{ width: "100%", fontSize: "16px" }}
              />
              {formik.touched.moTa && formik.errors.moTa ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.moTa}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Ngày khởi chiếu"
                  value={formik.values.ngayKhoiChieu || ""}
                  onBlur={handleGetValueByName("ngayKhoiChieu")}
                  onChange={handleGetValueByName("ngayKhoiChieu")}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.ngayKhoiChieu}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ paddingBottom: "10px" }}>
                <FormLabel component="legend" sx={{ fontWeight: "bold" }}>
                  Đang chiếu
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  value={formik.values.dangChieu || ""}
                  name="dangChieu"
                  onBlur={formik.handleBlur}
                  onChange={(e) =>
                    formik.setFieldValue("dangChieu", e.target.value)
                  }
                >
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Sai"
                  />
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Đúng"
                  />
                </RadioGroup>
                {formik.touched.dangChieu && formik.errors.dangChieu ? (
                  <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                    {formik.errors.dangChieu}
                  </FormHelperText>
                ) : null}
              </Box>

              <Box sx={{ paddingBottom: "10px" }}>
                <FormLabel component="legend" sx={{ fontWeight: "bold" }}>
                  Sắp chiếu
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  value={formik.values.sapChieu || false}
                  name="sapChieu"
                  onBlur={formik.handleBlur}
                  onChange={(e) =>
                    formik.setFieldValue("sapChieu", e.target.value)
                  }
                >
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Sai"
                  />
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Đúng"
                  />
                </RadioGroup>
                {formik.touched.sapChieu && formik.errors.sapChieu ? (
                  <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                    {formik.errors.sapChieu}
                  </FormHelperText>
                ) : null}
              </Box>

              <Box sx={{ paddingBottom: "10px" }}>
                <FormLabel component="legend" sx={{ fontWeight: "bold" }}>
                  Hot
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  value={formik.values.hot || false}
                  name="hot"
                  onBlur={formik.handleBlur}
                  onChange={(e) => formik.setFieldValue("hot", e.target.value)}
                >
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Sai"
                  />
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Đúng"
                  />
                </RadioGroup>
                {formik.touched.hot && formik.errors.hot ? (
                  <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                    {formik.errors.hot}
                  </FormHelperText>
                ) : null}
              </Box>
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <Typography component="legend">10 stars</Typography>
              <Rating
                name="danhGia"
                onChange={handleChangeRate}
                onBlur={handleChangeRate}
                value={formik.values.danhGia || 0}
                max={10}
              />
              {formik.touched.danhGia && formik.errors.danhGia ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.danhGia}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeFile}
                name="hinhAnh"
              />
              {formik.touched.hinhAnh && formik.errors.hinhAnh ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.hinhAnh}
                </FormHelperText>
              ) : null}
              <Box sx={{ paddingTop: "10px" }}>
                <Box
                  component="img"
                  src={srcImg || infoFilmEdit?.hinhAnh}
                  alt={srcImg}
                  sx={{ width: "200px", height: "auto", objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <Button
                onSubmit={formik.handleSubmit}
                variant="contained"
                type="submit"
              >
                Cập nhật
              </Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
export default EditFilm;
