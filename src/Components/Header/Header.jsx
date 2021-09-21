import { useCallback, useContext } from "react";
import Search from "./Search/Search";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { deleteListItem, setSelected, setCompleted } from "../../store/listReducer";
import { useDispatch, useSelector } from "react-redux";
import CreateNewItemButton from "./CreateNewItemButton/CreateNewItemButton";
export default function Header({ classes }) {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.list);
  const handleDelete = useCallback(() => {
    dispatch(deleteListItem());
    dispatch(setSelected(null));
  }, [dispatch, deleteListItem, setSelected]);
  return (
    <>
      <ListItem className={classes.header}>
        <ListItemIcon style={{ color: "White" }}>
          {selected.length > 0 && (
            <>
            <DeleteSharpIcon color={"secondary"} onClick={handleDelete} />
            <CheckCircleIcon color={"success"} onClick={()=>{dispatch(setCompleted())}}  />
            </>
          )}
        </ListItemIcon>{" "}
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <CreateNewItemButton />
      </ListItem>
    </>
  );
}
