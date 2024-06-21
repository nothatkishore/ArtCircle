import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    setDisplayedText('')   
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <Animatable.Text animation="fadeIn" >
      {displayedText}
    </Animatable.Text>
  );
};

export default TypingText;
