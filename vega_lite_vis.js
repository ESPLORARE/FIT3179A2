// vega_lite_vis.js —— 这文件做的事（简要说明）
// 1) 把各个 .vg.json 图表规范“挂载”到页面里的指定容器（#export_map 等）。
// 2) 统一设置右下角 actions（导出/查看源码/打开编辑器）。
// 3) 加 ?v=1 之类参数，避免浏览器缓存老文件。
// 4) 捕获并打印错误，便于排查路径/数据问题。


// 备注：只要 HTML 里有对应的 <div id="...">，这段脚本就能把图渲染进去。
// 没有这份 JS，页面上的容器只是空盒子，图不会自动出现。


// 指定要加载的 Vega-Lite 图表规范文件路径（JSON 文件）
// “v=1” 是一个防缓存参数：浏览器会认为这是新链接，从而强制重新加载文件
const specUrl = "specs/mys_crude_exports_2023_map.vg.json?v=1"; 

// 调用 vegaEmbed 函数，把图表嵌入到页面中的指定容器中（这里是 #export_map）
vegaEmbed("#export_map", specUrl, {
  actions: { 
    export: true,   // 允许导出图表（如保存为 PNG/SVG）
    source: true,   // 允许查看 Vega-Lite 源码
    editor: true,   // 允许打开 Vega Editor（在线编辑器）
    compiled: false // 不显示已编译的 Vega 代码（一般用不到）
  }
})
.catch(console.error); // 如果加载或渲染出错，把错误信息输出到浏览器控制台



// 面积折线图
vegaEmbed("#viz_trade_area", "specs/mys_trade_area_2012_2023.vg.json", {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);

// 出口 Top-15
vegaEmbed("#exports_top_bars_2023", "specs/exports_top_bars_2023.vg.json?v=1", {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);

// 进口 Top-15
vegaEmbed("#imports_top_bars_2023", "specs/imports_top_bars_2023.vg.json?v=1", {
  actions: { export: true, source: true, editor: true, compiled: false }
}).catch(console.error);

// 体积-价格联动（只展示，不要 actions 菜单）
vegaEmbed("#volume_controls_price", "specs/volume_controls_price_brush.vg.json", { actions:false })
  .catch(console.error);

  
// 产量 vs 出口（联动刷选，大图，无菜单）
// vega_lite_vis.js
vegaEmbed("#export_vs_production", "specs/export_vs_production_brush.vg.json", { actions:false })
  .catch(console.error);


  // 炼油产出结构（甜甜圈，无菜单）
vegaEmbed("#refinery_output_donut_2021", "specs/refinery_output_donut_2021.vg.json", {
  mode: "vega-lite",
  actions: false
}).catch(console.error);

