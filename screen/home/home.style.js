import{StyleSheet} from 'react-native';
export const home_styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
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
  }
});