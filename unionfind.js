function connected(p, q) {
    return find(p) == find(q);
}

function find(id) {
    while (id != sites[id]) {
        sites[id] = sites[sites[id]]
        id = sites[id];
    }

    return id;
}

function union(p, q) {
    const pRoot = find(p);
    const qRoot = find(q);

    if (pRoot == qRoot) return;

    if (weights[pRoot] < weights[qRoot]) {
        sites[pRoot] = qRoot;
        weights[qRoot] += weights[pRoot];

        return qRoot;
    } else {
        sites[qRoot] = pRoot;
        weights[pRoot] += weights[qRoot];

        return pRoot;
    }
}