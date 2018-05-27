module.exports = main;

/**
 * 获取每公里的计程费
 * - 2~8公里 0.8 元
 * - 8公里以上加收 50%
 * @param {Number} mile 
 */
function getPerMileCost(mile) {
    let perCost = 0.8
    if (mile > 2 && mile < 8) {
        return perCost;
    } else if (mile >= 8) {
        return perCost * 1.5;
    } else {
        return 0;
    }
}

/**
 * 计算因里程所产生的花费
 * - 2公里以内起步价，超过两公里按照里程加收
 * @param {Number} mileage 里程数
 */
function countCostOfMilegae(mileage) {
    let cost = 0;
    let initCost = 6;
    let perMileCost = getPerMileCost(mileage)
    if (mileage < 0) {
        throw 'milegae is illegal'
    } else if (mileage <= 2) {
        cost = initCost;
    } else if (mileage > 2) {
        let mile = mileage - 2;
        cost = initCost + mile * perMileCost
    }
    return cost;
}

/**
 * 根据等待时间收费
 * @param {Number} time 
 */
function countCostOfWaitTime(time) {
    let cost = 0;
    let perTimeCost = 0.25;
    if (time < 0) {
        throw 'time is illegal'
    } else {
        cost = time * perTimeCost;
    }
    return cost;
}

/**
 * 计算总花费之和
 * - 对结果进行四舍五入
 * @param {Number} costOfM 里程
 * @param {Number} costOfT 时间
 */
function countCost(costOfM, costOfT) {
    let cost = costOfM + costOfT
    return Math.round(cost);
}

/**
 * 出租车计费程序
 * @param {Number} milegae 里程数
 * @param {Number} waitTime 等待时长
 */
function main(milegae, waitTime) {
    let costOfMileage = countCostOfMilegae(milegae);
    let costOfWaitTime = countCostOfWaitTime(waitTime);
    let cost = countCost(costOfMileage, costOfWaitTime)
    return cost
};