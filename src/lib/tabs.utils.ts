// TODO: get active tab
export const getCurrentTab = async () => {
  const queryOptions = { active: true, lastFocusedWindow: true }
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

export const getVideoIdFromUrl = (url: string) => {
  const videoIdRegEx = new RegExp(/v=(\S{11})/)
  const matches = url.match(videoIdRegEx)
  if (!matches) return null
  const [_, video_id] = matches
  return video_id
}

export const handleTabUpdate = () => {
  /**
   * TODO: When user switches tabs or updates active tab
   *  -  1. check if the tab is on YouTube
   *  -  2. if it is, and there is a video playing,
   *     extract the video ID and send it to the popup, and save it in storage
   */
}
