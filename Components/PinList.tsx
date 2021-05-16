import React, { FC, useEffect } from "react";
import { useQuery } from "react-query";
// Components
import Pin from "./Pin";
// Api
// Context
// Hooks
// Pages
// Resources
import { Pin as PinInterface } from "../resources/types/interfaces";
interface Props {
  pins: PinInterface[];
}

const PinList: FC<Props> = ({ pins }) => {
  return (
    <div className="grid place-items-center gap-3">
      {pins.map((pin) => (
        <Pin key={pin.id} pin={pin} />
      ))}
    </div>
  );
};

export default PinList;
