import{StyleSheet} from 'react-native';
export const home_styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  mainLogoContainer: {
    fontWeight: 600,
    flexDirection: 'row',
    padding: 18,
    justifyContent: "center",
  },
  firstLogo: {
    fontSize: 24,
    marginRight: 10
  },
  secondLogo: {
    fontSize: 24,
    color: "#B0E9CA",
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ECECEC",
    padding: 10,
    alignItems: 'center'
  },
  searchLogo: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  searchBar: {
    height: 10,
  },
  button: {
    position: 'absolute',
    top: 770,
    left: 330
  },
  buttonImg: {
    width: 60,
    height: 60
  }
});