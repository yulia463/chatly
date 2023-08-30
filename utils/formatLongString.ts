//at the moment, for ChatPreview text message if it is too long
export const formatLongString = (str: string): string => {
  return str.length <= 10 ? str : `${str.substring(0, 8)}...`
}
