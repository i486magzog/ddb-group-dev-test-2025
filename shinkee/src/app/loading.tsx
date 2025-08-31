import FullViewport from "@/components/ui/full-viewport";
import TextCounter from "@/components/ui/text-counter";

export default function Loading() {
  return (
    <FullViewport>
      <div className="flex flex-col gap-4">
        <TextCounter text="SHINKEE CHO" />
      </div>
    </FullViewport>
  );
}
