//--------------------utility定义工具的api--------------------
import { ElNotification } from "element-plus";

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
    duration: 3000,
  });
}
