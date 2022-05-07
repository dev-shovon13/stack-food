import { Avatar, Typography, ListItem, ListItemIcon, ListItemText } from "@mui/material"

const UserAvatar = (props) => {
    const { func } = props
    return <Avatar className="cursor" onClick={func} src="https://i.ibb.co/Rj1GdnQ/avatar.png" />
}
const DashboardSectionTitle = ({ name }) => {
    return <Typography variant="body1" sx={{ mx: 3, my: 2, fontWeight: "bold", color: "#212B36" }}>{name}</Typography>
}
const DashboardMenu = ({ text, children }) => {
    return <ListItem button key={text}>
        <ListItemIcon>
            {children}
        </ListItemIcon>
        <ListItemText primary={text} />
    </ListItem>
}

export { DashboardMenu, DashboardSectionTitle, UserAvatar }