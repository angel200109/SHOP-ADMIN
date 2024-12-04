import { ref, reactive } from "vue";
import { logout, updatepassword } from "~/api/manager";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toast } from "./util";
import { showModel } from "./util";

export function useRepassword() {
  const store = useStore();
  const router = useRouter();
  const form = reactive({
    oldpassword: "",
    password: "",
    repassword: "",
  });
  const formDrawerRef = ref(null);
  const formRef = ref(null);
  const rules = {
    oldpassword: [
      { required: true, message: "旧密码不能为空", trigger: "blur" },
    ],
    password: [{ required: true, message: "新密码不能为空", trigger: "blur" }],
    repassword: [
      { required: true, message: "确认密码不能为空", trigger: "blur" },
    ],
  };
  const onSubmit = () => {
    formRef.value.validate((valid) => {
      if (!valid) {
        return false;
      }
      formDrawerRef.value.showLoading();
      updatepassword(form)
        .then((res) => {
          toast("修改密码成功！");
          store.dispatch("logout");
          router.push("/login");
          toast("请重新登录！");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          formDrawerRef.value.hideLoading();
        });
    });
  };
  const openDrawForm = () => {
    formDrawerRef.value.open();
  };
  return {
    form,
    formRef,
    formDrawerRef,
    rules,
    onSubmit,
    openDrawForm,
  };
}

export function useLogout() {
  const store = useStore();
  const router = useRouter();
  function handleLogout() {
    //弹窗确认
    showModel("是否要退出登录？")
      .then((res) => {
        console.log("弹窗确认了");
        //请求后端api
        logout().then(() => {
          store.dispatch("logout");
          router.push("/login");
          toast("退出登录成功");
        });
      })
      .catch((err) => {
        console.log("弹窗取消了");
      });
  }
  return { handleLogout };
}
