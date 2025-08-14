import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        width: "90%",
        maxWidth: 400,
        minHeight: 200,
        alignSelf: "center",  
        flexDirection: "column",
        boxSizing: "border-box",       
        paddingHorizontal: 20      
      }}
    >
      <Text>Welcome to FastPay</Text>
    </View>
  );
}
