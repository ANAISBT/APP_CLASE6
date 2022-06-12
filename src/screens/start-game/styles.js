import Colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    containerTouchable:{
        flex:1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginVertical: 10,
    },
    container:{
        flex:1,
        alignItems: "center",
    },
    containerScroll:{
        flex:1,
    },
    title:{
        fontSize:20,
        marginVertical: 10,
        fontFamily: 'OpenSansBold',
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: "center",
        padding: 20,
        maxWidth: "90%",
    },
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal:25,
    },
    button:{
        width: width / 3.2,
    },
    subtitle: {
        fontSize: 16,
      },
    summaryContainer: {
        width: width / 1.2,
        marginVertical: height > 600 ? 30 : 20,
        alignItems: "center",
        paddingVertical: height > 600 ? 30 : 20,
    },
});
