import React, { useState, Fragment } from "react";
import "./Complex.css";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import ClusterCinema from "components/ClusterCinema";
import ListFilm from "./ListFilm";

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

const SCREEN_768 = 768;
const SCREEN_582 = 582;

export default function Complex(props) {
  const { screenWidth } = props;
  const [cinema, setCinema] = useState(0);
  const [cluster, setCluster] = useState(0);

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
          variant={screenWidth > SCREEN_582 ? "standard" : "scrollable"}
          label={
            <Box sx={{ padding: "20px" }}>
              <Box
                component="img"
                src={heThongRap.logo}
                alt={heThongRap.logo}
                sx={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                }}
              />
            </Box>
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
    return lstCumRap?.map((listFilm, index) => {
      return (
        <TabPanel key={index} value={cluster} index={index}>
          <Box
            id="accordionDetailId"
            sx={{
              overflow: "auto",
              height: screenWidth >= SCREEN_768 ? "540px" : "340px",
            }}
          >
            <ListFilm listFilm={listFilm.danhSachPhim} />
          </Box>
        </TabPanel>
      );
    });
  };

  const renderCinemaCluster = () => {
    if (infoShowtimesCinemaSystem) {
      return (
        <TabPanel value={cinema} index={cinema}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: screenWidth >= SCREEN_768 ? "flex" : "block",
              height: "screenWidth" >= SCREEN_768 ? "540px" : "auto",
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: screenWidth >= SCREEN_768 ? "flex" : "block",
              }}
            >
              <Tabs
                orientation={
                  screenWidth >= SCREEN_768 ? "vertical" : "horizontal"
                }
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
    }
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
              display: screenWidth >= SCREEN_768 ? "flex" : "block",
              height: screenWidth >= SCREEN_768 ? "100%" : "auto",
              border: "2px solid #ebebec",
            }}
          >
            <Box>
              <Tabs
                id="tabsParent"
                orientation={
                  screenWidth >= SCREEN_768 ? "vertical" : "horizontal"
                }
                variant={screenWidth > SCREEN_582 ? "standard" : "scrollable"}
                centered={screenWidth > SCREEN_582 ? true : false}
                value={cinema}
                onChange={handleChangeTabsCinema}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  justifyContent: "center",
                }}
              >
                {renderCinemaSystem()}
              </Tabs>
            </Box>
            {renderCinemaCluster()}
          </Box>
        </div>
      </Container>
    </div>
  );
}
