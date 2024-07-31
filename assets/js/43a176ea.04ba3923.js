"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[247],{6222:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=o(4848),t=o(8453);const r={},s="Networking",a={id:"run/beacon-management/networking",title:"Networking",description:"Lodestar will automatically connect to peers on the network. Peers are found through the discv5 protocol and once peers are established communications happen via gossipsub over libp2p. While not necessary, having a basic understanding of how the various protocols and transports work will help with debugging and troubleshooting as some of the more common challenges come up with firewalls and NAT traversal.",source:"@site/pages/run/beacon-management/networking.md",sourceDirName:"run/beacon-management",slug:"/run/beacon-management/networking",permalink:"/lodestar/run/beacon-management/networking",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/run/beacon-management/networking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Retention",permalink:"/lodestar/run/beacon-management/data-retention"},next:{title:"MEV and Builder Integration",permalink:"/lodestar/run/beacon-management/mev-and-builder-integration"}},d={},l=[{value:"Networking Flags",id:"networking-flags",level:2},{value:"Peer Discovery (Discv5)",id:"peer-discovery-discv5",level:2},{value:"ENR",id:"enr",level:2},{value:"Peer Communication (gossipsub and Req/Resp)",id:"peer-communication-gossipsub-and-reqresp",level:2},{value:"Gossipsub",id:"gossipsub",level:3},{value:"Req/Resp",id:"reqresp",level:3},{value:"Data Transport (libp2p)",id:"data-transport-libp2p",level:2},{value:"Firewall Management",id:"firewall-management",level:2},{value:"NAT Traversal",id:"nat-traversal",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"networking",children:"Networking"}),"\n",(0,i.jsxs)(n.p,{children:["Lodestar will automatically connect to peers on the network. Peers are found through the discv5 protocol and once peers are established communications happen via gossipsub over libp2p. While not necessary, having a basic understanding of how the various protocols and transports work will help with debugging and troubleshooting as some of the more common challenges come up with ",(0,i.jsx)(n.a,{href:"#firewall-management",children:"firewalls"})," and ",(0,i.jsx)(n.a,{href:"#nat-traversal",children:"NAT traversal"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"networking-flags",children:"Networking Flags"}),"\n",(0,i.jsx)(n.p,{children:"Some of the important Lodestar flags related to networking are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--discv5",children:(0,i.jsx)(n.code,{children:"--discv5"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--listenaddress",children:(0,i.jsx)(n.code,{children:"--listenAddress"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--port",children:(0,i.jsx)(n.code,{children:"--port"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--discoveryport",children:(0,i.jsx)(n.code,{children:"--discoveryPort"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--listenaddress6",children:(0,i.jsx)(n.code,{children:"--listenAddress6"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--port6",children:(0,i.jsx)(n.code,{children:"--port6"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--discoveryport6",children:(0,i.jsx)(n.code,{children:"--discoveryPort6"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--bootnodes",children:(0,i.jsx)(n.code,{children:"--bootnodes"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--subscribeallsubnets",children:(0,i.jsx)(n.code,{children:"--subscribeAllSubnets"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--disablepeerscoring",children:(0,i.jsx)(n.code,{children:"--disablePeerScoring"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--enrip",children:(0,i.jsx)(n.code,{children:"--enr.ip"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--enrtcp",children:(0,i.jsx)(n.code,{children:"--enr.tcp"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--enrudp",children:(0,i.jsx)(n.code,{children:"--enr.udp"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--enrip6",children:(0,i.jsx)(n.code,{children:"--enr.ip6"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--enrtcp6",children:(0,i.jsx)(n.code,{children:"--enr.tcp6"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--enrudp6",children:(0,i.jsx)(n.code,{children:"--enr.udp6"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--nat",children:(0,i.jsx)(n.code,{children:"--nat"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./beacon-cli#--private",children:(0,i.jsx)(n.code,{children:"--private"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"peer-discovery-discv5",children:"Peer Discovery (Discv5)"}),"\n",(0,i.jsxs)(n.p,{children:["In Ethereum, discv5 plays a pivotal role in the peer discovery process, facilitating nodes to find and locate each other in order to form the peer-to-peer network\u200b. The process begins with an interaction between new nodes and bootnodes at start-up. Bootnodes are nodes with hard-coded addresses, or can be overridden via the cli flag ",(0,i.jsx)(n.a,{href:"./beacon-cli#--bootnodes",children:(0,i.jsx)(n.code,{children:"--bootnodes"})}),", to bootstrap the discovery process\u200b. Through a method called FINDNODE-NODES, a new node establishes a bond with each bootnode, and it returns a list of peers for the new node to connect to. Following this trail, the new node engages through FINDNODE-NODES with the provided peers to further establish a web of connections\u200b."]}),"\n",(0,i.jsx)(n.p,{children:"Discv5 operates as a peer advertisement medium in this network, where nodes can act as both providers and consumers of data. Every participating node in the Discv5 protocol discovers peer data from other nodes and later relays it, making the discovery process dynamic and efficient\u200b."}),"\n",(0,i.jsxs)(n.p,{children:["Discv5 is designed to be a standalone protocol running via UDP on a dedicated port solely for peer discovery. Peer data is exchanged via self-certified, flexible peer records (ENRs). These key features cater to the Ethereum network\u200b and being a good peer often means running a discv5 worker\u200b. Lodestar offers simple configuration to setup and run a bootnode independently of a beacon node. See the ",(0,i.jsx)(n.a,{href:"/lodestar/run/bootnode/bootnode-cli",children:"bootnode cli"})," page for more information and configuration options."]}),"\n",(0,i.jsx)(n.h2,{id:"enr",children:"ENR"}),"\n",(0,i.jsxs)(n.p,{children:["Ethereum Node Records (ENRs) are a standardized format utilized for peer discovery - see ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"EIP-778"})," for the specification. An ENR consists of a set of key-value pairs. These pairs include crucial information such as the node's ID, IP address, the port on which it's listening, and the protocols it supports. This information helps other nodes in the network locate and connect to the node."]}),"\n",(0,i.jsx)(n.p,{children:"The primary purpose of ENRs is to facilitate node discovery and connectivity in the Ethereum network. Nodes use ENRs to announce their presence and capabilities to other nodes, making it easier to establish and maintain a robust, interconnected network."}),"\n",(0,i.jsx)(n.p,{children:"Note that bootnodes are announced via ENR."}),"\n",(0,i.jsx)(n.p,{children:"Lodestar prints out its own ENR on startup, the logs will show something similar to the following"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"info: discv5 worker started peerId=16Uiu...t9LQ3, initialENR=enr:-Iu4QGE...WRwgiMo, bindAddr4=/ip4/0.0.0.0/udp/9000\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, the ENR can also be retrieved from the beacon node API by querying the ",(0,i.jsx)(n.a,{href:"https://ethereum.github.io/beacon-APIs/#/Node/getNetworkIdentity",children:"getNetworkIdentity"})," endpoint."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://enr-viewer.com/",children:"ENR Viewer"})," provides a simple and convenient option to decode and inspect ENRs."]}),"\n",(0,i.jsx)(n.h2,{id:"peer-communication-gossipsub-and-reqresp",children:"Peer Communication (gossipsub and Req/Resp)"}),"\n",(0,i.jsx)(n.p,{children:"Gossipsub and Req/Resp are the two mechanisms that beacon nodes use to exchange chain data. Gossipsub is used disseminate the most recent relevant data proactively throughout the network. Req/Resp is used to directly ask specific peers for specific information (eg: during syncing)."}),"\n",(0,i.jsx)(n.h3,{id:"gossipsub",children:"Gossipsub"}),"\n",(0,i.jsx)(n.p,{children:"GossipSub is a foundational protocol in peer-to-peer (P2P) communication, particularly decentralized networks like Ethereum and IPFS. At its core, GossipSub efficiently propagates data, filtered by topic, through a P2P network. It organizes peers into a collection of overlay networks, each associated with a distinct topic. By routing data through relevant overlay networks based on topics of interest, large amounts of data can be efficiently disseminated without excessive bandwidth, latency, etc."}),"\n",(0,i.jsx)(n.p,{children:"In GossipSub, nodes can subscribe to topics, effectively joining the corresponding overlay to receive messages published to a specific topic. This topic-based structure enables nodes to congregate around shared interests, ensuring that relevant messages are delivered to all interested parties. Each message published to a topic gets disseminated and relayed to all subscribed peers, similar to a chat room."}),"\n",(0,i.jsx)(n.p,{children:'Messages are propagated through a blend of eager-push and lazy-pull models. Specifically, the protocol employs "mesh links" to carry full messages actively and "gossip links" to carry only message identifiers (lazy-pull propagation model). This hybrid approach allows for both active message propagation and reactive message retrieval\u200b which is an extension of the traditional hub-and-spoke pub/sub model.'}),"\n",(0,i.jsx)(n.h3,{id:"reqresp",children:"Req/Resp"}),"\n",(0,i.jsx)(n.p,{children:"Req/Resp is the domain of protocols that establish a flexible, on-demand mechanism to retrieve historical data and data missed by gossip. This family of methods, implemented as separate libp2p protocols, operate between a single requester and responder. A method is initiated via a libp2p protocol ID, with the initiator sending a request message and the responder sending a response message. Every method defines a specific request and response message type, and a specific protocol ID. This framework also facilitates streaming responses and robust error handling."}),"\n",(0,i.jsx)(n.h2,{id:"data-transport-libp2p",children:"Data Transport (libp2p)"}),"\n",(0,i.jsx)(n.p,{children:"Libp2p is a modular and extensible network stack that serves as the data transport layer below both gossipsub and Req/Resp and facilitates the lower-level peer-to-peer communications. It provides a suite of protocols for various networking functionalities including network transports, connection encryption and protocol multiplexing. Its modular design allows for the easy addition, replacement, or upgrading of protocols, ensuring an adaptable and evolving networking stack."}),"\n",(0,i.jsx)(n.p,{children:"Libp2p operates at the lower levels of the OSI model, particularly at the Transport and Network layers. Libp2p supports both TCP and UDP protocols for establishing connections and data transmission. Combined with libp2p's modular design it can integrate with various networking technologies to facilitating both routing and addressing."}),"\n",(0,i.jsx)(n.h2,{id:"firewall-management",children:"Firewall Management"}),"\n",(0,i.jsx)(n.p,{children:"If your setup is behind a firewall there are a few ports that will need to be opened to allow for P2P discovery and communication. There are also some ports that need to be protected to prevent unwanted access or DDOS attacks on your node."}),"\n",(0,i.jsx)(n.p,{children:"Ports that must be opened:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"30303/TCP+UDP - Execution layer P2P communication port"}),"\n",(0,i.jsx)(n.li,{children:"9000/TCP+UDP - Beacon node IPv4 P2P communication port"}),"\n",(0,i.jsx)(n.li,{children:"9090/TCP+UDP - Beacon node IPv6 P2P communication port"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Ports that must be protected:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"9596/TCP - Beacon node REST API port"}),"\n",(0,i.jsx)(n.li,{children:"5062/TCP - Validator key manager API port"}),"\n",(0,i.jsx)(n.li,{children:"18550/TCP - MEV-Boost/Builder port"}),"\n",(0,i.jsx)(n.li,{children:"8008/TCP - Beacon node metrics port"}),"\n",(0,i.jsx)(n.li,{children:"5064/TCP - Validator metrics port"}),"\n",(0,i.jsx)(n.li,{children:"8545/TCP - Execution client JSON RPC port"}),"\n",(0,i.jsx)(n.li,{children:"8551/TCP - Execution engine port for Lodestar to communicate with the execution client"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"nat-traversal",children:"NAT Traversal"}),"\n",(0,i.jsx)(n.p,{children:"Lodestar does not support UPnP. If you are behind a NAT you will need to manually forward the ports listed above."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var i=o(6540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);