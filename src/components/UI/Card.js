import React from "react";

import classes from "./Card.module.css";
import Button from "./Button";

const Card = (props) => {
  return (
    <div class={classes.card}>
      <div class={classes["card-header"]}>
        <p>JUN - POČETNE POTEŠKOĆE</p>
        <small>Statični heksagram</small>
      </div>
      <div class="card-body">
        <div class="card-result">
          <div class="hexagramNumber">3.HEXAGRAM</div>
          <span class="lineSix"></span>
          <span class="lineFive"></span>
          <span class="lineFour"></span>
          <span class="lineThree"></span>
          <span class="lineTwo"></span>
          <span class="lineOne"></span>
        </div>
        <div class="card-description">
          <div class="sastavniTrigrami">
            <h5>Sastavni trigrami:</h5>
            <p class="lead" id="gore">
              GORE: KAN, voda, ponor, poteškoće
            </p>
            <p class="lead" id="dolje">
              DOLJE: JEN, grom, pokret, rast
            </p>
          </div>
          <Button btnClass="enter" btnType="button">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
