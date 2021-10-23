import { Container, Button } from "@mui/material";

import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { actLoginAdmin } from "redux/actions/UserManagementActions";

const SignupSchema = Yup.object().shape({
  taiKhoan: Yup.string()
    .min(6, "Tài khoản từ 6 đến 24 ký tự")
    .max(24, "Tài khoản từ 6 đến 24 ký tự")
    .required("Vui lòng nhập vào tài khoản"),
  matKhau: Yup.string()
    .min(8, "Mật khẩu từ 8 đến 32 ký tự")
    .max(32, "Mật khẩu từ 8 đến 32 ký tự")
    .required("Vui lòng nhập vào mật khẩu"),
});

export default function Auth(props) {
  const dispatch = useDispatch();
  const { errorLogin, userLogin } = useSelector(
    (state) => state.userManagementReducer
  );
  useEffect(() => {
    if (userLogin) {
      if (userLogin.maLoaiNguoiDung === "QuanTri") {
        props.history.replace("/admin/dashboard");
      } else {
        props.history.replace("/");
      }
    }
  }, []);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            dispatch(actLoginAdmin(values, props.history));
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "400px" }}>
              <Box component="h1" sx={{ textAlign: "center" }}>
                Admin
              </Box>
              <p style={{ color: "#f4511e", fontSize: "20px" }}>
                {errorLogin ? errorLogin.response.data.content : ""}
              </p>

              <Box>
                <label
                  style={{ textAlign: "left", fontSize: "20px" }}
                  htmlFor="taiKhoan"
                >
                  Tài khoản
                </label>
                <br />
                <Field
                  style={{
                    padding: "10px 12px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                  name="taiKhoan"
                  id="taiKhoan"
                />
                {errors.taiKhoan && touched.taiKhoan ? (
                  <div style={{ color: "#f4511e" }}>{errors.taiKhoan}</div>
                ) : null}
              </Box>

              <Box>
                <label
                  style={{ textAlign: "left", fontSize: "20px" }}
                  htmlFor="matKhau"
                >
                  Mật khẩu
                </label>
                <br />
                <Field
                  type="password"
                  style={{
                    padding: "10px 12px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                  name="matKhau"
                  id="matKhau"
                />
                {errors.matKhau && touched.matKhau ? (
                  <div style={{ color: "#f4511e" }}>{errors.matKhau}</div>
                ) : null}
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "8px" }}
              >
                Đăng nhập
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
