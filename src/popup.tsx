import { Content } from "@radix-ui/react-tabs"
import "~base.css"
import "~style.css"
import PopupShell from "~components/layout/popup-shell"
import { SentimentProvider } from "~hooks/sentiement-context"

const OverviewTab = () => (
  <Content
    value="overview"
    className="flex w-full flex-col rounded-sm border border-neutral-6 bg-neutral-1 px-4 py-2 dark:border-neutralDark-6 dark:bg-neutralDark-1">
    <div className="flex items-center justify-between">
      <h2 className="text-base font-semibold tracking-wide">Ginger ASMR</h2>
    </div>
    <div className="">
      <p className="text-sm font-medium text-neutral-11 dark:text-neutralDark-11">
        Fast and Chaotic Personal Face Examination ASMR | 4K
      </p>
      <p className="text-xs text-neutral-10 dark:text-neutralDark-10">#ASMR</p>
    </div>
    <div className="mt-3 grid grid-rows-3 gap-y-2">
      <div className="grid grid-cols-4">
        <span className="col-span-3 inline-block font-semibold text-neutral-11 dark:text-neutralDark-11">
          Uploaded
        </span>
        <div className="text-right uppercase">1 yr ago</div>
      </div>
      <div className="grid grid-cols-4">
        <span className="col-span-3 inline-block font-semibold text-neutral-11 dark:text-neutralDark-11">
          Views
        </span>
        <div className="text-right uppercase">186K</div>
      </div>
      <div className="grid grid-cols-4">
        <span className="col-span-3 inline-block font-semibold text-neutral-11 dark:text-neutralDark-11">
          Comments
        </span>
        <div className="text-right uppercase">184</div>
      </div>
    </div>
  </Content>
)
const Popup = () => (
  <SentimentProvider>
    <div className="w-popup">
      <PopupShell>
        <OverviewTab />
      </PopupShell>
    </div>
  </SentimentProvider>
)

export default Popup
