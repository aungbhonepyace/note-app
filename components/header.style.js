import{StyleSheet} from 'react-native';
export const header_styles = StyleSheet.create({
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrowContainer: {

  },
  backArrowImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 5,
  },

});

