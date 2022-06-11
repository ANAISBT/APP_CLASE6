import Colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginVertical: 10,
    },
    title:{
        fontSize:20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: "center",
        shadowColor:Colors.shadow,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity:0.50,
        shadowRadius:6,
        elevation:20,
        borderRadius:10,
    },
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal:25,
    },
    button:{
        marginVertical:15,
        width: 100,
    },
})
