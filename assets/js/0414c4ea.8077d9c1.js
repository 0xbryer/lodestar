"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[3235],{6994:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(4848),i=s(8453);const r={},o="Testing",a={id:"contribution/testing/index",title:"Testing",description:"Testing is critical to the Lodestar project and there are many types of tests that are run to build a product that is both effective AND efficient. This page will help to break down the different types of tests you will find in the Lodestar repo.",source:"@site/pages/contribution/testing/index.md",sourceDirName:"contribution/testing",slug:"/contribution/testing/",permalink:"/lodestar/contribution/testing/",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/contribution/testing/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core Dumps",permalink:"/lodestar/contribution/tools/core-dumps"},next:{title:"End-To-End Tests",permalink:"/lodestar/contribution/testing/end-to-end-tests"}},d={},c=[{value:"Unit Tests",id:"unit-tests",level:3},{value:"Spec Tests",id:"spec-tests",level:3},{value:"Performance Tests",id:"performance-tests",level:3},{value:"End-To-End Tests",id:"end-to-end-tests",level:3},{value:"Integration Tests",id:"integration-tests",level:3},{value:"Simulation Tests",id:"simulation-tests",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"testing",children:"Testing"}),"\n",(0,n.jsx)(t.p,{children:"Testing is critical to the Lodestar project and there are many types of tests that are run to build a product that is both effective AND efficient. This page will help to break down the different types of tests you will find in the Lodestar repo."}),"\n",(0,n.jsx)(t.p,{children:"There are few flags you can set through env variables to override behavior of testing and it's output."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"ENV variable"}),(0,n.jsx)(t.th,{children:"Effect"}),(0,n.jsx)(t.th,{children:"Impact"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TEST_COMPACT_DIFF"}),(0,n.jsx)(t.td,{children:"All"}),(0,n.jsx)(t.td,{children:"Will strip down the object difference rendered during test failures. Very useful for large object matching."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TEST_QUIET_CONSOLE"}),(0,n.jsx)(t.td,{children:"All"}),(0,n.jsx)(t.td,{children:"Will strip down console output. Reduce console flickering."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TEST_COMPACT_OUTPUT"}),(0,n.jsx)(t.td,{children:"All"}),(0,n.jsxs)(t.td,{children:["Display a condensed summary of tests run. Use vitest ",(0,n.jsx)(t.a,{href:"https://vitest.dev/guide/reporters#basic-reporter",children:"basic"})," reporter."]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,n.jsxs)(t.p,{children:["This is the most fundamental type of test in most code bases. In all instances mocks, stubs and other forms of isolation are used to test code on a functional, unit level. See the ",(0,n.jsx)(t.a,{href:"/lodestar/contribution/testing/unit-tests",children:"Unit Tests"})," page for more information."]}),"\n",(0,n.jsx)(t.h3,{id:"spec-tests",children:"Spec Tests"}),"\n",(0,n.jsxs)(t.p,{children:["The Ethereum Consensus Specifications are what ensure that the various consensus clients do not diverge on critical computations and will work harmoniously on the network. See the ",(0,n.jsx)(t.a,{href:"/lodestar/contribution/testing/spec-tests",children:"Spec Tests"})," page for more information."]}),"\n",(0,n.jsx)(t.h3,{id:"performance-tests",children:"Performance Tests"}),"\n",(0,n.jsxs)(t.p,{children:["Node.js is an unforgiving virtual machine when it comes to high performance, multi-threaded applications. In order to ensure that Lodestar can not only keep up with the chain, but to push the boundary of what is possible, there are lots of performance tests that benchmark programming paradigms and prevent regression. See the ",(0,n.jsx)(t.a,{href:"/lodestar/contribution/testing/performance-tests",children:"Performance Testing"})," page for more information."]}),"\n",(0,n.jsx)(t.h3,{id:"end-to-end-tests",children:"End-To-End Tests"}),"\n",(0,n.jsxs)(t.p,{children:["E2E test are where Lodestar is run in its full form, often from the CLI as a user would to check that the system as a whole works as expected. These tests are meant to exercise the entire system in isolation and there is no network interaction, nor interaction with any other code outside of Lodestar. See the ",(0,n.jsx)(t.a,{href:"/lodestar/contribution/testing/end-to-end-tests",children:"End-To-End Testing"})," page for more information."]}),"\n",(0,n.jsx)(t.h3,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,n.jsxs)(t.p,{children:["Integration tests are meant to test how Lodestar interacts with other clients, but are not considered full simulations. This is where Lodestar may make API calls or otherwise work across the process boundary, but there is required mocking, stubbing, or class isolation. An example of this is using the ",(0,n.jsx)(t.code,{children:"ExecutionEngine"})," class to make API calls to a Geth instance to check that the http requests are properly formatted."]}),"\n",(0,n.jsx)(t.h3,{id:"simulation-tests",children:"Simulation Tests"}),"\n",(0,n.jsxs)(t.p,{children:["These are the most comprehensive types of tests. They aim to test Lodestar in a fully functioning ephemeral devnet environment. See the ",(0,n.jsx)(t.a,{href:"/lodestar/contribution/testing/simulation-tests",children:"Simulation Testing"})," page for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(6540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);