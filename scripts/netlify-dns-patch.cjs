const dns = require("dns");

const HOST = "api.netlify.com";
const IP = "172.18.90.27";

const originalLookup = dns.lookup.bind(dns);
dns.lookup = function patchedLookup(hostname, options, callback) {
  if (hostname === HOST) {
    if (typeof options === "function") {
      return process.nextTick(options, null, IP, 4);
    }
    if (options && options.all) {
      return process.nextTick(callback, null, [{ address: IP, family: 4 }]);
    }
    return process.nextTick(callback, null, IP, 4);
  }
  return originalLookup(hostname, options, callback);
};
