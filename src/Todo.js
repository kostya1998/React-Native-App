import { Text, View, StyleSheet } from "react-native";
import { Swipeable, RectButton } from "react-native-gesture-handler";

const Todo = ({ todo, onRemove }) => {
  const handleDelete = () => {
    onRemove(todo.id);
  };
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [50, 50, 100],
      outputRange: [0, 0, 1],
    });
    return (
      <RectButton style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </RectButton>
    );
  };
  return (
    <Swipeable
      friction={2}
      leftThreshold={30}
      rightThreshold={40}
      leftContent={<Text>Delete</Text>}
      renderRightActions={renderRightActions}
    >
      <View style={[styles.todo]}>
        <Text>{todo.title}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 2,
    borderColor: "#cd853f",
    borderRadius: 7,
    marginBottom: 10,
    backgroundColor: "#ffdab9",
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 2,
    borderColor: "#cd853f",
    borderRadius: 7,
    marginBottom: 10,
    backgroundColor: "red",
    width: 90,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Todo;
