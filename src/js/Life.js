/**
 * Life.js
 */

'use strict'

import shuffle from '../js/foundation'
// 个体
export default class Life {
    // 基因
    constructor(gene = 100) {
        this.gene = Array.isArray(gene) ? gene.slice(0) : this.rndGene(gene)
        this.score = 0
    }

    rndGene(n) {
        return shuffle((new Array(n)).fill(0).map((_, idx) => idx))
    }

    setScore(v) {
        this.score = v
    }

    toString() {
        return this.gene.join('-')
    }
}
