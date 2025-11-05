import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    textSm: {
        fontSize: 22,
        color: '#59CECF',
    },
    textLg: {
        fontSize: 26,
        color: '#59CECF',
    },
    icon: {
        width: 60,
        height: 60,
    },
    tabIcon: {
        width: 40,
        height: 40,
    }
});

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#59CECF",
    borderRadius: 100,
    backgroundColor: "#115C6F47",
    marginLeft: 16,
    marginRight: 16,
  },
  heart: {
    width: 34,
    height: 30,
  },
  avatar: {
    borderRadius: 100,
    width: 34,
    height: 34,
    borderColor: "#59CECF",
    borderWidth: 1,
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  bgImageBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
});