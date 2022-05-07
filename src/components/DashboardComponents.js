import {
  Box,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { UserAvatar } from "./DashboardCommon";
import { user } from "../data/userInfo";
import { list } from "../data/items";
import { GenerateIcon } from "../utils";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const UserProfile = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Grid
        container
        sx={{ p: 2, backgroundColor: "#F3F4F5", borderRadius: "10px" }}
      >
        <Grid item xs={3}>
          <UserAvatar />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">{user.userId}</Typography>
          <Typography variant="body2" sx={{ color: "#4B5864" }}>
            {user.name}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const DashboardItems = () => {
  const [nestedMenuOpen, setNestedMenuOpen] = useState({ menuOpen: {} });

  const handleNestedMenu = (name) => {
    setNestedMenuOpen({ [name]: !nestedMenuOpen[name] });
  };

  return (
    <List sx={{ mx: 2 }}>
      {list?.map((list) => {
        return (
          <List
            key={list.id}
            subheader={
              <ListSubheader>
                <Typography
                  sx={{ my: 2, fontWeight: "bold", color: "#212B36" }}
                >
                  {list.title}
                </Typography>
              </ListSubheader>
            }
          >
            {list.items.map(({ icon, id, name, subitems }) => {
              const menuOpen = nestedMenuOpen[name] || false;
              return (
                <Box key={id}>
                  {subitems != null ? (
                    <Box key={id}>
                      <ListItem
                        button
                        key={id}
                        onClick={() => handleNestedMenu(name)}
                      >
                        <ListItemIcon>
                          {icon && GenerateIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={name} />
                        {menuOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse
                        key={id}
                        component="li"
                        in={menuOpen}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List disablePadding>
                          {subitems.map((sitem) => {
                            return (
                              <ListItem button key={sitem.id} sx={{ pl: 4 }}>
                                <ListItemText
                                  key={sitem.id}
                                  primary={sitem.name}
                                />
                              </ListItem>
                            );
                          })}
                        </List>
                      </Collapse>
                    </Box>
                  ) : (
                    <ListItem
                      button
                      onClick={() => handleNestedMenu(name)}
                      key={id}
                    >
                      <ListItemIcon>{icon && GenerateIcon(icon)}</ListItemIcon>
                      <ListItemText primary={name} />
                      <MdKeyboardArrowRight style={{ fontSize: "23px" }} />
                    </ListItem>
                  )}
                </Box>
              );
            })}
          </List>
        );
      })}
    </List>
  );
};

export { DashboardItems, UserProfile };
