import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { actUserRegister } from "redux/actions/UserManagementActions";
import { useHistory } from "react-router-dom";
import { GROUP_ID } from "../../../utils/settings/config";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

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

  errors.reMatKhau = validateRePass(values.reMatKhau, values.matKhau)
    ? validateRePass(values.reMatKhau, values.matKhau)
    : undefined;

  if (!errors.reMatKhau) {
    delete errors.reMatKhau;
  }
  return errors;
};

const validateRePass = (value, password) => {
  let error;
  if (!value) {
    error = "Vui lòng nhập lại mật khẩu";
  } else if (value !== password) {
    error = "Mật khẩu không khớp";
  }
  return error;
};

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { errorLogin } = useSelector((state) => state.userManagementReducer);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUP_ID,
      hoTen: "",
      reMatKhau: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(actUserRegister(values, history));
    },
  });

  return (
    <>
      <Box sx={{ position: "absolute", top: "-10px", right: "-10px" }}>
        <CancelOutlinedIcon
          onClick={() => {
            history.push("/");
          }}
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
      </Box>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <p style={{ color: "#f4511e", fontSize: "10px" }}>
            {errorLogin ? errorLogin.response?.data.content : ""}
          </p>
          <Box sx={{ paddingBottom: "10px" }}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.taiKhoan}
              sx={{ width: "300px" }}
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
              sx={{ width: "300px" }}
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
              value={formik.values.soDt}
              sx={{ width: "300px" }}
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
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              sx={{ width: "300px" }}
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
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.matKhau}
              sx={{ width: "300px" }}
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
              sx={{ width: "300px" }}
              label="Nhập lại mật khẩu *"
              name="reMatKhau"
            />
            {formik.touched.reMatKhau && formik.errors.reMatKhau ? (
              <FormHelperText sx={{ color: "red", fontSize: "16px" }}>
                {formik.errors.reMatKhau}
              </FormHelperText>
            ) : null}
          </Box>
          <Button type="submit" variant="contained" sx={{ marginTop: "8px" }}>
            Đăng ký
          </Button>
          <Box sx={{ margin: "20px 0" }}>
            Bạn có tài khoản? <NavLink to="/login">Đăng nhập</NavLink>
          </Box>
        </form>
      </div>
    </>
  );
}
export default Login;
