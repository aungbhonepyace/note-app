import{StyleSheet} from 'react-native';
export const note_styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row'
  },
  backArrowImage: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  noteFlatlist: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  noteContainer: {
    width: 171,
    height: 100,
    margin: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  noteTitle: {
    fontSize: 14,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 9
  },
  noteDesc: {
    fontSize: 12,
    fontWeight: 400,
  }

});