input = "L2, L5, L5, R5, L2, L4, R1, R1, L4, R2, R1, L1, L4, R1, L4, L4, R5, R3, R1, L1, R1, L5, L1, R5, L4, R2, L5, L3, L3, R3, L3, R4, R4, L2, L5, R1, R2, L2, L1, R3, R4, L193, R3, L5, R45, L1, R4, R79, L5, L5, R5, R1, L4, R3, R3, L4, R185, L5, L3, L1, R5, L2, R1, R3, R2, L3, L4, L2, R2, L3, L2, L2, L3, L5, R3, R4, L5, R1, R2, L2, R4, R3, L4, L3, L1, R3, R2, R1, R1, L3, R4, L5, R2, R1, R3, L3, L2, L2, R2, R1, R2, R3, L3, L3, R4, L4, R4, R4, R4, L3, L1, L2, R5, R2, R2, R2, L4, L3, L4, R4, L5, L4, R2, L4, L4, R4, R1, R5, L2, L4, L5, L3, L2, L4, L4, R3, L3, L4, R1, L2, R3, L2, R1, R2, R5, L4, L2, L1, L3, R2, R3, L2, L1, L5, L2, L1, R4"
input = input.split(", ")
print(input)

degrees = 0
blocksRight = 0
blocksUp = 0

for direction in input:
    if direction[0] == "L":
        degrees -= 90
    else:
        degrees += 90

    steps = [*direction]
    steps.pop(0)
    steps = int("".join(steps))

    while True:
        if degrees >= 360:
            degrees -= 360
        elif degrees <= -360:
            degrees += 360
        else:
            break

    if degrees == 0:
        blocksUp += steps
    elif degrees == 90 or degrees == -270:
        blocksRight += steps
    elif degrees == 180 or degrees == -180:
        blocksUp -= steps
    elif degrees == 270 or degrees == -90:
        blocksRight -= steps

if blocksRight < 0:
    blocksRight *= -1

if blocksUp < 0:
    blocksUp *= -1

print(blocksRight + blocksUp)
