import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import ClusterCinema from "../../../../components/ClusterCinema";
import Accordions from "components/Accordions";
import "./style.css";
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

const useStyles = makeStyles({
  listSystemCinema: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "auto",
  },
  cinemaLogo: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "10px",
    cursor: "pointer",
    opacity: "0.6",
  },
  classActiveSystem: {
    opacity: "1",
  },
  "@media (max-width: 575.98px)": {
    listSystemCinema: {
      maxWidth: "210px",
    },
  },
});

const SCREEN_768 = 768;
export default function Complex(props) {
  const { infoFilmShowtimes, screenWidth } = props;
  const { heThongRapChieu } = infoFilmShowtimes ? infoFilmShowtimes : [];

  const [systemCinemaCurrent, setSystemCinemaCurrent] = useState(0);
  const classes = useStyles();
  const [cinema, setCinema] = useState(0);

  if (!heThongRapChieu) {
    return <></>;
  }

  const handleChangeTabsCinema = (event, newValue) => {
    setCinema(newValue);
  };

  const renderCinemaSystem = () => {
    return heThongRapChieu?.[systemCinemaCurrent]?.cumRapChieu.map(
      (cumRap, index) => {
        return (
          <Tab
            sx={{ width: "300px", padding: 0 }}
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
      }
    );
  };

  const renderListSystemCinema = () => {
    return heThongRapChieu?.map((heThongRap, i) => {
      const classActiveSystem = i === systemCinemaCurrent ? true : false;
      return (
        <img
          onClick={() => {
            setSystemCinemaCurrent(i);
            setCinema(0);
          }}
          key={heThongRap.maHeThongRap}
          className={clsx(
            classes.cinemaLogo,
            classActiveSystem ? classes.classActiveSystem : ""
          )}
          src={heThongRap.logo}
          alt={heThongRap.tenHeThongRap}
        />
      );
    });
  };

  const renderTabPanel = () => {
    return heThongRapChieu?.[systemCinemaCurrent]?.cumRapChieu.map(
      (value, index) => {
        return (
          <TabPanel
            style={{
              width: screenWidth >= SCREEN_768 ? "calc(100% - 300px)" : "100%",
            }}
            key={index}
            value={cinema}
            index={index}
          >
            <Accordions
              lichChieuPhim={value.lichChieuPhim}
              filmInfo={infoFilmShowtimes}
              screenWidth={screenWidth}
            />
          </TabPanel>
        );
      }
    );
  };

  return (
    <>
      <div className={classes.listSystemCinema}>{renderListSystemCinema()}</div>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: screenWidth >= SCREEN_768 ? "flex" : "block",
          maxHeight: "540px",
          minHeight: "272px",
          color: "#333",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <Tabs
          orientation={screenWidth >= SCREEN_768 ? "vertical" : "horizontal"}
          variant="scrollable"
          value={cinema}
          onChange={handleChangeTabsCinema}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {renderCinemaSystem()}
        </Tabs>
        {renderTabPanel()}
      </Box>
    </>
  );
}
