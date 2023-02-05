// import { TempleWallet } from "@temple-wallet/dapp";
// import React from "react";
// import { useState } from "react";
// import state from "../state";


// export default function Connect() {
//   const connect = async () => {
//     try {
//       const available = await TempleWallet.isAvailable();
//       if (!available) {
//         throw new Error("Temple Wallet not installed");
//       }

//       // Note:

//       // use `TempleWallet.isAvailable` method only after web application fully loaded.

//       // Alternatively, you can use the method `TempleWallet.onAvailabilityChange`
//       // that tracks availability in real-time .

//       const wallet = new TempleWallet("My Super DApp");
//       await wallet.connect("ghostnet");
//       const tezos = wallet.toTezos();
//       const accountPkh = await tezos.wallet.pkh();
//       state.wallet = tezos.wallet;
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return <button onClick={connect}>Connect</button>;
// }
