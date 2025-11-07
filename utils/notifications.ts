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

export async function scheduleNotification(date: Date, title: string, body: string) {
    await Notifications.scheduleNotificationAsync({
      content: { title, body },
      trigger: {
        type: 'timestamp',
        timestamp: date.getTime(), 
      } as unknown as Notifications.DateTriggerInput,
    });
  }
