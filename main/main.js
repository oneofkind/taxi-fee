module.exports = main;

/**
 * 计算因里程所产生的花费
 * - 2公里以内起步价
 * - 2~8 公里每公里收取服务费
 * - 8公里以上每公里加收50%服务费
 * @param {Number} mileage 里程数
 */
function countFeeOfMilegae(mileage) {
    let fee = 0;
    let initFee = 6;
    let perFee = 0.8;
    let superPerFee = perFee * 1.5;
    let initFeeMile = 2;
    let nomalFeeMile = 8
    switch (true) {
        case mileage < initFeeMile:
            fee = initFee;
            break;
        case mileage > initFeeMile && mileage < nomalFeeMile:
            fee = initFee + (mileage - initFeeMile) * perFee;
            break;
        case mileage >= nomalFeeMile:
            fee = initFee + (mileage - nomalFeeMile) * superPerFee + (nomalFeeMile - initFeeMile) * perFee;
            break;
        default:
            fee = 6;
            break;
    }

    return fee;
}

/**
 * 根据等待时间收费
 * @param {Number} time 
 */
function countFeeOfWaitTime(time) {
    let cost;
    let fee = 0.25;
    if (time == undefined) {
        return cost = 0;
    } else {
        cost = time * fee;
    }
    return cost;
}

/**
 * 计算总花费之和
 * - 对结果进行四舍五入
 * @param {Number} costOfM 里程
 * @param {Number} costOfT 时间
 */
function countFee(costOfM, costOfT) {
    let cost = costOfM + costOfT
    return Math.round(cost);
}

/**
 * 出租车计费程序
 * @param {Number} milegae 里程数
 * @param {Number} waitTime 等待时长
 */
function main(milegae, waitTime) {
    let feeOfMileage = countFeeOfMilegae(milegae);
    let feeOfWaitTime = countFeeOfWaitTime(waitTime);
    let fee = countFee(feeOfMileage, feeOfWaitTime)
    return fee
};