# Node.JS Approach

This spiral program runs with Node.JS

Read the instructions below to get the program running

## Running the mini-challenge program

To start the program, launch the program file from the approach's directory as follows:

```
$ cd python-approach
$ node spiral.js
```

The program will then ask you for a size. You can enter any integer here. For example:

```
$ node spiral.js

Enter the size of the spiral matrix to print: 10
[* * * * * * * * * *]
[                  *]
[    * * * * * *   *]
[    *         *   *]
[    *   * *   *   *]
[    *   *     *   *]
[    *   * * * *   *]
[    *             *]
[    * * * * * * * *]
[                   ]
```

Should you wish to change the style of the spiral, you can dive into spiral.js and alter the spiral object properties

You can edit these properties of the spiral:

- padding (default = 2). This attribute sets the number of spaces between the signal characters
- signal_char (default = "*"). The character used to draw the spiral
- noise_char (default = " "). The background of the spiral