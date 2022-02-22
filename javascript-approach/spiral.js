//
// Spiral Behaviors
//

function clear_matrix(spiral) {
    var temp_matrix = [];
    for (let i = 0; i < spiral.size; i++) {
        temp_row = [];
        for (let j = 0; j < (spiral.size - 1) * spiral.padding + 1; j++) {
            temp_row.push(spiral.noise_char);
        }
        temp_matrix.push(temp_row);
    }
    spiral.matrix = temp_matrix;
}

function populate_column(spiral, index, start, stop, step) {
    for (let i = start; i < stop; i += step) {
        spiral.matrix[i][index] = spiral.signal_char;
    }
}

function populate_row(spiral, index, start, stop, step) {
    for (let i = start; i < stop; i += step) {
        spiral.matrix[index][i] = spiral.signal_char;
    }
}

function fill_matrix(spiral) {
    for (let i = 0; i < spiral.size; i++) {
        start_index = spiral.padding * i;
        end_index = spiral.padding * (spiral.size - i);
        if (!(i % 2)) {
            populate_row(spiral, i, start_index, end_index, spiral.padding)
            populate_column(spiral, end_index - spiral.padding, i, spiral.size - i - 1, 1)
        } else {
            populate_row(spiral, spiral.size - i - 1, start_index + spiral.padding, end_index, spiral.padding)
            populate_column(spiral, start_index + spiral.padding, i + 1, spiral.size - i, 1)
        }
    }
}

function spiral_string(spiral) {
    s = "";
    for (let i = 0; i < spiral.size; i++) {
        s += "["
        for (let j = 0; j < spiral.padding * (spiral.size - 1) + 1; j++) {
            s += spiral.matrix[i][j]
        }
        s += "]\n"
    }
    return s;
}

function run_spiral(spiral) {
    clear_matrix(spiral);
    fill_matrix(spiral);
    return spiral_string(spiral)
}

//
// Program Logic
// 

var spiral = {
    padding: 2,
    size: 5,
    noise_char: " ",
    signal_char: "*",
    matrix: [],
}

const readline = require("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter the size of the spiral matrix to print: ", function (answer) {
    spiral.size = answer;
    console.log(run_spiral(spiral))
    r1.close();
})
