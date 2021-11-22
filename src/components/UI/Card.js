import React from "react";

import classes from "./Card.module.css";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-header"]}>
        <p>JUN - POČETNE POTEŠKOĆE</p>
        <small>Statični heksagram</small>
      </div>
      <div className={classes["card-body"]}>
        <div className={classes["card-lines"]}>
          <div class="hexagramNumber">3.HEXAGRAM</div>
          <div class="lineSix">----------------</div>
          <div class="lineFive">----------------</div>
          <div class="lineFour">----------------</div>
          <div class="lineThree">----------------</div>
          <div class="lineTwo">----------------</div>
          <div class="lineOne">----------------</div>
        </div>
        <div className={classes["card-description"]}>
          <div class="sastavniTrigrami">
            <h5>Sastavni trigrami:</h5>
            <p class="lead" id="gore">
              GORE: KAN, voda, ponor, poteškoće
            </p>
            <p class="lead" id="dolje">
              DOLJE: JEN, grom, pokret, rast
            </p>
          </div>
          <Button btnClass="details" btnType="button">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
