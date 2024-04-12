import { Skeleton } from "antd";
export interface SkeletonPropsCards {
  quantity: number;
}
export function CarrousselCardSkeleton({
  quantity,
}:SkeletonPropsCards) {
  return Array(quantity)
    .fill(0)
    .map((_, i) => (
      <div
        className="w-[16.63rem] border-2 border-main-l dark:border-main-d rounded-xl p-4 space-y-3 group "
        key={i}
      >
        <Skeleton.Input size="small" active />
        <br />
        <br />
        <Skeleton.Input size="small" active block />
        <Skeleton.Input size="small" active block />
        <Skeleton.Input size="small" active block />

        <div className="flex gap-2 flex-wrap">
          <Skeleton.Button active />
          <Skeleton.Button active />
          <Skeleton.Button active />
        </div>
        <div className="w-full flex justify-stretch h-36 rounded-md overflow-hidden">
          <Skeleton.Node
            fullSize
            style={{
              width: "16rem",
              height: "16rem",
              borderRadius: "0.375rem",
            }}
            active
          >
            {""}
          </Skeleton.Node>
        </div>
      </div>
    ));
}
