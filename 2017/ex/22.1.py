def read():
    with open('22.txt') as f:
        in_text = f.read().splitlines()

    offset = len(in_text) // 2
    infected = set()
    for r, line in enumerate(in_text):
        for c, ch in enumerate(line):
            if ch == '#':
                infected.add((r - offset, c - offset))
    return infected


infected = read()
# infected = {(-1, 1), (0, -1), }
dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]
d = 0
virus_at = (0, 0)


def burst():
    global infected, d, virus_at
    infection_caused = False
    if virus_at in infected:
        d = (d - 1) % 4
        infected.remove(virus_at)
    else:
        d = (d + 1) % 4
        infected.add(virus_at)
        infection_caused = True
    virus_at = (virus_at[0] + dirs[d][0], virus_at[1] + dirs[d][1])
    return infection_caused


num_infections = 0
for _ in range(10000):
    if burst():
        num_infections += 1
print(num_infections)

CLEAN = 0
INFECTED = 1
WEAK = 2
FLAGGED = 3
# Part 2
state = {k: INFECTED for k in read()}
# state = {(0, -1): INFECTED, (-1, 1): INFECTED}
virus_at = (0, 0)


def burst2():
    global state, d, virus_at
    infection_caused = False
    current_state = state.get(virus_at, 0)
    if current_state == CLEAN:
        d = (d + 1) % 4
        state[virus_at] = WEAK
    elif current_state == WEAK:
        state[virus_at] = INFECTED
        infection_caused = True
    elif current_state == INFECTED:
        d = (d - 1) % 4
        state[virus_at] = FLAGGED
    else:  # FLAGGED
        d = (d + 2) % 4
        del state[virus_at]
    virus_at = (virus_at[0] + dirs[d][0], virus_at[1] + dirs[d][1])
    return infection_caused


num_infections = 0
for _ in range(10000000):
    if burst2():
        num_infections += 1
print(num_infections)