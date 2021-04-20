/**
 * TSP.js
 */

'use strict'

import {
    shuffle,
    wait
} from './foundation'
import GA from './GA'

export default class TSP {
    constructor(onstart, onstop) {
        // 种群
        this.nodes = []

        this.orders = []
        this.r = 4
        this.mutation_rate = 0.05
        this.is_running = false

        this._onstart = onstart
        this._onstop = onstop
    }

    // 传入城市信息
    prepareNodesAndGA(nodes = [], life_count = 100) {
        this.is_running = false
        this.n = nodes.length;
        /** 个头数量，为节点数量的两倍 */
        this.life_count = life_count;
        /** 个体详细信息 [{x:123,y:123},{x:223,y:223},...]*/
        this.nodes = []
        /** 基因序列 [1,2,3,4...]*/
        this.orders = []

        nodes.forEach((item, index) => {
            this.nodes.push(item);
            this.orders.push(index)
        })

        shuffle(this.orders)
        /** 基因序列首尾相连 */
        this.orders.push(this.orders[0])

        /** 遗传算法类，封装种群数量，突变几率，基因长度，计算适应度，交换，变异方法 */
        this.ga = new GA({
            life_count: this.life_count,
            mutation_rate: this.mutation_rate,
            gene_length: this.n,
            rate: this.rate.bind(this),
            xFunc: this.xFunc.bind(this),
            mFunc: this.mFunc.bind(this)
        })
    }

    rate(gene) {
        return 1 / this.getDistance(gene)
    }

    /**父代交换基因，生成新基因 */
    xFunc(lf1, lf2) {
        let p1 = Math.floor(Math.random() * (this.n - 2)) + 1
        let p2 = Math.floor(Math.random() * (this.n - p1)) + p1
        let piece = lf2.gene.slice(p1, p2)
        let new_gene = lf1.gene.slice(0, p1)
        piece.concat(lf2.gene).map(i => {
            if (!new_gene.includes(i)) {
                new_gene.push(i)
            }
        })

        return new_gene
    }

    /**个体基因突变 */
    mFunc(gene) {
        let p1 = 0
        let p2 = 0
        let n = gene.length
        while (p1 === p2) {
            p1 = Math.floor(Math.random() * n)
            p2 = Math.floor(Math.random() * n)
        }
        if (p1 > p2) {
            [p1, p2] = [p2, p1]
        }

        let funcs = [
            (g, p1, p2) => {
                // 交换
                let t = g[p1]
                g[p1] = g[p2]
                g[p2] = t
            }, (g, p1, p2) => {
                // 倒序
                let t = g.slice(p1, p2).reverse()
                g.splice(p1, p2 - p1, ...t)
            }, (g, p1, p2) => {
                // 移动
                let t = g.splice(p1, p2 - p1)
                g.splice(Math.floor(Math.random() * g.length), 0, ...t)
            }
        ]

        let r = Math.floor(Math.random() * funcs.length)
        funcs[r](gene, p1, p2)

        return gene
    }

    /**
     * 得到当前顺序下连线的总长度
     */
    getDistance(order = null) {
        let d = 0
        let {
            nodes
        } = this
        order.concat(order[0]).reduce((a, b) => {
            d += Math.sqrt(Math.pow(nodes[a].x - nodes[b].x, 2) + Math.pow(nodes[a].y - nodes[b].y, 2))
            //d += Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y)
            return b
        })
        return d
    }

    async run(refreshStates) {
        let last_best_score = -1
        let last_best_gen = 0

        while (this.is_running) {
            this.orders = this.ga.next()

            let {
                best,
                generation
            } = this.ga

            if (last_best_score !== best.score) {
                last_best_score = best.score
                last_best_gen = generation
            } else if (generation - last_best_gen >= 5000) {
                // 超过 n 代没有更好的结果，自动结束
                this.stop()
                break
            }

            if (this.ga.generation % 10 === 0) {
                console.log(this.orders)
                console.log(best)
            }
            refreshStates({
                orders: this.orders,
                distance: best.score
            })
            await wait(1)
        }
    }

    start(refreshStatu) {
        this.is_running = true
        this.run(refreshStatu)
        if (typeof this._onstart === 'function') {
            this._onstart()
        }
    }

    stop() {
        this.is_running = false

        if (typeof this._onstop === 'function') {
            this._onstop()
        }
    }
}
