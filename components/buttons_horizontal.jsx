import Mexp from "math-expression-evaluator";

let using_deg = false;

let open_counter = 0;
let close_counter = 0;

const mexp = new Mexp();

const buttons_horizontal = (currentValue, setCurrentValue, equation, setEquation, memory, setMemory, units, setUnits) => [
    {
      title: '\u0028',
      backgroundColor: '#626366',
      fontSize: 24,
      onPress: () => {
        open_counter += 1;
        setCurrentValue((previous) => (previous == "0" ? '[' : typeof(previous.slice(-1)) === 'number' ? previous + '[' :  previous + '*['));
      }
    },
    {
      title: '\u0029',
      backgroundColor: '#626366',
      fontSize: 24,
      onPress: () => {
        if (open_counter <= close_counter) {
          return;
        }
        close_counter += 1;
        setCurrentValue((previous) => (previous == "0" ? ']' : previous + ']'));
      }
    },
    {
      title: 'mc',
      backgroundColor: '#626366',
      fontSize: 24,
      onPress: () => {
        setMemory(0)
      }
    },
    {
      title: 'm+',
      backgroundColor: '#626366',
      fontSize: 24,
      onPress: () => {
        setMemory(memory+eval(equation+currentValue));
        setEquation("");
        setCurrentValue("0");
      }
    },
    {
      title: 'm-',
      backgroundColor: '#626366',
      fontSize: 24,
      onPress: () => {
        setMemory(memory-eval(equation+currentValue));
        setEquation("");
        setCurrentValue("0");
      }
    },
    {
      title: 'mr',
      backgroundColor: '#626366',
      fontSize: 24,
      onPress: () => {
        setCurrentValue(memory.toString());
      }
    },
    {
        title: 'AC',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue("0"); 
          setEquation("");
          open_counter = 0;
          close_counter = 0;
        }
      },
      {
        title:'+/-',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          let negated = currentValue.toString() * -1;
          setCurrentValue(negated.toString())
        }
      },
      {
        title:'%',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          let percent = 0
          if (equation.slice(-1) == "+" || equation.slice(-1) == "-") {
            percent = eval(equation+"0") * (currentValue/100);
          } else {
            percent = (currentValue/100);
          }

          setCurrentValue(percent);
        }
      },
      {
        title:'÷',
        backgroundColor: '#F1A23B',
        fontSize: 24,
        onPress: () => {
          setEquation(equation+currentValue+"/");

          setCurrentValue("0");
        }
      },
      {
        title: '2ⁿᵈ',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          //TO DO
        }
      },
      {
        title: 'x²',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(eval(currentValue**2));
        }
      },
      {
        title: 'x³',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(eval(currentValue**3));
        }
      },
      {
        title: 'xʸ',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setEquation(equation+currentValue+"**");
          setCurrentValue("0");
        }
      },
      {
        title: 'eˣ',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(eval(Math.E**currentValue));
        }
      },
      {
        title: '10ˣ',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(eval(10**currentValue));
        }
      },
      {
        title:'7',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '7' : previous + '7'));}
      },
      {
        title:'8',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '8' : previous + '8'));}
      },
      {
        title:'9',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '9' : previous + '9'));}
      },
      {
        title:'x',
        backgroundColor: '#F1A23B',
        fontSize: 24,
        onPress: () => {
          setEquation(equation+currentValue+"*");

          setCurrentValue("0");
        }
      },
      {
        title: '¹/ₓ',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(eval(1/currentValue));
        }
      },
      {
        title: '√x',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(eval(currentValue**(1/2)));
        }
      },
      {
        title: '∛x',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(eval(currentValue**(1/3)));
        }
      },
      {
        title: 'ʸ√x',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setEquation(equation+currentValue+"**[1/");
          open_counter++;
          setCurrentValue("0");
        }
      },
      {
        title: 'ln',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(Math.log(currentValue));
        }
      },
      {
        title: 'log₁₀',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(Math.log10(currentValue));
        }
      },
      {
        title:'4',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '4' : previous + '4'));}
      },
      {
        title:'5',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '5' : previous + '5'));}
      },
      {
        title:'6',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '6' : previous + '6'));}
      },
      {
        title:'-',
        backgroundColor: '#F1A23B',
        fontSize: 24,
        onPress: () => {
          setEquation(equation+currentValue+"-");
          setCurrentValue("0");
        }
      },
      {
        title: 'x!',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(mexp.eval(`${currentValue}!`));
        }
      },
      {
        title: 'sin',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          const deg_rad = using_deg ? currentValue : currentValue * (180 / Math.PI);

          setCurrentValue(mexp.eval(`sin(${deg_rad})`));

        }
      },
      {
        title: 'cos',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          const deg_rad = using_deg ? currentValue : currentValue * (180 / Math.PI);

          setCurrentValue(mexp.eval(`cos(${deg_rad})`));
        }
      },
      {
        title: 'tan',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          const deg_rad = using_deg ? currentValue : currentValue * (180 / Math.PI);

          setCurrentValue(mexp.eval(`tan(${deg_rad})`));

        }
      },
      {
        title: 'e',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          setCurrentValue(Math.E);
        }
      },
      {
        title: 'EE',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          if (currentValue.toString().includes('E')) {
            return;
          } else {
            setCurrentValue(currentValue.toString() + 'E');
          }
        }
      },
      {
        title:'1',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '1' : previous + '1'));}
      },
      {
        title:'2',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '2' : previous + '2'));}
      },
      {
        title:'3',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '3' : previous + '3'));}
      },
      {
        title:'+',
        backgroundColor: '#F1A23B',
        fontSize: 24,
        onPress: () => {
          setEquation(equation+currentValue+"+");

          setCurrentValue("0");
        }
      },
      {
        title: units,
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          if (units === "RAD") {
            setUnits("DEG")
            using_deg = true;
          } else {
            setUnits("RAD")
            using_deg = false;
          }
          
        }
      },
      {
        title: 'sinh',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          const deg_rad = using_deg ? currentValue : currentValue * (180 / Math.PI);

          setCurrentValue(mexp.eval(`sinh(${deg_rad})`));
        }
      },
      {
        title: 'cosh',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          const deg_rad = using_deg ? currentValue : currentValue * (180 / Math.PI);

          setCurrentValue(mexp.eval(`cosh(${deg_rad})`));
        }
      },
      {
        title: 'tanh',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          const deg_rad = using_deg ? currentValue : currentValue * (180 / Math.PI);

          setCurrentValue(mexp.eval(`tanh(${deg_rad})`));
        }
      },
      {
        title: 'π',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {setCurrentValue(Math.PI);}
      },
      {
        title: 'Rand',
        backgroundColor: '#626366',
        fontSize: 24,
        onPress: () => {
          let random = 0;
          random = ((currentValue <= 1) ? Math.random() * currentValue : Math.floor(Math.random() * currentValue));
          setCurrentValue(random);
        }
      },
      {
        width: '20%',
        title:'0',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
        onPress: () => {setCurrentValue((previous) => (previous == "0" ? '0' : previous + '0'));}
      },
      {
        title:',',
        backgroundColor: '#7C7D7F',
        fontSize: 24,
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
        fontSize: 24,
        onPress: () => {
          if (open_counter > close_counter) {
            for (let i=close_counter; i<open_counter; ++i, ++close_counter) {
              currentValue = currentValue + "]";
            }
          }
          setCurrentValue(eval(equation+currentValue));
          setEquation("");
          open_counter = 0;
          close_counter = 0;
        }
      },
]

export default buttons_horizontal;

