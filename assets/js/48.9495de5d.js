(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{493:function(t,s,e){"use strict";e.r(s);var r=e(8),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),e("div",{staticClass:"cards twoColumn"},[e("a",{staticClass:"card",attrs:{href:"spec-epochs.html"}},[e("img",{staticClass:"filter-icon",attrs:{src:"/img/time.svg"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      Epochs\n    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n      Allows other modules to be signaled once every period to run their desired function\n    ")])]),t._v(" "),e("a",{staticClass:"card",attrs:{href:"spec-gamm.html"}},[e("img",{staticClass:"filter-icon",attrs:{src:"/img/handshake.svg"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      GAMM\n    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n      Provides the logic to create and interact with liquidity pools on Osmosis\n    ")])]),t._v(" "),e("a",{staticClass:"card",attrs:{href:"spec-incentives.html"}},[e("img",{staticClass:"filter-icon",attrs:{src:"/img/incentives.svg"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      Incentives\n    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n      Creates gauges to provide incentives to users who lock specified tokens for a certain period of time\n    ")])]),t._v(" "),e("a",{staticClass:"card",attrs:{href:"spec-lockup.html"}},[e("img",{staticClass:"filter-icon",attrs:{src:"/img/lock-bold.svg"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      Lockup\n    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n      Bonds LP shares for user-defined locking periods to earn rewards\n    ")])]),t._v(" "),e("a",{staticClass:"card",attrs:{href:"spec-mint.html"}},[e("img",{staticClass:"filter-icon",attrs:{src:"/img/mint.svg"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      Mint\n    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n      Creates tokens to reward validators, incentivize liquidity, provide funds for governance, and pay developers\n    ")])]),t._v(" "),e("a",{staticClass:"card",attrs:{href:"spec-pool-incentives.html"}},[e("img",{staticClass:"filter-icon",attrs:{src:"/img/pool.svg"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      Pool-Incentives\n    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n      Creates individual gauges for every lock duration that exists in a pool\n    ")])]),t._v(" "),e("a",{staticClass:"card",attrs:{href:"spec-gov.html"}},[e("img",{staticClass:"filter-icon",attrs:{src:"/img/gov.svg"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      Gov\n    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n      On-chain governance which allows token holders to participate in a community led decision-making process\n    ")])]),t._v(" "),e("a",{staticClass:"card",attrs:{href:"spec-superfluid.html"}},[e("img",{staticClass:"filter-icon",attrs:{src:"/img/superfluid.svg"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      Superfluid Staking\n    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n      Stakes user-bonded LP shares to earn rewards and provides an additional layer of consensus security\n    ")])])]),t._v(" "),e("h2",{attrs:{id:"module-accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module-accounts"}},[t._v("#")]),t._v(" Module Accounts")]),t._v(" "),e("p",[t._v("All modules have their own module account. Think of this as a wallet that can only be controlled by that module. Here are a few with their respective wallet addresses and permissions:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("code",[t._v("Name")])]),t._v(" "),e("th",[e("code",[t._v("Address")])]),t._v(" "),e("th",[e("code",[t._v("Permissions")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("transfer")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1yl6hdjhmkf37639730gffanpzndzdpmhxy9ep3",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1yl6hdjhmkf37639730gffanpzndzdpmhxy9ep3"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("minter, burner")])]),t._v(" "),e("tr",[e("td",[t._v("bonded_tokens_pool")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3aq6l09",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3aq6l09"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("burner, staking")])]),t._v(" "),e("tr",[e("td",[t._v("not_bonded_tokens_pool")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1tygms3xhhs3yv487phx3dw4a95jn7t7lfqxwe3",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1tygms3xhhs3yv487phx3dw4a95jn7t7lfqxwe3"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("burner, staking")])]),t._v(" "),e("tr",[e("td",[t._v("developer_vesting_unvested")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1vqy8rqqlydj9wkcyvct9zxl3hc4eqgu3d7hd9k",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1vqy8rqqlydj9wkcyvct9zxl3hc4eqgu3d7hd9k"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("minter")])]),t._v(" "),e("tr",[e("td",[t._v("gov")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo10d07y265gmmuvt4z0w9aw880jnsr700jjeq4qp",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo10d07y265gmmuvt4z0w9aw880jnsr700jjeq4qp"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("burner")])]),t._v(" "),e("tr",[e("td",[t._v("distribution")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1jv65s3grqf6v6jl3dp4t6c9t9rk99cd80yhvld",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1jv65s3grqf6v6jl3dp4t6c9t9rk99cd80yhvld"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("none")])]),t._v(" "),e("tr",[e("td",[t._v("lockup")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1njty28rqtpw6n59sjj4esw76enp4mg6g7cwrhc",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1njty28rqtpw6n59sjj4esw76enp4mg6g7cwrhc"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("minter, burner")])]),t._v(" "),e("tr",[e("td",[t._v("incentives")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1krxwf5e308jmclyhfd9u92kp369l083wequge6",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1krxwf5e308jmclyhfd9u92kp369l083wequge6"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("minter, burner")])]),t._v(" "),e("tr",[e("td",[t._v("gamm")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1c9y7crgg6y9pfkq0y8mqzknqz84c3etr0kpcvj",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1c9y7crgg6y9pfkq0y8mqzknqz84c3etr0kpcvj"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("minter, burner")])]),t._v(" "),e("tr",[e("td",[t._v("mint")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1m3h30wlvsf8llruxtpukdvsy0km2kum8q25g3j",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1m3h30wlvsf8llruxtpukdvsy0km2kum8q25g3j"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("minter, burner")])]),t._v(" "),e("tr",[e("td",[t._v("claim")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1m5dncvfv7lvpvycr23zja93fecun2kcv226glq",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1m5dncvfv7lvpvycr23zja93fecun2kcv226glq"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("minter")])]),t._v(" "),e("tr",[e("td",[t._v("poolincentives")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo1upfuxznarpja3sywq0tzd2kktg9wv8mcc0rlm9",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo1upfuxznarpja3sywq0tzd2kktg9wv8mcc0rlm9"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("none")])]),t._v(" "),e("tr",[e("td",[t._v("fee_collector")]),t._v(" "),e("td",[e("p",[e("a",{attrs:{href:"https://www.mintscan.io/osmosis/account/osmo17xpfvakm2amg962yls6f84z3kell8c5lczssa0",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmo17xpfvakm2amg962yls6f84z3kell8c5lczssa0"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("none")])])])]),t._v(" "),e("h2",{attrs:{id:"module-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module-flow"}},[t._v("#")]),t._v(" Module Flow")]),t._v(" "),e("p",[t._v("While module functions can be called in many different orders, here is a basic flow of module commands to bring assets onto Osmosis and then add/remove liquidity:")]),t._v(" "),e("ol",[e("li",[t._v("(IBC-Transfer) IBC Received")]),t._v(" "),e("li",[t._v("(GAMM) Swap Exact Amount In")]),t._v(" "),e("li",[t._v("(GAMM) Join Pool")]),t._v(" "),e("li",[t._v("(lockup) Lock-tokens")]),t._v(" "),e("li",[t._v("(superfluid) Calculate and delegate synthetic Osmo")]),t._v(" "),e("li",[t._v("(lockup) Begin-unlock-tokens")]),t._v(" "),e("li",[t._v("(GAMM) Exit Pool")])])])}),[],!1,null,null,null);s.default=n.exports}}]);