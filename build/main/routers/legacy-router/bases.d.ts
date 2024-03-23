import { Token } from '@uniswap/sdk-core';
import { ITokenProvider } from '../../providers/token-provider';
import { ChainId } from '../../util/chains';
type ChainTokenList = {
    readonly [chainId in ChainId]: Token[];
};
export declare const BASES_TO_CHECK_TRADES_AGAINST: (_tokenProvider: ITokenProvider) => ChainTokenList;
export declare const ADDITIONAL_BASES: (tokenProvider: ITokenProvider) => Promise<{
    1?: {
        [tokenAddress: string]: Token[];
    };
    3?: {
        [tokenAddress: string]: Token[];
    };
    4?: {
        [tokenAddress: string]: Token[];
    };
    5?: {
        [tokenAddress: string]: Token[];
    };
    42?: {
        [tokenAddress: string]: Token[];
    };
    10?: {
        [tokenAddress: string]: Token[];
    };
    420?: {
        [tokenAddress: string]: Token[];
    };
    69?: {
        [tokenAddress: string]: Token[];
    };
    42161?: {
        [tokenAddress: string]: Token[];
    };
    421611?: {
        [tokenAddress: string]: Token[];
    };
    421613?: {
        [tokenAddress: string]: Token[];
    };
    137?: {
        [tokenAddress: string]: Token[];
    };
    80001?: {
        [tokenAddress: string]: Token[];
    };
    42220?: {
        [tokenAddress: string]: Token[];
    };
    44787?: {
        [tokenAddress: string]: Token[];
    };
    100?: {
        [tokenAddress: string]: Token[];
    };
    1284?: {
        [tokenAddress: string]: Token[];
    };
    1287?: {
        [tokenAddress: string]: Token[];
    };
    56?: {
        [tokenAddress: string]: Token[];
    };
}>;
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export declare const CUSTOM_BASES: (tokenProvider: ITokenProvider) => Promise<{
    1?: {
        [tokenAddress: string]: Token[];
    };
    3?: {
        [tokenAddress: string]: Token[];
    };
    4?: {
        [tokenAddress: string]: Token[];
    };
    5?: {
        [tokenAddress: string]: Token[];
    };
    42?: {
        [tokenAddress: string]: Token[];
    };
    10?: {
        [tokenAddress: string]: Token[];
    };
    420?: {
        [tokenAddress: string]: Token[];
    };
    69?: {
        [tokenAddress: string]: Token[];
    };
    42161?: {
        [tokenAddress: string]: Token[];
    };
    421611?: {
        [tokenAddress: string]: Token[];
    };
    421613?: {
        [tokenAddress: string]: Token[];
    };
    137?: {
        [tokenAddress: string]: Token[];
    };
    80001?: {
        [tokenAddress: string]: Token[];
    };
    42220?: {
        [tokenAddress: string]: Token[];
    };
    44787?: {
        [tokenAddress: string]: Token[];
    };
    100?: {
        [tokenAddress: string]: Token[];
    };
    1284?: {
        [tokenAddress: string]: Token[];
    };
    1287?: {
        [tokenAddress: string]: Token[];
    };
    56?: {
        [tokenAddress: string]: Token[];
    };
}>;
export {};
