class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        let keys = this.AdjList.keys();

        for (let i of keys) {
            let values = this.AdjList.get(i);
            let concValues = "";

            for(let j of values) {
                concValues += j + " ";
            }
            console.log(i + "=>" + concValues);
        }
    }
}