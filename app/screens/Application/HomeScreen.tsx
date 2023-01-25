import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LocationBlock from "../../components/UI/LocationBlock";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
interface HomeScreenProps {
  navigation: any;
}
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const location = "Kielce, Poland";

  const users = [
    {
      id: "id1",
      name: "Riley",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.",
      photo: require("../../images/users/zdj1.jpg"),
      age: 21,
      location: "Kielce",
      distance: 2,
      hobbies: [
        "Art",
        "Football",
        "Swimming",
        "Travel",
        "Gym",
        "React programming",
        "DIY",
      ],
    },
    {
      id: "id2",
      name: "Chloe",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.",
      photo: require("../../images/users/zdj2.jpg"),
      age: 23,
      location: "Ostrowiec Św.",
      distance: 72,
      hobbies: [
        "Art",
        "Football",
        "Swimming",
        "Travel",
        "Gym",
        "React programming",
        "DIY",
      ],
    },
    {
      id: "id3",
      name: "Bella",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.",
      photo: require("../../images/users/zdj3.jpg"),
      age: 19,
      location: "Kielce",
      distance: 28,
      hobbies: [
        "Art",
        "Football",
        "Swimming",
        "Travel",
        "Gym",
        "React programming",
        "DIY",
      ],
    },
    {
      id: "id4",
      name: "Tiffany",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.",
      photo: require("../../images/users/zdj4.jpg"),
      age: 18,
      location: "Kielce",
      distance: 12,
      hobbies: [
        "Art",
        "Football",
        "Swimming",
        "Travel",
        "Gym",
        "React programming",
        "DIY",
      ],
    },
    {
      id: "id5",
      name: "Angela",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.",
      photo: require("../../images/users/zdj5.jpg"),
      age: 25,
      location: "Radom",
      distance: 110,
      hobbies: [
        "Art",
        "Football",
        "Swimming",
        "Travel",
        "Gym",
        "React programming",
        "DIY",
      ],
    },
    {
      id: "id6",
      name: "Nikki",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.",
      age: 23,
      photo: require("../../images/users/zdj6.jpg"),
      location: "Kielce",
      distance: 29,
      hobbies: [
        "Art",
        "Football",
        "Swimming",
        "Travel",
        "Gym",
        "React programming",
        "DIY",
      ],
    },
  ];

  const usersList = users.map((user) => {
    return (
      <TouchableOpacity
        key={user.id}
        onPress={() => {
          navigation.navigate("staticProfilInfo", {
            user: user,
          });
        }}
        style={styles.matchedItemContainer}
      >
        <View style={styles.matchedItem}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={user.photo}
          />
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <LocationBlock location={location} />

      <Text style={styles.text}>Recently Matched</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.matchedContainer}
      >
        {usersList}
      </ScrollView>
      <View style={styles.nearbyContainer}>
        <Text style={styles.text2}>Near You</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SwapScreen");
          }}
          style={styles.viewAllButton}
        >
          <Text style={styles.viewAllButtonText}>View All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("staticProfilInfo", {
              user: users[2],
            });
          }}
          style={styles.userNearYou}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 14,
              position: "absolute",
            }}
            source={users[2].photo}
          />
          <View style={styles.nearbyUserInfo}>
            <Text
              style={{
                fontFamily: "montBold",
                color: "#FFF",
                fontSize: 30,
                width: "100%",
                marginLeft: 5,
              }}
            >
              {`${users[2].name}, ${users[2].age}`}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1%",
                marginLeft: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "montRegular",
                  color: "#FFF",
                  fontSize: 20,
                  marginRight: 10,
                }}
              >
                {users[2].location}
              </Text>
              <FontAwesomeIcon
                icon={faLocationDot}
                size={20}
                style={{
                  color: "#CF56A1",
                  marginTop: 2,
                  marginRight: 2,
                }}
              />
              <Text
                style={{
                  fontFamily: "montRegular",
                  color: "#FFF",
                  fontSize: 20,
                }}
              >
                {`${users[2].distance} km`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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

  text: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "montMedium",
    width: "80%",
  },
  text2: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "montMedium",
    width: "75%",
    marginTop: "1.5%",
  },
  matchedContainer: {
    minWidth: "100%",
    marginTop: "5%",
    flexDirection: "row",
    maxHeight: 100,
    // marginBottom: 5,
  },
  matchedItemContainer: {
    padding: 1,
    borderWidth: 2,
    borderColor: "#CF56A1",
    width: 100,
    height: 100,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  matchedItem: {
    // height: "100%",
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#333",
    overflow: "hidden",
  },
  viewAllButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "montMedium",
  },
  viewAllButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CF56A1",
    width: "25%",
    height: 33,
    flexGrow: 0,
    borderRadius: 10,
  },
  nearbyContainer: {
    width: "80%",
    height: "55%",
    marginTop: "10%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  userNearYou: {
    marginTop: "20%",
    width: "90%",
    height: "75%",
    borderRadius: 18,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#CB54A0",
  },
  nearbyUserInfo: {
    position: "relative",
    top: "75%",
    left: 0,
    width: "100%",
    height: "25%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 18,
    padding: 5,
  },
});

export default HomeScreen;
