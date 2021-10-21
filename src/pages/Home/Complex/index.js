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
import ClusterCinema from "./ClusterCinema";
import Accordions from "./Accordions";

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

export default function Complex(props) {
  const { screenWidth } = props;
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
          variant={screenWidth > 582 ? "standard" : "scrollable"}
          label={
            <>
              <img
                src={heThongRap.logo}
                alt={heThongRap.logo}
                style={{
                  width: "50px",
                  height: "50px",
                  padding: "20px",
                  display: "block",
                }}
              />
            </>
          }
          style={{ width: "90px" }}
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
          sx={{ width: "290px" }}
          key={index}
          value={index}
          label={
            <>
              <ClusterCinema cumRap={cumRap} />
            </>
          }
          {...a11yProps(index)}
        />
      );
    });
  };

  const renderShowtimes = (lstCumRap) => {
    if (lstCumRap)
      return lstCumRap.map((listFilm, index) => {
        return (
          <TabPanel key={index} value={cluster} index={index}>
            <Box
              id="accordionDetailId"
              sx={{
                overflow: "auto",
                height: screenWidth >= 768 ? "540px" : "340px",
              }}
            >
              {listFilm.danhSachPhim.map((film) => {
                return (
                  <div key={film.maPhim} id="homeAccordion">
                    <Accordions screenWidth={screenWidth} film={film} />
                  </div>
                );
              })}
            </Box>
          </TabPanel>
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
                display: screenWidth >= 768 ? "flex" : "block",
                heigth: "540px",
                overflow: "auto",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: screenWidth >= 768 ? "flex" : "block",
                }}
              >
                <Tabs
                  orientation={screenWidth >= 768 ? "vertical" : "horizontal"}
                  value={cluster}
                  onChange={handleChangeTabsCluster}
                  aria-label="Vertical tabs example"
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  {renderClusterCinema()}
                </Tabs>
              </Box>
              {renderShowtimes(infoShowtimesCinemaSystem[cinema].lstCumRap)}
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
    <div style={{ paddingBottom: "40px" }}>
      <Container style={{ maxWidth: "940px" }}>
        <div id="homeCinemaComplex"></div>
        <div>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: screenWidth >= 768 ? "flex" : "block",
              height: screenWidth >= 768 ? "540px" : "auto",
              border: "2px solid #ebebec",
            }}
          >
            <Box>
              <Tabs
                // centered
                id="tabsParent"
                orientation={screenWidth >= 768 ? "vertical" : "horizontal"}
                variant={screenWidth > 582 ? "standard" : "scrollable"}
                centered={screenWidth > 582 ? true : false}
                value={cinema}
                onChange={handleChangeTabsCinema}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  justifyContent: "center",
                }}
              >
                {renderTabs()}
              </Tabs>
            </Box>
            {renderCinemaCluster()}
          </Box>
        </div>
      </Container>
    </div>
  );
}
