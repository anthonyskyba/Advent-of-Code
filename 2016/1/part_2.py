input = "R8, R4, R4, R8"
input = input.split(", ")
print(input)

counter = 0
vistedLocations = []
degrees = 0
blocksRight = 0
blocksUp = 0

for direction in input:
    counter += 1

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

    def countSteps(sign):
        
    
    breakLoop = False

    print(blocksRight, blocksUp, "blocksPos")
    # if counter == 4:

    for location in vistedLocations:
        if location[0] == blocksRight and location[1] == blocksUp:
            breakLoop = True
            break

    vistedLocations.append([blocksRight, blocksUp])

    if breakLoop:
        break

    if counter == 4:
        break

if blocksRight < 0:
    blocksRight *= -1

if blocksUp < 0:
    blocksUp *= -1

print(blocksRight + blocksUp)

# answer < 185
