import React from "react";
import moment from "moment";
// Components
// Api
// Context
// Hooks
// Pages
// Resources
import { Pin as PinInterface } from "../resources/types/interfaces";

interface Props {
  pin: PinInterface;
}

export default function Pin({ pin }: Props) {
  return (
    <div className="bg-blue-600">
      <a
        key={pin.id}
        href={pin.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-sm h-auto max-w-sm  text-white grid place-items-center"
      >
        <div className="grid">
          <span>{`${pin.project}@${pin.branch}`}</span>
          <span>{moment(pin.date).fromNow()}</span>
        </div>
      </a>
    </div>
  );
}
