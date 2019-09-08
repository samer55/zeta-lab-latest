import { StyleSheet } from 'react-native';

const blue = '#90caf9';
const navy = '#1a237e';
const white = '#fff';
const black = '#000';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: white,
  },
  input: {
    backgroundColor: white,
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center'
  },
  buttonContainer: {
    backgroundColor: white,
    justifyContent: 'center',
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2
  },
  button: {
    textAlign: 'center'
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    color: navy
  },
  feedback: {
    textAlign: 'center',
    color: '#FF0000'
  },

  //topics section
  flexContainer: {
    flex: 1,
    backgroundColor: white
  },
  header: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    flex: 1,
  },
  textInput: {
      height: 30,
      borderWidth: 1,
      borderColor: '#cecece',
      marginBottom: 10,
      marginHorizontal: 10
  },
  title: {
    textAlign: 'center'
  },

  titleApp: {
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold'
  },

  //list section
  list: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    backgroundColor: white,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    padding: 10
  },
  rowTitle: {
    fontWeight: 'bold'
  },

  //details section
  detailTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  detailSubtitle: {
    textAlign: 'center',
    fontSize: 14
  },
  comment: {
    color: '#777'
  }
})
