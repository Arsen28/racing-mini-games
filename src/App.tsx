import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Container, List } from "@mui/material";

import { IUser } from "./components/User";
import UserJSONData from "./assets/data";

const UserCard = React.lazy(() => import("./components/User"));

const useStyles = createUseStyles({
  userDataList: {
    width: "100vw",
    height: "100vh",
    overFlow: "auto",
    maxWidth: 360,
  },
});

const App: React.FC = () => {
  const [userData, setUserData] = useState<IUser[]>([]);
  const [activeItem, setActiveItem] = useState(0);
  const [showingCount, setShowingCount] = useState(50);
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const formatedData: any[] = [];

    UserJSONData.slice(0, showingCount).forEach((data, index) => {
      formatedData.push({
        ...data,
        no: index + 1,
      });
    });

    setUserData(formatedData);
  }, [showingCount]);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setShowingCount((prev) =>
        prev + 50 > UserJSONData.length ? UserJSONData.length : prev + 50
      );
    }
  };

  return (
    <Container>
      <List className={classes.userDataList} onScroll={handleScroll}>
        {userData.map((userData, index) => (
          <UserCard
            {...userData}
            key={index}
            clickEvent={setActiveItem}
            active={activeItem === index + 1}
          />
        ))}
      </List>
    </Container>
  );
};

export default App;
