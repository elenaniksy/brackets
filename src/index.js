module.exports = function check(str, bracketsConfig) {
    const stack = [];

    function isOpen (openBracket, topStack) {
        for(let i = 0; i < bracketsConfig.length; i++) {
            if(openBracket === bracketsConfig[i][0]) {
                if(bracketsConfig[i][0] === bracketsConfig[i][1]) {
                    if(topStack === openBracket) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }

    function getClose(openBracket) {
        for(let i = 0; i < bracketsConfig.length; i++) {
            if(openBracket === bracketsConfig[i][0]){
                return bracketsConfig[i][1];
            }
        }
    }

    for(let i = 0; i < str.length; i++) {
        let bracket = str[i];
        if(isOpen(bracket, stack[stack.length-1])) {
            stack.push(bracket);
        } else {
            let openBracket = stack.pop();
            let closeBracket = getClose(openBracket);
            if(bracket !== closeBracket) {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }

}
