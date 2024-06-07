"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[2817],{699:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=o(4848),r=o(8453);const a={title:"Stake with a Validator Client"},n="Validator Configuration",s={id:"run/validator-management/vc-configuration",title:"Stake with a Validator Client",description:"The following instructions are for stakers utilizing the Lodestar validator client.",source:"@site/pages/run/validator-management/vc-configuration.md",sourceDirName:"run/validator-management",slug:"/run/validator-management/vc-configuration",permalink:"/lodestar/run/validator-management/vc-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/run/validator-management/vc-configuration.md",tags:[],version:"current",frontMatter:{title:"Stake with a Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Syncing",permalink:"/lodestar/run/beacon-management/syncing"},next:{title:"CLI Reference",permalink:"/lodestar/run/validator-management/validator-cli"}},l={},d=[{value:"Setup your validator",id:"setup-your-validator",level:2},{value:"Create a keystore",id:"create-a-keystore",level:3},{value:"Import a validator keystore to Lodestar",id:"import-a-validator-keystore-to-lodestar",level:3},{value:"Option 1: Import Keys To Lodestar&#39;s Keystores Folder",id:"option-1-import-keys-to-lodestars-keystores-folder",level:4},{value:"Option 2: Import Keys When Starting the Validator",id:"option-2-import-keys-when-starting-the-validator",level:4},{value:"Configuring the fee recipient address",id:"configuring-the-fee-recipient-address",level:3},{value:"Configure your builder selection and/or builder boost factor",id:"configure-your-builder-selection-andor-builder-boost-factor",level:3},{value:"Calculating builder boost factor with examples",id:"calculating-builder-boost-factor-with-examples",level:4},{value:"Submit a validator deposit",id:"submit-a-validator-deposit",level:3},{value:"Mainnet",id:"mainnet",level:4},{value:"Holesky Testnet",id:"holesky-testnet",level:4},{value:"Ephemery Testnet",id:"ephemery-testnet",level:4},{value:"Run the validator",id:"run-the-validator",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"validator-configuration",children:"Validator Configuration"}),"\n",(0,i.jsx)(t.p,{children:"The following instructions are for stakers utilizing the Lodestar validator client."}),"\n",(0,i.jsx)(t.h2,{id:"setup-your-validator",children:"Setup your validator"}),"\n",(0,i.jsx)(t.p,{children:"Validators are represented by a BLS keypair. Use your generated mnemonic from one of the tools above to generate the keystore files required for validator duties on Ethereum using the Lodestar validator client."}),"\n",(0,i.jsx)(t.h3,{id:"create-a-keystore",children:"Create a keystore"}),"\n",(0,i.jsxs)(t.p,{children:["To create a keystore, we recommend using the official ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum/staking-deposit-cli/releases",children:"Staking Deposit CLI"})," from the Ethereum Foundation for users comfortable with command line interfaces."]}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, for a graphical user interface, you can use the ",(0,i.jsx)(t.a,{href:"https://wagyu.gg/",children:"Stakehouse Wagyu Key Generator"})," developed by members of the EthStaker community."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"These tools will generate keystore files for staking validators as well as the important mnemonic. This mnemonic must be handled and stored securely."})}),"\n",(0,i.jsx)(t.h3,{id:"import-a-validator-keystore-to-lodestar",children:"Import a validator keystore to Lodestar"}),"\n",(0,i.jsxs)(t.p,{children:["To import a validator JSON keystore that was created via one of the methods described above, you must locate the file for import (ex. ",(0,i.jsx)(t.code,{children:"keystore-m_12381_3600_0_0_0-1654128694.json"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Inside the keystore JSON file, you should have an ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md#json-schema",children:"EIP-2335 keystore file"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You will also need the passphrase used the encrypt the keystore. This can be specified interactively, or provided in a plaintext file."}),"\n",(0,i.jsx)(t.h4,{id:"option-1-import-keys-to-lodestars-keystores-folder",children:"Option 1: Import Keys To Lodestar's Keystores Folder"}),"\n",(0,i.jsxs)(t.p,{children:["You can load the keys into the keystore folder using the ",(0,i.jsx)(t.code,{children:"validator import"})," command. There are two methods for importing keystores:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Interactive passphrase import"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"./lodestar validator import --importKeystores ./validator_keys\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Plaintext passphrase file import"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"./lodestar validator import --importKeystores ./validator_keys --importKeystoresPassword ./password.txt\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["The interactive passphrase import method will prompt every keystore in the ",(0,i.jsx)(t.code,{children:"validator_keys"})," folder for import and will ask for the individual password for each keystore. ",(0,i.jsx)(t.strong,{children:"This method will allow you to import multiple keystores with different passwords."})]}),(0,i.jsxs)(t.p,{children:["The plaintext passphrase file import method will allow you to import all keystores in the ",(0,i.jsx)(t.code,{children:"validator_keys"})," folder encrypted with the same password contained in ",(0,i.jsx)(t.code,{children:"password.txt"})," for efficiency."]})]}),"\n",(0,i.jsxs)(t.p,{children:["Once imported with either method, these keystores will be automatically loaded when you start the validator. To list the imported keystores, use the ",(0,i.jsx)(t.code,{children:"validator list"})," command."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h4,{id:"option-2-import-keys-when-starting-the-validator",children:"Option 2: Import Keys When Starting the Validator"}),"\n",(0,i.jsxs)(t.p,{children:["To import keys when you start the validator specify the ",(0,i.jsx)(t.code,{children:"--importKeystores"})," and ",(0,i.jsx)(t.code,{children:"--importKeystoresPassword"})," flags with the ",(0,i.jsx)(t.code,{children:"validator"})," command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"./lodestar validator --importKeystores ./validator_keys --importKeystoresPassword ./password.txt\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["If you import keys using ",(0,i.jsx)(t.code,{children:"--importKeystores"})," at runtime (Option 2) any keys loaded to the keystores folder from Option 1 will be ignored."]})}),"\n",(0,i.jsx)(t.h3,{id:"configuring-the-fee-recipient-address",children:"Configuring the fee recipient address"}),"\n",(0,i.jsxs)(t.p,{children:["Post-Merge Ethereum requires validators to set a ",(0,i.jsx)(t.strong,{children:"Fee Recipient"})," which allows you to receive priority fees when proposing blocks. If you do not set this address, your priority fees will be sent to the ",(0,i.jsx)(t.a,{href:"https://etherscan.io/address/0x0000000000000000000000000000000000000000",children:"burn address"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Configure your validator client's fee recipient address by using the ",(0,i.jsx)(t.code,{children:"--suggestedFeeRecipient"})," flag. Ensure you specify an Ethereum address you control. An example of a fee recipient set with the address ",(0,i.jsx)(t.code,{children:"0xB7576e9d314Df41EC5506494293Afb1bd5D3f65d"})," would add the following flag to their configuration: ",(0,i.jsx)(t.code,{children:"--suggestedFeeRecipient 0xB7576e9d314Df41EC5506494293Afb1bd5D3f65d"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You may choose to use the ",(0,i.jsx)(t.code,{children:"--strictFeeRecipientCheck"})," flag to enable a strict check of the fee recipient address with the one returned by the beacon node for added reassurance."]}),"\n",(0,i.jsx)(t.h3,{id:"configure-your-builder-selection-andor-builder-boost-factor",children:"Configure your builder selection and/or builder boost factor"}),"\n",(0,i.jsx)(t.p,{children:"If you are running a beacon node with connected builder relays, you may use these validator configurations to signal which block (builder vs. local execution) the beacon node should produce."}),"\n",(0,i.jsxs)(t.p,{children:["With produceBlockV3 (enabled automatically after the Deneb hard fork), the ",(0,i.jsx)(t.code,{children:"--builder.boostFactor"})," is a percentage multiplier the block producing beacon node must apply to boost (>100) or dampen (<100) builder block value for selection against execution block. The multiplier is ignored if ",(0,i.jsx)(t.code,{children:"--builder.selection"})," is set to anything other than ",(0,i.jsx)(t.code,{children:"maxprofit"}),". Even though this is set on the validator client, the calculation is requested and applied on the beacon node itself. For more information, see the ",(0,i.jsx)(t.a,{href:"https://ethereum.github.io/beacon-APIs/#/ValidatorRequiredApi/produceBlockV3",children:"produceBlockV3 Beacon API"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["With Lodestar's ",(0,i.jsx)(t.code,{children:"--builder.selection"})," validator options, you can select:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"default"}),": Default setting for Lodestar set at ",(0,i.jsx)(t.code,{children:"--builder.boostFactor=90"}),". This default setting will have a local block boost of ~10%. Note that this value might change in the future depending on what we think is the most appropriate value to help improve censorship resistance of Ethereum."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"maxprofit"}),": An alias of ",(0,i.jsx)(t.code,{children:"--builder.boostFactor=100"}),", which will always choose the more profitable block. Using this option, you may customize your ",(0,i.jsx)(t.code,{children:"--builder.boostFactor"})," to your preference. Examples of its usage are below."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"executionalways"}),": An alias of ",(0,i.jsx)(t.code,{children:"--builder.boostFactor=0"}),", which will select the local execution block, unless it fails to produce due to an error or a delay in the response from the execution client."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"executiononly"}),": Beacon node will be requested to produce local execution block even if builder relays are configured. This option will always select the local execution block and will error if it couldn't produce one."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"builderalways"}),": An alias of ",(0,i.jsx)(t.code,{children:"--builder.boostFactor=18446744073709551615"})," (2**64 - 1), which will select the builder block, unless the builder block fails to produce. The builder block may fail to produce if it's not available, not timely or there is an indication of censorship via ",(0,i.jsx)(t.code,{children:"shouldOverrideBuilder"})," from the execution payload response."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"builderonly"}),": Generally used for distributed validators (DVs). No execution block production will be triggered. Therefore, if a builder block is not produced, the API will fail and ",(0,i.jsx)(t.em,{children:"no block will be produced"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"calculating-builder-boost-factor-with-examples",children:"Calculating builder boost factor with examples"}),"\n",(0,i.jsxs)(t.p,{children:["To calculate the builder boost factor setting, you need to know what percentage you will accept a builder block for against a local execution block using the following formula: ",(0,i.jsx)(t.code,{children:"100*100/(100+percentage)"}),". The value passed to ",(0,i.jsx)(t.code,{children:"--builder.boostFactor"})," must be a valid number without decimals."]}),"\n",(0,i.jsx)(t.p,{children:"Example 1: I will only accept a builder block with 25% more value than the local execution block."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"10000/(100+25) = 80\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Therefore, ",(0,i.jsx)(t.code,{children:"--builder.boostFactor=80"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Example 2: Setting a ",(0,i.jsx)(t.code,{children:"--builder.boostFactor=0"})," will always prefer the local execution block, but will produce an available builder block if the local execution block fails."]}),"\n",(0,i.jsxs)(t.p,{children:["Example 3: Setting a ",(0,i.jsx)(t.code,{children:"--builder.boostFactor=100"})," is the same as signaling ",(0,i.jsx)(t.code,{children:"--builder.selection maxprofit"})," where the validator will always select the most profitable block between the local execution engine and the builder block from the relay."]}),"\n",(0,i.jsx)(t.h3,{id:"submit-a-validator-deposit",children:"Submit a validator deposit"}),"\n",(0,i.jsx)(t.p,{children:"Please use the official Ethereum Launchpad to perform your deposits. Ensure your deposits are sent to the proper beacon chain deposit address on the correct network."}),"\n",(0,i.jsx)(t.h4,{id:"mainnet",children:"Mainnet"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://launchpad.ethereum.org",children:"Ethereum Mainnet Launchpad"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa",children:"Beacon Chain Deposit Contract"})," ",(0,i.jsx)(t.code,{children:"0x00000000219ab540356cBB839Cbe05303d7705Fa"})]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"holesky-testnet",children:"Holesky Testnet"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://holesky.launchpad.ethereum.org",children:"Ethereum Holesky Testnet Launchpad"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://holesky.etherscan.io/address/0x4242424242424242424242424242424242424242",children:"Holesky Beacon Chain Deposit Contract"})," ",(0,i.jsx)(t.code,{children:"0x4242424242424242424242424242424242424242"})]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"ephemery-testnet",children:"Ephemery Testnet"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://launchpad.ephemery.dev/",children:"Ethereum Ephemery Testnet Launchpad"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://ephemery.dev/",children:"Ephemeral Testnet Resources"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"run-the-validator",children:"Run the validator"}),"\n",(0,i.jsx)(t.p,{children:"To start a Lodestar validator run the command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"./lodestar validator --network $NETWORK_NAME\n"})}),"\n",(0,i.jsx)(t.p,{children:"You should see confirmation that modules have started."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",children:"Mar-01 03:06:35.048[]                 info: Lodestar network=holesky, version=v1.16.0/6ad9740, commit=6ad9740a085574306cf46c7642e749d6ec9a4264\nMar-01 03:06:35.050[]                 info: Connecting to LevelDB database path=/keystoresDir/validator-db-holesky\nMar-01 03:06:35.697[]                 info: 100% of keystores imported. current=2 total=2 rate=1318.68keys/m\nMar-01 03:06:35.698[]                 info: 2 local keystores\nMar-01 03:06:35.698[]                 info: 0xa6fcfca12e1db6c7341d82327010cd57224dc239d1c5e4fb18286cc32edb877d813c5af1c870d474aef7b3ff7ab927ea\nMar-01 03:06:35.698[]                 info: 0x8f868e53bbe1451bcf6d42c9ab6d292cbd7fbfa09c59b6b99c1dd6a4977e2e7b4b752c328784ca2788dd6f63ffcbdb7e\nMar-01 03:06:35.732[]                 info: Beacon node urls=http://127.0.0.1:9596\nMar-01 03:09:23.813[]                 info: Genesis fetched from the beacon node\nMar-01 03:09:23.816[]                 info: Verified connected beacon node and validator have same the config\nMar-01 03:09:23.818[]                 info: Verified connected beacon node and validator have the same genesisValidatorRoot\nMar-01 03:09:23.818[]                 info: Initializing validator useProduceBlockV3=deneb+, broadcastValidation=gossip, defaultBuilderSelection=executiononly, suggestedFeeRecipient=0xeeef273281fB83F56182eE960aA4bAfe7fE075DE, strictFeeRecipientCheck=false\nMar-01 03:09:23.830[]                 info: Validator seen on beacon chain validatorIndex=1234567, pubKey=0xa6fcfca12e1db6c7341d82327010cd57224dc239d1c5e4fb18286cc32edb877d813c5af1c870d474aef7b3ff7ab927ea\nMar-01 03:09:23.830[]                 info: Validator seen on beacon chain validatorIndex=1234568, pubKey=0x8f868e53bbe1451bcf6d42c9ab6d292cbd7fbfa09c59b6b99c1dd6a4977e2e7b4b752c328784ca2788dd6f63ffcbdb7e\nMar-01 03:09:23.830[]                 info: Validator statuses active=2, total=2\nMar-01 03:15:50.191[]                 info: Published attestations slot=1113379, count=1\nMar-01 03:16:02.728[]                 info: Published attestations slot=1113380, count=1\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>s});var i=o(6540);const r={},a=i.createContext(r);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);