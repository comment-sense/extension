import React from "react"
import Brand from "~components/icons/brand"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cx } from "class-variance-authority"
import { useSentiment } from "~hooks/sentiement-context"

const tabs = [
  { label: "Overview", value: "overview", current: false },
  { label: "Sentiment", value: "sentiment", current: true },
  { label: "Insight", value: "insight", current: false }
]
function TabList() {
  const { analyzed } = useSentiment()
  return (
    <div className="flex">
      <TabsPrimitive.List className="isolate flex gap-x-0.5" aria-label="Tabs">
        {tabs.map((tab, tabIdx) => (
          <TabsPrimitive.Trigger
            key={tab.label}
            value={tab.value}
            disabled={
              !analyzed &&
              (tab.value === "sentiment" || tab.value === "insight")
            }
            className={cx(
              "group relative -mb-px min-w-0 ",
              "border-x border-t border-neutral-5 py-1.5 px-2 text-center text-xs",
              "rounded-t bg-neutral-2 text-center font-medium text-gray-500 hover:text-gray-700",
              "data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:text-orange-9",
              "data-[disabled]:cursor-not-allowed"
            )}>
            <span>{tab.label}</span>
            <span
              aria-hidden="true"
              className={cx(
                "group-[[data-state=active]]:bg-transparent",
                "absolute inset-x-0 bottom-0 h-[1px] bg-neutral-5"
              )}
            />
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
    </div>
  )
}

export interface PopupShellProps {
  children: React.ReactNode
}
const PopupShell = ({ children }: PopupShellProps) => (
  <TabsPrimitive.Root
    defaultValue="overview"
    className="divide-y overflow-hidden bg-white dark:divide-neutralDark-5 dark:bg-neutralDark-1">
    <header className="bg-neutral-3 p-2.5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Brand />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-semibold">Comment Sense</h3>
          </div>
        </div>
        <button
          type="button"
          className="rounded bg-orange-9 py-1 px-2 text-xs font-semibold text-white shadow-sm hover:bg-orange-10
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-9">
          Analyze
        </button>
      </div>
      <TabList />
    </header>
    <div className="-mt-2.5 bg-white px-2.5 py-5 dark:bg-neutralDark-3">
      {children}
    </div>
  </TabsPrimitive.Root>
)
export default PopupShell
