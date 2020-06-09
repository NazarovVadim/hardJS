function stringProcessing(str){
    if (typeof str != 'string'){
        return 'Необходимо передать строку!';
    }

    str = str.trim();
    if (str.length > 30){
        str = str.substr(0, 30) + '...';
    }

    return str;
}

console.log(stringProcessing('            Здась будет примерно тридцать символов просто чтобы проверить мою функцию! '));
