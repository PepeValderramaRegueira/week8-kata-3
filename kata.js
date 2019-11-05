function dirReduc(arr){
  // console.log("MAPA INICIAL", arr)
  let map = []
  let x = 0
  let y = 0
  arr.forEach((position, idx) => {
    let directionName
    switch (position) {
      case "NORTH": y++; directionName="NORTH"; break
      case "SOUTH": y--; directionName="SOUTH"; break
      case "EAST" : x++; directionName="EAST"; break
      case "WEST" : x--; directionName="WEST"; break
    }
    map.push([x, y, directionName])
  })

  console.log("SIN FILTRAR", map)

  for (let i = 0; i < map.length; i++) {
    let positions = 1
    for (let j = i + 1; j < map.length; j++) {
      if (map[i][0] === map[j][0] && map[i][1] === map[j][1]) {
        map.splice(i, positions)
        break
      }
      positions++
    }
  }

  console.log("FINAL MAP", map)

  for (let i = 0; i < map.length; i++) {
    for (let j = i + 1; j < map.length; j++) {
      switch (map[i][2]) {
        case "NORTH":
          if (map[j][2] === "SOUTH") {
            console.log("BORRANDO", map.splice(j, 1))
            console.log("BORRANDO", map.splice(i, 1))
          }
          break
        case "SOUTH":
            if (map[j][2] === "NORTH") {
              console.log("BORRANDO", map.splice(j, 1))
              console.log("BORRANDO", map.splice(i, 1))
            }
          break
        case "EAST" :
          if (map[j][2] === "WEST") {
            console.log("BORRANDO", map.splice(j, 1))
            console.log("BORRANDO", map.splice(i, 1))
          }
          break
        case "WEST" :
          if (map[j][2] === "EAST") {
            console.log("BORRANDO", map.splice(j, i))
            console.log("BORRANDO", map.splice(i, 1))
          }
          break
      }
    }
  }

  console.log("MAPA FINAL", map)
  
  // return map
}

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])
