import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, ButtonGroup, Button } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";


const useStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  moreStyle: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Todo = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.todoStyle}>
        <div>
         
            <Typography variant="subtitle1" className={classes.checked}>
             Todo one
            </Typography>
   
            <Typography variant="subtitle1">
              Todo one
            </Typography>

          <Typography variant="body2" className={classes.moreStyle}>
            Author: Xavio
          </Typography>

          <Typography variant="body2" className={classes.moreStyle}>
            Added: 07/02/2022 13:35
          </Typography>

        </div>

        <div>
         
            <ButtonGroup
              size="small"
              aria-label="outlined primary button group"
              >
              <Button>
                  <CheckCircle color="action" />
              </Button>

              <Button>
                <Create color="primary" />
              </Button>

              <Button>
                <Delete color="secondary" />
              </Button>

            </ButtonGroup>
         
        </div>
      </div>
    </>
  );
};

export default Todo;
