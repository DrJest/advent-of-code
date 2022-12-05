import sys

lines = [l.split() for l in sys.stdin]
lines = [(l[1], l[7]) for l in lines]

steps = set([s[0] for s in lines] + [s[1] for s in lines])


def next_step(steps, l):
    return [s for s in steps if all(b != s for (_, b) in l)]


order = ''
while steps:
    cand = list(next_step(steps, lines))
    cand.sort()

    n = cand[0]
    order += n
    steps.remove(n)
    lines = [(a, b) for (a, b) in lines if a != n]

print(order)
