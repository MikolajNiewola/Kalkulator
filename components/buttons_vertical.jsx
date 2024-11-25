const buttons_vertical = (currentValue, setCurrentValue, equation, setEquation) => [
    {
        title: 'AC',
        backgroundColor: '#626366',
        fontSize: 54,
        onPress: () => {
          setCurrentValue("0"); 
          setEquation("");
        }
      },
      {
        width: '50%',
        title: '',
        backgroundColor: '#626366',
        fontSize: 54,
        onPress: () => {}
      },
      {
        title:'÷',
        backgroundColor: '#F1A23B',
        fontSize: 54,
        onPress: () => {
          setEquation(equation+currentValue+"/");

          setCurrentValue("0");
        }
      },
      {
        title:'7',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '7' : previous + '7'));}
      },
      {
        title:'8',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '8' : previous + '8'));}
      },
      {
        title:'9',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '9' : previous + '9'));}
      },
      {
        title:'x',
        backgroundColor: '#F1A23B',
        fontSize: 54,
        onPress: () => {
          setEquation(equation+currentValue+"*");

          setCurrentValue("0");
        }
      },
      {
        title:'4',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '4' : previous + '4'));}
      },
      {
        title:'5',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '5' : previous + '5'));}
      },
      {
        title:'6',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '6' : previous + '6'));}
      },
      {
        title:'-',
        backgroundColor: '#F1A23B',
        fontSize: 54,
        onPress: () => {
          setEquation(equation+currentValue+"-");

          setCurrentValue("0");
        }
      },
      {
        title:'1',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '1' : previous + '1'));}
      },
      {
        title:'2',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '2' : previous + '2'));}
      },
      {
        title:'3',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '3' : previous + '3'));}
      },
      {
        title:'+',
        backgroundColor: '#F1A23B',
        fontSize: 54,
        onPress: () => {
          setEquation(equation+currentValue+"+");

          setCurrentValue("0");
        }
      },
      {
        width: '50%',
        title:'0',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '0' : previous + '0'));}
      },
      {
        title:',',
        backgroundColor: '#7C7D7F',
        fontSize: 54,
        onPress: () => {
          if (currentValue.toString().includes('.')) {
            return;
          } else {
            setCurrentValue(currentValue.toString() + '.');
          }
        }
      },
      {
        title:'=',
        backgroundColor: '#F1A23B',
        fontSize: 54,
        onPress: () => {
          setCurrentValue(eval(equation+currentValue));
          setEquation("");
        }
      },
]


export default buttons_vertical;

