// vega_lite_vis.js
const specUrl = "specs/mys_crude_exports_2023_map.vg.json?v=1"; // v 参数防缓存
vegaEmbed("#export_map", specUrl, {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);


// 面积折线图（新增）
vegaEmbed("#viz_trade_area", "specs/mys_trade_area_2012_2023.vg.json", {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);


vegaEmbed("#exports_top_bars_2023", "specs/exports_top_bars_2023.vg.json?v=1", {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);


vegaEmbed("#imports_top_bars_2023", "specs/imports_top_bars_2023.vg.json?v=1", {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);

vegaEmbed("#volume_controls_price", "specs/volume_controls_price_brush.vg.json", { actions:false })
  .catch(console.error);

// vega_lite_vis.js
vegaEmbed("#export_vs_production", "specs/export_vs_production_brush.vg.json", { actions:false })
  .catch(console.error);
