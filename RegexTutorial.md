# Regular Expressions Tutorial
This tutorial will showcase an example of what Regular Expressions can do. The expression chosen determines if a textstring is an email address.

## Summary
This Regular Expression (A.K.A. Regex) examines an email address written by the user. The Regex is designed to search for a word, followed by @,then another word, followed by a period, then finally one last word. As this specific Regex doesn't use EVERY possible component of a Regex, we will only discuss the components it contains.

the Regex is as follows /^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})$/

EX: Test@Gmail.Org would return true whereas TestGmail. would return false because it lacks an @ and a third word

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping and Capturing](#grouping-and-capturing)
- [Character Classes](#character-classes)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)

# Anchors
    Anchors essentially look for the beginning and/or end of a string. The ^ anchor looks for the beginning of a string (EX: ^Hello could match Hello world) while the $ anchor looks for the end of a string (EX: now$ could match Buy gold now). When both anchors are used, they look for an exact string that matches the criteria of the Regex.

    In the case of our Regex /^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})$/, the anchors will look for any exact email that match the format WordsOrNumbers@Word.Word (EX: Test123@Tmail.tes)

# Quantifiers
    Quantifiers are elements that determine the specific amount of a regex component. within the regex /^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})$/, the + symbols mean one or more. In this case [A-Za-z0-9] looks for any letter (Both upper and lowercase) or number, so [A-Za-z0-9]+ will look for one or more letter(s)/number(s) 
    (EX: A, A2, Abc25, 258, 1AaBbCc3 fit the criteria as they are one or more of a letter/number)

    Numbers in curly brackets set a specific range of elements. A single number {2} will look for that specific number (EX: abc{2} will match abcc as it specifies exactly 2 c). A number and empty space will look for at minimum that number and limitless maximum (EX: abc{2,} will match abc, abcc, abccc, etc.). two numbers set the maximum and minimum of matches (EX: abc{2,5} the minimum is abcc while the maximum is abccccc)

    In this regex, the ([A-Za-z\.]{2,6}) at the end means that it is looking for a word (with or without a period) that has at min 2 letters and at max 6 letters

# Grouping and Capturing
    parentheses are used to group specific components together and can be used in tandem with quantifiers. Within the regex we have ([A-Za-z0-9_\.-]+) which means any letter, number, underscore and/or period (A-Z refers to all capital letters, a-z refers to all lowercase letters, _ refers to underscore, and as a period refers to any character \. is used to signify a period) while the + means one or more. Essentially, if it's at minimum one letter, number, underscore, and/or period then the Regex will look for it. Anything outside these parameters (like a & or @) will not be searched.
    As another example, if we have abc, we could group bc to create a(bc) then we can add quantifiers to bc
    (EX: abc+ can match abc, abcc, abccc, etc. while a(bc)+ will match abc, abcbc, abcbcbc, etc. as we specified bc within the parentheses)

# Character Classes
    Character Classes are used to capture all of a specific element such as words, numbers, or empty space. Within our regex, we have [\dA-Za-z\.-] with the \d refering to all numbers and will match any numbers (EX: \d will match 3, 25, 56, 104, 245, 1009, etc.). 
    Quantifiers can also be applied to character classes to add limits. As an example, \d{2} will only match numbers with two digits (EX: 23, 76, 59, 40) but nothing else (EX: 3, 201, 8)
# Bracket Expressions
     Bracket Expressions work similarly to Parentheses but are more lax. Rather than finding specific elements, Bracket Expressions will just look for at minimum of element contained with. As an example (abc) will look for EXACTLY abc while [abc] will look for a, b, and/or c.
     Within our regex, as previously stated, [A-Za-z0-9] will look for any number or letter. A-Z refers to all uppercase letters, a-z refers to all lowercase letters, and 0-9 refers to all digits. In this context, the regex will search for either an uppercase letter, a lowercase letter, and/or a number. (EX: [A-Za-z0-9] will match A, A1, a, a1, Aa1, 1, etc.)
     We can reduce the range of letters or numbersif needed. A-Z finds ALL uppercase letters but A-J would only find all uppercase letters up until J while 0-5 will only look for 0,1,2,3,4,5 and nothing else.

# Author
    I am the author of this tutorial and I hope you found this tutorial informative