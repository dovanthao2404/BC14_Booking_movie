
import React, { useState } from 'react';
import { GROUP_ID } from 'utils/settings/config';
import { useFormik } from 'formik';



import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';





import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { actAddUser } from 'redux/actions/UserManagementActions';
import { useDispatch } from 'react-redux';
import Notification from 'components/Notification';
import { LocalizationProvider } from '@mui/lab';


const validateRePass = (value, password) => {
  let error;
  if (!value) {
    error = "Vui lòng nhập lại mật khẩu";
  } else if (value !== password) {
    error = "Mật khẩu không khớp";
  }
  return error;
};
const validate = values => {
  const errors = {};
  if (!values.taiKhoan) {
    errors.taiKhoan = 'Tài khoản không được để trống!';
  } else if (values.taiKhoan.length > 24 || values.taiKhoan.length < 6) {
    errors.taiKhoan = 'Tài khoản có độ dài từ 6 đến 24 ký tự!';
  } else if (!/^[a-zA-Z0-9]+$/i.test(values.taiKhoan)) {
    errors.taiKhoan = "Tài khoản chỉ gồm chữ và số!";
  }

  if (!values.matKhau) {
    errors.matKhau = 'Mật khẩu không được để trống!';
  } else if (values.matKhau.length > 32 || values.matKhau.length < 8) {
    errors.matKhau = 'Mật khẩu có độ dài từ 8 đến 32 ký tự!';
  }

  if (!values.email) {
    errors.email = 'Email không được để trống!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email bạn nhập không đúng định dạng!';
  }

  if (!values.soDt) {
    errors.soDt = 'Số điện thoại không được để trống!';
  } else if (!/^(84|0[3|5|7|8|9])+([0-9]{8})\b$/i.test(values.soDt)) {
    errors.soDt = 'Số điện thoại bạn nhập không đúng!';
  }

  if (!values.hoTen) {
    errors.hoTen = 'Họ và Tên không được để trống!';
  } else if (!/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/i.test(values.hoTen)) {
    errors.hoTen = 'Họ và Tên không hợp lệ!';
  }

  if (!values.maLoaiNguoiDung) {
    errors.maLoaiNguoiDung = "Vui lòng chọn loại tài khoản!";
  }

  errors.reMatKhau = validateRePass(values.reMatKhau, values.matKhau) ? validateRePass(values.reMatKhau, values.matKhau) : undefined;

  if (!errors.reMatKhau) {
    delete errors.reMatKhau;
  }

  return errors;
};


const AddFilm = () => {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));

  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success"
  });



  const formik = useFormik({
    initialValues: {

      tenPhim: '',
      trailer: '',
      moTa: '',
      maNhom: GROUP_ID,
      ngayKhoiChieu: new Date(),
      sapChieu: false,
      dangChieu: false,
      hot: false,
      danhGia: 1,
      hinhAnh: {}
    },
    validate
    ,
    onSubmit: values => {
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
          <FormControl sx={{ width: "600px", }}>
            <Box component="h2">Thêm phim</Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tenPhim}
                sx={{ width: "100%" }}
                label="Tên phim *"
                name="tenPhim"
              />
              {formik.touched.tenPhim && formik.errors.tenPhim ? <FormHelperText sx={{ color: "red", fontSize: "16px", }} >{formik.errors.tenPhim}</FormHelperText> : null}

            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.trailer}

                sx={{ width: "100%" }}
                label="Trailer *"
                name="trailer"

              />
              {formik.touched.trailer && formik.errors.trailer ? <FormHelperText sx={{ color: "red", fontSize: "16px", }} >{formik.errors.trailer}</FormHelperText> : null}

            </Box>
            <Box sx={{ paddingBottom: "10px" }}>

              <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                placeholder="Mô tả *"
                name="moTa"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.moTa}

                style={{ width: "100%", fontSize: "16px" }}
              />
              {formik.touched.moTa && formik.errors.moTa ? <FormHelperText sx={{ color: "red", fontSize: "16px", }} >{formik.errors.moTa}</FormHelperText> : null}

            </Box>
            <Box sx={{ paddingBottom: "10px" }}>


              <LocalizationProvider dateAdapter={AdapterDateFns}>


                <DesktopDatePicker
                  label="Ngày khởi chiếu"
                  value={formik.values.ngayKhoiChieu}

                  onBlur={formik.handleBlur}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu ? <FormHelperText sx={{ color: "red", fontSize: "16px", }} >{formik.errors.ngayKhoiChieu}</FormHelperText> : null}

            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ paddingBottom: "10px" }}>
                <FormLabel component="legend" sx={{ fontWeight: "bold" }}>Đang chiếu</FormLabel>
                <RadioGroup row aria-label="gender"
                  value={formik.values.dangChieu}
                  name="dangChieu" onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue("dangChieu", e.target.value)}>
                  <FormControlLabel value={false} control={<Radio />} label="Sai" />
                  <FormControlLabel value={true} control={<Radio />} label="Đúng" />
                </RadioGroup>
                {formik.touched.dangChieu && formik.errors.dangChieu ? <FormHelperText sx={{ color: "red", fontSize: "16px", }} >{formik.errors.dangChieu}</FormHelperText> : null}
              </Box>

              <Box sx={{ paddingBottom: "10px" }}>
                <FormLabel component="legend" sx={{ fontWeight: "bold" }}>Sắp chiếu</FormLabel>
                <RadioGroup row aria-label="gender"
                  value={formik.values.sapChieu}
                  name="sapChieu" onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue("sapChieu", e.target.value)}>
                  <FormControlLabel value={false} control={<Radio />} label="Sai" />
                  <FormControlLabel value={true} control={<Radio />} label="Đúng" />
                </RadioGroup>
                {formik.touched.sapChieu && formik.errors.sapChieu ? <FormHelperText sx={{ color: "red", fontSize: "16px", }} >{formik.errors.sapChieu}</FormHelperText> : null}
              </Box>

              <Box sx={{ paddingBottom: "10px" }}>
                <FormLabel component="legend" sx={{ fontWeight: "bold" }}>Hot</FormLabel>
                <RadioGroup row aria-label="gender"
                  value={formik.values.hot}
                  name="hot" onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue("hot", e.target.value)}>
                  <FormControlLabel value={false} control={<Radio />} label="Sai" />
                  <FormControlLabel value={true} control={<Radio />} label="Đúng" />
                </RadioGroup>
                {formik.touched.hot && formik.errors.hot ? <FormHelperText sx={{ color: "red", fontSize: "16px", }} >{formik.errors.hot}</FormHelperText> : null}
              </Box>
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>


              {formik.touched.danhGia && formik.errors.danhGia ? <FormHelperText sx={{ color: "red", fontSize: "16px", }} >{formik.errors.danhGia}</FormHelperText> : null}

            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <Button onSubmit={formik.handleSubmit} variant="contained" type="submit">
                Thêm phim
              </Button>

            </Box>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
export default AddFilm;

