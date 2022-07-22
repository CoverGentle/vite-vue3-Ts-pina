interface Iworld {
  areaTree: IareaTree[]
  [propName: string]: any
}

interface IareaTree {
  children: []
  today: Itoday
  total: Itotal
  id: string
  name: string
  lastUpdateTime: string
  [propName: string]: any
}

interface Itoday {
  confirm: number
  dead: number
}

interface Itotal {
  confirm: number
  dead: number
}

class CovidData {
  world: Iworld = {
      areaTree: []
  }
}

export { CovidData }



