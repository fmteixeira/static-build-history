import React, { FC } from "react";
// Components
// Api
// Context
// Hooks
// Pages
// Resources
import { Pin } from "../resources/types/interfaces";

interface Props {
  pins: Pin[];
}

const PinList: FC<Props> = ({ pins }) => {
  return (
    <>
      {pins.map((pin) => (
        <div key={pin.id}>{pin.name}</div>
      ))}
    </>
  );
};

export default PinList;
