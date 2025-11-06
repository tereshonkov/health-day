import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function registerForPush() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    alert("Ви не надали доступ на повідомлення!");
    return;
  }
}
