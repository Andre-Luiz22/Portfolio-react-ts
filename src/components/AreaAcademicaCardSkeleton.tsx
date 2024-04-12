import { Skeleton } from "antd";
import { SkeletonPropsCards } from "./CarrousselCardSkeleton";

export function AreaAcademicaCardSkeleton({ quantity }: SkeletonPropsCards) {
  return Array(quantity)
    .fill(0)
    .map((_, i) => (
      <div
        className="w-[20.5rem] p-4 border border-main-l dark:border-main-d rounded-2xl shrink-0"
        key={i}
      >
        <Skeleton
          active
          style={{}}
          paragraph={{ rows: 3, width: ["100%", "100%", "67%"] }}
          title={{ width: "30%" }}
        />
        <div className="flex justify-between mt-4 -mb-1">
          <Skeleton.Button active size="small" />
          <Skeleton.Button active size="small" />
        </div>
      </div>
    ));
}
