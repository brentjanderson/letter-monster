import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Speech from 'expo-speech';


interface Letter {
  char: string;
  color: string;
}

const letters: Letter[] = [
  {char: 'A', color: 'aqua'},
  {char: 'B', color: 'blue'},
  {char: 'C', color: 'coral'},
  {char: 'D', color: 'dodgerblue'},
  {char: 'E', color: 'chartreuse'},
  {char: 'F', color: 'fuchsia'},
  {char: 'G', color: 'gainsboro'},
  {char: 'H', color: 'hotpink'},
  {char: 'I', color: 'indigo'},
  {char: 'J', color: 'forestgreen'},
  {char: 'K', color: 'khaki'},
  {char: 'L', color: 'lemonchiffon'},
  {char: 'M', color: 'mintcream'},
  {char: 'N', color: 'navy'},
  {char: 'O', color: 'olive'},
  {char: 'P', color: 'peachpuff'},
  {char: 'Q', color: 'goldenrod'},
  {char: 'R', color: 'rebeccapurple'},
  {char: 'S', color: 'sienna'},
  {char: 'T', color: 'thistle'},
  {char: 'U', color: 'salmon'},
  {char: 'V', color: 'violet'},
  {char: 'W', color: 'wheat'},
  {char: 'X', color: 'slategray'},
  {char: 'Y', color: 'yellow'},
  {char: 'Z', color: 'peru'},
]

function randomLetter() {
  return letters[Math.floor(Math.random() * letters.length)]
}

export default function App() {
  const [letter, setLetter] = useState(randomLetter())
  Speech.speak(letter.char.toLowerCase(), {voice: "com.apple.ttsbundle.siri_Aaron_en-US_compact", language: 'en-US'});
  
  return (<>
      <TouchableOpacity style={{...styles.container, backgroundColor: letter.color}}  onPress={()=>setLetter(randomLetter())}>
      <Text style={styles.text}>{letter.char}</Text>
    </TouchableOpacity>
      <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 150
  }
});
