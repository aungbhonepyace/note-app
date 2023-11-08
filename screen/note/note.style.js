import{StyleSheet} from 'react-native';
export const note_styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backArrowImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    position: 'absolute',
    top: 18,
    left: 18,
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
    // fontWeight: 400,
  },

  title: {
    fontSize: 12,
    marginBottom: 20
  },
  titleInputfield: {
    backgroundColor: 'rgba(232, 232, 232, 1)',
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(246, 246, 246, 1)',
    borderRadius: 10,
    padding: 16
  },
  textArea: {
    backgroundColor: 'rgba(232, 232, 232, 1)',
    borderWidth: 1,
    borderColor: 'rgba(246, 246, 246, 1)',
    height: 391,
    borderRadius: 10,
    textAlignVertical: 'top',
    padding: 16
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 25
  },
  button: {
    color: '#fff',
    backgroundColor: 'rgba(93, 176, 117, 1)',
    width: 123,
    height: 52,
    // fontWeight: 600
  },
  error: { 
    color: 'red', 
    fontSize: 12, 
    marginBottom: 10, 
},

});