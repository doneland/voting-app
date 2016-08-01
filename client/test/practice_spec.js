import {expect} from 'chai';

function createEvent(eventType) {
  return function (historyEvents) {
    console.log(eventType, 'occurred:', historyEvents.length, 'times');
    return function (calcFunc) {
      return calcFunc(historyEvents)
    }
  }
}

const mockHistoricalEvents = [
  {type: 'CHANGE', value: 10},
  {type: 'CHANGE', value: 7},
  {type: 'CHANGE', value: 4},
  {type: 'CHANGE', value: 7},
  {type: 'AVERAGE', value: 7.5},
  {type: 'AVERAGE', value: 6.9}
];


function calcAverage(historicalData) {
  let total = 0;
  let average = 0;
  historicalData.forEach(function (event) {
    total += event.value;
  });
  average = total / historicalData.length;
  return {type: 'AVERAGE', value: average};
}

describe('Currying', () => {

  it('calculate average value of events provided.', () => {
    const mockChangeEvents = mockHistoricalEvents.filter((event) => {
      console.log('Is event:', event.type === 'CHANGE');
      return event.type === 'CHANGE';
    });
    const averageEvent = calcAverage(mockChangeEvents);
    expect(averageEvent.type).to.equal('AVERAGE');
    expect(averageEvent.value).to.equal(7);
  });
});


function greeting(greeting) {
  return function (name) {
    return function (format) {
      switch(format) {
        case 'JSON':
          return {
            greeting: greeting,
            name: name,
            message: greeting + ' ' + name
          };
        case 'TEXT':
          return greeting + ' ' + name;
        default:
          return greeting + ' ' + name;
      }
    }
  }
}


describe('Greetings', () => {

  it('generate string of greetings', () => {
    const newYearGreet = greeting('Happy new year');
    const forEdgaras = newYearGreet('Edgaras');
    expect(forEdgaras()).to.equal('Happy new year Edgaras');

    const forIgnas = newYearGreet('Ignas');
    expect(forIgnas('TEXT')).to.equal('Happy new year Ignas');

    const forTomas = newYearGreet('Tomas');
    console.log(forTomas("JSON"));
    expect(forTomas('JSON')).to.deep.equal({
      greeting: 'Happy new year',
      name: 'Tomas',
      message: 'Happy new year Tomas'
    });
  });
});
