import React from "react";
import { Avatar, Box, Divider, ListItem, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";

import Helmet from "../../assets/img/helmet.svg";

export interface IUser {
  no: number;
  name: string;
  speed: number;
  time: string;
  penaltyTime: string;
  active: boolean;
  clickEvent: (value: number) => void;
}

const useStyles = createUseStyles({
  activeListItem: {
    color: "purple",
  },
  deactiveDetailItem: {
    color: "gray",
  },
  activeDetailItem: {
    color: "orange",
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  activeAvatar: {
    outline: "solid 2px purple",
    outlineOffset: "2px",
    color: "green",
  },
  divider: {
    borderColor: "blue",
  },
  listItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  listItemText: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  nameField: {
    textOverflow: "ellipsis",
  },
  timePanel: {
    display: "inline",
    color: "purple",
  },
  speedPanel: {
    color: "blue",
  },
});

const UserCard: React.FC<IUser> = (props) => {
  const classes = useStyles();
  return (
    <ListItem
      onClick={() => {
        props.clickEvent(props.no);
      }}
      className={classes.listItem}
    >
      <Typography
        component="span"
        variant="h6"
        className={props.active ? classes.activeListItem : ""}
      >
        {props.no}
      </Typography>
      <Avatar
        className={props.active ? classes.activeAvatar : ""}
        alt="avatar"
        src={Helmet}
      />
      <Box className={classes.listItemText}>
        <Typography
          component="span"
          variant="body1"
          className={classes.nameField}
        >
          {props.name}
        </Typography>
        <React.Fragment>
          <Box display="flex" gap={1}>
            <Typography
              component="span"
              variant="body2"
              className={classes.timePanel}
            >
              {props.time}
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Typography
              component="span"
              variant="body2"
              className={classes.speedPanel}
            >
              {props.speed} км/ч
            </Typography>
          </Box>
          <Typography
            className={
              props.active
                ? classes.activeDetailItem
                : classes.deactiveDetailItem
            }
          >
            штрафное время {props.penaltyTime}
          </Typography>
        </React.Fragment>
      </Box>
    </ListItem>
  );
};

export default React.memo(UserCard);
