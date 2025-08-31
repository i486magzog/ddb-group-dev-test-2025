import FullViewport from "@/components/ui/full-viewport";
import TextCounter from "@/components/ui/text-counter";

export default function NotFound() {
  return (
    <FullViewport className="flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Not Found</h2>
        <p className="text-sm text-center">DDB Group Dev. Test</p>
        <TextCounter text="SHINKEE CHO" />
      </div>
    </FullViewport>
  );
}
