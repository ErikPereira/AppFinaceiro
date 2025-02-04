import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
    },
    header: {
      marginTop: 40,
      paddingHorizontal: 10,
      width: "100%",
      height: 56,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row"
    },
    scrollView: {
      width: "100%",
    },
    headerOptions: {
      alignItems: "center",
      flexDirection: "row",
      gap: 10,
    },
    stories: {
      width: "100%",
      paddingLeft: 10,
      paddingVertical: 10,
      alignContent: "center",
    },
    storiesCard: {
      borderWidth: 2,
      borderColor: "#F7B55A",
      borderRadius: 50,
      marginRight: 14,
      padding: 2
    },
    storiesCardImage: {
      width: 64,
      height: 64,
    },
    storiesCardName: {
      color: "#fff",
      paddingLeft: 10,
    },
    content: {
      width: "100%",
      marginBottom: 10,
    },
    contentHeader: {
      height: 80,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 10,
    },
    contentHeaderLeft: {
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    contentHeaderLeftImage: {
      width: 40,
      height: 40,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "#fff",
    },
    contentHeaderLeftText: {
      color: "#fff",
    },
    contentImage: {
      width: "100%",
      height: 355,
    },
    contentFooter: {
      width: "100%",
      paddingHorizontal: 10,
    },
    contentFooterOptions: {
      height: 40,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    contentFooterOptionsButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    contentFooterViewText: {
      marginTop: 10,
      gap: 10,
      paddingLeft: 15
    },
    contentFooterText1: {
      color: "#FFF"
    },
    contentFooterText2: {
      color: "#FFF"
    },
    contentFooterText3: {
      color: "#FFF",
      fontSize: 10,
    },
  });

