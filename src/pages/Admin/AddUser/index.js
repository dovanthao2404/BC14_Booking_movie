import React, { useState } from "react";
import { useFormik } from "formik";

import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";

import { GROUP_ID } from "utils/settings/config";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { actAddUser } from "redux/actions/UserManagementActions";
import { useDispatch } from "react-redux";
import Notification from "components/Notification";

const validateRePass = (value, password) => {
  let error;
  if (!value) {
    error = "Vui lòng nhập lại mật khẩu";
  } else if (value !== password) {
    error = "Mật khẩu không khớp";
  }
  return error;
};
const validate = (values) => {
  const errors = {};
  if (!values.taiKhoan) {
    errors.taiKhoan = "Tài khoản không được để trống!";
  } else if (values.taiKhoan.length > 24 || values.taiKhoan.length < 6) {
    errors.taiKhoan = "Tài khoản có độ dài từ 6 đến 24 ký tự!";
  } else if (!/^[a-zA-Z0-9]+$/i.test(values.taiKhoan)) {
    errors.taiKhoan = "Tài khoản chỉ gồm chữ và số!";
  }

  if (!values.matKhau) {
    errors.matKhau = "Mật khẩu không được để trống!";
  } else if (values.matKhau.length > 32 || values.matKhau.length < 8) {
    errors.matKhau = "Mật khẩu có độ dài từ 8 đến 32 ký tự!";
  }

  if (!values.email) {
    errors.email = "Email không được để trống!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email bạn nhập không đúng định dạng!";
  }

  if (!values.soDt) {
    errors.soDt = "Số điện thoại không được để trống!";
  } else if (!/^(84|0[3|5|7|8|9])+([0-9]{8})\b$/i.test(values.soDt)) {
    errors.soDt = "Số điện thoại bạn nhập không đúng!";
  }

  if (!values.hoTen) {
    errors.hoTen = "Họ và Tên không được để trống!";
  } else if (
    !/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/i.test(
      values.hoTen
    )
  ) {
    errors.hoTen = "Họ và Tên không hợp lệ!";
  }

  if (!values.maLoaiNguoiDung) {
    errors.maLoaiNguoiDung = "Vui lòng chọn loại tài khoản!";
  }

  errors.reMatKhau = validateRePass(values.reMatKhau, values.matKhau)
    ? validateRePass(values.reMatKhau, values.matKhau)
    : undefined;

  if (!errors.reMatKhau) {
    delete errors.reMatKhau;
  }

  return errors;
};

const AddUser = () => {
  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUP_ID,
      maLoaiNguoiDung: "",
      hoTen: "",
      reMatKhau: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(actAddUser(values, setNotify, resetForm));
    },
  });

  const resetForm = () => {
    formik.resetForm();
  };

  return (
    <>
      <Notification notify={notify} setNotify={setNotify} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl sx={{ width: "600px" }}>
            <Box component="h2">Thêm người dùng</Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taiKhoan}
                sx={{ width: "100%" }}
                label="Tài khoản *"
                name="taiKhoan"
              />
              {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.taiKhoan}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hoTen}
                sx={{ width: "100%" }}
                label="Họ tên *"
                name="hoTen"
                id="hoTen"
              />
              {formik.touched.hoTen && formik.errors.hoTen ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.hoTen}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                sx={{ width: "100%" }}
                label="Email *"
                name="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.email}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.soDt}
                sx={{ width: "100%" }}
                label="Số điện thoại *"
                name="soDt"
              />
              {formik.touched.soDt && formik.errors.soDt ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.soDt}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <FormLabel component="legend" sx={{ fontWeight: "bold" }}>
                Loại tài khoản
              </FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                value={formik.values.maLoaiNguoiDung}
                name="maLoaiNguoiDung"
                onBlur={formik.handleBlur}
                onChange={(e) =>
                  formik.setFieldValue("maLoaiNguoiDung", e.target.value)
                }
              >
                <FormControlLabel
                  value={"QuanTri"}
                  control={<Radio />}
                  label="Quản Trị"
                />
                <FormControlLabel
                  value={"KhachHang"}
                  control={<Radio />}
                  label="Khách Hàng"
                />
              </RadioGroup>
              {formik.touched.maLoaiNguoiDung &&
              formik.errors.maLoaiNguoiDung ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.maLoaiNguoiDung}
                </FormHelperText>
              ) : null}
            </Box>

            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.matKhau}
                sx={{ width: "100%" }}
                label="Mật khẩu *"
                name="matKhau"
              />
              {formik.touched.matKhau && formik.errors.matKhau ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.matKhau}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reMatKhau}
                sx={{ width: "100%" }}
                label="Nhập lại mật khẩu *"
                name="reMatKhau"
              />
              {formik.touched.reMatKhau && formik.errors.reMatKhau ? (
                <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                  {formik.errors.reMatKhau}
                </FormHelperText>
              ) : null}
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <Button
                onSubmit={formik.handleSubmit}
                variant="contained"
                type="submit"
              >
                Thêm Người Dùng
              </Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
export default AddUser;
