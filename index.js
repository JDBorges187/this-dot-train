/*
You have been tasked to help the Kiwiland railroad provide information about its routes to its customers, in particular:
route distance, number of unique routes between two towns, and the shortest route between two towns. In Kiwiland,
all train routes are one-way, and round trip routes may or may not exist. For example, just because there is a route
from town A to B does not mean there is necessarily a route from B to A. In fact, if both routes happen to exist, each
route should be considered unique (and may even have different distances)!

Use a directed graph to represent the train routes. A node represents a town and an edge represents a route between
two towns. The edge weight represents route distance. No route appears more than once in the input, and for any
given route, the starting and ending town will never be the same town (e.g., there are no routes from A to A).
*/

const createGraph = (str) => {
    const arrInput = str.split(', ');

    const adjacencyList = arrInput.reduce((acc, edge) => {
        const [start, dest] = edge
        const distance = Number(edge.slice(2));
        if (start in acc) {
            acc[start] = { ...acc[start], [dest]: distance };
        } else {
            acc[start] = { [dest]: distance };
        }
        return acc;
    },{})

    console.log(adjacencyList)

    return adjacencyList;
}

const pathToDistance = (graph, str) => {
    let sum = 0;
    for(let i=0; i<str.length - 1; i++) {
        const [start, dest] = [str[i], str[i+1]];
        if( !(start in graph) || !(dest in graph[start])) {
            return "NO SUCH ROUTE"
        } else {
            sum += graph[start][dest];
        }
    }

    return sum;
}

const numberOfTrips 



// const explore(graph, start, end)

const testInput = `AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7`
const graph = createGraph(testInput);
const output1 = pathToDistance(graph, 'ABC');
const output2 = pathToDistance(graph, 'AD');
const output3 = pathToDistance(graph, 'ADC');
const output4 = pathToDistance(graph, 'AEBCD');
const output5 = pathToDistance(graph, 'AED');

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);


