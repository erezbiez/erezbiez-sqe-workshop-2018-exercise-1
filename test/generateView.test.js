/* eslint-disable max-lines-per-function */
import assert from 'assert';
import {parseCode} from '../src/js/code-analyzer';
import {parsedCodeToTable} from '../src/js/generateView';

describe('The generate view module', () => {
    it('is parsing assignment expression statement correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('i=0;'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'assignment expression',
                'name': 'i',
                'condition': '',
                'value': '0'
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing for statement with variable declaration as init correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('for (let i=0; i<10; i++) {}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'for statement',
                'name': '',
                'condition': 'i = 0; i&lt10; i++',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing for statement with assignment expression as init correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('for (let i=0; i<10; i++) {}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'for statement',
                'name': '',
                'condition': 'i = 0; i&lt10; i++',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing variable declaration of one variable correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('let i;'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'variable declaration',
                'name': 'i',
                'condition': '',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing variable declaration of one variable with init correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('let i=0;'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'variable declaration',
                'name': 'i',
                'condition': '',
                'value': '0'
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing variable declaration of few variables correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('let a,b;'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'variable declaration',
                'name': 'a',
                'condition': '',
                'value': ''
            },
            {
                'line': 1,
                'type': 'variable declaration',
                'name': 'b',
                'condition': '',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing variable declaration of few variables with init correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('let a=1, b=2;'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'variable declaration',
                'name': 'a',
                'condition': '',
                'value': '1'
            },
            {
                'line': 1,
                'type': 'variable declaration',
                'name': 'b',
                'condition': '',
                'value': '2'
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing if statement with no else correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('if (i>0) {}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'if statement',
                'name': '',
                'condition': 'i&gt0',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing if statement with else correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('if (i>0) {}\n else {}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'if statement',
                'name': '',
                'condition': 'i&gt0',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing if statement with else if and no else correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('if (i>0) {} \n' +
            'else if (i<-5) {}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'if statement',
                'name': '',
                'condition': 'i&gt0',
                'value': ''
            },
            {
                'line': 2,
                'type': 'else if statement',
                'name': '',
                'condition': 'i&lt-5',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing if statement with else if and else correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('if (i>0) {} \n' +
            'else if (i<-5) {}\n' +
            'else {}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'if statement',
                'name': '',
                'condition': 'i&gt0',
                'value': ''
            },
            {
                'line': 2,
                'type': 'else if statement',
                'name': '',
                'condition': 'i&lt-5',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing while statement correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('while (i<0){\n' +
            'i++;\n' +
            '}\n'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'while statement',
                'name': '',
                'condition': 'i&lt0',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing function declaration (on args) correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('function foo(){}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'function declaration',
                'name': 'foo',
                'condition': '',
                'value': ''
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing function declaration (with args), variable declaration and return statement correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('function foo(a){\n' +
            'return a;\n' +
            '}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'function declaration',
                'name': 'foo',
                'condition': '',
                'value': ''
            },
            {
                'line': 1,
                'type': 'variable declartion',
                'name': 'a',
                'condition': '',
                'value': ''
            },
            {
                'line': 2,
                'type': 'return statement',
                'name': '',
                'condition': '',
                'value': 'a'
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

    it('is parsing example correctly', () => {
        let rowsList = [];
        parsedCodeToTable(parseCode('function binarySearch(X, V, n){\n' +
            '    let low, high, mid;\n' +
            '    low = 0;\n' +
            '    high = n - 1;\n' +
            '    while (low <= high) {\n' +
            '        mid = (low + high)/2;\n' +
            '        if (X < V[mid])\n' +
            '            high = mid - 1;\n' +
            '        else if (X > V[mid])\n' +
            '            low = mid + 1;\n' +
            '        else\n' +
            '            return mid;\n' +
            '    }\n' +
            '    return -1;\n' +
            '}'), rowsList);
        var json = [
            {
                'line': 1,
                'type': 'function declaration',
                'name': 'binarySearch',
                'condition': '',
                'value': ''
            },
            {
                'line': 1,
                'type': 'variable declartion',
                'name': 'X',
                'condition': '',
                'value': ''
            },
            {
                'line': 1,
                'type': 'variable declartion',
                'name': 'V',
                'condition': '',
                'value': ''
            },
            {
                'line': 1,
                'type': 'variable declartion',
                'name': 'n',
                'condition': '',
                'value': ''
            },
            {
                'line': 2,
                'type': 'variable declaration',
                'name': 'low',
                'condition': '',
                'value': ''
            },
            {
                'line': 2,
                'type': 'variable declaration',
                'name': 'high',
                'condition': '',
                'value': ''
            },
            {
                'line': 2,
                'type': 'variable declaration',
                'name': 'mid',
                'condition': '',
                'value': ''
            },
            {
                'line': 3,
                'type': 'assignment expression',
                'name': 'low',
                'condition': '',
                'value': '0'
            },
            {
                'line': 4,
                'type': 'assignment expression',
                'name': 'high',
                'condition': '',
                'value': 'n-1'
            },
            {
                'line': 5,
                'type': 'while statement',
                'name': '',
                'condition': 'low<=high',
                'value': ''
            },
            {
                'line': 6,
                'type': 'assignment expression',
                'name': 'mid',
                'condition': '',
                'value': 'low+high/2'
            },
            {
                'line': 7,
                'type': 'if statement',
                'name': '',
                'condition': 'X&ltV[mid]',
                'value': ''
            },
            {
                'line': 8,
                'type': 'assignment expression',
                'name': 'high',
                'condition': '',
                'value': 'mid-1'
            },
            {
                'line': 9,
                'type': 'else if statement',
                'name': '',
                'condition': 'X&gtV[mid]',
                'value': ''
            },
            {
                'line': 10,
                'type': 'assignment expression',
                'name': 'low',
                'condition': '',
                'value': 'mid+1'
            },
            {
                'line': 12,
                'type': 'return statement',
                'name': '',
                'condition': '',
                'value': 'mid'
            },
            {
                'line': 14,
                'type': 'return statement',
                'name': '',
                'condition': '',
                'value': '-1'
            }
        ];
        assert.equal(
            JSON.stringify(rowsList),
            JSON.stringify(json)
        );
    });

});
