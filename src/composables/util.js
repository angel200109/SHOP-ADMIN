//--------------------utility定义工具的api--------------------
import { ElNotification, ElMessageBox } from "element-plus";
import nProgress from "nprogress";

//弹窗提醒
export function toast(
  message,
  type = "success",
  dangerouslyUserHTMLString = false
) {
  ElNotification({
    message,
    type,
    dangerouslyUserHTMLString,
    duration: 2000,
  });
}

//弹窗确认(记得要return!!)
export function showModel(content = "提示内容", type = "warning", title = "") {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type,
  });
}

//显示全屏loading
export function showFullLoading() {
  nProgress.start();
}

//隐藏全屏loading
export function hideFullLoading() {
  nProgress.done();
}
