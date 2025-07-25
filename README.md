# combine-lists-nodejs
Node.js solution to merge two lists of elements based on overlapping positions. Merges values if more than half of an element overlaps with another.

# Combine Two Lists Based on Overlap

## ✅ Problem Statement
Combine two lists of elements with positions if **more than half of one element overlaps with another**.

### Example:
```
Input:
list1 = [{ positions: [1, 5], values: ['A'] }]
list2 = [{ positions: [4, 8], values: ['C'] }]

Output:
[{ positions: [1, 5], values: ['A', 'C'] }]
```

---

## ✅ How to Run
```bash
node combineLists.js
```

---

## ✅ Sample Output
```
[
  { positions: [1, 5], values: ['A', 'C'] },
  { positions: [6, 10], values: ['B'] },
  { positions: [11, 15], values: ['D'] }
]
```
