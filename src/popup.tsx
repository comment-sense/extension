import { Content } from "@radix-ui/react-tabs"
import "~base.css"
import "~style.css"
import PopupShell from "~components/layout/popup-shell"
import { useEffect, useState } from "react"
import { getCurrentTab, getVideoIdFromUrl } from "~lib/tabs.utils"

interface OverviewTabProps {
  channel?: string
  title?: string
  uploaded?: string
  views?: number
  comments?: number
}

const OverviewTab = ({}: OverviewTabProps) => {
  const [channel, setChannel] = useState(null)
  useEffect(() => {
    getCurrentTab().then((tab) => {
      const videoId = getVideoIdFromUrl(tab.url)
      if (videoId) {
        setChannel(videoId)
      }
    })
  }, [])
  return (
    <Content
      value="overview"
      className="flex w-full flex-col rounded border border-dashed border-neutral-6 bg-neutral-1 px-4
        py-2 dark:border-neutralDark-6 dark:bg-neutralDark-1">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold tracking-wide">
          {channel ?? "loading"}
        </h2>
      </div>
      <div className="">
        <p className="text-sm font-medium text-neutral-11 dark:text-neutralDark-11">
          Fast and Chaotic Personal Face Examination ASMR | 4K
        </p>
        <p className="text-xs text-neutral-10 dark:text-neutralDark-10">
          #ASMR
        </p>
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
}
const Popup = () => {
  return (
    <div className="w-popup">
      <PopupShell>
        <OverviewTab />
      </PopupShell>
    </div>
  )
}

export default Popup
