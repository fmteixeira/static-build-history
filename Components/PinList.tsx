import React, { FC } from "react";
import TreeMenu, { defaultChildren } from "react-simple-tree-menu";
// Components
// Api
// Context
// Hooks
// Pages
// Resources
import { Pin as PinInterface } from "../resources/types/interfaces";
import { PinTreeView } from "../resources/types/types";
import getPinTreeViewData from "../resources/utils/getPinTreeViewData";
interface Props {
  pins: PinInterface[];
}

const PinList: FC<Props> = ({ pins }) => {
  const data: PinTreeView = getPinTreeViewData(pins);

  return (
    <TreeMenu
      data={data}
      debounceTime={125}
      disableKeyboard={false}
      hasSearch={false}
      onClickItem={({ key, label, ...props }) => {
        props.url && window.open(props.url);
      }}
      resetOpenNodesOnDataUpdate={false}
    >
      {({ search, items }) => <>{defaultChildren({ search, items })}</>}
    </TreeMenu>
  );
};

export default PinList;
