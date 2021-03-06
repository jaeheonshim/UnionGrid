 <h1>Union Find with p5.js</h1>
<p>
    This is a demonstration of the <a href="https://en.wikipedia.org/wiki/Disjoint-set_data_structure">Union-Find</a> algorithm built using p5.js. On the grid above, each square represents a site, and clicking on sites will "open" them. Sites will "union" with any site above, below, or on either side of itself. Sites part of the same connected component will appear with the same color.
</p>
<h2>
    What is Union-Find?
</h2>
<p>
    Formally, <b>Union-Find</b> is an algorithm that allows us to partition objects into equivalence classes, enabling us to determine whether any single site is part of any single equivalence class. (The term <i>site</i> is used to describe the objects making up equivalence relations). 
</p>
<p>
    Take this application for example. Clicking on squares creates sites, which are connected to all adjacent sites. Using the union find algorithm, we can see whether a site is part of a larger group, and color all sites part of a group the same color. Try making two separate groups of sites, and then connect them together. Notice how all of the sites become connected, and change to the same color.
</p>
<p>
    This allows us to answer many interesting questions, such as <i>"Is this maze solvable"</i>, <i>"Is node A connected to node B (perhaps in a computer network)"</i>, <i>"How can I connect all nodes in a tree in the minimum distance (edge weight) possible? <a href="https://en.wikipedia.org/wiki/Kruskal%27s_algorithm">(Kruskal's algorithm)</a>"</i>, and <i>"Does this medium <a href="https://en.wikipedia.org/wiki/Percolation">percolate</a>?"</i> The best part of the Union-Find algorithm is that operations take nearly <i>constant-time</i> (It is proven that there exists no algorithm that can guarantee completely constant time performance). For the Union-Find algorithm with weighted trees and path compression, the amortized time complexity of operations can be described with the <a href="https://en.wikipedia.org/wiki/Ackermann_function#Inverse">Inverse Ackermann function</a>. In shortest-path algorithms such as A* where the set of nodes is considerably large, it may be useful to use union-find to see whether a path exists at all before running a more expensive path finding operation.
</p>
<p>
    <i>Note: A notable shortcoming of this algorithm is there is no easy way to remove sites from equivalence classes. Algorithms with this ability do exist, but they are not as efficient as Union-Find.</i>
</p>
<p>Jaeheon Shim</p>
