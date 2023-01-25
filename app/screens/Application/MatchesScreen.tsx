import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import LocationBlock from "../../components/UI/LocationBlock";

interface MatchesScreenProps {
  navigation: any;
}
const MatchesScreen = ({ navigation }: MatchesScreenProps) => {
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
        style={{ width: "45%", height: 180, marginBottom: "5%" }}
        onPress={() => {
          navigation.navigate("staticProfilInfo", {
            user: user,
          });
        }}
      >
        <View style={styles.item}>
          <ImageBackground
            source={user.photo}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
            imageStyle={{ borderRadius: 21 }}
          >
            <Text
              style={{
                fontSize: 22,
                color: "#FFF",
                fontFamily: "montBold",
                marginLeft: 10,
              }}
            >{`${user.name}, ${user.age}`}</Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: 10,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: "#FFF",
                  fontFamily: "montRegular",
                }}
              >
                {user.location}
              </Text>
              <Image source={require("../../images/locationPin.png")} />
              <Text
                style={{
                  fontSize: 11,
                  color: "#FFF",
                  fontFamily: "montRegular",
                }}
              >
                {user.distance}km
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <LocationBlock location={location} />
      {/* <View style={styles.searchBarContainer}>
        <Image
          style={styles.searchIcon}
          source={require("../../images/searchIcon.png")}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#ABABAB"
        />
      </View> */}
      <View style={{ marginTop: "2%", width: "80%" }}>
        <Text
          style={{ fontSize: 24, color: "#1E1E1E", fontFamily: "montMedium" }}
        >
          Your Matches{" "}
          <Text
            style={{
              fontSize: 24,
              color: "#CF56A1",
              fontFamily: "montBold",
            }}
          >
            {users.length}
          </Text>
        </Text>
      </View>
      <ScrollView
        alwaysBounceHorizontal={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        style={styles.matchedContainer}
        contentContainerStyle={styles.matchedContainerAlign}
      >
        {usersList}
      </ScrollView>
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
  searchBarContainer: {
    width: "80%",
    marginTop: "1%",
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
    height: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "7%",
  },
  searchIcon: {
    marginLeft: 20,
    marginRight: 10,
  },
  searchInput: {
    width: "80%",
    height: 30,
    fontFamily: "montMedium",
    fontSize: 14,
  },
  matchedContainer: {
    width: "90%",
    minHeight: "10%",
    maxHeight: "70%",
    marginTop: "5%",
  },
  matchedContainerAlign: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  item: {
    width: "100%",
    height: "100%",
    marginBottom: "5%",
    borderRadius: 24,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#CF56A1",
  },
});

export default MatchesScreen;
