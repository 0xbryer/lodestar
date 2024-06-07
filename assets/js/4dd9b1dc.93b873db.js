"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[2466],{8150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(4848),i=t(8453);const a={title:"MEV and Builder Integration"},o="MEV & Merge",s={id:"run/beacon-management/mev-and-builder-integration",title:"MEV and Builder Integration",description:"MEV is a term that refers to the bundling of transactions in one particular order to extract (mostly) arbitrage opportunities on the dApps and decentralized exchanges.",source:"@site/pages/run/beacon-management/mev-and-builder-integration.md",sourceDirName:"run/beacon-management",slug:"/run/beacon-management/mev-and-builder-integration",permalink:"/lodestar/run/beacon-management/mev-and-builder-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/run/beacon-management/mev-and-builder-integration.md",tags:[],version:"current",frontMatter:{title:"MEV and Builder Integration"},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/lodestar/run/beacon-management/networking"},next:{title:"Syncing",permalink:"/lodestar/run/beacon-management/syncing"}},l={},d=[{value:"Lodestar and Builder API",id:"lodestar-and-builder-api",level:2},{value:"Configure Lodestar setup for MEV",id:"configure-lodestar-setup-for-mev",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mev--merge",children:"MEV & Merge"}),"\n",(0,r.jsx)(n.p,{children:"MEV is a term that refers to the bundling of transactions in one particular order to extract (mostly) arbitrage opportunities on the dApps and decentralized exchanges."}),"\n",(0,r.jsxs)(n.p,{children:["And the ones who gets to include these execution payloads (miners before the merge, validators after the merge) in the canonical chain get paid a per-block reward which essentially ",(0,r.jsx)(n.em,{children:"should be"})," higher than the normal payload inclusion reward (including transactions tips)."]}),"\n",(0,r.jsx)(n.p,{children:'Currently these happen with miners running forked versions of their favorite execution client, integrating with these "builders" but in the post-merge world they get a more native and standard integration with the CL.'}),"\n",(0,r.jsxs)(n.p,{children:["This is what we in CL land refer to as ",(0,r.jsx)(n.strong,{children:"Builder Api"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"lodestar-and-builder-api",children:"Lodestar and Builder API"}),"\n",(0,r.jsxs)(n.p,{children:["Lodestar offers builder integration through the ",(0,r.jsx)(n.em,{children:"spec-ed"})," ",(0,r.jsx)(n.a,{href:"https://ethereum.github.io/builder-specs/#/Builder",children:"builder API"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This sits in parallel with the execution engine so when enabled, lodestar validator run both flows in parallel when its time to propose for a validator key and currently (naively) picks the builder block in preference to execution if a builder block is fetched (else just proceeds with the execution block)."}),"\n",(0,r.jsx)(n.h2,{id:"configure-lodestar-setup-for-mev",children:"Configure Lodestar setup for MEV"}),"\n",(0,r.jsx)(n.p,{children:"All you have to do is:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Provide lodestar beacon node with a Builder endpoint (which corresponds to the network you are running) via these additional flags:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"--builder --builder.url <builder/relay/boost url>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Run lodestar validator client with these additional flags","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"--builder --suggestedFeeRecipient <your ethereum address>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"There are some more builder flags available in lodestar cli (for both beacon and validator) which you may inspect and use."}),"\n",(0,r.jsxs)(n.p,{children:["Even though its possible to directly hook lodestar with an external Builder/Relay, its recommended to interface it with the MEV world via ",(0,r.jsx)(n.a,{href:"https://github.com/flashbots/mev-boost",children:"local MEV-BOOST multiplexer"})," which can integrate multiple builder/relays for you and provide some payload verification on top, as currently Lodestar assumes this to be a trusted endpoint."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);