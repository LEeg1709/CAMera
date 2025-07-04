// DazzCrack.js
;(function() {
  const response = {
    success: true,
    data: {
      plan: "pro",
      expires_at: "2099-12-31T23:59:59Z",
      features: ["all_filters", "hd_export", "watermark_free"]
    }
  };
  $done({ body: JSON.stringify(response) });
})();