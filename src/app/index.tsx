import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

type CurrencyCode = 'USD' | 'BRL' | 'EUR';

type ExchangeRates = {
  [key in CurrencyCode]: {
    [key in CurrencyCode]?: number;
  };
};

export default function HomeScreen() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>('USD');
  const [toCurrency, setToCurrency] = useState<CurrencyCode>('BRL');
  const [result, setResult] = useState<string | null>(null);

  const [buttonPressedFrom, setButtonPressedFrom] = useState<string | null>(null);
  const [buttonPressedTo, setButtonPressedTo] = useState<string | null>(null);

  const exchangeRates: ExchangeRates = {
    USD: {
      BRL: 5.0,
      EUR: 0.85,
    },
    BRL: {
      USD: 0.20,
      EUR: 0.17,
    },
    EUR: {
      USD: 1.18,
      BRL: 5.89,
    }
  };

  const convertCurrency = () => {
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      setResult('Por favor, insira um valor válido.');
      return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    if (rate) {
      const converted = parseFloat(amount) * rate;
      setResult(converted.toFixed(2));
    } else {
      setResult('Não há taxa de câmbio disponível para essas moedas.');
    }
  };

  return (
    <LinearGradient
      colors={['#000000', '#333333']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Conversor de Moedas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <View style={styles.currencySelector}>
        <TouchableOpacity
          style={[
            styles.currencyButton,
            fromCurrency === 'USD' && styles.currencyButtonSelected,
            buttonPressedFrom === 'USD' && styles.currencyButtonPressed,
          ]}
          onPress={() => setFromCurrency('USD')}
          onPressIn={() => setButtonPressedFrom('USD')}
          onPressOut={() => setButtonPressedFrom(null)}
        >
          <Text style={styles.currencyText}>USD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.currencyButton,
            fromCurrency === 'BRL' && styles.currencyButtonSelected,
            buttonPressedFrom === 'BRL' && styles.currencyButtonPressed,
          ]}
          onPress={() => setFromCurrency('BRL')}
          onPressIn={() => setButtonPressedFrom('BRL')}
          onPressOut={() => setButtonPressedFrom(null)}
        >
          <Text style={styles.currencyText}>BRL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.currencyButton,
            fromCurrency === 'EUR' && styles.currencyButtonSelected,
            buttonPressedFrom === 'EUR' && styles.currencyButtonPressed,
          ]}
          onPress={() => setFromCurrency('EUR')}
          onPressIn={() => setButtonPressedFrom('EUR')}
          onPressOut={() => setButtonPressedFrom(null)}
        >
          <Text style={styles.currencyText}>EUR</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Para:</Text>

      <View style={styles.currencySelector}>
        <TouchableOpacity
          style={[
            styles.currencyButton,
            toCurrency === 'USD' && styles.currencyButtonSelected,
            buttonPressedTo === 'USD' && styles.currencyButtonPressed,
          ]}
          onPress={() => setToCurrency('USD')}
          onPressIn={() => setButtonPressedTo('USD')}
          onPressOut={() => setButtonPressedTo(null)}
        >
          <Text style={styles.currencyText}>USD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.currencyButton,
            toCurrency === 'BRL' && styles.currencyButtonSelected,
            buttonPressedTo === 'BRL' && styles.currencyButtonPressed,
          ]}
          onPress={() => setToCurrency('BRL')}
          onPressIn={() => setButtonPressedTo('BRL')}
          onPressOut={() => setButtonPressedTo(null)}
        >
          <Text style={styles.currencyText}>BRL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.currencyButton,
            toCurrency === 'EUR' && styles.currencyButtonSelected,
            buttonPressedTo === 'EUR' && styles.currencyButtonPressed,
          ]}
          onPress={() => setToCurrency('EUR')}
          onPressIn={() => setButtonPressedTo('EUR')}
          onPressOut={() => setButtonPressedTo(null)}
        >
          <Text style={styles.currencyText}>EUR</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.convertButton,
          buttonPressedFrom === 'convert' && styles.convertButtonPressed,
        ]}
        onPress={convertCurrency}
        onPressIn={() => setButtonPressedFrom('convert')}
        onPressOut={() => setButtonPressedFrom(null)}
      >
        <Text style={styles.convertButtonText}>Converter</Text>
      </TouchableOpacity>

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {amount} {fromCurrency} = {result} {toCurrency}
          </Text>
        </View>
      )}
    </LinearGradient>
  );
}
