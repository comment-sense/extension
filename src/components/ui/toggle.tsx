import React from "react"
import * as Switch from "@radix-ui/react-switch"

const Toggle = () => (
  <form>
    <div
      className="flex items-center"
      style={{ display: "flex", alignItems: "center" }}>
      <label
        className="sr-only pr-[15px] text-[15px] leading-none text-white"
        htmlFor="airplane-mode">
        Airplane mode
      </label>
      <Switch.Root
        className="relative  h-[19px] w-[32px] cursor-default rounded-full bg-black-12  outline-none
          focus:shadow-[0_0_0_2px]  data-[state=checked]:bg-orange-9"
        id="airplane-mode"
        style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}>
        <Switch.Thumb
          className="shadow-blackA7 block h-[16px] w-[16px] translate-x-0.5 rounded-full bg-white
          shadow-[0_2px_2px] transition-transform duration-100 will-change-transform
          data-[state=checked]:translate-x-[14px]"
        />
      </Switch.Root>
    </div>
  </form>
)

export default Toggle
