import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import Animated, {
  RotateInDownLeft,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import LocationBlock from '../../components/UI/LocationBlock'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react'
import { runOnJS } from 'react-native-reanimated'
import LoadingDots from 'react-native-loading-dots'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { getPerson } from '../../controllers/matchController'
import {
  faInfoCircle,
  faXmark,
  faHeart,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

const location = 'Kielce, Poland'

const users = [
  {
    id: 'id1',
    name: 'Riley',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.',
    photo: require('../../images/users/zdj1.jpg'),
    age: 21,
    location: 'Kielce',
    distance: 2,
    hobbies: [
      'Art',
      'Football',
      'Swimming',
      'Travel',
      'Gym',
      'React programming',
      'DIY',
    ],
  },
  {
    id: 'id2',
    name: 'Chloe',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.',
    photo: require('../../images/users/zdj2.jpg'),
    age: 23,
    location: 'Ostrowiec Św.',
    distance: 72,
    hobbies: [
      'Art',
      'Football',
      'Swimming',
      'Travel',
      'Gym',
      'React programming',
      'DIY',
    ],
  },
  {
    id: 'id3',
    name: 'Bella',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.',
    photo: require('../../images/users/zdj3.jpg'),
    age: 19,
    location: 'Kielce',
    distance: 28,
    hobbies: [
      'Art',
      'Football',
      'Swimming',
      'Travel',
      'Gym',
      'React programming',
      'DIY',
    ],
  },
  {
    id: 'id4',
    name: 'Tiffany',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.',
    photo: require('../../images/users/zdj4.jpg'),
    age: 18,
    location: 'Kielce',
    distance: 12,
    hobbies: [
      'Art',
      'Football',
      'Swimming',
      'Travel',
      'Gym',
      'React programming',
      'DIY',
    ],
  },
  {
    id: 'id5',
    name: 'Angela',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.',
    photo: require('../../images/users/zdj5.jpg'),
    age: 25,
    location: 'Radom',
    distance: 110,
    hobbies: [
      'Art',
      'Football',
      'Swimming',
      'Travel',
      'Gym',
      'React programming',
      'DIY',
    ],
  },
  {
    id: 'id6',
    name: 'Nikki',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, voluptas cumque similique a veritatis assumenda maxime deserunt aliquam voluptatem.',
    age: 23,
    photo: require('../../images/users/zdj6.jpg'),
    location: 'Kielce',
    distance: 29,
    hobbies: [
      'Art',
      'Football',
      'Swimming',
      'Travel',
      'Gym',
      'React programming',
      'DIY',
    ],
  },
]

interface SwipeScreenProps {
  navigation: any
}
const SwapScreen = ({ navigation }: SwipeScreenProps) => {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const [isPointedYes, setIsPointedYes] = useState(false)
  const [isPointedNo, setIsPointedNo] = useState(false)
  const [personIndex, setPersonIndex] = useState(0)
  const [person, setPerson] = useState(null)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const state = useSelector((state: any) => state.userData)

  const loadPerson = async () => {
    setLoading(true)
    const result = await getPerson(state.accessToken, dispatch, 'Kielce')
    if (result.success) {
      setPerson(result.message[0])
    } else {
      setError(result.message)
    }
  }

  useEffect(() => {
    let isMounted = true

    isMounted && setLoading(false)

    return () => {
      isMounted = false
    }
  }, [person])

  useEffect(() => {
    let isMounted = true

    isMounted && loadPerson()

    return () => {
      isMounted = false
    }
  }, [])

  const personChangeHandler = async () => {
    loadPerson()
  }

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX
      if (translateX.value < -100) {
        runOnJS(setIsPointedNo)(true)
      } else if (translateX.value > 100) {
        runOnJS(setIsPointedYes)(true)
      } else {
        runOnJS(setIsPointedNo)(false)
        runOnJS(setIsPointedYes)(false)
      }
    },
    onEnd: (event) => {
      if (translateX.value < -100) {
        runOnJS(personChangeHandler)()
      } else if (translateX.value > 100) {
        runOnJS(personChangeHandler)()
      }
      runOnJS(setIsPointedNo)(false)
      runOnJS(setIsPointedYes)(false)
      translateX.value = withSpring(0)
    },
  })

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }
  })

  return (
    <View style={styles.container}>
      <LocationBlock location={location} />
      <View style={[styles.gestureContainer, styles.shadowProp]}>
        {!loading && person ? (
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.personContainer, rStyle]}>
              <ImageBackground
                source={{ uri: person.images[0].url }}
                resizeMode='cover'
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {isPointedYes && <Text style={styles.yesLabel}>YES</Text>}
                {isPointedNo && <Text style={styles.noLabel}>NO</Text>}
                <View style={styles.personInformationContainer}>
                  {/* Info Container */}
                  <View
                    style={{
                      width: '75%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 30,
                        color: '#FFF',
                        fontFamily: 'montBold',
                        marginTop: 10,
                        overflow: 'hidden',
                        flexWrap: 'nowrap',
                      }}
                    >
                      {person && person.username},{person && person.age}
                    </Text>
                    <View
                      style={{
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#FFF',
                          fontFamily: 'montRegular',
                          marginRight: 10,
                        }}
                      >
                        {person && person.city}
                      </Text>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size={20}
                        style={{ color: '#CF56A1' }}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'montRegular',
                          color: '#FFF',
                          marginLeft: 5,
                        }}
                      >
                        {Math.floor(Math.random() * 10)}km
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#FFF',
                        fontFamily: 'montRegular',
                        marginTop: 5,
                      }}
                    >
                      {person && person.desc.slice(0, 50)}...
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('profilInfo', {
                        user: person,
                      })
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      size={40}
                      style={{
                        color: '#CF56A1',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </Animated.View>
          </PanGestureHandler>
        ) : (
          <View style={styles.loading}>
            <LoadingDots />
          </View>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={personChangeHandler}
          style={[styles.circleA, styles.shadowProp]}
        >
          <FontAwesomeIcon
            icon={faXmark}
            size={45}
            style={{
              color: '#CF56A1',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={personChangeHandler}
          style={[styles.circleB, styles.shadowProp]}
        >
          <FontAwesomeIcon
            icon={faHeart}
            size={40}
            style={{
              color: '#FFF',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gestureContainer: {
    width: '100%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
  },
  personContainer: {
    width: '80%',
    height: '100%',
    zIndex: -100,
    overflow: 'hidden',
    borderRadius: 18,
  },
  yesLabel: {
    fontSize: 48,
    fontFamily: 'montBold',
    color: '#32CD32',
    marginRight: 'auto',
    marginLeft: 10,
    marginTop: 20,
    transform: [{ rotate: '-45deg' }],
  },
  noLabel: {
    fontSize: 48,
    fontFamily: 'montBold',
    color: 'red',
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 20,
    transform: [{ rotate: '45deg' }],
  },
  personInformationContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '30%',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonsContainer: {
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  circleA: {
    height: 76,
    width: 76,
    backgroundColor: '#FFF',
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleB: {
    height: 76,
    width: 76,
    backgroundColor: '#CF56A1',
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SwapScreen
