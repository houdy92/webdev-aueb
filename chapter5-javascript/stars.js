function starsH10() {
    for (let i = 1; i <= 10; i++) {
        document.write('*')
    }
}

function starsV10() {
    for (let i = 1; i <= 10; i++) {
        document.write('*')
        document.write('<br>')
    }
}

function starsHV10() {
    for (let i = 1; i <= 10; i++) {
        for (let i = 1; i <= 10; i++) { //again i because with let it is local
            document.write('*')
        }
        document.write('<br>')
    }
}

function starsH10Ascending() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= i; j++) {
            document.write('*')
        }
        document.write('<br>')
    }
}

function starsH10Descending() {
    for (let i = 1; i <= 10; i++) {
        for (let j = i; j <= 10; j++) {
            document.write('*')
        }
        document.write('<br>')
    }
}