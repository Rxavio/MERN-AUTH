import React from "react";

import { Typography, ButtonGroup, Button } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";

const Todo = () => {
 
  return (
    <>
      <div className="">
        <div>
            <Typography variant="subtitle1" className="">
              Todo
            </Typography>

         
            <Typography variant="subtitle1">Todo list</Typography>
         
          <Typography variant="body2" className="">
            Author: xavi
          </Typography>
          <Typography variant="body2" className="">
            Added: 02/02/2022
          </Typography>
        </div>
        <div>
         
            <ButtonGroup
              size="small"
              aria-label="outlined primary button group"
            >
              <Button >
                  <CheckCircle className=""/>
                  <CheckCircle color="action" />
              </Button>
              
              <Button >
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
