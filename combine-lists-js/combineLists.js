// Combine two lists if more than half overlaps
function combineLists(list1, list2) {
    let combined = [...list1];
    list2.forEach(item2 => {
        let merged = false;
        for (let item1 of combined) {
            let overlap = getOverlap(item1.positions, item2.positions);
            let length2 = item2.positions[1] - item2.positions[0];
            if (overlap >= length2 / 2) {
                item1.values = [...new Set([...item1.values, ...item2.values])];
                merged = true;
                break;
            }
        }
        if (!merged) combined.push(item2);
    });
    return combined.sort((a, b) => a.positions[0] - b.positions[0]);
}

function getOverlap(pos1, pos2) {
    let start = Math.max(pos1[0], pos2[0]);
    let end = Math.min(pos1[1], pos2[1]);
    return Math.max(0, end - start);
}

// Test
const list1 = [
    { positions: [1, 5], values: ['A'] },
    { positions: [6, 10], values: ['B'] }
];
const list2 = [
    { positions: [4, 8], values: ['C'] },
    { positions: [11, 15], values: ['D'] }
];

console.log(combineLists(list1, list2));
