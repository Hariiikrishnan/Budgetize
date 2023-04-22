import React from "react";
import { useSwipeable } from "react-swipeable";


import Button from "@mui/material/Button";


import ShortCard from "./ShortCard";
import "./createArea.css"

function CreateArea() {
  return (
    <>
    <div class="createArea-Head">
    <Button variant="outlined" size="small">
        Add New
      </Button>
    </div>

    <ShortCard />
     
    </>
  );
}

export default CreateArea;
