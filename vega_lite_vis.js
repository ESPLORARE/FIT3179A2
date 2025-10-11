// vega_lite_vis.js
const specUrl = "specs/mys_crude_exports_2023_map.vg.json?v=1"; // v 参数防缓存
vegaEmbed("#export_map", specUrl, {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);


// 面积折线图（新增）
vegaEmbed("#viz_trade_area", "specs/mys_trade_area_2012_2023.vg.json", {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);


vegaEmbed("#exports_treemap_2023", "specs/exports_treemap_2023.vg.json", {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);
