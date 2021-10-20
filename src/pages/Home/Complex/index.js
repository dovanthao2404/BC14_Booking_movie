import React, { useState } from "react";
import "./Complex.css";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  // const

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setValue2(20);
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
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              label={
                <>
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt=""
                    style={{ width: "50px", padding: "20px", display: "block" }}
                  />
                </>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <>
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt=""
                    style={{ width: "50px", padding: "20px", display: "block" }}
                  />
                </>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <>
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt=""
                    style={{ width: "50px", padding: "20px", display: "block" }}
                  />
                </>
              }
              {...a11yProps(2)}
            />
            <Tab
              label={
                <>
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt=""
                    style={{ width: "50px", padding: "20px", display: "block" }}
                  />
                </>
              }
              {...a11yProps(3)}
            />
            <Tab
              label={
                <>
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt=""
                    style={{ width: "50px", padding: "20px", display: "block" }}
                  />
                </>
              }
              {...a11yProps(4)}
            />
            <Tab
              label={
                <>
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt=""
                    style={{ width: "50px", padding: "20px", display: "block" }}
                  />
                </>
              }
              {...a11yProps(5)}
            />
          </Tabs>
          <TabPanel value={value} index={0} style={{ padding: 0 }}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: "546px",
              }}
            >
              <Tabs
                style={{ padding: 0 }}
                orientation="vertical"
                value={value2}
                onChange={(e, value) => {
                  console.log(value);
                  setValue2(value);
                }}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab
                  value={15}
                  label={
                    <>
                      <div
                        style={{
                          display: "flex",
                          padding: "20px",
                        }}
                      >
                        <img
                          src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                          alt=""
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
                          <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
                          <p
                            style={{ fontSize: "14px", textTransform: "none" }}
                          >
                            di chi
                          </p>
                        </div>
                      </div>
                    </>
                  }
                  {...a11yProps(10)}
                />
                <Tab
                  label={
                    <>
                      <div
                        style={{
                          display: "flex",
                          padding: "20px",
                        }}
                      >
                        <img
                          src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                          alt=""
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
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
                          <p
                            style={{ fontSize: "14px", textTransform: "none" }}
                          >
                            di chi
                          </p>
                        </div>
                      </div>
                    </>
                  }
                  {...a11yProps(11)}
                />
                <Tab
                  label={
                    <>
                      <div
                        style={{
                          display: "flex",
                          padding: "20px",
                        }}
                      >
                        <img
                          src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                          alt=""
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
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
                          <p
                            style={{ fontSize: "14px", textTransform: "none" }}
                          >
                            di chi
                          </p>
                        </div>
                      </div>
                    </>
                  }
                  {...a11yProps(12)}
                />
                <Tab
                  label={
                    <>
                      <div
                        style={{
                          display: "flex",
                          padding: "20px",
                        }}
                      >
                        <img
                          src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                          alt=""
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
                          <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
                          <p
                            style={{ fontSize: "14px", textTransform: "none" }}
                          >
                            di chi
                          </p>
                        </div>
                      </div>
                    </>
                  }
                  {...a11yProps(13)}
                />
                <Tab
                  label={
                    <>
                      <div
                        style={{
                          display: "flex",
                          padding: "20px",
                        }}
                      >
                        <img
                          src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                          alt=""
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
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
                          <p
                            style={{ fontSize: "14px", textTransform: "none" }}
                          >
                            di chi
                          </p>
                        </div>
                      </div>
                    </>
                  }
                  {...a11yProps(14)}
                />

                <Tab
                  label={
                    <>
                      <div
                        style={{
                          display: "flex",
                          padding: "20px",
                        }}
                      >
                        <img
                          src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                          alt=""
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
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <h4 style={{ textTransform: "none" }}>Ten Rap</h4>
                          <p
                            style={{ fontSize: "14px", textTransform: "none" }}
                          >
                            di chi
                          </p>
                        </div>
                      </div>
                    </>
                  }
                  {...a11yProps(15)}
                />
              </Tabs>

              <TabPanel value={value2} index={20}>
                Item asdffffffffffff
              </TabPanel>
              <TabPanel value={value2} index={21}>
                Item Two
              </TabPanel>
              <TabPanel value={value2} index={22}>
                Item Two
              </TabPanel>
              <TabPanel value={value2} index={23}>
                Item Two
              </TabPanel>
              <TabPanel value={value2} index={24}>
                Item Two
              </TabPanel>
              <TabPanel value={value2} index={25}>
                Item Two
              </TabPanel>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Two
          </TabPanel>
        </Box>
      </div>
    </Container>
  );
}
