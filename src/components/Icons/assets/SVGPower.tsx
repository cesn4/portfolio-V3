import React, { FunctionComponent } from "react";

const SVGPower: FunctionComponent<SVGIconsProps> = ({
  color,
  size,
}: SVGIconsProps) => {
  return (
    <svg
      id="Capa_1"
      enable-background="new 0 0 512 512"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill={color}
          d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm-15 86c0-8.284 6.716-15 15-15s15 6.716 15 15v120c0 8.284-6.716 15-15 15s-15-6.716-15-15zm15 335c-90.981 0-165-74.019-165-165 0-65.544 38.856-124.886 98.991-151.179 7.59-3.32 16.434.144 19.753 7.734s-.144 16.434-7.734 19.753c-49.212 21.518-81.01 70.069-81.01 123.692 0 74.439 60.561 135 135 135s135-60.561 135-135c0-53.623-31.798-102.174-81.009-123.691-7.59-3.319-11.053-12.163-7.734-19.753 3.318-7.591 12.162-11.056 19.753-7.734 60.134 26.292 98.99 85.634 98.99 151.178 0 90.981-74.019 165-165 165z"
        />
      </g>
    </svg>
  );
};

interface SVGIconsProps {
  size: number;
  color: string;
}

export default SVGPower;
