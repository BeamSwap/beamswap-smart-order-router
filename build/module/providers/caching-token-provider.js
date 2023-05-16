import { Token } from '@uniswap/sdk-core';
import _ from 'lodash';
import { ChainId, log, WRAPPED_NATIVE_CURRENCY } from '../util';
import { BTC_BSC, BUSD_BSC, CELO, CELO_ALFAJORES, CEUR_CELO, CUSD_CELO, CUSD_CELO_ALFAJORES, DAI_ARBITRUM, DAI_ARBITRUM_RINKEBY, DAI_BSC, DAI_CELO, DAI_CELO_ALFAJORES, DAI_MAINNET, DAI_MOONBASE_ALPHA, DAI_MOONBEAM, DAI_OPTIMISM, DAI_OPTIMISM_GOERLI, DAI_OPTIMISTIC_KOVAN, DAI_POLYGON_MUMBAI, DAI_RINKEBY_1, DAI_RINKEBY_2, ETH_BSC, UNI_ARBITRUM_RINKEBY, USDC_ARBITRUM, USDC_ARBITRUM_GOERLI, USDC_ARBITRUM_RINKEBY, USDC_BSC, USDC_ETHEREUM_GNOSIS, USDC_MAINNET, USDC_MOONBASE_ALPHA, USDC_MOONBEAM, USDC_OPTIMISM, USDC_OPTIMISM_GOERLI, USDC_OPTIMISTIC_KOVAN, USDC_POLYGON, USDT_ARBITRUM, USDT_ARBITRUM_RINKEBY, USDT_BSC, USDT_MAINNET, USDT_MOONBASE_ALPHA, USDT_OPTIMISM, USDT_OPTIMISM_GOERLI, USDT_OPTIMISTIC_KOVAN, WBTC_ARBITRUM, WBTC_MAINNET, WBTC_MOONBASE_ALPHA, WBTC_MOONBEAM, WBTC_OPTIMISM, WBTC_OPTIMISM_GOERLI, WBTC_OPTIMISTIC_KOVAN, WMATIC_POLYGON, WMATIC_POLYGON_MUMBAI, } from './token-provider';
// These tokens will added to the Token cache on initialization.
export const CACHE_SEED_TOKENS = {
    [ChainId.MAINNET]: {
        WETH: WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
        USDC: USDC_MAINNET,
        USDT: USDT_MAINNET,
        WBTC: WBTC_MAINNET,
        DAI: DAI_MAINNET,
        // This token stores its symbol as bytes32, therefore can not be fetched on-chain using
        // our token providers.
        // This workaround adds it to the cache, so we won't try to fetch it on-chain.
        RING: new Token(ChainId.MAINNET, '0x9469D013805bFfB7D3DEBe5E7839237e535ec483', 18, 'RING', 'RING'),
    },
    [ChainId.RINKEBY]: {
        WETH: WRAPPED_NATIVE_CURRENCY[ChainId.RINKEBY],
        DAI_1: DAI_RINKEBY_1,
        DAI_2: DAI_RINKEBY_2,
    },
    [ChainId.OPTIMISM]: {
        USDC: USDC_OPTIMISM,
        USDT: USDT_OPTIMISM,
        WBTC: WBTC_OPTIMISM,
        DAI: DAI_OPTIMISM,
    },
    [ChainId.OPTIMISM_GOERLI]: {
        USDC: USDC_OPTIMISM_GOERLI,
        USDT: USDT_OPTIMISM_GOERLI,
        WBTC: WBTC_OPTIMISM_GOERLI,
        DAI: DAI_OPTIMISM_GOERLI,
    },
    [ChainId.OPTIMISTIC_KOVAN]: {
        USDC: USDC_OPTIMISTIC_KOVAN,
        USDT: USDT_OPTIMISTIC_KOVAN,
        WBTC: WBTC_OPTIMISTIC_KOVAN,
        DAI: DAI_OPTIMISTIC_KOVAN,
    },
    [ChainId.ARBITRUM_ONE]: {
        USDC: USDC_ARBITRUM,
        USDT: USDT_ARBITRUM,
        WBTC: WBTC_ARBITRUM,
        DAI: DAI_ARBITRUM,
    },
    [ChainId.ARBITRUM_RINKEBY]: {
        USDT: USDT_ARBITRUM_RINKEBY,
        UNI: UNI_ARBITRUM_RINKEBY,
        DAI: DAI_ARBITRUM_RINKEBY,
        USDC: USDC_ARBITRUM_RINKEBY,
    },
    [ChainId.ARBITRUM_GOERLI]: {
        USDC: USDC_ARBITRUM_GOERLI,
    },
    [ChainId.POLYGON]: {
        WMATIC: WMATIC_POLYGON,
        USDC: USDC_POLYGON,
    },
    [ChainId.POLYGON_MUMBAI]: {
        WMATIC: WMATIC_POLYGON_MUMBAI,
        DAI: DAI_POLYGON_MUMBAI,
    },
    [ChainId.CELO]: {
        CELO: CELO,
        CUSD: CUSD_CELO,
        CEUR: CEUR_CELO,
        DAI: DAI_CELO,
    },
    [ChainId.CELO_ALFAJORES]: {
        CELO: CELO_ALFAJORES,
        CUSD: CUSD_CELO_ALFAJORES,
        CEUR: CUSD_CELO_ALFAJORES,
        DAI: DAI_CELO_ALFAJORES,
    },
    [ChainId.GNOSIS]: {
        WXDAI: WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS],
        USDC_ETHEREUM_GNOSIS: USDC_ETHEREUM_GNOSIS,
    },
    [ChainId.MOONBEAM]: {
        USDC: USDC_MOONBEAM,
        DAI: DAI_MOONBEAM,
        WBTC: WBTC_MOONBEAM,
        WGLMR: WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM],
    },
    [ChainId.MOONBASE_ALPHA]: {
        USDC: USDC_MOONBASE_ALPHA,
        USDT: USDT_MOONBASE_ALPHA,
        DAI: DAI_MOONBASE_ALPHA,
        WBTC: WBTC_MOONBASE_ALPHA,
        WGLMR: WRAPPED_NATIVE_CURRENCY[ChainId.MOONBASE_ALPHA],
    },
    [ChainId.BSC]: {
        USDC: USDC_BSC,
        USDT: USDT_BSC,
        BUSD: BUSD_BSC,
        ETH: ETH_BSC,
        DAI: DAI_BSC,
        BTC: BTC_BSC,
        WBNB: WRAPPED_NATIVE_CURRENCY[ChainId.BSC],
    },
    // Currently we do not have providers for Moonbeam mainnet or Gnosis testnet
};
/**
 * Provider for getting token metadata that falls back to a different provider
 * in the event of failure.
 *
 * @export
 * @class CachingTokenProviderWithFallback
 */
export class CachingTokenProviderWithFallback {
    constructor(chainId, 
    // Token metadata (e.g. symbol and decimals) don't change so can be cached indefinitely.
    // Constructing a new token object is slow as sdk-core does checksumming.
    tokenCache, primaryTokenProvider, fallbackTokenProvider) {
        this.chainId = chainId;
        this.tokenCache = tokenCache;
        this.primaryTokenProvider = primaryTokenProvider;
        this.fallbackTokenProvider = fallbackTokenProvider;
        this.CACHE_KEY = (chainId, address) => `token-${chainId}-${address}`;
    }
    async getTokens(_addresses) {
        const seedTokens = CACHE_SEED_TOKENS[this.chainId];
        if (seedTokens) {
            for (const token of Object.values(seedTokens)) {
                await this.tokenCache.set(this.CACHE_KEY(this.chainId, token.address.toLowerCase()), token);
            }
        }
        const addressToToken = {};
        const symbolToToken = {};
        const addresses = _(_addresses)
            .map((address) => address.toLowerCase())
            .uniq()
            .value();
        const addressesToFindInPrimary = [];
        const addressesToFindInSecondary = [];
        for (const address of addresses) {
            if (await this.tokenCache.has(this.CACHE_KEY(this.chainId, address))) {
                addressToToken[address.toLowerCase()] = (await this.tokenCache.get(this.CACHE_KEY(this.chainId, address)));
                symbolToToken[addressToToken[address].symbol] =
                    (await this.tokenCache.get(this.CACHE_KEY(this.chainId, address)));
            }
            else {
                addressesToFindInPrimary.push(address);
            }
        }
        log.info({ addressesToFindInPrimary }, `Found ${addresses.length - addressesToFindInPrimary.length} out of ${addresses.length} tokens in local cache. ${addressesToFindInPrimary.length > 0
            ? `Checking primary token provider for ${addressesToFindInPrimary.length} tokens`
            : ``}
      `);
        if (addressesToFindInPrimary.length > 0) {
            const primaryTokenAccessor = await this.primaryTokenProvider.getTokens(addressesToFindInPrimary);
            for (const address of addressesToFindInPrimary) {
                const token = primaryTokenAccessor.getTokenByAddress(address);
                if (token) {
                    addressToToken[address.toLowerCase()] = token;
                    symbolToToken[addressToToken[address].symbol] = token;
                    await this.tokenCache.set(this.CACHE_KEY(this.chainId, address.toLowerCase()), addressToToken[address]);
                }
                else {
                    addressesToFindInSecondary.push(address);
                }
            }
            log.info({ addressesToFindInSecondary }, `Found ${addressesToFindInPrimary.length - addressesToFindInSecondary.length} tokens in primary. ${this.fallbackTokenProvider
                ? `Checking secondary token provider for ${addressesToFindInSecondary.length} tokens`
                : `No fallback token provider specified. About to return.`}`);
        }
        if (this.fallbackTokenProvider && addressesToFindInSecondary.length > 0) {
            const secondaryTokenAccessor = await this.fallbackTokenProvider.getTokens(addressesToFindInSecondary);
            for (const address of addressesToFindInSecondary) {
                const token = secondaryTokenAccessor.getTokenByAddress(address);
                if (token) {
                    addressToToken[address.toLowerCase()] = token;
                    symbolToToken[addressToToken[address].symbol] = token;
                    await this.tokenCache.set(this.CACHE_KEY(this.chainId, address.toLowerCase()), addressToToken[address]);
                }
            }
        }
        return {
            getTokenByAddress: (address) => {
                return addressToToken[address.toLowerCase()];
            },
            getTokenBySymbol: (symbol) => {
                return symbolToToken[symbol.toLowerCase()];
            },
            getAllTokens: () => {
                return Object.values(addressToToken);
            },
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGluZy10b2tlbi1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm92aWRlcnMvY2FjaGluZy10b2tlbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUMsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR2hFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLElBQUksRUFDSixjQUFjLEVBQ2QsU0FBUyxFQUNULFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixPQUFPLEVBQ1AsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixXQUFXLEVBQUUsa0JBQWtCLEVBQy9CLFlBQVksRUFDWixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixPQUFPLEVBR1Asb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsWUFBWSxFQUFFLG1CQUFtQixFQUNqQyxhQUFhLEVBQ2IsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsWUFBWSxFQUNaLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsUUFBUSxFQUNSLFlBQVksRUFBRSxtQkFBbUIsRUFDakMsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsYUFBYSxFQUNiLFlBQVksRUFBRSxtQkFBbUIsRUFDakMsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLGNBQWMsRUFDZCxxQkFBcUIsR0FDdEIsTUFBTSxrQkFBa0Is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