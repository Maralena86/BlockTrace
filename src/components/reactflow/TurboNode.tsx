import React, { memo, type ReactNode } from "react";

import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type TurboNodeData = {
  title: string;
  icon?: ReactNode;
  subtitle?: string;
};

const TurboNode = ({ data }: NodeProps<Node<TurboNodeData>>) => {
  return (
    <>
      <div className="cloud gradient">
        <div>coucou</div>
      </div>
      <div className="wrapper gradient">
        <div className="inner">
          <div className="body">
            {data.icon && <div className="icon">{data.icon}</div>}
            <div>
              <div className="title">{data.title}</div>
              {data.subtitle && <div className="subtitle">{data.subtitle}</div>}
            </div>
          </div>
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </div>
      </div>
    </>
  );
};

export default memo(TurboNode);
