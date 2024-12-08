import { ref } from "vue";
//import { TabPaneName } from "element-plus";
import { useRoute, onBeforeRouteUpdate, useRouter } from "vue-router";
import { useCookies } from "@vueuse/integrations/useCookies";

export function useTabList() {
  const route = useRoute();
  const router = useRouter();
  const cookie = useCookies();
  const activeTab = ref(route.path);
  const tabList = ref([
    {
      title: "后台首页",
      path: "/",
    },
  ]);
  function addTab(tab) {
    let newTab = tabList.value.findIndex((t) => t.path == tab.path) == -1;
    if (newTab) {
      tabList.value.push(tab);
    }
    cookie.set("tabList", tabList.value);
  }
  onBeforeRouteUpdate((to, from) => {
    activeTab.value = to.path;
    addTab({
      title: to.meta.title,
      path: to.path,
    });
  });
  const changeTab = (t) => {
    activeTab.value = t;
    router.push(t);
  };

  // 初始化标签导航列表
  function initTabList() {
    let tabs = cookie.get("tabList");
    if (tabs) {
      tabList.value = tabs;
    }
  }
  initTabList();

  const removeTab = (t) => {
    let tabs = tabList.value;
    let a = activeTab.value;
    if (a == t) {
      tabs.forEach((tab, index) => {
        if (tab.path == t) {
          const nexTab = tabs[index + 1] || tabs[index - 1];
          if (nexTab) {
            a = nexTab.path;
          }
        }
      });
    }
    activeTab.value = a;
    router.push(a);
    // 应该不用手动push才对
    tabList.value = tabList.value.filter((tab) => tab.path != t);
    cookie.set("tabList", tabList.value);
  };

  const handleCommand = (c) => {
    console.log(c);
    if (c == "clearAll") {
      //切换回首页
      activeTab.value = "/";
      router.push("/"); // 应该不用手动push才对
      //过滤只剩下首页
      tabList.value = [
        {
          title: "后台首页",
          path: "/",
        },
      ];
    } else if (c == "clearOther") {
      // 过滤只剩下首页和当前激活
      tabList.value = tabList.value.filter((tab) => {
        return tab.path == "/" || tab.path == activeTab.value;
      });
    }
    cookie.set("tabList", tabList.value);
  };
  return {
    activeTab,
    tabList,
    changeTab,
    removeTab,
    handleCommand,
  };
}
