import React, { useState, useEffect, Fragment } from "react";
import "./Complex.css";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { actGetInfoShowtimesCinemaSystem } from "redux/actions/CinemaManagementActions";
import { KeyboardReturnSharp } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Complex() {
  const [cinema, setCinema] = useState(0);
  const [cluster, setCluster] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetInfoShowtimesCinemaSystem());
  }, []);

  const { infoShowtimesCinemaSystem } = useSelector(
    (state) => state.cinemaManagementReducer
  );

  const handleChangeTabsCinema = (event, newValue) => {
    setCinema(newValue);
    setCluster(0);
  };

  const handleChangeTabsCluster = (event, newValue) => {
    setCluster(newValue);
  };

  const renderCinemaSystem = () => {
    return infoShowtimesCinemaSystem?.map((heThongRap, index) => {
      heThongRap.id = index;
      return (
        <Tab
          key={heThongRap.maHeThongRap}
          label={
            <>
              <img
                src={heThongRap.logo}
                alt={heThongRap.logo}
                style={{ width: "50px", padding: "20px", display: "block" }}
              />
            </>
          }
          value={index}
          {...a11yProps(heThongRap.maHeThongRap)}
        />
      );
    });
  };

  const renderClusterCinema = () => {
    return infoShowtimesCinemaSystem[cinema].lstCumRap.map((cumRap, index) => {
      cumRap.id = index;
      return (
        <Tab
          key={index}
          value={index}
          label={
            <>
              <div
                style={{
                  display: "flex",
                  padding: "20px",
                }}
              >
                <img
                  src={cumRap.hinhAnh}
                  alt={cumRap.hinhAnh}
                  style={{
                    width: "50px",

                    display: "block",
                  }}
                />
                <div
                  style={{
                    textAlign: "left",
                    marginLeft: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h4 style={{ textTransform: "none" }}>
                    {cumRap.tenCumRap.length > 25
                      ? cumRap.tenCumRap.slice(0, 25) + "..."
                      : cumRap.tenCumRap}
                  </h4>
                  <p style={{ fontSize: "14px", textTransform: "none" }}>
                    {cumRap.diaChi.length > 25
                      ? cumRap.diaChi.slice(0, 25) + "..."
                      : cumRap.diaChi}
                  </p>
                </div>
              </div>
            </>
          }
          {...a11yProps(index)}
        />
      );
    });
  };

  const renderShowtimes = (listFilm) => {
    if (listFilm)
      return listFilm.slice(0, 3).map((film) => {
        return (
          <Fragment key={film.maPhim}>
            <div key={film.tenPhim}>{film.tenPhim}</div> <br />
          </Fragment>
        );
      });
  };

  const renderCinemaCluster = () => {
    if (infoShowtimesCinemaSystem) {
      return infoShowtimesCinemaSystem?.map((heThongRap, index) => {
        heThongRap.id = index;
        return (
          <TabPanel key={index} value={cinema} index={index}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={cluster}
                onChange={handleChangeTabsCluster}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                {renderClusterCinema()}
              </Tabs>
              {renderShowtimes(
                infoShowtimesCinemaSystem[cinema].lstCumRap[index].danhSachPhim
              )}
            </Box>
          </TabPanel>
        );
      });
    }
  };

  const renderTabs = () => {
    return renderCinemaSystem();
  };

  return (
    <Container style={{ maxWidth: "940px" }}>
      <div id="homeCinemaComplex">
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: "546px",
            border: "1px solid #ebebec",
          }}
        >
          <Tabs
            orientation="vertical"
            value={cinema}
            onChange={handleChangeTabsCinema}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {renderTabs()}
          </Tabs>
          {renderCinemaCluster()}
        </Box>
      </div>
    </Container>
  );
}

// <Box
// sx={{
//   flexGrow: 1,
//   bgcolor: "background.paper",
//   display: "flex",
//   height: "546px",
// }}
// >
// <Tabs
//   style={{ padding: 0 }}
//   orientation="vertical"
//   value={value2}
//   onChange={(e, value) => {
//     console.log(value);
//     setValue2(value);
//   }}
//   aria-label="Vertical tabs example"
//   sx={{ borderRight: 1, borderColor: "divider" }}
// >
//   <Tab
//     value={15}
//     label={
//       <>
//         <div
//           style={{
//             display: "flex",
//             padding: "20px",
//           }}
//         >
//           <img
//             src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
//             alt=""
//             style={{
//               width: "50px",

//               display: "block",
//             }}
//           />
//           <div
//             style={{
//               textAlign: "left",
//               marginLeft: "8px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//             }}
//           >
//             <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
//             <p
//               style={{ fontSize: "14px", textTransform: "none" }}
//             >
//               di chi
//             </p>
//           </div>
//         </div>
//       </>
//     }
//     {...a11yProps(10)}
//   />
//   <Tab
//     label={
//       <>
//         <div
//           style={{
//             display: "flex",
//             padding: "20px",
//           }}
//         >
//           <img
//             src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
//             alt=""
//             style={{
//               width: "50px",

//               display: "block",
//             }}
//           />
//           <div
//             style={{
//               textAlign: "left",
//               marginLeft: "8px",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//             }}
//           >
//             <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
//             <p
//               style={{ fontSize: "14px", textTransform: "none" }}
//             >
//               di chi
//             </p>
//           </div>
//         </div>
//       </>
//     }
//     {...a11yProps(11)}
//   />
//   <Tab
//     label={
//       <>
//         <div
//           style={{
//             display: "flex",
//             padding: "20px",
//           }}
//         >
//           <img
//             src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
//             alt=""
//             style={{
//               width: "50px",

//               display: "block",
//             }}
//           />
//           <div
//             style={{
//               textAlign: "left",
//               marginLeft: "8px",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//             }}
//           >
//             <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
//             <p
//               style={{ fontSize: "14px", textTransform: "none" }}
//             >
//               di chi
//             </p>
//           </div>
//         </div>
//       </>
//     }
//     {...a11yProps(12)}
//   />
//   <Tab
//     label={
//       <>
//         <div
//           style={{
//             display: "flex",
//             padding: "20px",
//           }}
//         >
//           <img
//             src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
//             alt=""
//             style={{
//               width: "50px",

//               display: "block",
//             }}
//           />
//           <div
//             style={{
//               textAlign: "left",
//               marginLeft: "8px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//             }}
//           >
//             <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
//             <p
//               style={{ fontSize: "14px", textTransform: "none" }}
//             >
//               di chi
//             </p>
//           </div>
//         </div>
//       </>
//     }
//     {...a11yProps(13)}
//   />
//   <Tab
//     label={
//       <>
//         <div
//           style={{
//             display: "flex",
//             padding: "20px",
//           }}
//         >
//           <img
//             src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
//             alt=""
//             style={{
//               width: "50px",

//               display: "block",
//             }}
//           />
//           <div
//             style={{
//               textAlign: "left",
//               marginLeft: "8px",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//             }}
//           >
//             <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
//             <p
//               style={{ fontSize: "14px", textTransform: "none" }}
//             >
//               di chi
//             </p>
//           </div>
//         </div>
//       </>
//     }
//     {...a11yProps(14)}
//   />

//   <Tab
//     label={
//       <>
//         <div
//           style={{
//             display: "flex",
//             padding: "20px",
//           }}
//         >
//           <img
//             src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
//             alt=""
//             style={{
//               width: "50px",

//               display: "block",
//             }}
//           />
//           <div
//             style={{
//               textAlign: "left",
//               marginLeft: "8px",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//             }}
//           >
//             <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
//             <p
//               style={{ fontSize: "14px", textTransform: "none" }}
//             >
//               di chi
//             </p>
//           </div>
//         </div>
//       </>
//     }
//     {...a11yProps(15)}
//   />
// </Tabs>

// <TabPanel value={value2} index={20}>
//   Item asdffffffffffff
// </TabPanel>
// <TabPanel value={value2} index={21}>
//   Item Two
// </TabPanel>
// <TabPanel value={value2} index={22}>
//   Item Two
// </TabPanel>
// <TabPanel value={value2} index={23}>
//   Item Two
// </TabPanel>
// <TabPanel value={value2} index={24}>
//   Item Two
// </TabPanel>
// <TabPanel value={value2} index={25}>
//   Item Two
// </TabPanel>
// </Box>
