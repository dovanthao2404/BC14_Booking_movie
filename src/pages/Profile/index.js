import { Container } from "@mui/material";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Info from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { actGetInfoAccount } from "redux/actions/UserManagementActions";
import Loading from "components/Loading";
import HistoryTicket from "./HistoryTicket";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const [value, setValue] = React.useState("1");
  const { infoAccount, isLoading, error, userLogin } = useSelector(
    (state) => state.userManagementReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!userLogin) {
      history.push("/");
    }
  }, [userLogin, history]);

  useEffect(() => {
    dispatch(actGetInfoAccount());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error.response.data.content}</p>;
  }

  return (
    <div style={{ paddingTop: "64px" }}>
      <Container style={{ maxWidth: "940px", padding: "40px 0" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              centered
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Thông tin cá nhân" value="1" />
              <Tab label="Lịch sử đặt vé" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Info infoAccount={infoAccount} />
          </TabPanel>
          <TabPanel value="2">
            <HistoryTicket infoTiket={infoAccount?.thongTinDatVe} />
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}
