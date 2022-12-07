import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from "react-native";

const ModalButton = (props: any) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.onPress();
      }}
    >
      <Text style={{ fontSize: 16, color: "#FFF", fontFamily: "montMedium" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const UserMessageModal = (props: any) => {
  const [modalVisible, setModalVisible] = useState(props.modalShow);

  return (
    <Modal animationType="slide" transparent={true} visible={props.modalShow}>
      <View style={styles.container}>
        <View style={[styles.cardContainer, styles.shadowProp]}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "montSBold",
              color: "#1E1E1E",
              marginTop: "7%",
            }}
          >
            User settings
          </Text>

          <ModalButton title="Block user" onPress={() => {}} />
          <ModalButton
            title="Cancel"
            onPress={() => {
              props.onCancel();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cardContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: "flex",
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#CF56A1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    borderRadius: 10,
  },
});

export default UserMessageModal;
