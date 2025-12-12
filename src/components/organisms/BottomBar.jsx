
import { CopyrightBlock } from "../molecules";

export default function BottomBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
      <CopyrightBlock />
    </div>
  );
}
