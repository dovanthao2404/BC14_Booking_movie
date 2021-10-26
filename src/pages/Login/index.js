import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";

import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { actUserLogin } from "redux/actions/UserManagementActions";
import { useHistory } from "react-router-dom";
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

  return errors;
};

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { errorLogin } = useSelector((state) => state.userManagementReducer);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    validate,
    onSubmit: (values) => {
      dispatch(actUserLogin(values, history));
    },
  });

  return (
    <>
      <div>
        <img
          src="/assets/img/group@2x.png"
          alt=""
          style={{ maxWidth: "100%" }}
        />
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <p style={{ color: "#f4511e", fontSize: "20px" }}>
            {errorLogin ? errorLogin.response?.data.content : ""}
          </p>
          <Box sx={{ padding: "20px 0" }}>
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
          <Box sx={{ padding: "20px 0" }}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              value={formik.values.mạt}
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
          <Button type="submit" variant="contained" sx={{ marginTop: "8px" }}>
            Đăng nhập
          </Button>
          <Box sx={{ margin: "20px 0" }}>
            Bạn chưa có tài khoản? <NavLink to="/register">Đăng ký</NavLink>
          </Box>
        </form>
      </div>
    </>
  );
}
export default Login;
