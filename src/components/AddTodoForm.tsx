import React, { useState } from "react";
import "./../types/types.d.ts";
import Grid from "@material-ui/core/Grid";

interface Props {
  addHandler: AddTodo;
}

function AddTodoForm(p: Props) {
  let [item, setItem] = useState("");
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      alignItems="center"
      justify="center"
    >
      <Grid item sm={10} xs={12}>
        <input
          type="text"
          value={item}
          onChange={e => {
            setItem(e.target.value);
          }}
        />
      </Grid>
      <Grid item sm={2} xs={12}>
        <button
          onClick={e => {
            p.addHandler(item);
            setItem("");
          }}
        >
          Add
        </button>
      </Grid>
    </Grid>
  );
}

export default AddTodoForm;
