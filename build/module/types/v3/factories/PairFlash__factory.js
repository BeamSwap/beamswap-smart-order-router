/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ISwapRouter",
                name: "_swapRouter",
                type: "address",
            },
            {
                internalType: "address",
                name: "_factory",
                type: "address",
            },
            {
                internalType: "address",
                name: "_WETH9",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "WETH9",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "token0",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token1",
                        type: "address",
                    },
                    {
                        internalType: "uint24",
                        name: "fee1",
                        type: "uint24",
                    },
                    {
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256",
                    },
                    {
                        internalType: "uint24",
                        name: "fee2",
                        type: "uint24",
                    },
                    {
                        internalType: "uint24",
                        name: "fee3",
                        type: "uint24",
                    },
                ],
                internalType: "struct PairFlash.FlashParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "initFlash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "refundETH",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "swapRouter",
        outputs: [
            {
                internalType: "contract ISwapRouter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountMinimum",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "sweepToken",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fee0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee1",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "uniswapV3FlashCallback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountMinimum",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "unwrapWETH9",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60e06040523480156200001157600080fd5b5060405162001a9338038062001a9383398101604081905262000034916200005c565b6001600160601b0319606092831b811660805290821b811660a05291901b1660c052620000c8565b60008060006060848603121562000071578283fd5b83516200007e81620000af565b60208501519093506200009181620000af565b6040850151909250620000a481620000af565b809150509250925092565b6001600160a01b0381168114620000c557600080fd5b50565b60805160601c60a05160601c60c05160601c61195a6200013960003980610573528061074b528061077852806108c85280610976525080609c528061038b52806104b5528061054f52806110f0528061115052806111d1525080610267528061059752806106eb525061195a6000f3fe60806040526004361061007f5760003560e01c8063c31c9c071161004e578063c31c9c0714610195578063c45a0155146101aa578063df2ab5bb146101bf578063e9cbafb0146101d25761012a565b806312210e8a1461012f5780632384463b1461013757806349404b7c146101575780634aa4a4fc1461016a5761012a565b3661012a573373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461012857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f742057455448390000000000000000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b6101286101f2565b34801561014357600080fd5b5061012861015236600461161f565b610204565b6101286101653660046116d2565b610387565b34801561017657600080fd5b5061017f61054d565b60405161018c9190611781565b60405180910390f35b3480156101a157600080fd5b5061017f610571565b3480156101b657600080fd5b5061017f610595565b6101286101cd3660046114e8565b6105b9565b3480156101de57600080fd5b506101286101ed3660046116fd565b6106d6565b4715610202576102023347610a73565b565b60006040518060600160405280836000015173ffffffffffffffffffffffffffffffffffffffff168152602001836020015173ffffffffffffffffffffffffffffffffffffffff168152602001836040015162ffffff168152509050600061028c7f000000000000000000000000000000000000000000000000000000000000000083610bc1565b90508073ffffffffffffffffffffffffffffffffffffffff1663490e6cbc30856060015186608001516040518060c0016040528089606001518152602001896080015181526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018960a0015162ffffff1681526020018960c0015162ffffff1681525060405160200161032291906118bb565b6040516020818303038152906040526040518563ffffffff1660e01b815260040161035094939291906117a2565b600060405180830381600087803b15801561036a57600080fd5b505af115801561037e573d6000803e3d6000fd5b50505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561041057600080fd5b505afa158015610424573d6000803e3d6000fd5b505050506040513d602081101561043a57600080fd5b50519050828110156104ad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b8015610548577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561052657600080fd5b505af115801561053a573d6000803e3d6000fd5b505050506105488282610a73565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561062257600080fd5b505afa158015610636573d6000803e3d6000fd5b505050506040513d602081101561064c57600080fd5b50519050828110156106bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b80156106d0576106d0848383610cf7565b50505050565b60006106e482840184611523565b90506107147f00000000000000000000000000000000000000000000000000000000000000008260600151610ed3565b506060810151805160209091015182516000906107319089610f09565b90506000610743856020015189610f09565b9050610774837f00000000000000000000000000000000000000000000000000000000000000008760200151610f19565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf3896040518061010001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff168152602001896080015162ffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200142815260200189602001518152602001868152602001600073ffffffffffffffffffffffffffffffffffffffff168152506040518263ffffffff1660e01b815260040161086e919061183f565b602060405180830381600087803b15801561088857600080fd5b505af115801561089c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c091906116ba565b90506108f1857f00000000000000000000000000000000000000000000000000000000000000008860000151610f19565b604080516101008101825273ffffffffffffffffffffffffffffffffffffffff8781168252868116602083015260a08981015162ffffff168385015230606084015242608084015289519083015260c08201859052600060e0830181905292517f414bf3890000000000000000000000000000000000000000000000000000000081527f00000000000000000000000000000000000000000000000000000000000000009091169163414bf389916109ac919060040161183f565b602060405180830381600087803b1580156109c657600080fd5b505af11580156109da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fe91906116ba565b90508315610a1257610a12863033876110ee565b8215610a2457610a24853033866110ee565b83821115610a455760008483039050610a4387308a60400151846110ee565b505b82811115610a665760008382039050610a6486308a60400151846110ee565b505b5050505050505050505050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b60208310610aea57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610aad565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610b4c576040519150601f19603f3d011682016040523d82523d6000602084013e610b51565b606091505b505090508061054857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354450000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610610c0357600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b60208310610dcc57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610d8f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610e2e576040519150601f19603f3d011682016040523d82523d6000602084013e610e33565b606091505b5091509150818015610e61575080511580610e615750808060200190516020811015610e5e57600080fd5b50515b610ecc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b6000610edf8383610bc1565b90503373ffffffffffffffffffffffffffffffffffffffff821614610f0357600080fd5b92915050565b80820182811015610f0357600080fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b60208310610fee57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610fb1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611050576040519150601f19603f3d011682016040523d82523d6000602084013e611055565b606091505b5091509150818015611083575080511580611083575080806020019051602081101561108057600080fd5b50515b610ecc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f5341000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480156111495750804710155b15611292577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156111b657600080fd5b505af11580156111ca573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561126057600080fd5b505af1158015611274573d6000803e3d6000fd5b505050506040513d602081101561128a57600080fd5b506106d09050565b73ffffffffffffffffffffffffffffffffffffffff83163014156112c0576112bb848383610cf7565b6106d0565b6106d0848484846040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b602083106113a457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611367565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611406576040519150601f19603f3d011682016040523d82523d6000602084013e61140b565b606091505b5091509150818015611439575080511580611439575080806020019051602081101561143657600080fd5b50515b6114a457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b505050505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146114d057600080fd5b919050565b803562ffffff811681146114d057600080fd5b6000806000606084860312156114fc578283fd5b611505846114ac565b92506020840135915061151a604085016114ac565b90509250925092565b6000818303610100811215611536578182fd5b6040805160c0810167ffffffffffffffff828210818311171561155557fe5b81845286358352602087013560208401526115718488016114ac565b8484015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0860112156115a4578586fd5b8351945060608501915084821081831117156115bc57fe5b5082526115cb606086016114ac565b83526115d9608086016114ac565b60208401526115ea60a086016114d5565b8284015282606082015261160060c086016114d5565b608082015261161160e086016114d5565b60a082015295945050505050565b600060e08284031215611630578081fd5b60405160e0810181811067ffffffffffffffff8211171561164d57fe5b604052611659836114ac565b8152611667602084016114ac565b6020820152611678604084016114d5565b6040820152606083013560608201526080830135608082015261169d60a084016114d5565b60a08201526116ae60c084016114d5565b60c08201529392505050565b6000602082840312156116cb578081fd5b5051919050565b600080604083850312156116e4578182fd5b823591506116f4602084016114ac565b90509250929050565b60008060008060608587031215611712578081fd5b8435935060208501359250604085013567ffffffffffffffff80821115611737578283fd5b818701915087601f83011261174a578283fd5b813581811115611758578384fd5b886020828501011115611769578384fd5b95989497505060200194505050565b62ffffff169052565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8616825260208581840152846040840152608060608401528351806080850152825b818110156117f75785810183015185820160a0015282016117db565b81811115611808578360a083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160a0019695505050505050565b60006101008201905073ffffffffffffffffffffffffffffffffffffffff80845116835280602085015116602084015262ffffff60408501511660408401528060608501511660608401526080840151608084015260a084015160a084015260c084015160c08401528060e08501511660e08401525092915050565b6000610100820190508251825260208301516020830152604083015173ffffffffffffffffffffffffffffffffffffffff8082166040850152606085015191508082511660608501528060208301511660808501525062ffffff60408201511660a084015250608083015161193360c0840182611778565b5060a083015161194660e0840182611778565b509291505056fea164736f6c6343000706000a";
export class PairFlash__factory extends ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_swapRouter, _factory, _WETH9, overrides) {
        return super.deploy(_swapRouter, _factory, _WETH9, overrides || {});
    }
    getDeployTransaction(_swapRouter, _factory, _WETH9, overrides) {
        return super.getDeployTransaction(_swapRouter, _factory, _WETH9, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
PairFlash__factory.bytecode = _bytecode;
PairFlash__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFpckZsYXNoX19mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3R5cGVzL3YzL2ZhY3Rvcmllcy9QYWlyRmxhc2hfX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFHcEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQXFCLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUc3RSxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLHNCQUFzQjtnQkFDcEMsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2FBQ2hC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