export type colorType = "red" | "yellow" | "green" | "blue";
export type ReminderKey = "morning" | "lunch" | "dinner" | "night";
export type ReminderEntry = { time: Date; notificationIds: string[] };
export type ReminderState = Record<ReminderKey, ReminderEntry>;