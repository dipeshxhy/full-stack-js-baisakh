import { useState } from 'react';
import Input from './Input';

const data = [
  {
    id: 1,
    value: 'AC',
  },
  {
    id: 0,
    value: 'DEL',
  },
  {
    id: 2,
    value: '/',
  },
  {
    id: 3,
    value: '*',
  },
  {
    id: 4,
    value: 7,
  },
  {
    id: 5,
    value: 8,
  },
  {
    id: 6,
    value: 9,
  },
  {
    id: 7,
    value: '-',
  },
  {
    id: 8,
    value: 4,
  },
  {
    id: 9,
    value: 5,
  },
  {
    id: 10,
    value: 6,
  },
  {
    id: 11,
    value: '+',
  },
  {
    id: 12,
    value: 1,
  },
  {
    id: 13,
    value: 2,
  },
  {
    id: 14,
    value: 3,
  },
  {
    id: 15,
    value: '=',
  },
  {
    id: 16,
    value: 0,
  },
  {
    id: 'abc',
    value: '00',
  },
  {
    id: 17,
    value: '.',
  },
];

function calculateExpression(expression) {
  try {
    // Use the Function constructor to evaluate the expression
    const result = new Function(`return ${expression}`)();
    return result;
  } catch (e) {
    return 'Error 💥';
  }
}

const Calculator = () => {
  const [input, setInput] = useState('');
  console.log(input);
  const showButton = data.map((item) => {
    return (
      <button
        className="p-2.5 focus:ring-4 focus-within:bg-transparent  focus:ring-rose-500   -500 py-3 bg-gray-700 rounded-md hover:bg-gray-400 text-lg font-bold  active:scale-95  text-white cursor-pointer"
        key={item.id}
        value={item.value}
        onClick={() =>
          setInput((prev) => {
            if (input === 'Error 💥') {
              return '';
            }
            if (item.value === 'AC') {
              return '';
            } else if (item.value === '=') {
              return calculateExpression(prev);
            } else if (item.value === 'DEL') {
              return prev ? prev.slice(0, -1) : '';
            } else {
              return prev + item.value;
            }
          })
        }
      >
        {item.value}
      </button>
    );
  });
  return (
    <div className="shadow-2xl bg-slate-900   rounded-lg p-4 ">
      <div className="max-w-98 mx-auto">
        <Input value={input} />
        <div className="grid grid-cols-4 gap-1.5 tab">{showButton}</div>
      </div>
    </div>
  );
};
export default Calculator;
