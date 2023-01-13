import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const EditInfoAddPhotoTile = (props: any) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            props.onShowModal();
            console.log(props.images[0]);
          }}
        >
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={props.images[1]}
            >
              <Image
                style={styles.btnImage}
                source={require("../../images/addBtn.png")}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            props.onShowModal();
          }}
        >
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={props.images[2]}
            >
              <Image
                style={styles.btnImage}
                source={require("../../images/addBtn.png")}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            props.onShowModal();
          }}
        >
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={props.images[3]}
            >
              <Image
                style={styles.btnImage}
                source={require("../../images/addBtn.png")}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            props.onShowModal();
          }}
        >
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={props.images[4]}
            >
              <Image
                style={styles.btnImage}
                source={require("../../images/addBtn.png")}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            props.onShowModal();
          }}
        >
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={props.images[5]}
            >
              <Image
                style={styles.btnImage}
                source={require("../../images/addBtn.png")}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            props.onShowModal();
          }}
        >
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={props.images[6]}
            >
              <Image
                style={styles.btnImage}
                source={require("../../images/addBtn.png")}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "5%",
  },
  btnImage: {
    position: "relative",
    top: "87%",
    left: "65%",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  box: {
    width: "30%",
    height: "40%",
    backgroundColor: "#F2F2F2",
    borderWidth: 3,
    borderColor: "#EAEAEA",
    marginBottom: "10%",
    borderRadius: 10,
    shadowOpacity: 33,
    shadowColor: "rgba(65,65,65,0.05)",
  },
});

export default EditInfoAddPhotoTile;
