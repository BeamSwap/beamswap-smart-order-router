"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUniswapV3PoolEvents__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "amount0",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "amount1",
                type: "uint128",
            },
        ],
        name: "Collect",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "amount0",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "amount1",
                type: "uint128",
            },
        ],
        name: "CollectProtocol",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "paid0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "paid1",
                type: "uint256",
            },
        ],
        name: "Flash",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint16",
                name: "observationCardinalityNextOld",
                type: "uint16",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "observationCardinalityNextNew",
                type: "uint16",
            },
        ],
        name: "IncreaseObservationCardinalityNext",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "Initialize",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "feeProtocol0Old",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "feeProtocol1Old",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "feeProtocol0New",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "feeProtocol1New",
                type: "uint8",
            },
        ],
        name: "SetFeeProtocol",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "amount0",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "amount1",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "Swap",
        type: "event",
    },
];
class IUniswapV3PoolEvents__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IUniswapV3PoolEvents__factory = IUniswapV3PoolEvents__factory;
IUniswapV3PoolEvents__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVVuaXN3YXBWM1Bvb2xFdmVudHNfX2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdHlwZXMvdjMvZmFjdG9yaWVzL0lVbmlzd2FwVjNQb29sRXZlbnRzX19mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBK0M7QUFDL0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjs7O0FBRXBCLG1DQUFpRDtBQU9qRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsU0FBUyxFQUFFLEtBQUs7UUFDaEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsTUFBTTtRQUNa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