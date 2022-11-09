import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { IoIosRocket } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
}));
const DatePicker = () => {
  const [value, setValue] = useState(null);
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label=""
        onChange={(e) => setValue(e.target.value)}
        type="date"
      />
      <Link href="desk/signup">
        <button
          className="p-2 bg-none focus:animate-ping
         border-white border text-white m-3 text-sm 
         flex items-center justify-between"
        >
          <IoIosRocket color="white" className="mr-3 " size="20px" />
          Lets Go
        </button>
      </Link>
    </form>
  );
};

export default DatePicker;
