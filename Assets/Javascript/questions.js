let questions = [
    {
        numb: 1,
        question: "What keyword is used to declare a variable in JavaScript?",
        answer: "All of the above",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is used to comment a single line in JavaScript?",
        answer: "//",
        options: [
            "//",
            "/*",
            "#",
            "<!--"
        ]
    },
    {
        numb: 3,
        question: "What is the correct way to write a \"Hello, World!\" alert in JavaScript?",
        answer: "alert(\"Hello, World!\");",
        options: [
            "alertBox(\"Hello, World!\");",
            "msg(\"Hello, World!\");",
            "alert(\"Hello, World!\");",
            "msgBox(\"Hello, World!\");"
        ]
    },
    {
        numb: 4,
        question: "Which operator is used for strict equality comparison in JavaScript?",
        answer: "===",
        options: [
            "==",
            "===",
            "=",
            "!="
        ]
    },
    {
        numb: 5,
        question: "What is the correct way to write an if statement in JavaScript?",
        answer: "if (x == 5)",
        options: [
            "if x = 5 then",
            "if (x == 5)",
            "if x == 5",
            "if x = 5"
        ]
    },
    {
        numb: 6,
        question: "Which method is used to add an element to the end of an array?",
        answer: "push()",
        options: [
            "push()",
            "pop()",
            "append()",
            "add()"
        ]
    },
    {
        numb: 7,
        question: "What is the output of console.log(typeof [])?",
        answer: "object",
        options: [
            "array",
            "object",
            "undefined",
            "null"
        ]
    },
    {
        numb: 8,
        question: "How do you write a for loop in JavaScript?",
        answer: "for (let i = 0; i < 5; i++)",
        options: [
            "for (i = 0; i <= 5)",
            "for (i <= 5; i++)",
            "for i = 1 to 5",
            "for (let i = 0; i < 5; i++)"
        ]
    },
    {
        numb: 9,
        question: "Which method is used to remove the last element from an array?",
        answer: "pop()",
        options: [
            "pop()",
            "push()",
            "shift()",
            "unshift()"
        ]
    },
    {
        numb: 10,
        question: "What is the correct way to write a function in JavaScript?",
        answer: "function myFunction()",
        options: [
            "function:myFunction()",
            "function myFunction()",
            "function = myFunction()",
            "myFunction(): function"
        ]
    },
    {
        numb: 11,
        question: "What is the correct way to check if a variable is not equal to a value in JavaScript?",
        answer: "if (x != 5)",
        options: [
            "if (x <> 5)",
            "if (x != 5)",
            "if (x ≠ 5)",
            "if (x not 5)"
        ]
    },
    {
        numb: 12,
        question: "Which method is used to find the length of a string in JavaScript?",
        answer: "length",
        options: [
            "length()",
            "size()",
            "count()",
            "length"
        ]
    },
    {
        numb: 13,
        question: "How do you round the number 7.25 to the nearest integer in JavaScript?",
        answer: "Math.round(7.25)",
        options: [
            "round(7.25)",
            "Math.rnd(7.25)",
            "Math.round(7.25)",
            "rnd(7.25)"
        ]
    },
    {
        numb: 14,
        question: "What is the correct way to write a while loop in JavaScript?",
        answer: "while (i <= 10)",
        options: [
            "while i = 1 to 10",
            "while (i <= 10; i++)",
            "while (i <= 10)",
            "while i <= 10"
        ]
    },
    {
        numb: 15,
        question: "Which operator is used for concatenating strings in JavaScript?",
        answer: "+",
        options: [
            "&",
            "+",
            ".",
            ","
        ]
    },
    {
        numb: 16,
        question: "What is the correct way to write an array in JavaScript?",
        answer: "var colors = [\"red\", \"green\", \"blue\"]",
        options: [
            "var colors = \"red\", \"green\", \"blue\"",
            "var colors = 1 = \"red\", 2 = \"green\", 3 = \"blue\"",
            "var colors = [\"red\", \"green\", \"blue\"]",
            "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")"
        ]
    },
    {
        numb: 17,
        question: "How do you call a function named \"myFunction\" in JavaScript?",
        answer: "myFunction()",
        options: [
            "call myFunction()",
            "myFunction[]",
            "myFunction()",
            "call function myFunction()"
        ]
    },
    {
        numb: 18,
        question: "Which method is used to convert a string to lowercase in JavaScript?",
        answer: "toLowerCase()",
        options: [
            "toLowerCase()",
            "toLower()",
            "changeCase(\"lower\")",
            "lowerCase()"
        ]
    },
    {
        numb: 19,
        question: "What is the correct way to write a multi-line comment in JavaScript?",
        answer: "/* This is a comment */",
        options: [
            "// This is a comment",
            "# This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->"
        ]
    },
    {
        numb: 20,
        question: "What is the output of console.log(10 + \"20\")?",
        answer: "\"1020\"",
        options: [
            "30",
            "\"1020\"",
            "1020",
            "NaN"
        ]
    },
    {
        numb: 21,
        question: "Which method is used to return the character at a specified index in a string?",
        answer: "charAt()",
        options: [
            "charAt()",
            "getChar()",
            "characterAt()",
            "charOf()"
        ]
    },
    {
        numb: 22,
        question: "What does the isNaN() function do in JavaScript?",
        answer: "Checks if a value is not a number",
        options: [
            "Checks if a value is not a number",
            "Checks if a value is null",
            "Checks if a value is undefined",
            "Checks if a value is zero"
        ]
    },
    {
        numb: 23,
        question: "How do you declare a constant variable in JavaScript?",
        answer: "const PI = 3.14;",
        options: [
            "var PI = 3.14;",
            "let PI = 3.14;",
            "constant PI = 3.14;",
            "const PI = 3.14;"
        ]
    },
    {
        numb: 24,
        question: "Which operator is used for exponentiation in JavaScript?",
        answer: "**",
        options: [
            "^",
            "**",
            "^^",
            "//"
        ]
    },
    {
        numb: 25,
        question: "What is the correct way to write an arrow function in JavaScript?",
        answer: "x => { return x * 2; }",
        options: [
            "x => { return x * 2; }",
            "x -> { return x * 2; }",
            "function(x) => { return x * 2; }",
            "=> x { return x * 2; }"
        ]
    },
    {
        numb: 26,
        question: "Which method is used to remove the first element from an array?",
        answer: "shift()",
        options: [
            "shift()",
            "unshift()",
            "pop()",
            "remove()"
        ]
    },
    {
        numb: 27,
        question: "What is the output of console.log(typeof NaN)?",
        answer: "\"number\"",
        options: [
            "\"number\"",
            "\"NaN\"",
            "\"undefined\"",
            "\"object\""
        ]
    },
    {
        numb: 28,
        question: "How do you create a new object in JavaScript?",
        answer: "Both b and c are correct",
        options: [
            "var obj = Object.create();",
            "var obj = new Object();",
            "var obj = {};",
            "Both b and c are correct"
        ]
    },
    {
        numb: 29,
        question: "Which method is used to join all elements of an array into a string?",
        answer: "join()",
        options: [
            "concat()",
            "merge()",
            "join()",
            "combine()"
        ]
    },
    {
        numb: 30,
        question: "What is the correct way to write a switch statement in JavaScript?",
        answer: "switch (x) { case 1: ... break; }",
        options: [
            "switch (x) { case 1: ... break; }",
            "switch x { case 1: ... break; }",
            "switch(x) [ case 1: ... break; ]",
            "switch x [ case 1: ... break; ]"
        ]
    },
    {
        numb: 31,
        question: "Which method is used to find the index of a specific element in an array?",
        answer: "indexOf()",
        options: [
            "findIndex()",
            "search()",
            "locate()",
            "indexOf()"
        ]
    },
    {
        numb: 32,
        question: "What does the parseInt() function do in JavaScript?",
        answer: "Converts a string to an integer",
        options: [
            "Converts a string to a floating-point number",
            "Converts a string to an integer",
            "Rounds a number to the nearest integer",
            "Checks if a value is an integer"
        ]
    },
    {
        numb: 33,
        question: "How do you declare a function that doesn't have a name in JavaScript?",
        answer: "Both a and b are correct",
        options: [
            "function() {}",
            "() => {}",
            "Both a and b are correct",
            "function = () {}"
        ]
    },
    {
        numb: 34,
        question: "Which operator is used for logical AND in JavaScript?",
        answer: "&&",
        options: [
            "&",
            "&&",
            "AND",
            "||"
        ]
    },
    {
        numb: 35,
        question: "What is the correct way to write a ternary operator in JavaScript?",
        answer: "condition ? expr1 : expr2",
        options: [
            "condition ? expr1, expr2",
            "condition ? expr1 : expr2",
            "condition :: expr1 ? expr2",
            "condition => expr1 : expr2"
        ]
    },
    {
        numb: 36,
        question: "Which method is used to add one or more elements to the beginning of an array?",
        answer: "unshift()",
        options: [
            "unshift()",
            "prepend()",
            "addFirst()",
            "push()"
        ]
    },
    {
        numb: 37,
        question: "What is the output of console.log(0.1 + 0.2 === 0.3)?",
        answer: "false",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ]
    },
    {
        numb: 38,
        question: "How do you check if a property exists in an object?",
        answer: "Both b and c are correct",
        options: [
            "object.hasProperty(\"propertyName\")",
            "\"propertyName\" in object",
            "object.propertyName !== undefined",
            "Both b and c are correct"
        ]
    },
    {
        numb: 39,
        question: "Which method is used to remove a specific element from an array?",
        answer: "splice()",
        options: [
            "delete()",
            "remove()",
            "splice()",
            "cut()"
        ]
    },
    {
        numb: 40,
        question: "What is the correct way to write a do-while loop in JavaScript?",
        answer: "do { ... } while (condition);",
        options: [
            "do { ... } while (condition);",
            "while (condition) do { ... }",
            "do while (condition) { ... }",
            "while { ... } do (condition);"
        ]
    },
    {
        numb: 41,
        question: "Which method is used to return a random number between 0 and 1 in JavaScript?",
        answer: "Math.random()",
        options: [
            "Math.random()",
            "Math.rand()",
            "Random.next()",
            "Math.randomNumber()"
        ]
    },
    {
        numb: 42,
        question: "How do you convert a string to an integer in JavaScript?",
        answer: "parseInt(\"10\")",
        options: [
            "Integer.parse(\"10\")",
            "parseInt(\"10\")",
            "\"10\".toInteger()",
            "Number.parseInt(\"10\")"
        ]
    },
    {
        numb: 43,
        question: "What does the Array.isArray() method do?",
        answer: "Checks if a value is an array",
        options: [
            "Checks if a value is an object",
            "Checks if a value is a function",
            "Checks if a value is an array",
            "Checks if a value is a string"
        ]
    },
    {
        numb: 44,
        question: "Which operator is used for logical OR in JavaScript?",
        answer: "||",
        options: [
            "|",
            "||",
            "OR",
            "^^"
        ]
    },
    {
        numb: 45,
        question: "What is the correct way to write a template literal in JavaScript?",
        answer: "`Hello, ${name}!`",
        options: [
            "'Hello, ${name}!'",
            "\"Hello, ${name}!\"",
            "`Hello, ${name}!`",
            "\"Hello, {name}!\""
        ]
    },
    {
        numb: 46,
        question: "Which method is used to remove whitespace from both ends of a string?",
        answer: "trim()",
        options: [
            "trim()",
            "strip()",
            "clean()",
            "removeWhitespace()"
        ]
    },
    {
        numb: 47,
        question: "What is the output of console.log(typeof null)?",
        answer: "\"object\"",
        options: [
            "\"null\"",
            "\"undefined\"",
            "\"object\"",
            "\"number\""
        ]
    },
    {
        numb: 48,
        question: "How do you create a new date object for the current date and time?",
        answer: "var date = new Date();",
        options: [
        "var date = Date.now();",
        "var date = new Date();",
        "var date = Date.current();",
        "var date = Date.today();"
        ]
        },
        {
        numb: 49,
        question: "Which method is used to sort the elements of an array?",
        answer: "sort()",
        options: [
        "order()",
        "sort()",
        "organize()",
        "arrange()"
        ]
        },
        {
        numb: 50,
        question: "What is the correct way to write a try-catch statement in JavaScript?",
        answer: "try { ... } catch (error) { ... }",
        options: [
        "try { ... } catch { ... }",
        "try { ... } catch (error) { ... }",
        "try { ... } except (error) { ... }",
        "try { ... } finally { ... }"
        ]
        }
]