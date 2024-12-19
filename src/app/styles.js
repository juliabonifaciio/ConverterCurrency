import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%'
  },
  title: {
    color: '#fff',
    fontSize: 42, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: '5%',  
    marginTop: '60%'
  },
  inputContainer: {
    marginBottom: '5%'
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    color: '#fff', 
    fontSize: 16,
    padding: '5%',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderRadius: 10
  },
  label: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    marginVertical: '2%'
  },
  currencySelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%'
  },
  currencyButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    alignItems: 'center',
    padding: '4%',
    marginHorizontal: '2%',
    borderWidth: 0,
    borderRadius: 10
  },
  currencyButtonSelected: {
    borderColor: '#fff', 
    borderWidth: 1
  },
  currencyButtonPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  currencyText: {
    color: '#fff', 
    fontSize: 16
  },
  convertButton: {
    backgroundColor: '#444', 
    padding: '5%',
    alignItems: 'center',
    marginTop: '5%',
    borderRadius: 10
  },
  convertButtonPressed: {
    backgroundColor: '#666'
  },
  convertButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold'
  },
  resultContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    padding: '5%',  
    marginTop: '5%',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.3)', 
    borderWidth: 1,
    borderRadius: 10
  },
  resultText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold'
  },
});
