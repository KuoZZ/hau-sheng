import constant from "../constant";

export function convertedImgUrl(
  offsetUrl: string,
  isLocal: boolean = constant.isLocal
) {
  return isLocal ? offsetUrl : `${constant.commonStorageUrl}${offsetUrl}`;
}
