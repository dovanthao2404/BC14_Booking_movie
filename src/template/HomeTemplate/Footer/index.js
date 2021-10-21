import React, { Fragment, useState } from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

export default function Footer() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.onresize = (e) => {
    setScreenWidth(e.target.innerWidth);
  };
  const { cinemaSystemInformation } = useSelector(
    (state) => state.cinemaManagementReducer
  );
  const renderPartner = () => {
    return cinemaSystemInformation?.map((cinema, i) => {
      return (
        <Fragment key={i}>
          <Box sx={{ marginRight: "20px", marginBottom: "20px" }}>
            <Box
              component="img"
              sx={{ width: "60px", height: "60px" }}
              src={cinema.logo}
              alt={cinema.logo}
            />
          </Box>
        </Fragment>
      );
    });
  };

  const renderFooterTop = () => {
    if (screenWidth >= 900) {
      return (
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "calc(100% / 3)" }}>
            <Box component="p" sx={{ color: "white", mb: "10px" }}>
              TIX
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "50%", lineHeight: "2.3", pr: "10px" }}>
                <Box>FAQ</Box>
                <Box>Brand Guidelines</Box>
              </Box>
              <Box sx={{ width: "50%", lineHeight: "2.3", pr: "10px" }}>
                <Box>Thoả thuận sử dụng </Box>
                <Box>Chính sách bảo mật</Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "calc(100% / 3)" }}>
            <Box component="p" sx={{ color: "white", mb: "10px" }}>
              Đối tác
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {renderPartner()}
            </Box>
          </Box>
          <Box sx={{ width: "calc((100% / 3)/ 2)", textAlign: "center" }}>
            <Box component="p" sx={{ color: "white", mb: "10px" }}>
              MOBILE APP
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                sx={{ width: "30px", heigth: "30px", margin: "5px" }}
                src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                alt="https://tix.vn/app/assets/img/icons/apple-logo.png"
              />
              <Box
                component="img"
                sx={{ width: "30px", heigth: "30px", margin: "5px" }}
                src="https://tix.vn/app/assets/img/icons/android-logo.png"
                alt="https://tix.vn/app/assets/img/icons/android-logo.png"
              />
            </Box>
          </Box>
          <Box sx={{ width: "calc((100% / 3) / 2)", textAlign: "center" }}>
            <Box component="p" sx={{ color: "white", mb: "10px" }}>
              SOCIAL
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                sx={{ width: "30px", heigth: "30px", margin: "5px" }}
                src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                alt="https://tix.vn/app/assets/img/icons/facebook-logo.png"
              />
              <Box
                component="img"
                sx={{ width: "30px", heigth: "30px", margin: "5px" }}
                src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                alt="https://tix.vn/app/assets/img/icons/zalo-logo.png"
              />
            </Box>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            display: screenWidth >= 768 ? "flex" : "block",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: screenWidth >= 768 ? "calc(100% / 2)" : "100%",
              margin: screenWidth >= 768 ? "0" : "auto",
              lineHeight: "2.3",
              pr: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ margin: "4px" }}>Thoả thuận sử dụng </Box>
            <Box sx={{ margin: "4px" }}>Chính sách bảo mật</Box>
          </Box>

          <Box
            sx={{
              width: screenWidth >= 768 ? "calc(100% / 2)" : "100%",
              margin: screenWidth >= 768 ? "0" : "auto",
              lineHeight: "2.3",
              pr: "10px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                sx={{ width: "30px", heigth: "30px", margin: "5px" }}
                src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                alt="https://tix.vn/app/assets/img/icons/facebook-logo.png"
              />
              <Box
                component="img"
                sx={{ width: "30px", heigth: "30px", margin: "5px" }}
                src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                alt="https://tix.vn/app/assets/img/icons/zalo-logo.png"
              />
            </Box>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box sx={{ py: "20px", background: "#222", color: "#949494" }}>
      <Container
        style={{ maxWidth: "940px", fontSize: "12px", fontWeight: "700" }}
      >
        {renderFooterTop()}
        <Box
          sx={{
            height: "1px",
            margin: "20px 0",
            width: "100%",
            background: "#4a4a4a",
          }}
        ></Box>
        <Box
          sx={{
            display: screenWidth >= 900 ? "flex" : "block",

            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: screenWidth >= 900 ? "8.5%" : "100%" }}>
            <Box
              component="img"
              sx={{
                borderRadius: "4px",
                width: "80px",
                display: "block",
                margin: "0 auto",
              }}
              src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
              alt="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
            />
          </Box>
          <Box
            sx={{
              width: screenWidth >= 900 ? "70%" : "100%",
              padding: "0 15px",
              textAlign: screenWidth >= 900 ? "left" : "center",
              margin: screenWidth >= 900 ? "0" : "20px 0",
            }}
          >
            <Box component="p" sx={{ color: "white", mb: "10px" }}>
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </Box>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            <p>Email: support@tix.vn</p>
          </Box>
          <Box
            sx={{
              width: screenWidth >= 900 ? "17%" : "100%",
            }}
          >
            <Box
              component="img"
              sx={{
                borderRadius: "4px",
                width: "130px",
                display: "block",
                margin: "0 auto",
              }}
              src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
              alt="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
