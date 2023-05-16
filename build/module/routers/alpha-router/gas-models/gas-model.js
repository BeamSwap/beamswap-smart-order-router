import { CUSD_CELO, CUSD_CELO_ALFAJORES, DAI_ARBITRUM, DAI_ARBITRUM_RINKEBY, DAI_BSC, DAI_GÖRLI, DAI_KOVAN, DAI_MAINNET, DAI_OPTIMISM, DAI_OPTIMISM_GOERLI, DAI_OPTIMISTIC_KOVAN, DAI_POLYGON_MUMBAI, DAI_RINKEBY_1, DAI_RINKEBY_2, DAI_ROPSTEN, USDC_ARBITRUM, USDC_ARBITRUM_GOERLI, USDC_BSC, USDC_ETHEREUM_GNOSIS, USDC_GÖRLI, USDC_KOVAN, USDC_MAINNET, USDC_MOONBASE_ALPHA, USDC_MOONBEAM, USDC_OPTIMISM, USDC_OPTIMISM_GOERLI, USDC_OPTIMISTIC_KOVAN, USDC_POLYGON, USDC_ROPSTEN, USDT_ARBITRUM, USDT_ARBITRUM_RINKEBY, USDT_BSC, USDT_GÖRLI, USDT_KOVAN, USDT_MAINNET, USDT_OPTIMISM, USDT_OPTIMISM_GOERLI, USDT_OPTIMISTIC_KOVAN, USDT_ROPSTEN, WBTC_GÖRLI, } from '../../../providers/token-provider';
import { ChainId } from '../../../util/chains';
export const usdGasTokensByChain = {
    [ChainId.MAINNET]: [DAI_MAINNET, USDC_MAINNET, USDT_MAINNET],
    [ChainId.RINKEBY]: [DAI_RINKEBY_1, DAI_RINKEBY_2],
    [ChainId.ARBITRUM_ONE]: [DAI_ARBITRUM, USDC_ARBITRUM, USDT_ARBITRUM],
    [ChainId.OPTIMISM]: [DAI_OPTIMISM, USDC_OPTIMISM, USDT_OPTIMISM],
    [ChainId.OPTIMISM_GOERLI]: [
        DAI_OPTIMISM_GOERLI,
        USDC_OPTIMISM_GOERLI,
        USDT_OPTIMISM_GOERLI,
    ],
    [ChainId.OPTIMISTIC_KOVAN]: [
        DAI_OPTIMISTIC_KOVAN,
        USDC_OPTIMISTIC_KOVAN,
        USDT_OPTIMISTIC_KOVAN,
    ],
    [ChainId.ARBITRUM_RINKEBY]: [DAI_ARBITRUM_RINKEBY, USDT_ARBITRUM_RINKEBY],
    [ChainId.ARBITRUM_GOERLI]: [USDC_ARBITRUM_GOERLI],
    [ChainId.KOVAN]: [DAI_KOVAN, USDC_KOVAN, USDT_KOVAN],
    [ChainId.GÖRLI]: [DAI_GÖRLI, USDC_GÖRLI, USDT_GÖRLI, WBTC_GÖRLI],
    [ChainId.ROPSTEN]: [DAI_ROPSTEN, USDC_ROPSTEN, USDT_ROPSTEN],
    [ChainId.POLYGON]: [USDC_POLYGON],
    [ChainId.POLYGON_MUMBAI]: [DAI_POLYGON_MUMBAI],
    [ChainId.CELO]: [CUSD_CELO],
    [ChainId.CELO_ALFAJORES]: [CUSD_CELO_ALFAJORES],
    [ChainId.GNOSIS]: [USDC_ETHEREUM_GNOSIS],
    [ChainId.MOONBEAM]: [USDC_MOONBEAM],
    [ChainId.MOONBASE_ALPHA]: [USDC_MOONBASE_ALPHA],
    [ChainId.BSC]: [USDT_BSC, USDC_BSC, DAI_BSC],
};
/**
 * Factory for building gas models that can be used with any route to generate
 * gas estimates.
 *
 * Factory model is used so that any supporting data can be fetched once and
 * returned as part of the model.
 *
 * @export
 * @abstract
 * @class IV2GasModelFactory
 */
export class IV2GasModelFactory {
}
/**
 * Factory for building gas models that can be used with any route to generate
 * gas estimates.
 *
 * Factory model is used so that any supporting data can be fetched once and
 * returned as part of the model.
 *
 * @export
 * @abstract
 * @class IOnChainGasModelFactory
 */
export class IOnChainGasModelFactory {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FzLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcnMvYWxwaGEtcm91dGVyL2dhcy1tb2RlbHMvZ2FzLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQUUsbUJBQW1CLEVBQ2pDLGFBQWEsRUFDYixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixZQUFZLEVBQ1osWUFBWSxFQUNaLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUNaLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxtQ0FBbUMsQ0FBQztBQVMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFRL0MsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQXVDO0lBQ3JFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDNUQsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO0lBQ2pELENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7SUFDcEUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztJQUNoRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtRQUN6QixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtLQUNyQjtJQUNELENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7UUFDMUIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixxQkFBcUI7S0FDdEI7SUFDRCxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLENBQUM7SUFDekUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztJQUNqRCxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO0lBQ3BELENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO0lBQ2hFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDNUQsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztJQUM5QyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUMzQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQy9DLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDeEMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO0NBQzdDLENBQUM7QUFvREY7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sT0FBZ0Isa0JBQWtCO0NBT3ZDO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sT0FBZ0IsdUJBQXVCO0NBWTVDIn0=