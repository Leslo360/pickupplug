import { useEffect } from "react";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="init"
        animate="animate"
        exit="exit"
        variants={{
          init: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {},
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
