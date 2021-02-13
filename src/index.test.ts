import { convertNumberToWord } from './index'
describe('convertNumberToWord test', () => {
  it('should pass with a single digit', () => {
    expect(convertNumberToWord(1)).toEqual('one');
    expect(convertNumberToWord(2)).toEqual('two');

    expect(convertNumberToWord(4)).toEqual('four');
  });

  it('should pass with two digits', () => {
    expect(convertNumberToWord(11)).toEqual('eleven');
    expect(convertNumberToWord(24)).toEqual('twenty four');
    expect(convertNumberToWord(45)).toEqual('forty five');
  });
})