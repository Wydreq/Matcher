import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const LocationBlock = (props: any) => {
  return (
    <View style={styles.locationContainer}>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon
          icon={faChevronDown}
          size={15}
          style={{
            color: "#CF56A1",
            marginRight: 10,
          }}
        />
        <Text style={styles.arrowText}>Location</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <FontAwesomeIcon
          icon={faLocationDot}
          size={20}
          style={{
            color: "#CF56A1",
            marginRight: 5,
          }}
        />
        <Text style={styles.pinText}>{props.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  locationContainer: {
    height: 100,
    marginTop: 70,
    width: "80%",
    display: "flex",
  },
  iconTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 5,
    marginTop: "2%",
  },
  arrowText: {
    fontSize: 16,
    fontFamily: "montMedium",
  },
  pinText: {
    fontSize: 20,
    fontFamily: "montSBold",
    color: "#AD439C",
    marginTop: "1.6%",
  },
});

export default LocationBlock;
