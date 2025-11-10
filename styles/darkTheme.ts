import { StyleSheet } from "react-native";

export const darkTheme = StyleSheet.create({
  background: {
    backgroundColor:
      "linear-gradient(180deg, #0D1B2A 0%, #1B263B 50%, #415A77 100%)",
  },
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#115C6FA2",
    borderWidth: 1,
    borderColor: "#59CECFA4",
    borderRadius: 20,
    gap: 16,
    boxShadow: "0px 2px 6px #115C6FA4",
    justifyContent: "center",
    alignItems: "center",
  },
  textXl: {
    fontSize: 26,
  },
  textLg: {
    fontSize: 22,
  },
  textSm: {
    fontSize: 16,
  },
  primary: {
    color: "#59CECF",
  },
  secondary: {
    color: "#364A5F",
  },
  popupBlue: {
    color: "#0F3DB4A6",
    gap: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  popupRed: {
    color: "#B40F0FA6",
    gap: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  popupGreen: {
    color: "#0FB40FA6",
    gap: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  popupYellow: {
    color: "#B4A90FA6",
    gap: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btn: {
    width: 262,
    height: 89,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    fontSize: 22,
    backgroundColor: "#59CECF",
  },
});
