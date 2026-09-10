import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Frontend" value="1" />
            <Tab label="Backend" value="2" />
            <Tab label="Database" value="3" />
            <Tab label="Other" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ul className="fs-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap(Framework)</li>
            <li>Embedded JavaScript (EJS)</li>
            <li>React</li>
            <li>Material-UI</li>
          </ul>
        </TabPanel>
        <TabPanel value="2">
          <ul className="fs-5">
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </TabPanel>
        <TabPanel value="3">
          <ul className="fs-5">
            <li>SQL & MySQL</li>
            <li>MongoDB & Mongoose</li>
          </ul>
        </TabPanel>
        <TabPanel value="4">
          <ul className="fs-5">
            <li>Git & GitHub</li>
            <li>npm</li>
            <li>C++</li>
          </ul>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
