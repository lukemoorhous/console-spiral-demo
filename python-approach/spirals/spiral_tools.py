class spiral:
    def __init__(self, size, padding=2, noise_char=" ", signal_char="*"):
        self.padding = padding
        self.size = size
        self.noise_char = noise_char
        self.signal_char = signal_char
        self.matrix = [
            [noise_char for x in range((size-1)*padding+1)] for y in range(size)]
        self.fill_spiral()

    def populate_column(self, index, range):
        for i in range:
            self.matrix[i][index] = self.signal_char

    def populate_row(self, index, range):
        for i in range:
            self.matrix[index][i] = self.signal_char

    def fill_spiral(self):
        for i in range(self.size):
            start_index = self.padding * i
            end_index = self.padding * (self.size - i)
            if not i % 2:  # i is even, fill in top row or right column
                self.populate_row(i, range(
                    start_index, end_index, self.padding))
                self.populate_column(
                    end_index-self.padding, range(i, self.size-i-1))
            else:  # i is odd, fill in bottom row or left column
                self.populate_row(self.size-i-1,
                                  range(self.padding + start_index, end_index, self.padding))
                self.populate_column(self.padding + start_index,
                                     range(i+1, self.size-i))

    def __str__(self):
        s = ""
        for row in self.matrix:
            s += "["
            for cell in row:
                s += cell
            s += "]\n"
        return s
