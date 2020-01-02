class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices
    this.AdjacentList = new Map()
  }

  // functions to be implemented
  // addVertex(v)
  // addEdge(v, w)
  // printGraph()

  addVertex(v) {
    this.AdjacentList.set(v, [])
    // console.log(this.AdjacentList)
  }

  addEdge(v, w) {
    /*
    v = src
    w = dest
    */
    // Get the list for vertex v and put the vertex W denoting edge between v and w
    this.AdjacentList.get(v).push(w)
    // console.log(this.AdjacentList)
  }

  printGraph() {
    const getKeys = this.AdjacentList.keys()
    // console.log(getKeys)
    for (const i of getKeys) {
      let get_values = this.AdjacentList.get(i)
      // console.log(get_values)
      let conc = ''
      for (const j of get_values) {
        conc += j + ' '
        console.log('Conact', `${i} => ${conc}`)
      }
    }
  }
}

const graph = new Graph(6)
const vertices = ['A', 'B', 'C', 'D', 'E', 'F']

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i])
}

// adding edges
graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('A', 'E')
graph.addEdge('B', 'C')
graph.addEdge('D', 'E')
graph.addEdge('E', 'F')
graph.addEdge('E', 'C')
graph.addEdge('C', 'F')

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C

graph.printGraph()
