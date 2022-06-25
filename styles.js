import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        color: "white",
        fontSize: 60,
        fontWeight: "bold",
        backgroundColor: 'rgb(0,0,0)',
        marginBottom: 10,
        textAlign: 'center',
    },
    text:{
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
    },
    game: {
        margintTop: '40%',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 400,
    },
    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10,
    },
    piedra: {
        flex:1,
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        margin: 10
    },
    image: {
        flex: 1,
        justifyContent:"center",
        width: '100%',
    },
    buttons: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        margin:20,
    }
})

export default styles;